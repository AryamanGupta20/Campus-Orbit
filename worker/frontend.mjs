// Public website. Student data is accessible only through the private API binding.
import { staticSecurityHeaders } from '../server/security.mjs';
export default {
 async fetch(request, env) {
  if (new URL(request.url).pathname.startsWith('/api/')) {
   if (!env.API) return Response.json({error:'The service is temporarily unavailable.'},{status:503,headers:{'Cache-Control':'no-store','Retry-After':'10'}});
   // Keep the original URL, cookies and Origin for the API's security checks.
   try { return await env.API.fetch(request); } catch {
    return Response.json({error:'The service is temporarily unavailable. Please try again.'},{status:503,headers:{'Cache-Control':'no-store','Retry-After':'10','X-Content-Type-Options':'nosniff'}});
   }
  }
  const response = await env.ASSETS.fetch(request);
  const headers = new Headers(response.headers);
  for (const [name,value] of Object.entries(staticSecurityHeaders)) headers.set(name,value);
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
 }
};
