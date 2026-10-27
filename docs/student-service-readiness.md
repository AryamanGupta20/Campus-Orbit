# Student-service readiness — 27 October 2026

Status: limited rollout; not certified for 1,000 simultaneous hosted signups.

## Changes verified
- Session creation checks current password/recovery hashes and suspension status inside its transaction. Delayed login cannot create a session after a completed reset or suspension.
- Concurrent password changes have one winner; losing requests do not revoke the winner's session.
- Throttled requests return Retry-After and a readable waiting time.
- Recognized D1 overload returns a safe 503 message and Retry-After instead of exposing database details. This does not expand capacity or guarantee success.

## Local HTTP burst test
Run `npm run test:load:local`. The script creates its own temporary database and loopback server; it has no production target option. IP headers are simulated locally, not real distributed clients. Rate-limit rows are reset only inside that temporary fixture between scenarios.

| Simultaneous attempts | Network simulation | Created | Throttled | p95 response |
|---|---|---:|---:|---:|
| 25 | shared IP | 25 | 0 | 88 ms |
| 50 | shared IP | 50 | 0 | 140 ms |
| 100 | shared IP | 100 | 0 | 289 ms |
| 250 | shared IP | 180 | 70 | 576 ms |
| 1,000 | shared IP | 180 | 820 | 1,119 ms |
| 1,000 | distinct simulated IPs | 1,000 | 0 | 3,029 ms |

All scenarios ended with health 200, no server/network errors, matching created-account counts, no missing student-data records, and SQLite integrity OK. Raw results: local-load-results.json. These timings include client/server work on one local machine and do not predict Cloudflare CPU limits, D1 queues, geography, sustained traffic or daily quotas.

## Restore drill
The automated drill applies production SQL migrations to a disposable database, creates fake account/data/file records, makes a SQLite backup, and verifies restored data, versions, file bytes and database integrity. It never restores or exports real student information. This is not proof that a live D1 restore has been performed.

## Before a university-wide launch
1. Create a separate Cloudflare staging Worker and D1 database. Preserve production credentials and data. Verify the account plan and quotas before running a bounded staged load test.
2. Add server-verified bot protection before increasing the shared-IP signup allowance. Retain account-level controls; do not disable protection just to pass a benchmark. Current shared-network authentication limit remains 180 attempts in 15 minutes.
3. Enable owner GitHub, Cloudflare and email MFA; add application admin MFA and a tested recovery route. Student email verification remains outstanding.
4. Verify the actual D1 backup/Time Travel availability and run a restore drill on staging. Free-plan documentation specifies a seven-day Time Travel window, not indefinite recovery. Record who owns recovery and how long it takes.
5. Set up an authorized uptime/error alert destination and keep an incident/rollback procedure. No unattended monitor was created by this task.
6. Verify student data export/deletion and provide another way to retain important study/application records. Avoid making this site the only copy of critical student work.

Recommended staged acceptance gate: at each 25/50/100/250/500/1,000 level, measure successful signup percentage, p95 response time, CPU and D1 errors; verify persisted accounts and healthy existing-user access. Stop escalating on unexpected errors or quota pressure. Do not claim the next level until tested.

Official references:
- https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- https://developers.cloudflare.com/d1/reference/time-travel/
