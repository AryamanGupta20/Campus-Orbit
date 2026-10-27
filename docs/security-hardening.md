# Security hardening — 27 October 2026

The frontend is public static code. The API runs in a Cloudflare Worker and the database is accessed through a server-side D1 binding. Moving the UI to another hostname would not make the API private: students' browsers still need to call it. Authentication and per-record authorization remain necessary.

Changes:
- Static security headers block inline scripts, unapproved script sources, plugins, foreign framing, and unwanted device permissions. Same-origin frames remain allowed for the admin preview. Inline styles remain allowed because the visual editor uses them.
- API responses receive no-sniff, framing restrictions, referrer protection and HTTPS transport policy. Existing private JSON responses remain no-store.
- Password changes allow at most six attempts per account in fifteen minutes. Existing login/signup/recovery IP and email limits remain in place.
- Recovery-code use is conditional in the database, so two simultaneous requests cannot both consume the same recovery code.
- JSON bodies and multipart uploads have byte-counted streaming limits, including requests without Content-Length. Oversize streams are cancelled. Upload envelope limit is 6 MiB; existing five files / 1 MiB each limit remains.

Validation: complete automated suite, including real SQLite tenant separation, admin access, CSRF, private messages/files, suspension/session revocation, concurrent recovery, and chunked input limits. Local browser checked welcome 3D, login, and student feed with CSP enabled. No production brute-force or load testing performed.

Limits and next steps:
- This is a focused hardening pass, not an independent penetration test or a guarantee against all attacks.
- App admin MFA is not implemented. GitHub, Cloudflare and owner email MFA should be enabled by the owner; their account settings were not audited here.
- Student emails remain unverified. File attachments are access-controlled downloads, not malware-scanned files.
- Database-based throttles are not a replacement for edge-level bot/DoS controls. Hosting quotas, account recovery and backup restore drills need separate review.
- Password hashing remains the existing PBKDF2 implementation. A work-factor/algorithm migration requires compatibility and hosted CPU testing before rollout.
- CSP still permits HTTPS images for administrator-configured content and relies on two pinned external script URLs. Self-hosting audited dependencies can further reduce that dependency.

Reference: https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
