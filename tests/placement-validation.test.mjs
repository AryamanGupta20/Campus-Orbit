import assert from 'node:assert/strict';
import {cleanPlacement,cleanOpportunity} from '../server/placement.mjs';
const data={role:'frontend',language:'Hinglish',preference:'Both',mode:'Checklist',hours:1,deadline:'',jd:'',skills:{'frontend:web':{status:'Ready',hours:2,evidence:'https://example.test/project'}},custom:[],done:[],answers:{'frontend:web':{text:'Private answer',revealed:true,checks:[0]}},apps:[]};
assert.equal(cleanPlacement(data).answers['frontend:web'].text,'Private answer');
assert.equal(cleanPlacement({...data,round:'project'}).round,'project');
for(const change of [{round:'invalid'},{role:'imposter'},{hours:.75},{deadline:'2027-02-30'},{apps:Array(31).fill({})},{answers:{bad:{text:'x',checks:[9]}}}])assert.throws(()=>cleanPlacement({...data,...change}));
const job={company:'Example',title:'Intern',url:'https://example.test/job',roles:['frontend'],skills:['web'],preference:'Internship',status:'Ready',checked:'2026-10-16',expires:'2026-10-30',confirmed:true};
assert.equal(cleanOpportunity(job,'job','2026-10-16').status,'Ready');
for(const change of [{url:'javascript:alert(1)'},{confirmed:false},{checked:'2026-09-01'},{checked:'2026-10-17'},{expires:'2026-10-15'},{roles:['invalid']}])assert.throws(()=>cleanOpportunity({...job,...change},'job','2026-10-16'));
assert.equal(cleanOpportunity({...job,status:'Draft',confirmed:false},'job','2026-10-16').status,'Draft');
console.log('PASS: placement limits, valid dates, role validation and source-check requirements.');

assert.equal(cleanPlacement({...data,profile:{degree:'BCA',year:'2027',experience:'Fresher'}}).profile.year,'2027');
assert.throws(()=>cleanPlacement({...data,profile:{year:'oops'}}));
assert.throws(()=>cleanOpportunity({...job,deadline:'2026-10-15'},'job','2026-10-16'));
assert.deepEqual(cleanOpportunity({...job,degrees:['BCA'],years:['2027']},'job','2026-10-16').degrees,['BCA']);
