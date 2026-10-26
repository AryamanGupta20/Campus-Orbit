# Reliability update — 26 October 2026

- API reads in flight are deduplicated. Results are cloned for each caller, not cached persistently. Every mutation clears the in-flight lookup. Reads retry once after a transient network/502/503/504 failure, with 12-second request limits. Mutations have a 25-second limit and are never automatically retried. A timeout does not prove a mutation failed; the UI asks users to check before repeating.
- Student saves use one shared drain loop: changes made while a request runs are saved next with the returned version. Conflicts retain current edits and require user action. Unsaved edits remain in page memory, not durable offline storage.
- State writes and account-name updates run in one database batch transaction. An identical immediately preceding save may be acknowledged on retry without another version increment. Other stale writes still return 409.
- Session lookup runs alongside initial scripts. Dashboard state, content, requests and community data load in parallel; community consumes that initial data instead of repeating the reads.
- Pending community form submissions and repeated clicks on a pending button are guarded. Busy buttons expose aria-busy.
- Migration 0006 adds indexes for request messages/files, report ordering, session expiry, user ordering and reverse block checks. No records are removed.

Validation: 17 test groups passed, including client deduplication, timeout/retry behaviour, serialized saves, conflicts, 30 competing writes to one account, atomic rollback on a simulated database failure, and index query plans. Local browser: sign in, tool navigation, budget save and reload; no browser errors observed. These are not production load or capacity tests. No paid services, backup configuration changes or security shortcuts were introduced.
