const {readFileSync}=require('fs'),vm=require('vm'),assert=require('assert/strict');
const c={window:{},Date,Math,Set,Number,String,Array};vm.createContext(c);vm.runInContext(readFileSync(__dirname+'/../public/study-tools.js','utf8'),c);const {plan,parseDates}=c.window.CampusStudy;
const base={start:'2026-11-01',hours:2,done:[],subjects:[{id:'db',name:'DBMS',date:'2026-11-05',units:[{id:'sql',name:'SQL',hours:2,ready:'Not started'}]},{id:'os',name:'OS',date:'2026-11-08',units:[{id:'process',name:'Processes',hours:1,ready:'Learning'}]}]};
let p=plan(base,'2026-11-01');assert.equal(p.errors.length,0);assert.equal(p.unplaced.length,0);assert(p.tasks.length>0);const placed=p.days.flatMap(d=>d.tasks);assert.equal(placed.reduce((n,t)=>n+t.minutes,0),p.required);
for(const d of p.days){assert(d.used<=d.capacity);if(d.date==='2026-11-05')assert.equal(d.used,0);for(const t of d.tasks)assert(d.date<t.exam);}
assert(plan({...base,subjects:[]},'2026-11-01').errors.length);
assert(plan({...base,hours:.75},'2026-11-01').errors.length);
assert(plan({...base,subjects:[{...base.subjects[0],units:[{...base.subjects[0].units[0],hours:NaN}]}]},'2026-11-01').errors.length);
let ready=plan({...base,subjects:[{...base.subjects[0],units:[{...base.subjects[0].units[0],ready:'Ready'}]}]},'2026-11-01');assert(!ready.tasks.some(t=>t.kind==='learn'));assert(ready.tasks.some(t=>t.kind==='practice'));
let completed=p.tasks[0].id;let next=plan({...base,done:[completed]},'2026-11-03');assert(!next.days.flatMap(d=>d.tasks).some(t=>t.id===completed));assert(next.days.every(d=>d.date>='2026-11-03'));
let packed=plan({...base,hours:.5},'2026-11-04');assert(packed.unplaced.length>0);assert.equal(packed.days.reduce((n,d)=>n+d.used,0)+packed.unplaced.reduce((n,t)=>n+t.minutes,0),packed.required);
assert.equal(plan({...base,hours:NaN},'2026-11-01').errors.length,1);
assert(plan({...base,subjects:[{...base.subjects[0],date:'2026-99-99'}]},'2026-11-01').errors.length);
assert(plan({...base,subjects:[{...base.subjects[0],date:'2026-11-01'}]},'2026-11-01').errors.length);
assert.equal(parseDates('DBMS 03/04/2027\nOS 2027-04-05\nbad 31/02/2027').length,2);assert.equal(parseDates('DBMS 03/04/2027')[0].date,'2027-04-03');
for(let hours=.5;hours<=8;hours+=.5){const out=plan({...base,hours},'2026-11-01');assert(out.days.every(d=>d.used<=hours*60));assert.equal(out.days.reduce((n,d)=>n+d.used,0)+out.unplaced.reduce((n,t)=>n+t.minutes,0),out.required);}
console.log('PASS: exam dates, daily limits, exam-day exclusion, readiness, completion, rescheduling and visible overflow.');
