// Generate deployment files from a verified production config. Never deploy a placeholder database.
import { readFileSync, writeFileSync } from 'node:fs';
const input=process.argv[2];
if(!input)throw Error('Provide a verified production configuration JSON file.');
const source=JSON.parse(readFileSync(input,'utf8'));
const db=source.d1_databases?.find(x=>x.binding==='DB');
if(!db || !/^[0-9a-f-]{36}$/i.test(db.database_id) || /^0{8}-/.test(db.database_id))throw Error('A real existing database ID is required. Do not create a replacement database.');
if(source.name!=='collexion-campus')throw Error('Unexpected public Worker name. Review before switching.');
const common={compatibility_date:source.compatibility_date,compatibility_flags:source.compatibility_flags};
writeFileSync('wrangler.backend.generated.json',JSON.stringify({...common,name:'campus-orbit-api',main:'worker/backend.mjs',workers_dev:false,preview_urls:false,routes:[],d1_databases:[db],vars:{PUBLIC_ORIGIN:'https://collexion-campus.aryamangupta55.workers.dev'}},null,2)+'\n');
writeFileSync('wrangler.frontend.generated.json',JSON.stringify({...common,name:source.name,main:'worker/frontend.mjs',workers_dev:true,preview_urls:false,assets:source.assets,services:[{binding:'API',service:'campus-orbit-api'}]},null,2)+'\n');
console.log('Prepared configurations only. No hosting or database was changed.');
