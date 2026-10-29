# Separate Cloudflare hosting

Architecture activated through the existing two GitHub-connected Worker builds:
- Public website: collexion-campus, worker/frontend.mjs, assets and API service binding only. No D1 binding.
- Private backend: campus-orbit-api, worker/backend.mjs, existing D1 database. workers.dev, preview URLs and public routes disabled.
- Browser URL remains https://collexion-campus.aryamangupta55.workers.dev.

The public Worker forwards API requests unchanged, preserving cookies and origin checks. The backend checks PUBLIC_ORIGIN before calling the existing protected API. Database contents and session hashing are unchanged. Existing accounts and recovery codes continue to work.

Deployment settings:
- Public Worker: npm run deploy. Database migrations explicitly use wrangler.backend.json; the public deployment uses wrangler.jsonc.
- Backend Worker: npx wrangler deploy --config wrangler.backend.json. Preview builds off.
- Both use the existing Campus-Orbit repository and deployment token. No paid product added. Free plan verified in the dashboard on October 28, 2026.
- Keep API changes backward-compatible: the two builds do not finish at the same time.

Validation before cutover: full local tests plus split signup/login/recovery, cookie forwarding, CSRF, data isolation and private attachments. A temporary read-only /api/backend-health probe returned HTTP 200 with database:true through the live service binding before switching production requests. The probe is only in the legacy entrypoint, not the new frontend.

Rollback: revert the cutover commit to the prior combined configuration and deploy the public Worker. That restores the existing DB binding and legacy entrypoint. Do not delete or replace the D1 database. Keep the backend in place until rollback is verified.

The backend does not need ADMIN_SETUP_TOKEN for the already-created admin to log in. Owner account creation remains blocked without a setup secret; do not add a public setup code. The old public Worker may retain its encrypted unused setup secret until removed in Cloudflare.

Not included: verified email, admin MFA, bot challenges, or proof of million-user capacity. Recovery codes remain the password recovery method. Local load tests do not establish hosted capacity. Monitor free-plan limits before expanding usage.
