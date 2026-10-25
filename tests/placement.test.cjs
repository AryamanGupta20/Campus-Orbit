const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const handlers={},nodes=new Map(),root={addEventListener(n,f){(handlers[n]??=[]).push(f)}},screen={querySelector(s){return nodes.get(s)}};let saves=0,section='placement';
const c={window:{},Date,Math,URL,Set,Number};vm.createContext(c);for(const f of ['career-data.js','study-tools.js','placement-data.js','placement.js'])vm.runInContext(fs.readFileSync(__dirname+'/../public/'+f,'utf8'),c);
const api=c.window.CampusPlacement;
const now=c.window.CampusStudy.today(),date=n=>new Date(Date.parse(now+'T12:00:00Z')+n*86400000).toISOString().slice(0,10);
assert(api.fresh({status:'Ready',checked:now,expires:now},now));assert(!api.fresh({status:'Ready',checked:date(-15),expires:date(10)},now));assert(!api.fresh({status:'Ready',checked:date(1),expires:date(10)},now));assert(!api.fresh({status:'Closed',checked:now,expires:date(10)},now));assert(!api.fresh({status:'Ready',checked:now,expires:date(-1)},now));
assert(!api.fresh({status:'Ready',checked:now,expires:date(4),deadline:date(-1)},now));
assert(api.eligibility({}).every(x=>x.status==='Check with employer'));
assert.equal(api.eligibility({degrees:['B.Tech'],years:['2027'],experience:'Fresher'},{degree:'BTech',year:'2026',experience:'Fresher'})[0].status,'Matches');
assert.equal(api.eligibility({years:['2027']},{year:'2026'})[1].status,'Does not match');
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
await tool.action('pd-tab','jobs');assert(tool.render().includes('Example'));assert(!tool.render().includes('Expired company'));await tool.action('pd-apply','job1');assert(tool.render().includes('Help me apply'));assert(tool.render().includes('does not submit'));change('profile|degree','BCA');assert.equal(state.profile.degree,'BCA');await tool.action('pd-job-close');await tool.action('pd-save-job','job1');assert.equal(state.apps.length,1);assert.equal(state.apps[0].status,'Saved');assert.equal(state.apps[0].deadline,date(4));await tool.action('pd-save-job','job1');assert.equal(state.apps.length,1);change('app|'+state.apps[0].id+'|status','Interview');assert.equal(state.apps[0].status,'Interview');
assert(!tool.render().includes('Explore career roadmaps'));
const copy=JSON.parse(JSON.stringify(tool.snapshot()));const restored=make(copy);assert.equal(restored.snapshot().placement.apps[0].status,'Interview');assert(saves>0);
assert(!api.prep(state,now).tasks.some(t=>t.kind==='interview'));await tool.action('pd-tab','interviews');assert(!tool.render().includes('pd-question'));assert(!tool.render().includes('Round practice'));
await tool.action('pd-back');assert.equal(section,'home');
console.log('PASS: placement role selection, skills, scheduling, interview removal, job freshness, applications and restored private state.');
})().catch(e=>{console.error(e);process.exitCode=1});
