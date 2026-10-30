// Deploy without workers.dev, preview URLs or public routes.
import { handleApi } from '../server/api.mjs';
import { fileBucket } from './d1-files.mjs';
export default {
 async fetch(request,env) {
  const url = new URL(request.url);
  if (!env.PUBLIC_ORIGIN || url.origin !== env.PUBLIC_ORIGIN || !url.pathname.startsWith('/api/')) {
   return Response.json({error:'Not found.'},{status:404,headers:{'Cache-Control':'no-store'}});
  }
  return handleApi(request,{DB:env.DB,BUCKET:fileBucket(env.DB),ADMIN_SETUP_TOKEN:env.ADMIN_SETUP_TOKEN,PASSWORD_PEPPER:env.PASSWORD_PEPPER,TURNSTILE_ENABLED:env.TURNSTILE_ENABLED,TURNSTILE_SITE_KEY:env.TURNSTILE_SITE_KEY,TURNSTILE_SECRET_KEY:env.TURNSTILE_SECRET_KEY,PUBLIC_ORIGIN:env.PUBLIC_ORIGIN,TRUST_SITES_AUTH:false});
 }
};
