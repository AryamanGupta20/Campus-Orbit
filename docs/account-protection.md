# Account protection rollout

Code added on 2026-10-30. Live activation is separate from deploying this code.

Passwords were already salted PBKDF2-SHA256 hashes. New records are versioned. Existing hashes are upgraded after a correct login using a conditional database update; concurrent password resets cannot be overwritten. Optional HMAC-SHA256 post-hash pepper uses a secret held outside D1. This does not increase the PBKDF2 work factor: it remains 100,000 because hosted Workers currently has a PBKDF2 cap. This is below OWASP's recommended 600,000 PBKDF2-SHA256 iterations. Do not claim that limitation is fixed. Do not deploy a larger count merely because Node/local workerd accepts it.

## Backend settings only

In Cloudflare, open Workers & Pages → campus-orbit-api → Settings → Runtime variables and secrets.

- `PASSWORD_PEPPER`: Secret. Generate at least 32 random bytes with a trusted password manager. Keep a secure backup. Never put it in GitHub, chat, frontend assets, or D1. After users upgrade, removing/changing it will prevent their password login. Rotation needs a migration with both keys; do not rotate casually.
- `TURNSTILE_SITE_KEY`: Text. Public site key for a Managed Turnstile widget restricted to `collexion-campus.aryamangupta55.workers.dev`.
- `TURNSTILE_SECRET_KEY`: Secret. Matching Turnstile secret.
- `TURNSTILE_ENABLED`: Text `true`, added LAST after both deployments and both keys are ready.

Keep `PUBLIC_ORIGIN` unchanged. Store Turnstile text settings in wrangler.backend.json before a later code deploy, or as encrypted runtime secrets so Wrangler does not remove them. Never store secret key or pepper in that file.

The frontend retrieves only enabled/siteKey from `/api/auth/config`. The backend checks signup, login and recovery tokens through Cloudflare Siteverify, verifies hostname and action, and fails closed when the enabled service is misconfigured/unavailable. IP and email rate limits remain active before the network check. Single-use/expiry enforcement is delegated to Siteverify. This protects account-entry forms, not every endpoint or all possible attacks.

## Verify activation

Confirm `/api/auth/config` reports enabled true and only the public site key. Check real browser login/signup/recovery, expired challenge retry, and each tab switch. Test direct login with no token returns 403. Use the existing deployment test account, not a student's password. Confirm existing account login after pepper activation and keep the pepper backup.

Rollback must retain password-format support and PASSWORD_PEPPER once a user is upgraded. Rolling back to the previous unversioned verifier would break those logins. Bot protection can be staged off before first activation; removing an active protection needs a deliberate owner decision.

## Evidence

24 local test files passed, including legacy/new/peppered password verification, migration after successful login, failed-login no-upgrade, session/reset races, bot hostname/action validation, missing token rejection on all three account routes, malformed hashes, and service failures. These are local tests, not proof of live Turnstile activation or a load/capacity guarantee.

References:
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- https://github.com/cloudflare/workerd/pull/7550
- https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
