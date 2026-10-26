import {DatabaseSync} from 'node:sqlite';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const db=new DatabaseSync(':memory:');db.exec('CREATE TABLE settings(id TEXT PRIMARY KEY,data TEXT NOT NULL)');db.prepare('INSERT INTO settings VALUES (?,?)').run('noticeboard',JSON.stringify({title:'Original announcement'}));
const sql=readFileSync(new URL('../migrations/0005_presentation_banners.sql',import.meta.url),'utf8');db.exec(sql);
assert.equal(JSON.parse(db.prepare('SELECT data FROM settings WHERE id=?').get('noticeboard-before-showcase-20261026').data).title,'Original announcement');
for(const key of ['noticeboard','noticeboard-2','noticeboard-3']){const n=JSON.parse(db.prepare('SELECT data FROM settings WHERE id=?').get(key).data);assert(n.enabled);assert(n.label.startsWith('Sample'));for(const field of ['image','backgroundImage']){assert(n[field].startsWith('data:image/webp;base64,'));assert(n[field].length<60000);}assert(!n.eventStart);}
db.exec(sql);assert.equal(JSON.parse(db.prepare('SELECT data FROM settings WHERE id=?').get('noticeboard-before-showcase-20261026').data).title,'Original announcement');
console.log('PASS: presentation notices are labelled, images bounded, previous banners preserved.');db.close();
