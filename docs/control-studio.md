# Campus Orbit Control Studio

Open the website, log in with the owner account, and choose Admin dashboard → Control Studio.

## Website editor
Choose an existing page or add a new public page. Add text, image, link or response-form blocks; reorder, edit, hide or remove them. Images can be uploaded or linked by HTTPS. Uploaded images are public assets. New pages have a `/?campusPage=page-your-name` address; add a link button so students can find them.

Click outlined static text in the draft preview to edit it. User content, account fields, security controls and moderation notices are not editable through this tool. Built-in tools retain their code and behavior; banner names/descriptions can be changed and banners hidden. New interactive applications still need code. This is a structured editor, not unrestricted code execution or a promise of zero errors.

Apply edits → Save draft → Preview saved draft → Publish saved draft. Publish sends only the saved draft. Refresh the full browser page to see the live version. Prior editor versions can be restored to a draft and republished. Legacy course, noticeboard and settings tools retain their existing save behavior and are outside editor version history.

## Students and messaging
Student controls can search accounts and suspend or unblock them. Suspension revokes sessions and blocks new logins. Admin accounts cannot be suspended from this panel. Admin messages arrive in student Alerts; they are not email/push messages. No admin messages were sent to production students during development.

The administrator's public card is marked Founder & Admin using server-authorized role data. Email and other private fields are not copied to public profiles.

## Moderation
Notice: Campus Orbit administrators can read and review messages to investigate abuse, harassment or other misconduct.

Both students must accept moderation-v1 before new messages can be sent. Those new messages are tagged as eligible for moderation. Earlier private messages are never backfilled into this set. The admin selects an eligible conversation and enters a reason. Every review is stored in the admin activity log. This does not grant an admin account ordinary participant access to other people's private inbox endpoints.

## Validation
Ten automated suites cover old features and new authorization, draft isolation, stale edits, publishing, forms, uploads, suspension, consent, legacy privacy and review logging. Browser checks use isolated test accounts and a temporary local database. Verified block creation, text selection, saving, preview, publication and custom pages. Production content and accounts are not replaced by local test fixtures.
