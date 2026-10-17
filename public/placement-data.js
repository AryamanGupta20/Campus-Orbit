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
  "reviewed": "2026-10-16"
};
