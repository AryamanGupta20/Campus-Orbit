import { handleApi } from '../server/api.mjs';
import { fileBucket } from './d1-files.mjs';
export default {
 async fetch(request,env){
  // Read-only cutover check; no student data is returned.
  if(new URL(request.url).pathname==='/api/backend-health'){
   if(request.method!=='GET')return new Response(null,{status:405});
   if(!env.API)return Response.json({ok:false},{status:503,headers:{'Cache-Control':'no-store'}});
   try{const u=new URL(request.url);u.pathname='/api/health';return await env.API.fetch(new Request(u,{method:'GET'}));}
   catch{return Response.json({ok:false},{status:503,headers:{'Cache-Control':'no-store'}});}
  }
  if(new URL(request.url).pathname.startsWith('/api/'))return handleApi(request,{DB:env.DB,BUCKET:fileBucket(env.DB),ADMIN_SETUP_TOKEN:env.ADMIN_SETUP_TOKEN,PASSWORD_PEPPER:env.PASSWORD_PEPPER,TURNSTILE_ENABLED:env.TURNSTILE_ENABLED,TURNSTILE_SITE_KEY:env.TURNSTILE_SITE_KEY,TURNSTILE_SECRET_KEY:env.TURNSTILE_SECRET_KEY,PUBLIC_ORIGIN:env.PUBLIC_ORIGIN,TRUST_SITES_AUTH:false});
  return env.ASSETS.fetch(request);
 }
};
