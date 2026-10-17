const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const handlers={},nodes=new Map(),root={addEventListener(n,f){(handlers[n]??=[]).push(f)}},screen={querySelector(s){return nodes.get(s)}};let saves=0,section='placement';
const c={window:{},Date,Math,URL,Set,Number};vm.createContext(c);for(const f of ['career-data.js','study-tools.js','placement-data.js','placement.js'])vm.runInContext(fs.readFileSync(__dirname+'/../public/'+f,'utf8'),c);
const api=c.window.CampusPlacement;
const now=c.window.CampusStudy.today(),date=n=>new Date(Date.parse(now+'T12:00:00Z')+n*86400000).toISOString().slice(0,10);
assert(api.fresh({status:'Ready',checked:now,expires:now},now));assert(!api.fresh({status:'Ready',checked:date(-15),expires:date(10)},now));assert(!api.fresh({status:'Ready',checked:date(1),expires:date(10)},now));assert(!api.fresh({status:'Closed',checked:now,expires:date(10)},now));assert(!api.fresh({status:'Ready',checked:now,expires:date(-1)},now));
for(const role of c.window.CAMPUS_CAREERS.roles)for(const key of [...role.steps,'intro','project','team']){const q=c.window.CAMPUS_PLACEMENT_DATA.questions[key];assert(q);assert.equal(q.q.length,2);assert(q.guide.every(v=>v.length>40));}
const content={items:[{id:'job1',kind:'job',company:'Example',title:'Frontend intern',url:'https://example.test/job',roles:['frontend'],skills:['web'],preference:'Internship',status:'Ready',checked:now,expires:date(5),deadline:date(4),description:'A fictional test listing.'},{id:'expired',kind:'job',company:'Expired company',title:'Old',roles:['frontend'],skills:[],preference:'Both',status:'Ready',checked:date(-20),expires:date(5)}]};
const make=initial=>c.window.createCampusPlacement({root,screen,initial,content,resources:{},save(){saves++},render(s){if(s)section=s},getCareer:()=>({action:async()=>{}})});
const tool=make({});assert(tool.render().includes('Choose your direction first'));assert.equal(tool.snapshot().placement.role,'');
function change(path,value,type='change'){for(const h of handlers[type]||[])h({type,target:{dataset:{pd:path},value}})}
(async()=>{
change('role','frontend');assert(tool.render().includes('Web foundations'));change('language','Hinglish');assert(tool.render().includes('Seekho. Banao. Samjhao.'));
change('skill|web|status','Ready');change('skill|web|evidence','javascript:alert(1)');assert(!tool.render().includes('href="javascript:'));
change('jd','Python SQL TypeScript');await tool.action('pd-suggest');assert(tool.snapshot().placement.custom.some(x=>x.id==='python'));nodes.set('#pd-custom',{value:'TypeScript'});await tool.action('pd-custom');assert(tool.snapshot().placement.custom.some(x=>x.label==='TypeScript'));
let state=tool.snapshot().placement;change('mode','Schedule');change('deadline',date(1));change('hours',.5);let plan=api.prep(state,now);assert(plan.overflow.length);assert(plan.days.every(d=>d.items.length<=1));assert.equal(plan.pending.length,plan.days.flatMap(d=>d.items).length+plan.overflow.length);assert(!plan.tasks.some(t=>t.id.startsWith('frontend:web:learn')));
state.done.push(plan.pending[0].id);assert(!api.prep(state,date(1)).pending.some(t=>t.id===plan.pending[0].id));change('deadline','2026-99-99');assert(api.prep(state,now).error);change('deadline',date(2));
await tool.action('pd-tab','interviews');await tool.action('pd-mock');await tool.action('pd-reveal','web');assert(!state.answers['frontend:web'].revealed);change('answer|web','Use labels, focus and keyboard testing.','input');await tool.action('pd-reveal','web');assert(state.answers['frontend:web'].revealed);assert(tool.render().includes('Sahi labels'));
for(const h of handlers.change)h({type:'change',target:{dataset:{pdReview:'web|0'},checked:true}});assert(state.answers['frontend:web'].checks.includes(0));
await tool.action('pd-tab','jobs');assert(tool.render().includes('Example'));assert(!tool.render().includes('Expired company'));await tool.action('pd-save-job','job1');assert.equal(state.apps.length,1);assert.equal(state.apps[0].deadline,date(4));await tool.action('pd-save-job','job1');assert.equal(state.apps.length,1);change('app|'+state.apps[0].id+'|status','Interview');assert.equal(state.apps[0].status,'Interview');
const copy=JSON.parse(JSON.stringify(tool.snapshot()));const restored=make(copy);assert.equal(restored.snapshot().placement.apps[0].status,'Interview');assert(restored.snapshot().placement.answers['frontend:web'].revealed);assert(saves>0);
await tool.action('pd-back');assert.equal(section,'roadmaps');
console.log('PASS: placement role selection, bilingual coverage, skills, scheduling, mocks, job freshness, applications and restored private state.');
})().catch(e=>{console.error(e);process.exitCode=1});
