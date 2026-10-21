import assert from 'node:assert/strict';
import {cleanVisual} from '../server/visual-schema.mjs';
const fail=m=>{throw Error(m);},url=s=>{if(!/^https:\/\//.test(s))fail('Unsafe URL');return s;};
const id='added-12345678-1234-1234-1234-123456789abc';
const source={desktop:{'layer-title':{x:-33,y:123,width:400,fontSize:42,background:'#ffffff',removeBackground:true}},mobile:{'layer-title':{x:0,width:280}},items:[{id,kind:'link',text:'Get started',url:'/login'}]};
const out=cleanVisual(source,fail,url);assert.equal(out.desktop['layer-title'].x,-33);assert.equal(out.mobile['layer-title'].width,280);assert.equal(out.items[0].url,'/login');
for(const bad of [{desktop:{page:{position:'fixed'}}},{desktop:{page:{background:'url(javascript:evil)'}}},{desktop:{page:{x:Infinity}}},{mobile:{page:{opacity:2}}},{desktop:{page:{image:'javascript:alert(1)'}}},{desktop:{page:{image:'//evil.example'}}},{items:[{id,kind:'script',text:'x'}]},{items:[{id,kind:'link',text:'x',url:'javascript:x'}]}])assert.throws(()=>cleanVisual(bad,fail,url));
assert.deepEqual(cleanVisual({},fail,url),{desktop:{},mobile:{},items:[]});
console.log('PASS: separate layout values, safe links and strict visual style validation.');
