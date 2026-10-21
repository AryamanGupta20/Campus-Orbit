# Performance findings — 21 October 2026

Lightweight, unauthenticated live checks: three curl requests per path, sequential, not a stress test. Total response seconds: / 0.350–0.873; /api/health 0.674–1.165; /api/me 0.347–1.998; /api/site 0.652–4.790; /boot.js 0.352–0.500; /templates.js 0.489–0.999. Measurements include DNS, connection and network time. They do not establish database latency, account-specific behaviour or concurrent capacity.

Confirmed code bottlenecks fixed:
- Initial scripts previously loaded sequentially. Independent modules now load together; admin-only modules load on opening admin, with duplicate script loads avoided.
- Community refresh, initial feed and chat reads now overlap independent requests. Removed a repeated alerts fetch and unused people search for Messages.
- Bootstrap database reads no longer wait for each other unnecessarily.
- Report list used one query plus two queries per report. Now uses one query if empty, three if nonempty, with owner/student scope preserved in all queries. A real SQLite test with 100 seeded reports proved student A sees only its 80 reports with 5 total API queries including account checks, versus 163 previously.
- Unchanged text is no longer rewritten in the page observer. Empty published editor configurations do not scan the page; visual layer scans run only when relevant styles/items exist or during editing.

Limits checked in official Cloudflare docs: Workers Free 100,000 dynamic requests/day; D1 Free 5 million rows read/day, 100,000 rows written/day, 500 MB per database (5 GB total across account). These are not numbers of students. Current billing/usage and database size were not inspected in the account this turn. One student action may issue several API requests and read/write several database rows. Inline base64 profile/post photos currently consume database space and enlarge feed responses; future media storage work should not enable billing without owner approval.

No concurrent production load test was run. No maximum student/concurrent user count is certified. Next capacity gate: staging-only realistic authenticated tests at 25, 50 and 100 simultaneous users with representative profiles/posts/messages; record p95 latency, errors, CPU, D1 rows read/written and payload sizes. Improve pagination/media delivery and indexes based on those results before large public launch. Do not weaken password protection to improve login times.

Sources:
https://developers.cloudflare.com/workers/platform/limits/
https://developers.cloudflare.com/d1/platform/pricing/
https://developers.cloudflare.com/d1/platform/limits/
