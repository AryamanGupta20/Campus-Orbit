// Versioned PBKDF2 with optional post-hash HMAC pepper kept outside D1.
const enc=new TextEncoder();
const hex=b=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
const equal=(a,b)=>{if(a.length!==b.length)return false;let n=0;for(let i=0;i<a.length;i++)n|=a.charCodeAt(i)^b.charCodeAt(i);return n===0;};
async function derive(password,salt){const key=await crypto.subtle.importKey('raw',enc.encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(salt),iterations:100000,hash:'SHA-256'},key,256));}
async function pepperHash(value,pepper){const key=await crypto.subtle.importKey('raw',enc.encode(pepper),{name:'HMAC',hash:'SHA-256'},false,['sign']);return hex(await crypto.subtle.sign('HMAC',key,enc.encode(value)));}
export async function createPasswordHash(password,salt,pepper){const digest=await derive(password,salt);return pepper?'pbkdf2-sha256$100000$hmac-v1$'+await pepperHash(digest,pepper):'pbkdf2-sha256$100000$plain$'+digest;}
export async function verifyPassword(password,salt,stored,pepper){
 const digest=await derive(password,salt);
 if(/^[a-f0-9]{64}$/.test(stored||''))return equal(digest,stored);
 const parts=String(stored||'').split('$');
 if(parts.length!==4||parts[0]!=='pbkdf2-sha256'||parts[1]!=='100000'||!/^[a-f0-9]{64}$/.test(parts[3]))return false;
 if(parts[2]==='plain')return equal(digest,parts[3]);
 if(parts[2]==='hmac-v1'){if(!pepper)throw Object.assign(new Error('Account security is temporarily unavailable. Please try later.'),{status:503});return equal(await pepperHash(digest,pepper),parts[3]);}
 return false;
}
export const needsPasswordUpgrade=(stored,pepper)=>!String(stored).startsWith('pbkdf2-sha256$100000$'+(pepper?'hmac-v1$':'plain$'));
