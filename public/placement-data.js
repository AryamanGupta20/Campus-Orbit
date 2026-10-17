window.CAMPUS_PLACEMENT_DATA={
  "questions": {
    "web": {
      "q": [
        "How would you make a form usable with a keyboard?",
        "Form ko keyboard se usable kaise banaoge?"
      ],
      "guide": [
        "Use semantic labels and controls, a logical tab order, visible focus and clear errors. Test the full form without a mouse.",
        "Sahi labels aur controls, logical tab order, visible focus aur clear errors rakho. Mouse ke bina poora form test karo."
      ]
    },
    "js": {
      "q": [
        "What is the difference between synchronous code and a Promise?",
        "Synchronous code aur Promise mein kya farq hai?"
      ],
      "guide": [
        "Synchronous statements run in sequence. A Promise represents a future result or failure. Handle success and rejection; await pauses that async function, not the entire program.",
        "Synchronous code sequence mein chalta hai. Promise future result ya error represent karta hai. Success aur rejection handle karo; await sirf us async function ko pause karta hai."
      ]
    },
    "react": {
      "q": [
        "When should you use state rather than a normal variable?",
        "Normal variable ki jagah state kab use karoge?"
      ],
      "guide": [
        "Use state for values that must persist across renders and trigger UI updates. Update it through its setter; derive values when possible rather than duplicating state.",
        "Jo value renders ke beech bachni chahiye aur UI update kare, uske liye state use karo. Setter se update karo; derived values ko alag state mein duplicate mat karo."
      ]
    },
    "node": {
      "q": [
        "Why can CPU-heavy work slow a Node.js server?",
        "CPU-heavy kaam Node.js server slow kyun kar sakta hai?"
      ],
      "guide": [
        "Long synchronous work blocks the event loop and delays other requests. Measure first, then move CPU work to workers or a job system and set limits.",
        "Lamba synchronous kaam event loop block karke doosri requests delay karta hai. Pehle measure karo, phir workers ya job system aur limits use karo."
      ]
    },
    "python": {
      "q": [
        "How would you handle a malformed input file in Python?",
        "Python mein galat format ki input file kaise handle karoge?"
      ],
      "guide": [
        "Validate format and required fields, catch specific expected exceptions, report a useful error and avoid silently losing records. Test empty and malformed files.",
        "Format aur required fields validate karo, expected exceptions catch karo aur clear error do. Records silently drop mat karo; empty aur malformed files test karo."
      ]
    },
    "java": {
      "q": [
        "Why program against an interface?",
        "Java mein interface use karne ka fayda kya hai?"
      ],
      "guide": [
        "An interface defines a contract without fixing the implementation. Different implementations can be substituted and tested; explain with a small example.",
        "Interface implementation fix kiye bina contract define karta hai. Alag implementations replace aur test kar sakte ho; chhota example do."
      ]
    },
    "db": {
      "q": [
        "How would you make two related database updates atomic?",
        "Do related database updates ko atomic kaise banaoge?"
      ],
      "guide": [
        "Use a transaction so both updates commit or neither does. Handle errors with rollback and consider concurrent requests and constraints.",
        "Transaction use karo taaki dono updates commit hon ya koi bhi nahi. Error par rollback, concurrent requests aur constraints ka dhyan rakho."
      ]
    },
    "dsa": {
      "q": [
        "When would you choose a hash map instead of a list?",
        "List ki jagah hash map kab choose karoge?"
      ],
      "guide": [
        "A hash map suits key-based lookup, typically average constant time. Lists suit ordered traversal. Discuss memory, collisions and worst-case behaviour rather than promising constant time always.",
        "Key se lookup ke liye hash map useful hai, average mein constant time. Ordered traversal ke liye list useful hai. Memory, collisions aur worst case bhi explain karo."
      ]
    },
    "backend": {
      "q": [
        "How do authentication and authorization differ?",
        "Authentication aur authorization mein kya farq hai?"
      ],
      "guide": [
        "Authentication establishes identity; authorization checks permission for each action or resource. A logged-in user must not automatically access another user’s private records.",
        "Authentication identity check karta hai; authorization har action ya resource ki permission. Login hone se doosre user ka private data access nahi milna chahiye."
      ]
    },
    "django": {
      "q": [
        "How would you prevent a user from editing someone else’s record?",
        "Django mein doosre user ka record edit hone se kaise rokoge?"
      ],
      "guide": [
        "Require authentication, scope the query to the owner and check permissions server-side. Validate inputs and test with two different accounts.",
        "Authentication lagao, query owner tak limit karo aur server par permissions check karo. Input validate karke do alag accounts se test karo."
      ]
    },
    "spring": {
      "q": [
        "Why use dependency injection in a service?",
        "Spring service mein dependency injection kyun use karte hain?"
      ],
      "guide": [
        "Pass dependencies into the service rather than constructing them inside it. This separates wiring from behaviour and makes alternative implementations and tests easier.",
        "Service ke andar dependencies banane ki jagah inject karo. Wiring aur behaviour alag hote hain; alternate implementations aur tests easy hote hain."
      ]
    },
    "stats": {
      "q": [
        "Does correlation prove causation?",
        "Kya correlation causation prove karta hai?"
      ],
      "guide": [
        "No. Confounding variables, selection effects and chance can produce correlation. Explain the data and consider an experiment or a justified causal design.",
        "Nahi. Confounding factors, selection aur chance se correlation aa sakta hai. Data explain karo aur experiment ya valid causal design consider karo."
      ]
    },
    "analysis": {
      "q": [
        "How would you deal with missing values in a dataset?",
        "Dataset ki missing values kaise handle karoge?"
      ],
      "guide": [
        "Investigate why values are missing and the amount affected. Choose removal or imputation based on the task, avoid leakage and report the impact.",
        "Pehle missing hone ki wajah aur amount dekho. Task ke hisaab se removal ya imputation choose karo, leakage avoid karo aur impact batao."
      ]
    },
    "bi": {
      "q": [
        "What makes a useful business dashboard?",
        "Useful business dashboard mein kya hona chahiye?"
      ],
      "guide": [
        "Start with the decision and audience. Define metrics and time ranges, show units and freshness, choose clear charts and check calculations against source data.",
        "Decision aur audience se start karo. Metrics, time range, units aur freshness clear rakho. Charts simple rakho aur calculations source data se check karo."
      ]
    },
    "ml": {
      "q": [
        "Why separate training, validation and test data?",
        "Training, validation aur test data alag kyun rakhte hain?"
      ],
      "guide": [
        "Train on training data, tune choices on validation data and use an untouched test set for final evaluation. Prevent leakage and choose a split that fits time or grouped data.",
        "Training data par learn, validation par choices tune aur untouched test par final evaluation karo. Leakage roko; time ya grouped data ke liye sahi split choose karo."
      ]
    },
    "ai": {
      "q": [
        "How would you evaluate an AI feature before release?",
        "AI feature release se pehle evaluate kaise karoge?"
      ],
      "guide": [
        "Define the task, a baseline and representative test cases. Measure quality, failures, latency and cost; include harmful or misleading outputs and a fallback.",
        "Task, baseline aur representative tests define karo. Quality, failures, latency aur cost measure karo. Misleading outputs aur fallback bhi test karo."
      ]
    },
    "llm": {
      "q": [
        "What does retrieval add to an LLM application?",
        "LLM app mein retrieval kya add karta hai?"
      ],
      "guide": [
        "It supplies relevant external context before generation. It can improve grounding but does not guarantee truth; test retrieval quality, citations and resistance to untrusted instructions.",
        "Generation se pehle relevant external context milta hai. Grounding better ho sakti hai, truth guarantee nahi. Retrieval, citations aur untrusted instructions test karo."
      ]
    },
    "mlops": {
      "q": [
        "What would you monitor after deploying a model?",
        "Model deploy karne ke baad kya monitor karoge?"
      ],
      "guide": [
        "Monitor latency, errors, input drift and performance when labels arrive. Version data and models, define alerts and keep a rollback plan.",
        "Latency, errors, input drift aur labels milne par performance monitor karo. Data/model versions, alerts aur rollback plan rakho."
      ]
    },
    "net": {
      "q": [
        "What happens when you open an HTTPS website?",
        "HTTPS website open karne par kya hota hai?"
      ],
      "guide": [
        "Describe DNS resolution, transport connection, TLS certificate verification and encrypted HTTP exchange. Caching and connection reuse may skip some work.",
        "DNS lookup, transport connection, TLS certificate verification aur encrypted HTTP explain karo. Cache aur connection reuse se kuch steps repeat nahi hote."
      ]
    },
    "linux": {
      "q": [
        "How would you investigate a service that stopped responding?",
        "Linux service respond na kare toh kaise investigate karoge?"
      ],
      "guide": [
        "Check service status and logs, CPU, memory, disk and network. Form a hypothesis from evidence before restarting; explain how you would confirm recovery.",
        "Service status, logs, CPU, memory, disk aur network check karo. Restart se pehle evidence se reason samjho; recovery verify karo."
      ]
    },
    "cloud": {
      "q": [
        "What does least privilege mean in cloud access?",
        "Cloud access mein least privilege kya hai?"
      ],
      "guide": [
        "Grant only the actions and resources needed for a task, limit duration where possible and review access. Avoid broad permissions for convenience.",
        "Sirf task ke liye required actions aur resources ki permission do. Jahan possible ho duration limit aur access review karo. Convenience ke liye broad permissions mat do."
      ]
    },
    "containers": {
      "q": [
        "How does a container differ from a virtual machine?",
        "Container aur virtual machine mein kya difference hai?"
      ],
      "guide": [
        "Containers isolate processes while sharing the host kernel. VMs run a guest operating system through virtualization. Discuss isolation and resource trade-offs.",
        "Containers processes isolate karke host kernel share karte hain. VM virtualization se guest OS chalata hai. Isolation aur resource trade-offs explain karo."
      ]
    },
    "iac": {
      "q": [
        "Why review infrastructure changes before applying them?",
        "Infrastructure changes apply karne se pehle review kyun?"
      ],
      "guide": [
        "A plan can reveal resource replacement, deletion and permission changes. Review dependencies, protect state and prepare rollback or recovery for failures.",
        "Plan se replacement, deletion aur permission changes dikh sakte hain. Dependencies review karo, state protect karo aur recovery plan rakho."
      ]
    },
    "security": {
      "q": [
        "What would you do first after a suspicious login alert?",
        "Suspicious login alert ke baad pehle kya karoge?"
      ],
      "guide": [
        "Verify the alert using logs and context, assess scope and follow the incident process. Preserve evidence and contain the threat with authorized actions.",
        "Logs aur context se alert verify karo, scope dekho aur incident process follow karo. Evidence preserve karo aur authorized containment karo."
      ]
    },
    "android": {
      "q": [
        "How would you keep an app responsive during a network call?",
        "Network call ke time Android app responsive kaise rahega?"
      ],
      "guide": [
        "Keep blocking work off the main thread, use lifecycle-aware asynchronous work and show loading, success and error states. Handle cancellation and retries carefully.",
        "Blocking kaam main thread se bahar rakho, lifecycle-aware async work use karo. Loading, success aur error dikhao; cancellation aur retries handle karo."
      ]
    },
    "qa": {
      "q": [
        "How would you test a login form?",
        "Login form kaise test karoge?"
      ],
      "guide": [
        "Cover valid and invalid inputs, empty fields, rate limits, session behaviour, accessibility and account isolation. State expected outcomes and avoid exposing credentials.",
        "Valid/invalid inputs, empty fields, rate limits, sessions, accessibility aur account isolation test karo. Expected result likho aur credentials expose mat karo."
      ]
    },
    "automation": {
      "q": [
        "What makes an automated test reliable?",
        "Automated test reliable kaise banta hai?"
      ],
      "guide": [
        "Use independent test data, clear assertions and stable selectors. Wait for observable conditions instead of arbitrary sleeps and investigate flaky failures.",
        "Independent data, clear assertions aur stable selectors rakho. Fixed sleeps ki jagah observable condition wait karo; flaky failures investigate karo."
      ]
    },
    "pipelines": {
      "q": [
        "How do you make a data pipeline safe to rerun?",
        "Data pipeline ko safely rerun kaise karoge?"
      ],
      "guide": [
        "Use idempotent writes or deduplication keys, checkpoints and validation. Handle partial failures and track lineage so retries do not duplicate or lose data.",
        "Idempotent writes ya dedup keys, checkpoints aur validation use karo. Partial failures aur lineage handle karo taaki retry data duplicate ya lose na kare."
      ]
    },
    "ship": {
      "q": [
        "What should a useful project README contain?",
        "Useful project README mein kya hona chahiye?"
      ],
      "guide": [
        "Explain the problem, setup, configuration, usage and tests. Include limitations, a demo and your contribution, but never secrets or private user data.",
        "Problem, setup, config, usage aur tests explain karo. Limitations, demo aur apna contribution add karo; secrets ya private data kabhi nahi."
      ]
    },
    "intro": {
      "q": [
        "Introduce yourself for this role in one minute.",
        "Is role ke liye ek minute mein apna introduction do."
      ],
      "guide": [
        "Connect your education, relevant skills and one real project to the role. Keep it specific and truthful; finish with what you want to learn or contribute.",
        "Education, relevant skills aur ek real project ko role se connect karo. Specific aur honest raho; kya learn ya contribute karna hai usse end karo."
      ]
    },
    "project": {
      "q": [
        "Describe a project problem, your contribution and one failure you fixed.",
        "Project ka problem, apna contribution aur ek fixed failure batao."
      ],
      "guide": [
        "Use context, your own actions, evidence of the result and a lesson. Separate team work from your contribution; do not invent impact numbers.",
        "Context, apne actions, result ka evidence aur lesson batao. Team work aur apna contribution alag rakho; impact numbers invent mat karo."
      ]
    },
    "team": {
      "q": [
        "How would you handle disagreement during a team project?",
        "Team project mein disagreement kaise handle karoge?"
      ],
      "guide": [
        "Understand the goal and the other view, compare options with evidence, agree on a small test and document the decision respectfully.",
        "Goal aur doosre ka view samjho, evidence se options compare karo, small test agree karo aur decision respectfully document karo."
      ]
    },
    "apt-percent": {
      "q": [
        "A price rises by 20% and then falls by 20%. Is it back to the original price? Explain.",
        "Price 20% badhta hai aur phir 20% girta hai. Kya original price aa gaya? Samjhao."
      ],
      "guide": [
        "No. Starting at 100, it becomes 120 and then 96. The final price is 4% lower because the percentages use different bases.",
        "Nahi. 100 se 120, phir 96 hota hai. Final price 4% kam hai kyunki percentage ka base badal gaya."
      ]
    },
    "apt-work": {
      "q": [
        "A finishes a task in 6 hours; B takes 3 hours. At constant independent rates, how long do they take together?",
        "A kaam 6 hours mein, B 3 hours mein karta hai. Constant independent speed par saath kitna time lagega?"
      ],
      "guide": [
        "A completes 1/6 and B 1/3 of the task per hour. Together they do 1/2 per hour, so they take 2 hours. State the no-interference assumption.",
        "A 1/6 aur B 1/3 kaam per hour karta hai. Total 1/2 per hour, isliye 2 hours. Assume karo ki dono ek doosre ko slow nahi karte."
      ]
    },
    "apt-average": {
      "q": [
        "Four test scores average 70. What fifth score makes the average 74?",
        "4 tests ka average 70 hai. 5th score kitna ho ki average 74 ho?"
      ],
      "guide": [
        "The first four sum to 280. Five scores must sum to 370, so the fifth must be 90. Check: 370/5 = 74.",
        "Pehle 4 ka total 280 hai. 5 ka total 370 chahiye, toh 5th score 90. Check: 370/5 = 74."
      ]
    },
    "apt-logic": {
      "q": [
        "All developers in a team know Git. Some Git users know Python. Must some team developers know Python?",
        "Team ke saare developers Git jaante hain. Kuch Git users Python jaante hain. Kya zaroor kuch team developers Python jaante hain?"
      ],
      "guide": [
        "No. The Git users who know Python may all be outside that team. The statements do not establish an overlap between team developers and Python users.",
        "Nahi. Python jaane wale Git users team ke bahar ho sakte hain. Statements developers aur Python users ka overlap prove nahi karte."
      ]
    },
    "apt-data": {
      "q": [
        "A test suite has 80 passing and 20 failing tests. After fixing 10 failures, what percentage pass, assuming no new failures?",
        "80 tests pass aur 20 fail hain. 10 failures fix karne ke baad pass percentage kya hoga, agar naye failures na hon?"
      ],
      "guide": [
        "90 of 100 tests pass, or 90%. The denominator remains 100; do not divide by the original 80 passes.",
        "100 mein se 90 pass hain, yani 90%. Total 100 hi rahega; original 80 passes se divide mat karo."
      ]
    },
    "project-flow": {
      "q": [
        "Choose your own project. Trace one user action from input to output.",
        "Apna project choose karo. Ek user action ko input se output tak explain karo."
      ],
      "guide": [
        "Name the input, validation, important functions, storage or API call, and result. Point to real files or a demo, and identify where errors can occur.",
        "Input, validation, important functions, storage/API aur result batao. Real files ya demo dikhao; error kahan aa sakta hai identify karo."
      ]
    },
    "project-choice": {
      "q": [
        "Which technical decision would you change if you rebuilt your project, and why?",
        "Project dobara banao toh kaunsa technical decision badloge aur kyun?"
      ],
      "guide": [
        "Explain your original constraint, the choice, evidence of its limits, an alternative and the migration cost. Avoid saying one technology is always best.",
        "Original constraint, choice, limitations ka evidence, alternative aur migration cost explain karo. Kisi technology ko hamesha best mat bolo."
      ]
    },
    "project-test": {
      "q": [
        "Show how you know your project works, including one case that should fail.",
        "Kaise prove karoge ki project kaam karta hai? Ek expected failure case bhi batao."
      ],
      "guide": [
        "Describe a normal case, a boundary or invalid-input case and the expected result for each. Explain what you tested yourself and what remains untested.",
        "Normal case, boundary/invalid input aur dono ke expected results batao. Khud kya test kiya aur kya abhi untested hai clear karo."
      ]
    },
    "hr-learning": {
      "q": [
        "Tell us about a skill you did not know and how you learned it.",
        "Ek aisi skill batao jo nahi aati thi aur kaise seekhi."
      ],
      "guide": [
        "Use a real example: starting gap, learning steps, practice, feedback and a result you can demonstrate. Explain what you still need to learn.",
        "Real example do: starting gap, learning steps, practice, feedback aur dikhane layak result. Abhi kya seekhna baaki hai bhi batao."
      ]
    },
    "hr-feedback": {
      "q": [
        "How would you respond if a reviewer found several problems in your work?",
        "Reviewer ko aapke kaam mein kai problems mile toh kya karoge?"
      ],
      "guide": [
        "Clarify the feedback, reproduce the issues, prioritise fixes and ask for review again. Explain how you would prevent the same mistakes without becoming defensive.",
        "Feedback samjho, issues reproduce karo, fixes prioritise karo aur phir review maango. Defensive hue bina repeat mistakes kaise rokoge batao."
      ]
    },
    "debug-frontend": {
      "q": [
        "A page’s submit button works with a mouse but not with Enter. How would you diagnose and fix it?",
        "Submit button mouse se chalta hai par Enter se nahi. Diagnose aur fix kaise karoge?"
      ],
      "guide": [
        "Inspect whether a real form and submit button are used. Handle the form submit event, keep labels and keyboard focus, and test Enter, validation and repeated submissions.",
        "Real form aur submit button check karo. Form submit event handle karo, labels/focus rakho aur Enter, validation aur repeat submissions test karo."
      ]
    },
    "debug-backend": {
      "q": [
        "An API lets user A read user B’s record by changing the ID. What is wrong and how do you test the fix?",
        "API mein ID badal kar user A, user B ka record padh leta hai. Kya galat hai aur fix kaise test karoge?"
      ],
      "guide": [
        "Authentication alone is insufficient. Enforce owner or resource permissions on the server for every request. Test allowed and denied requests with separate accounts and do not rely on hidden UI controls.",
        "Sirf login check kaafi nahi. Har request par server owner/resource permission check kare. Alag accounts se allowed/denied cases test karo; hidden UI par rely mat karo."
      ]
    },
    "debug-fullstack": {
      "q": [
        "The UI says “Saved” but a failed network request lost the change. Trace the bug and fix the user experience.",
        "UI Saved bolta hai par failed network request se change gaya. Bug trace aur UX fix karo."
      ],
      "guide": [
        "Trace the UI event, request, response and storage. Show saved only after server confirmation, keep pending edits, show failure and allow retry without silently overwriting newer data.",
        "UI event, request, response aur storage trace karo. Server confirmation ke baad saved dikhao, pending edits rakho aur failure/retry do; newer data silently overwrite mat karo."
      ]
    },
    "debug-python": {
      "q": [
        "Why does the second call keep the first call’s item? Suggest a fix and test.",
        "Second call mein first call ka item kyun reh gaya? Fix aur test batao."
      ],
      "guide": [
        "The mutable default list is created once and reused. Default to None and create a new list inside when needed. Test two calls without a list and one with an explicit list.",
        "Mutable default list ek baar banti aur reuse hoti hai. Default None rakho aur zarurat par andar list banao. Do default calls aur explicit list test karo."
      ],
      "code": "def add_item(item, items=[]):\n    items.append(item)\n    return items\n\nprint(add_item(\"A\"))\nprint(add_item(\"B\"))"
    },
    "debug-java": {
      "q": [
        "Two equal-looking strings sometimes compare false with ==. What should you inspect?",
        "Same dikhne wale strings == se kabhi false aate hain. Kya check karoge?"
      ],
      "guide": [
        "For objects, == compares references. Use content equality, for example Objects.equals(a,b) when nulls are possible. Test separately created strings and null cases.",
        "Objects ke liye == references compare karta hai. Content equality use karo, jaise null possible ho toh Objects.equals(a,b). Alag bane strings aur null test karo."
      ]
    },
    "debug-analyst": {
      "q": [
        "A report doubles revenue after joining orders to order_items. How would you find the cause?",
        "Orders ko order_items se join karne ke baad revenue double ho gaya. Cause kaise dhoondhoge?"
      ],
      "guide": [
        "Check table grain and join cardinality. One order may appear on multiple item rows. Aggregate at the intended grain and reconcile against source totals; DISTINCT is not a universal fix.",
        "Table grain aur join cardinality check karo. Ek order multiple item rows par repeat ho sakta hai. Sahi grain par aggregate aur source total se reconcile karo; DISTINCT universal fix nahi."
      ]
    },
    "debug-scientist": {
      "q": [
        "A model gets excellent test results, but preprocessing was fitted before the train/test split. What is the risk?",
        "Model ka test result bahut achha hai, par preprocessing split se pehle fit hui. Risk kya hai?"
      ],
      "guide": [
        "Test information may leak into preprocessing. Fit transformations only on training data, then transform validation/test data. Re-evaluate with a suitable split and a baseline.",
        "Test information preprocessing mein leak ho sakti hai. Transformation sirf train par fit karo, phir validation/test transform karo. Sahi split aur baseline se re-evaluate karo."
      ]
    },
    "debug-ml": {
      "q": [
        "Training accuracy improves while validation accuracy falls. What would you investigate before deploying?",
        "Training accuracy badhti hai par validation girti hai. Deploy se pehle kya investigate karoge?"
      ],
      "guide": [
        "Investigate overfitting, split quality, leakage, class imbalance and metric choice. Compare a baseline and consider regularisation or simpler models; do not tune on the final test set.",
        "Overfitting, split, leakage, class imbalance aur metric check karo. Baseline compare, regularisation ya simpler model consider karo; final test par tune mat karo."
      ]
    },
    "debug-ai": {
      "q": [
        "An AI answer invents facts that are absent from the provided documents. How would you debug the pipeline?",
        "AI answer documents mein na hone wale facts bana raha hai. Pipeline debug kaise karoge?"
      ],
      "guide": [
        "Inspect retrieved context, prompt and output against test cases. Require support for claims, allow “not enough information” and test grounding. Better prompting alone cannot guarantee truth.",
        "Retrieved context, prompt aur output test cases se compare karo. Claims ka support maango, insufficient information allow karo aur grounding test karo. Prompting alone truth guarantee nahi."
      ]
    },
    "debug-data-engineer": {
      "q": [
        "Retrying a pipeline creates duplicate rows. How would you make retries safe?",
        "Pipeline retry se duplicate rows banti hain. Retry safe kaise banaoge?"
      ],
      "guide": [
        "Identify a stable record key and use deduplication or idempotent writes. Track checkpoints and partial failures. Test reruns, interrupted batches and late-arriving records.",
        "Stable record key identify karo, dedup ya idempotent writes lagao. Checkpoints/partial failures track karo. Rerun, interrupted batch aur late records test karo."
      ]
    },
    "debug-devops": {
      "q": [
        "A service works locally but fails in a container. What would you check before changing the image?",
        "Service local chalti hai par container mein fail. Image change se pehle kya check karoge?"
      ],
      "guide": [
        "Read logs and compare environment variables, dependencies, file paths, permissions, ports and health checks. Reproduce with the same image and avoid putting secrets into it.",
        "Logs aur env vars, dependencies, paths, permissions, ports aur health checks compare karo. Same image se reproduce karo; image mein secrets mat rakho."
      ]
    },
    "debug-cloud": {
      "q": [
        "A cloud service returns Access Denied. Should you grant administrator access to fix it?",
        "Cloud service Access Denied deti hai. Kya fix ke liye admin access de doge?"
      ],
      "guide": [
        "No. Inspect the identity, action, resource and policy evaluation, including explicit denies. Grant the minimum needed permission and test both intended access and continued restrictions.",
        "Nahi. Identity, action, resource aur policy evaluation including explicit deny check karo. Minimum required permission do aur allowed/restricted access dono test karo."
      ]
    },
    "debug-cyber": {
      "q": [
        "An alert marks many failed logins as an attack. How would you distinguish a genuine incident from a configuration issue?",
        "Alert kai failed logins ko attack bolta hai. Real incident aur config issue mein farq kaise karoge?"
      ],
      "guide": [
        "Correlate time, affected accounts, source patterns, successful logins and recent changes. Preserve evidence, assess scope and follow authorized incident procedures rather than assuming either conclusion.",
        "Time, accounts, source patterns, successful logins aur recent changes correlate karo. Evidence preserve, scope assess aur authorized incident process follow karo; conclusion assume mat karo."
      ]
    },
    "debug-android": {
      "q": [
        "A network response updates a screen after the user has left it. What could go wrong and how would you prevent it?",
        "User screen chhod chuka hai par network response usko update karti hai. Risk aur prevention kya hai?"
      ],
      "guide": [
        "Consider stale updates, crashes and leaked references. Use lifecycle-aware work, cancellation and state handling. Test navigation away, rotation and slow responses.",
        "Stale updates, crash aur leaked references socho. Lifecycle-aware work, cancellation aur state handling use karo. Navigation away, rotation aur slow response test karo."
      ]
    },
    "debug-qa": {
      "q": [
        "An automated test fails only sometimes after clicking Save. How would you investigate it?",
        "Save click ke baad automated test kabhi-kabhi fail hota hai. Investigate kaise karoge?"
      ],
      "guide": [
        "Capture logs and failure state. Check asynchronous work, selectors and shared test data. Wait for the actual save result instead of fixed sleeps; repeat to confirm the cause, not to hide failure.",
        "Logs aur failure state lo. Async work, selectors aur shared data check karo. Fixed sleep ki jagah actual save result wait karo; repeat cause confirm karne ke liye, failure hide karne ke liye nahi."
      ]
    }
  },
  "companies": [
    {
      "id": "tcs",
      "company": "TCS",
      "url": "https://www.tcs.com/careers/india",
      "roles": [
        "java",
        "python",
        "backend",
        "qa",
        "cloud",
        "analyst",
        "cyber"
      ],
      "skills": [
        "java",
        "python",
        "db",
        "qa",
        "cloud",
        "analysis",
        "security"
      ],
      "preference": "Fresher"
    },
    {
      "id": "infosys",
      "company": "Infosys",
      "url": "https://www.infosys.com/careers/graduates.html",
      "roles": [
        "java",
        "python",
        "backend",
        "fullstack",
        "qa",
        "analyst",
        "devops"
      ],
      "skills": [
        "java",
        "python",
        "db",
        "qa",
        "analysis",
        "containers"
      ],
      "preference": "Fresher"
    },
    {
      "id": "microsoft",
      "company": "Microsoft",
      "url": "https://careers.microsoft.com/v2/global/en/students",
      "roles": [
        "frontend",
        "backend",
        "fullstack",
        "scientist",
        "ml",
        "ai",
        "cloud",
        "data-engineer",
        "cyber"
      ],
      "skills": [
        "dsa",
        "db",
        "cloud",
        "ml",
        "ai",
        "security"
      ],
      "preference": "Both"
    },
    {
      "id": "zoho",
      "company": "Zoho",
      "url": "https://www.zoho.com/careers/",
      "roles": [
        "frontend",
        "backend",
        "fullstack",
        "java",
        "qa",
        "android"
      ],
      "skills": [
        "web",
        "js",
        "java",
        "db",
        "qa",
        "android"
      ],
      "preference": "Both"
    }
  ],
  "reviewed": "2026-10-16",
  "rounds": [
    {
      "id": "aptitude",
      "title": [
        "Aptitude & reasoning",
        "Aptitude aur reasoning"
      ],
      "desc": [
        "Practise numbers, logic and clear working.",
        "Numbers, logic aur steps ki practice."
      ],
      "keys": [
        "apt-percent",
        "apt-work",
        "apt-average",
        "apt-logic",
        "apt-data"
      ]
    },
    {
      "id": "technical",
      "title": [
        "Technical round",
        "Technical round"
      ],
      "desc": [
        "Questions chosen for your selected tech role.",
        "Aapke tech role ke questions."
      ]
    },
    {
      "id": "debugging",
      "title": [
        "Debugging & troubleshooting",
        "Debugging aur troubleshooting"
      ],
      "desc": [
        "Find the cause, explain a fix and plan a test.",
        "Cause dhoondho, fix aur test samjhao."
      ]
    },
    {
      "id": "project",
      "title": [
        "Project discussion",
        "Project discussion"
      ],
      "desc": [
        "Defend your own work with real examples.",
        "Apne kaam ko real examples se explain karo."
      ],
      "keys": [
        "project",
        "project-flow",
        "project-choice",
        "project-test"
      ]
    },
    {
      "id": "hr",
      "title": [
        "HR & communication",
        "HR aur communication"
      ],
      "desc": [
        "Practise honest, specific workplace answers.",
        "Honest aur specific workplace answers ki practice."
      ],
      "keys": [
        "intro",
        "team",
        "hr-learning",
        "hr-feedback"
      ]
    }
  ]
};
