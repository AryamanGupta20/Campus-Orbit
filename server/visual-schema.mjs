// Store values, never executable CSS or HTML, from the owner page editor.
export function cleanVisual(input, fail, safeURL) {
 const v=input||{}, out={desktop:{},mobile:{},items:[]};
 const ranges={x:[-5000,5000],y:[-5000,20000],width:[16,4000],height:[16,20000],fontSize:[8,160],radius:[0,1000],borderWidth:[0,30],rotation:[-360,360],opacity:[0,1],zIndex:[0,100],padding:[0,200],lineHeight:[.8,4]};
 const enums={align:['left','center','right'],weight:['400','500','600','700','800','900'],font:['inherit','Arial, sans-serif','Georgia, serif','monospace'],fit:['cover','contain']};
 const url=s=>{if(!s)return '';if(/^\/api\/site\/image\/[a-f0-9-]{36}$/.test(s))return s;if(s.startsWith('/')&&!s.startsWith('//')&&!s.includes('\\'))return s;return safeURL(s);};
 for(const mode of ['desktop','mobile']){
  const entries=Object.entries(v[mode]||{});if(entries.length>400)fail('Use up to 400 edited items per layout.');
  for(const [key,raw]of entries){if(!/^[a-z0-9-]{1,90}$/.test(key)||!raw||typeof raw!=='object')fail('Invalid visual item.');const s={};
   for(const [k,value]of Object.entries(raw)){
    if(Object.hasOwn(ranges,k)){const [lo,hi]=ranges[k];if(typeof value!=='number'||!Number.isFinite(value)||value<lo||value>hi)fail('Invalid '+k+' value.');s[k]=value;}
    else if(Object.hasOwn(enums,k)){if(!enums[k].includes(String(value)))fail('Invalid '+k+' value.');s[k]=String(value);}
    else if(['color','background','borderColor'].includes(k)){if(!/^(#[0-9a-fA-F]{6}|transparent)$/.test(value))fail('Choose a valid colour.');s[k]=value;}
    else if(['hidden','removeBackground'].includes(k))s[k]=value===true;
    else if(k==='image')s[k]=url(value);
    else fail('Unsupported visual setting.');
   }out[mode][key]=s;
  }
 }
 if(!Array.isArray(v.items||[])||(v.items||[]).length>80)fail('Use up to 80 canvas items per page.');const ids=new Set();
 out.items=(v.items||[]).map(i=>{if(!/^added-[a-f0-9-]{36}$/.test(i.id)||ids.has(i.id)||!['text','image','shape','link'].includes(i.kind))fail('Invalid canvas item.');ids.add(i.id);if(typeof i.text!=='string'||i.text.length>3000)fail('Use shorter text.');return{id:i.id,kind:i.kind,text:i.text,image:url(i.image||''),url:url(i.url||'')};});
 return out;
}
