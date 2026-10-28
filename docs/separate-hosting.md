# Separate hosting preparation

Status: code prepared, not activated in Cloudflare. Existing hosting remains the default.

The public Worker serves the pages. Its private API service binding calls a separate backend Worker. Only that backend receives the existing D1 database and admin setup secret. The backend has no public workers.dev address, preview address or route. Browser requests stay on the existing website address, so login cookies and origin checks still work. There is no public cross-origin API or new CORS permission.

Before activation:
1. Confirm the actual Cloudflare plan and account limits. Do not enable paid products.
2. Export the current production Worker configuration as strict JSON, including the real existing D1 database ID. Keep a copy for rollback. Do not use the zero ID from the source example.
3. Run `node scripts/prepare-split-hosting.mjs /path/to/verified-config.json` from the project root. It generates two configurations but does not deploy anything.
4. Set the existing admin setup secret on `campus-orbit-api` using Cloudflare secrets. Never put it in source files or build variables.
5. Deploy the backend with its generated configuration. Confirm public access and preview URLs are disabled. No new database or migrations are needed for this split.
6. Test the binding in a separate staging frontend/backend with a test database before switching the public Worker. Verify signup, login, recovery, student data access, admin access and private attachments.
7. Deploy the generated frontend configuration only after those checks pass. Check the live login and database-backed features. Preserve the previous deployment for rollback.
8. Update the GitHub deployment configuration to use the split files. Otherwise a later default deployment will restore the original combined Worker. Remove the public Worker's database and admin secret bindings after successful verification.

This preparation does not enable email verification, admin MFA or bot challenges. Recovery codes remain the current password recovery method. An email sender/provider must be connected before promising verification or reset emails. A custom domain is not needed for the private Worker binding.

Separate Workers do not guarantee faster requests or protection from every attack. Database limits and API authorization still matter. The local load tests are not evidence of live capacity for thousands or millions of concurrent users. Monitor errors and limits before inviting a larger group.
