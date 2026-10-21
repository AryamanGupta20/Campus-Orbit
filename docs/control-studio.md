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

## Free-position visual editor — 20 October 2026

Open Admin dashboard → Control Studio → Website editor. Choose a page, then select a layer or click an item in the draft preview. Use the Move handle to drag and the corner handle to resize. Choose Computer or Phone before changing a layout. Canvas zoom changes only the preview scale.

The style panel edits offsets, dimensions, font size/family/weight, line spacing, alignment, colours, padding, corner radius, border, opacity, rotation and stacking order. Images can be replaced by URL or uploaded. Clear a page background to remove its image/pseudo decoration and welcome 3D hosts; use the layer list to hide individual illustrations. Removed built-in items remain available in the layer list and can be restored with Reset. Added text, emoji, shapes, images and links can be deleted; Undo restores them during the current editor session.

Existing items retain their original document space when moved; this is a free-offset editor, not a replacement for every layout rule in the app. Check desktop and phone before publishing: large moves or dimensions can overlap other content. Forms, security notices, private records and student-authored posts are excluded from copy editing. Existing buttons retain their actions. New buttons accept a destination link; adding new backend features still requires code. Shape editing covers size, fill, border, corner radius and rotation, not arbitrary vector paths.

Changes appear in the preview without publishing. Save draft persists privately; Save & publish saves current changes first. Published history supports restoring previous versions. Undo history lasts until switching page/tab or reloading; saved draft/history remain in the database.

Validation: all 11 test scripts passed, including strict style/URL validation and separate desktop/mobile settings through save/publish. On an isolated local SQLite copy, browser checks verified heading drag (65→145px horizontal, 0→60px vertical), phone resize (310×86px), independent phone styling, copy replacement, a new /login link, draft/publish/reload, welcome artwork removal and undo. The original College Courses button still opened the course list after edits. Test content and accounts are not published to the production database.
