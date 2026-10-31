const fail=(message,status=403)=>{throw Object.assign(new Error(message),{status});};
export function botConfig(env){const enabled=env.TURNSTILE_ENABLED==='true';return {enabled,siteKey:enabled?String(env.TURNSTILE_SITE_KEY||''):''};}
export async function verifyBot(request,env,token,action,send=(...args)=>fetch(...args)){
 if(!botConfig(env).enabled)return;
 if(!env.TURNSTILE_SECRET_KEY||!env.TURNSTILE_SITE_KEY)fail('Account security is temporarily unavailable. Please try later.',503);
 if(typeof token!=='string'||!token.trim()||token.length>2048)fail('Please complete the security check.');
 const payload={secret:env.TURNSTILE_SECRET_KEY,response:token};
 const ip=request.headers.get('cf-connecting-ip');if(ip)payload.remoteip=ip;
 let result;try{const response=await send('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(8000)});result=await response.json();if(!response.ok&&result.success!==false)throw Error();}catch{fail('The security check could not connect. Please try again.',503);}
 if(result['error-codes']?.some(code=>['missing-input-secret','invalid-input-secret','internal-error'].includes(code)))fail('Account security needs attention. Please contact the site admin.',503);
 const hostname=new URL(env.PUBLIC_ORIGIN||request.url).hostname;
 if(result.success!==true||result.hostname!==hostname||result.action!==action)fail('The security check expired or failed. Please try again.');
}
