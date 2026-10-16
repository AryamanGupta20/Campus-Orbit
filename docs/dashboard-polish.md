# Student dashboard improvements

The home page shows the next planned exam task, the selected career role and first unfinished step, and resume review suggestions. Up to three upcoming exams show days remaining and unfinished estimated task hours. These are in-app reminders, not push/email alerts.

The account bar shows save state and offers retry for failures other than version conflicts. Conflicts ask students to copy recent edits before reloading; the app never overwrites newer state silently.

Every student section has a problem report form. The student reviews the section and optional link before sending. It uses the existing authenticated, rate-limited request endpoint and private admin reply system. Admin navigation calls this Reports & requests. No schema changes.

Mobile CSS stacks next-step cards, wraps tabs, sizes controls for touch, and uses full-width report fields. Visual device verification remains pending because browser approval review was blocked by a usage limit.

All six test suites pass. Added checks cover next-step navigation, report payloads and admin visibility with student isolation, and saving after a simulated network failure. These use a DOM stub and local SQLite, not production accounts.
