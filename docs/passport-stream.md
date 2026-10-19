# Passport Stream community dashboard

Replaces the signed-in landing dashboard with the selected lilac Passport Stream design. Welcome/login and existing student tools remain available. No production accounts or private study, money, portfolio, or résumé records are migrated into public profiles.

## Admin noticeboard
Admin dashboard → Noticeboard → edit label/headline/description/tags and optional HTTPS button → Preview banner → Save & publish noticeboard. Uncheck Show banner to students to hide it. Values are stored in settings under a separate noticeboard key, so ordinary admin settings saves cannot overwrite them. Students see updates on refresh.

## Community
- Students explicitly publish a public card with name, role, degree, skills, professional links, emoji or resized photo. No email/phone or private tool fields are copied.
- Posts, replies, helpful reactions, follows, connection requests, messages, and notification preferences persist in D1.
- Private messages require an accepted connection. Admin status does not grant access to other users' direct messages.
- Blocking removes both connection and follows and prevents further interaction. Unblocking does not restore a connection.
- Feed uses stable cursor pagination. People search returns up to 60 matches; existing connections/requests are loaded separately (up to 500).
- Photos are resized client-side and bounded/validated on the server. No arbitrary files are accepted in community posts.
- Reports reach existing admin Reports & requests. Admin can hide a reported post by ID from Noticeboard moderation.
- In-site alerts work. Email and background device delivery are not connected; there are no misleading enable switches for those services.
- Feed and conversation updates are manual through Refresh. No fake users, posts, messages or notifications are seeded in production.

## Deploy
Apply migrations/0002_community.sql before deploying. Existing npm run deploy already applies D1 migrations. Keep the existing Wrangler database ID and secret values unchanged. New tables are additive and migration is idempotent.

## Validation
All nine automated suites pass, including account/tenant isolation, old student tools, placement, new public-profile privacy, admin-only noticeboard updates, posts/replies, stable pagination, mutual connections, private messages, blocks/reports and in-site alerts. Local browser checked admin banner preview/publication, card publication, post creation and persistence, all five tool links and return navigation, phone width at 390px, two-account connection acceptance and sending a private message. Live production data is not used for tests.
