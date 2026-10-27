import {DatabaseSync,backup} from 'node:sqlite';
import {readFileSync,readdirSync} from 'node:fs';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {adapter} from '../server/local.mjs';
import {fileBucket} from '../worker/d1-files.mjs';
const dir=await mkdtemp(path.join(tmpdir(),'orbit-restore-'));let source,restored;
try{
 source=new DatabaseSync(path.join(dir,'source.sqlite'));for(const name of readdirSync(new URL('../migrations/',import.meta.url)).filter(n=>n.endsWith('.sql')).sort())source.exec(readFileSync(new URL('../migrations/'+name,import.meta.url),'utf8'));
 source.prepare('INSERT INTO users(id,email,name,password_hash,salt,recovery_hash,role,created_at) VALUES (?,?,?,?,?,?,?,?)').run('restore-fixture','restore@example.test','Restore fixture','fixture-only','salt','recovery','student','2026-10-27');
 source.prepare('INSERT INTO user_data VALUES (?,?,?,?)').run('restore-fixture',JSON.stringify({profile:{name:'Restore fixture'},budget:15000}),3,'2026-10-27');
 const bytes=new TextEncoder().encode('Private test attachment');await fileBucket(adapter(source)).put('fixture/attachment',bytes.buffer);
 await backup(source,path.join(dir,'snapshot.sqlite'));
 source.prepare('UPDATE user_data SET data=? WHERE user_id=?').run('{}','restore-fixture');
 restored=new DatabaseSync(path.join(dir,'snapshot.sqlite'));
 assert.equal(restored.prepare('PRAGMA integrity_check').get().integrity_check,'ok');
 assert.equal(restored.prepare('SELECT count(*) AS n FROM users').get().n,1);
 const row=restored.prepare('SELECT * FROM user_data').get();assert.equal(row.version,3);assert.equal(JSON.parse(row.data).budget,15000);
 assert.deepEqual(new Uint8Array((await fileBucket(adapter(restored)).get('fixture/attachment')).body),bytes);
 console.log('PASS: isolated SQLite backup restores account, student data/version and database-stored file bytes. Not a live D1 Time Travel restore.');
}finally{source?.close();restored?.close();await rm(dir,{recursive:true,force:true});}
