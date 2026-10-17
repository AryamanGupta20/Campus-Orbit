# Placement Desk

## Student flow
Career Roadmaps -> Open Placement Desk. No role is preselected. Fifteen existing tech roles link to skill checks, existing playlists/guides, project checkpoints and resume review. Extra requirements may be added manually or suggested by simple job-description keyword matching. Suggestions must be reviewed by the student; this is not a full job-description parser.

Students choose a flexible checklist or a deadline-based daily plan (0.5-8 hours/day, up to 180 days). Learning estimates are editable. Unfinished work starts today and overflow is shown. Completion does not automatically mark skills ready. Interview practice has 32 bilingual question/guide pairs, selected by role, plus typed mocks and self-review. No AI scoring or paid API. Applications are manually tracked; links do not submit applications.

No placement location, map, distance or relocation fields are used.

## Admin flow
Admin dashboard -> Placement listings -> Add job listing or company suggestion. Enter official source, role tags, optional skill tags, preference, review date and visibility. For jobs, enter a listing expiry/review-by date; an actual employer application deadline is optional and separate. Confirm source review before publishing Ready. Draft and Closed are hidden from public/student content responses. Expired jobs or jobs not checked within 14 days are excluded by the student interface. Refresh to see content updates.

No live job listings are seeded. Company suggestions are editorial starting points, not current vacancies, rankings or eligibility guarantees. The source pages below were inspected on 16 October 2026:
- TCS: https://www.tcs.com/careers/india
- Infosys: https://www.infosys.com/careers/graduates.html
- Microsoft: https://careers.microsoft.com/v2/global/en/students
- Zoho: https://www.zoho.com/careers/

## Data and checks
Private placement state uses the existing versioned state API. Older clients preserve omitted placement state. Shared portfolios and admin student listings exclude preparation answers and application notes. Public/admin placement content uses the existing content table and an admin-only endpoint; no schema migration.

Eight test suites cover planner limits, language coverage, mocked UI actions, private persistence, tenant isolation, source review validation, draft/closed visibility and existing account flows. DOM tests are stubs. Visual desktop/phone checks and production-account persistence are not claimed: browser approval was previously blocked by a usage limit.
