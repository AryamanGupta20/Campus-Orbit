import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import {readFileSync} from 'node:fs';
import {adapter} from '../server/local.mjs';
import {handleApi} from '../server/api.mjs';
const sql=new DatabaseSync(':memory:');sql.exec(readFileSync(new URL('../server/schema.sql',import.meta.url),'utf8'));
const base=adapter(sql);let queries=0;const env={DB:{...base,prepare(s){queries++;return base.prepare(s);}}};
const token='a'.repeat(64),hash=Buffer.from(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token))).toString('hex');
for(const id of ['student-a','student-b'])sql.prepare('INSERT INTO users(id,email,name,password_hash,salt,recovery_hash,role,created_at) VALUES (?,?,?,?,?,?,?,?)').run(id,id+'@test.invalid',id,'unused','unused','unused','student','2026-10-21');
sql.prepare('INSERT INTO sessions VALUES (?,?,?)').run(hash,'student-a',Date.now()+60000);
for(let i=0;i<100;i++){const id='r'+i;sql.prepare('INSERT INTO requests(id,user_id,category,description,timing,created_at,updated_at) VALUES (?,?,?,?,?,?,?)').run(id,i<80?'student-a':'student-b','Test','Private report','Flexible','2026-10-21','2026-10-21');sql.prepare('INSERT INTO messages(id,request_id,user_id,body,created_at) VALUES (?,?,?,?,?)').run('m'+i,id,i<80?'student-a':'student-b','Reply '+i,'2026-10-21');}
queries=0;const r=await handleApi(new Request('https://test.invalid/api/requests',{headers:{Cookie:'campus_session='+token}}),env);assert.equal(r.status,200);const rows=(await r.json()).requests;assert.equal(rows.length,80);assert(rows.every(r=>r.user_id==='student-a'&&r.messages.length===1));assert.equal(queries,5,'2 account checks + 3 report queries, independent of report count');
console.log('PASS: 80 reports use 5 total queries rather than 163; other students reports remain private. This is not a cloud load test.');
