# Separate account pages — 16 October 2026

The welcome page contains no login form. Its login buttons navigate to /login, and signup buttons navigate to /signup. Both pages reuse the established account form, validation, recovery flow and Observatory 3D scene. The header returns to the welcome page. Login/signup tabs update the URL; password recovery is available at /login?view=reset. The old /?owner link redirects to /signup?owner=1.

Successful sign-in shows the student dashboard at /dashboard. New signup retains the personal welcome and private recovery-code step before continuing. A signed-out dashboard visit opens login. Logout returns to the welcome URL. Static HTML entry files allow direct navigation and refresh on Cloudflare; the local server supports the same extensionless paths. The animation renderer now supports either the welcome scene or account scene independently. Welcome assets can reload after logout without a duplicate global declaration error.

Checked with existing account/API and dashboard suites, plus local browser navigation from welcome to login, signup switching and route refresh. No production account was created for testing.
