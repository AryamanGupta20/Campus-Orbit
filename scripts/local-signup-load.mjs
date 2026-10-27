// LOCAL ONLY. No external target flag; never send these test accounts to production.
import {startLocal} from '../server/local.mjs';
import {mkdtemp,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
const dir=await mkdtemp(path.join(tmpdir(),'orbit-load-'));
const app=await startLocal({port:0,dir});const results=[];
try{
 for(const [count,network]of [[25,'shared'],[50,'shared'],[100,'shared'],[250,'shared'],[1000,'shared'],[1000,'distinct-test-ips']]){
  // This instance was created above in a fresh temporary directory.
  app.sql.exec('DELETE FROM rate_limits');
  const before=app.sql.prepare('SELECT count(*) AS n FROM users').get().n,begin=performance.now();
  const samples=await Promise.all(Array.from({length:count},async(_,i)=>{const start=performance.now();try{
   const r=await fetch(app.url+'/api/auth/signup',{method:'POST',signal:AbortSignal.timeout(30000),headers:{Origin:app.url,'X-Campus-Request':'1','Content-Type':'application/json','cf-connecting-ip':network==='shared'?'192.0.2.1':`198.18.${Math.floor(i/250)}.${i%250+1}`},body:JSON.stringify({name:'Load fixture',email:`test-${network}-${count}-${i}@example.test`,password:'local-load-fixture-password'})});
   const body=await r.json();return {status:r.status,ms:performance.now()-start,retry:r.headers.get('retry-after'),hasAccount:!!body.user?.id};
  }catch{return {status:'network-error',ms:performance.now()-start};}}));
  const durations=samples.map(x=>x.ms).sort((a,b)=>a-b),statuses={};for(const s of samples)statuses[s.status]=(statuses[s.status]||0)+1;
  const created=app.sql.prepare('SELECT count(*) AS n FROM users').get().n-before;
  const health=await fetch(app.url+'/api/health');assert.equal(health.status,200);assert.equal(created,statuses[200]||0);
  assert(!samples.some(s=>Number(s.status)>=500||s.status==='network-error'));assert(samples.filter(s=>s.status===429).every(s=>Number(s.retry)>0));
  const result={requests:count,network,statuses,created,wallMs:Math.round(performance.now()-begin),p50Ms:Math.round(durations[Math.floor(count*.5)]),p95Ms:Math.round(durations[Math.floor(count*.95)]),health:health.status};results.push(result);console.log(JSON.stringify(result));
 }
 const integrity=app.sql.prepare('PRAGMA integrity_check').get();assert.equal(integrity.integrity_check,'ok');
 const orphans=app.sql.prepare('SELECT count(*) AS n FROM users u LEFT JOIN user_data d ON d.user_id=u.id WHERE d.user_id IS NULL').get().n;assert.equal(orphans,0);
 await writeFile(new URL('../docs/local-load-results.json',import.meta.url),JSON.stringify({date:new Date().toISOString(),environment:'Local Node HTTP server and SQLite. Not Cloudflare D1 capacity or a hosted SLA.',results,integrity:'ok',missingStudentRecords:orphans},null,2)+'\n');
}finally{app.server.closeAllConnections();await new Promise(r=>app.server.close(r));app.sql.close();await rm(dir,{recursive:true,force:true});}
