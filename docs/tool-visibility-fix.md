# Restored tool panels and larger text

The community stylesheet incorrectly applied display:none to .campus-world and .hologram inside #orbit-tools. Those classes are on the whole retained student app, not just its artwork. Removed that rule; only the decorative .c-hologram element remains hidden. Added a stylesheet version to load the corrected file after deployment.

Increased feed/banner/body/control text and retained tool form/body sizes, with phone-specific sizes.

Browser verification on isolated accounts: actual course controls visible; BCA selection; roadmap checkbox; syllabus playlist anchors; Hindi communication search; budget and expense entry; saved money values after reload; résumé role save and persistence; education tab; placement role selection; both return-to-feed controls; 390px tool and feed layouts without horizontal page overflow. Browser console had no errors. External video availability and the operating system print dialog were not tested. Existing nine suites also pass.

Previous wrapper-only visibility check was insufficient: the containing panel was visible but its app child was hidden. This check inspected actual inner controls and exercised their actions.
