// Deploy without workers.dev, preview URLs or public routes.
import { handleApi } from '../server/api.mjs';
import { fileBucket } from './d1-files.mjs';
export default {
 async fetch(request,env) {
  const url = new URL(request.url);
  if (!env.PUBLIC_ORIGIN || url.origin !== env.PUBLIC_ORIGIN || !url.pathname.startsWith('/api/')) {
   return Response.json({error:'Not found.'},{status:404,headers:{'Cache-Control':'no-store'}});
  }
  return handleApi(request,{DB:env.DB,BUCKET:fileBucket(env.DB),ADMIN_SETUP_TOKEN:env.ADMIN_SETUP_TOKEN,TRUST_SITES_AUTH:false});
 }
};
