export const MODULES = [
  {
    id: 1, title: "Foundations", icon: "\u{1F310}", color: "#58CC02", desc: "How the Web Works",
    lessons: [
      {
        title: "Client-Server Model",
        slides: [
          { type: "teach", content: "The web works on a **client-server** model. Your browser (client) sends a **request** to a server, which sends back a **response**.", highlight: "client-server" },
          { type: "teach", content: "Think of it like ordering food: you (client) tell the waiter (HTTP) what you want, and the kitchen (server) prepares and sends it back.", highlight: "HTTP" },
        ],
        questions: [
          { q: "In the client-server model, what is the 'client'?", options: ["The database", "Your web browser", "The API", "The server"], answer: 1 },
          { q: "What protocol does the web use to send requests?", options: ["FTP", "SMTP", "HTTP/HTTPS", "TCP only"], answer: 2 },
          { q: "DNS translates ___ into IP addresses.", options: ["Passwords", "Domain names", "HTML files", "CSS styles"], answer: 1 },
        ]
      },
      {
        title: "HTTP Methods & Status Codes",
        slides: [
          { type: "teach", content: "HTTP has **methods** that tell the server what action to take: **GET** (read), **POST** (create), **PUT** (update), **DELETE** (remove).", highlight: "methods" },
          { type: "teach", content: "Servers reply with **status codes**: **200** = OK, **404** = Not Found, **500** = Server Error. Think of them as the server's mood ring!", highlight: "status codes" },
        ],
        questions: [
          { q: "Which HTTP method is used to CREATE new data?", options: ["GET", "POST", "DELETE", "PATCH"], answer: 1 },
          { q: "What does a 404 status code mean?", options: ["Server error", "Success", "Not found", "Unauthorized"], answer: 2 },
          { q: "Which method retrieves data WITHOUT modifying it?", options: ["POST", "PUT", "DELETE", "GET"], answer: 3 },
        ]
      },
      {
        title: "Dev Environment Setup",
        slides: [
          { type: "teach", content: "Every developer needs their toolkit: a **code editor** (VS Code), **Node.js** (JavaScript runtime), **Git** (version control), and **browser DevTools**.", highlight: "code editor" },
          { type: "teach", content: "The **terminal** is your command center. It may look intimidating, but it's just a text-based way to talk to your computer. You'll use it daily!", highlight: "terminal" },
        ],
        questions: [
          { q: "Which tool is the most popular code editor for web dev?", options: ["Notepad", "VS Code", "Microsoft Word", "Sublime only"], answer: 1 },
          { q: "Node.js allows you to run JavaScript ___.", options: ["Only in browsers", "On servers/outside browsers", "Only on mobile", "In Excel"], answer: 1 },
          { q: "What does Git help you manage?", options: ["Databases", "Design files", "Code versions/history", "Server hardware"], answer: 2 },
        ]
      }
    ]
  },
  {
    id: 2, title: "HTML", icon: "\u{1F4C4}", color: "#E34F26", desc: "Semantic Markup",
    lessons: [
      {
        title: "Document Structure",
        slides: [
          { type: "teach", content: "Every HTML page starts with **<!DOCTYPE html>** and has two main sections: **<head>** (metadata, title, links) and **<body>** (visible content).", highlight: "head and body" },
          { type: "teach", content: "HTML uses **tags** wrapped in angle brackets: `<p>Hello</p>`. Most tags have an opening and closing tag. They create the **skeleton** of your page.", highlight: "tags" },
        ],
        questions: [
          { q: "What goes inside the <head> tag?", options: ["Visible text", "Images", "Metadata and title", "Buttons"], answer: 2 },
          { q: "Which is the correct HTML boilerplate start?", options: ["<html>", "<!DOCTYPE html>", "<start>", "<page>"], answer: 1 },
          { q: "The <body> tag contains:", options: ["CSS styles only", "Visible page content", "Server config", "Database queries"], answer: 1 },
        ]
      },
      {
        title: "Semantic Elements",
        slides: [
          { type: "teach", content: "**Semantic HTML** uses meaningful tags like **<header>**, **<nav>**, **<main>**, **<article>**, and **<footer>** instead of generic `<div>` everywhere.", highlight: "Semantic" },
          { type: "teach", content: "Why care? Screen readers use semantic tags for accessibility, search engines use them for SEO, and your code becomes **self-documenting**.", highlight: "accessibility" },
        ],
        questions: [
          { q: "Which is a semantic HTML element?", options: ["<div>", "<span>", "<article>", "<box>"], answer: 2 },
          { q: "Semantic HTML helps with:", options: ["Making pages load faster", "Accessibility and SEO", "Adding animations", "Database queries"], answer: 1 },
          { q: "For page navigation links, use:", options: ["<div>", "<nav>", "<link>", "<menu>"], answer: 1 },
        ]
      },
      {
        title: "Forms & Inputs",
        slides: [
          { type: "teach", content: "Forms collect user data with **<form>**, **<input>**, **<select>**, and **<textarea>**. Always pair inputs with **<label>** for accessibility!", highlight: "label" },
          { type: "teach", content: "Input types like **email**, **password**, **number**, and **date** give you free browser validation. The `required` attribute prevents empty submissions.", highlight: "validation" },
        ],
        questions: [
          { q: "Which attribute makes a form field mandatory?", options: ["important", "required", "mandatory", "needed"], answer: 1 },
          { q: "What input type gives a date picker?", options: ["text", "calendar", "date", "time"], answer: 2 },
          { q: "Labels improve:", options: ["Page speed", "Accessibility", "Server performance", "CSS styling"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 3, title: "CSS", icon: "\u{1F3A8}", color: "#264DE4", desc: "Styling & Layout",
    lessons: [
      {
        title: "Box Model & Selectors",
        slides: [
          { type: "teach", content: "Every element is a **box** with 4 layers: **content \u2192 padding \u2192 border \u2192 margin**. Use `box-sizing: border-box` so widths include padding and border.", highlight: "box" },
          { type: "teach", content: "**Selectors** target elements: `.class`, `#id`, `element`. Specificity determines which rule wins: IDs (1-0-0) > Classes (0-1-0) > Elements (0-0-1).", highlight: "Specificity" },
        ],
        questions: [
          { q: "The CSS box model layers (inside to out) are:", options: ["margin, border, padding, content", "content, padding, border, margin", "content, margin, padding, border", "border, content, padding, margin"], answer: 1 },
          { q: "Which selector has the HIGHEST specificity?", options: [".card", "#header", "div", "p.active"], answer: 1 },
          { q: "box-sizing: border-box makes width include:", options: ["Only content", "Content + padding + border", "Content + margin", "Everything"], answer: 1 },
        ]
      },
      {
        title: "Flexbox & Grid",
        slides: [
          { type: "teach", content: "**Flexbox** is for **1D layouts** (row OR column). Set `display: flex` on a container, then use `justify-content` (main axis) and `align-items` (cross axis).", highlight: "Flexbox" },
          { type: "teach", content: "**CSS Grid** is for **2D layouts** (rows AND columns). Use `grid-template-columns` and `grid-template-rows` to define your layout structure.", highlight: "Grid" },
        ],
        questions: [
          { q: "Flexbox is best for ___ dimensional layouts.", options: ["Zero", "One", "Two", "Three"], answer: 1 },
          { q: "Which property aligns flex items on the main axis?", options: ["align-items", "justify-content", "flex-wrap", "align-self"], answer: 1 },
          { q: "CSS Grid excels at ___ layouts.", options: ["One-dimensional", "Two-dimensional", "Print", "Email"], answer: 1 },
        ]
      },
      {
        title: "Responsive Design",
        slides: [
          { type: "teach", content: "**Mobile-first** design: write base CSS for small screens, then use **@media (min-width)** queries to add styles for larger screens.", highlight: "Mobile-first" },
          { type: "teach", content: "Use **relative units** (rem, %, vw, vh) instead of pixels. `1rem = 16px` by default. This makes your layouts fluid and accessible.", highlight: "relative units" },
        ],
        questions: [
          { q: "Mobile-first means base styles are for:", options: ["Desktop", "Tablet", "Mobile", "Print"], answer: 2 },
          { q: "Which media query targets screens 768px and wider?", options: ["@media (max-width: 768px)", "@media (min-width: 768px)", "@media (width: 768px)", "@media (screen: 768px)"], answer: 1 },
          { q: "1rem equals ___ by default.", options: ["10px", "12px", "16px", "20px"], answer: 2 },
        ]
      }
    ]
  },
  {
    id: 4, title: "JavaScript", icon: "\u26A1", color: "#F7DF1E", desc: "Fundamentals",
    lessons: [
      {
        title: "Variables & Types",
        slides: [
          { type: "teach", content: "Use **const** for values that don't change and **let** for values that do. Avoid `var` \u2014 it's legacy and has scoping issues.", highlight: "const and let" },
          { type: "teach", content: "JavaScript has 7 primitive types: **string**, **number**, **boolean**, **null**, **undefined**, **symbol**, **bigint**. Plus **object** for complex data.", highlight: "primitive" },
        ],
        questions: [
          { q: "Which keyword should you DEFAULT to for variables?", options: ["var", "let", "const", "define"], answer: 2 },
          { q: "What type is the value `true`?", options: ["String", "Number", "Boolean", "Object"], answer: 2 },
          { q: "null represents:", options: ["Zero", "Empty string", "Intentional absence of value", "An error"], answer: 2 },
        ]
      },
      {
        title: "Functions & Arrays",
        slides: [
          { type: "teach", content: "**Arrow functions** `const add = (a, b) => a + b;` are concise and don't have their own `this`. They're the modern way to write functions.", highlight: "Arrow functions" },
          { type: "teach", content: "The Big 3 array methods: **map** (transform each item), **filter** (keep matching items), **reduce** (accumulate to single value). Master these!", highlight: "map, filter, reduce" },
        ],
        questions: [
          { q: "What does .map() return?", options: ["A boolean", "A new array of same length", "A single value", "undefined"], answer: 1 },
          { q: "Which method keeps only items that pass a test?", options: ["map", "reduce", "filter", "find"], answer: 2 },
          { q: "Arrow functions use which syntax?", options: ["function() {}", "=> {}", "def()", "fn()"], answer: 1 },
        ]
      },
      {
        title: "DOM & Events",
        slides: [
          { type: "teach", content: "The **DOM** (Document Object Model) is the browser's tree representation of your HTML. JavaScript can read and modify it using methods like **querySelector**.", highlight: "DOM" },
          { type: "teach", content: "**Events** are things that happen: clicks, key presses, form submissions. Use **addEventListener** to respond to them. This is how you make pages interactive!", highlight: "Events" },
        ],
        questions: [
          { q: "querySelector('.card') selects:", options: ["All cards", "The first matching .card element", "The last card", "Card by ID"], answer: 1 },
          { q: "Which method attaches an event handler?", options: ["onClick()", "addEventListener()", "attachEvent()", "bindEvent()"], answer: 1 },
          { q: "event.preventDefault() is used to:", options: ["Delete an element", "Stop default browser behavior", "Create an event", "Style an element"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 5, title: "Advanced JS", icon: "\u{1F680}", color: "#9B59B6", desc: "ES6+ & Async",
    lessons: [
      {
        title: "Async/Await & Promises",
        slides: [
          { type: "teach", content: "**Promises** represent future values: pending \u2192 fulfilled or rejected. **async/await** is cleaner syntax for working with promises.", highlight: "async/await" },
          { type: "teach", content: "Always wrap await calls in **try/catch** for error handling. Use **Promise.all()** to run multiple async operations in parallel.", highlight: "try/catch" },
        ],
        questions: [
          { q: "A Promise can be in which states?", options: ["start/stop/error", "pending/fulfilled/rejected", "open/closed", "sync/async"], answer: 1 },
          { q: "async/await is syntactic sugar for:", options: ["Callbacks", "Promises", "Loops", "Variables"], answer: 1 },
          { q: "Promise.all() runs promises:", options: ["One at a time", "In parallel", "In reverse", "Only if first succeeds"], answer: 1 },
        ]
      },
      {
        title: "Closures & Modules",
        slides: [
          { type: "teach", content: "A **closure** is a function that remembers variables from its outer scope, even after that scope has finished. It's how we create private state in JavaScript.", highlight: "closure" },
          { type: "teach", content: "**ES Modules**: use `export` to share code and `import` to use it. **Named exports** for utilities, **default export** for main classes/components.", highlight: "ES Modules" },
        ],
        questions: [
          { q: "A closure gives a function access to:", options: ["Global variables only", "Its outer scope's variables", "All files", "The DOM"], answer: 1 },
          { q: "Which is a named export?", options: ["export default User", "export { formatDate }", "module.exports", "require()"], answer: 1 },
          { q: "Closures are useful for creating:", options: ["HTML elements", "Private state/data encapsulation", "CSS animations", "Database tables"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 6, title: "Git", icon: "\u{1F500}", color: "#F05032", desc: "Version Control",
    lessons: [
      {
        title: "Git Essentials",
        slides: [
          { type: "teach", content: "Git tracks changes to your code over time. The core workflow: **add** (stage changes) \u2192 **commit** (save snapshot) \u2192 **push** (upload to remote).", highlight: "add, commit, push" },
          { type: "teach", content: "**Branches** let you work on features without affecting the main code. Create with `git checkout -b feature/name`, then **merge** back when done.", highlight: "Branches" },
        ],
        questions: [
          { q: "What does `git add .` do?", options: ["Commits all files", "Stages all changes", "Pushes to remote", "Creates a branch"], answer: 1 },
          { q: "Branches are used to:", options: ["Delete code", "Work on features in isolation", "Speed up the server", "Design UI"], answer: 1 },
          { q: "The correct workflow order is:", options: ["commit, add, push", "push, commit, add", "add, commit, push", "commit, push, add"], answer: 2 },
        ]
      },
      {
        title: "Branching & Merging",
        slides: [
          { type: "teach", content: "**Feature branches** isolate new work from the main codebase. Name them descriptively: `feature/login`, `fix/navbar-bug`, `chore/update-deps`.", highlight: "Feature branches" },
          { type: "teach", content: "**Merge conflicts** happen when two branches edit the same lines. Git marks the conflict with `<<<<<<<` and `>>>>>>>` \u2014 you choose which version to keep.", highlight: "Merge conflicts" },
        ],
        questions: [
          { type: "order", q: "Arrange the steps to create and merge a feature branch:", lines: ["git checkout -b feature/login", "# write your code changes", "git add . && git commit -m \"feat: login\"", "git checkout main && git merge feature/login"], correctOrder: [0, 1, 2, 3] },
          { q: "What does `git checkout -b new-branch` do?", options: ["Deletes a branch", "Creates and switches to a new branch", "Merges two branches", "Pushes to remote"], answer: 1 },
          { type: "fill", q: "Complete the merge command:", code: "git checkout main\ngit ___BLANK1___ feature/login", blanks: [{ id: "BLANK1", options: ["push", "merge", "pull", "delete"], answer: 1 }] },
        ]
      },
      {
        title: "Git Workflow & Collaboration",
        slides: [
          { type: "teach", content: "**Pull Requests** (PRs) let teammates review your code before merging. They're the backbone of professional team collaboration on GitHub.", highlight: "Pull Requests" },
          { type: "teach", content: "The **fork-and-PR** workflow: fork a repo, clone your fork, create a branch, push changes, then open a PR to the original repo. This is how open source works!", highlight: "fork-and-PR" },
        ],
        questions: [
          { q: "A Pull Request is used to:", options: ["Download a repo", "Request code review before merging", "Delete a branch", "Install dependencies"], answer: 1 },
          { q: "What does `git pull` do?", options: ["Pushes local changes", "Fetches and merges remote changes", "Creates a pull request", "Deletes remote branch"], answer: 1 },
          { type: "output", q: "What happens when you run this?", code: "git stash\n# switch to another branch, do work\ngit stash pop", options: ["Deletes your changes permanently", "Saves changes temporarily, then restores them", "Creates a new commit", "Pushes to remote"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 7, title: "React", icon: "\u269B\uFE0F", color: "#61DAFB", desc: "Frontend Framework",
    lessons: [
      {
        title: "Components & JSX",
        slides: [
          { type: "teach", content: "React builds UIs from **components** \u2014 reusable pieces that return **JSX** (HTML-like syntax in JavaScript). Think of them as custom LEGO bricks.", highlight: "components" },
          { type: "teach", content: "**Props** pass data DOWN from parent to child. They're read-only \u2014 a child can never modify its own props. This keeps data flow predictable.", highlight: "Props" },
        ],
        questions: [
          { q: "React components are:", options: ["Server scripts", "Reusable UI building blocks", "Database models", "CSS frameworks"], answer: 1 },
          { q: "Props flow in which direction?", options: ["Child to parent", "Parent to child (down)", "Sideways", "Both ways"], answer: 1 },
          { q: "JSX lets you write ___ inside JavaScript.", options: ["SQL", "HTML-like syntax", "CSS animations", "Python"], answer: 1 },
        ]
      },
      {
        title: "State & Hooks",
        slides: [
          { type: "teach", content: "**useState** creates reactive data. When state changes, React re-renders the component. `const [count, setCount] = useState(0);`", highlight: "useState" },
          { type: "teach", content: "**useEffect** handles side effects: API calls, event listeners, timers. It runs after render. Return a cleanup function to avoid memory leaks.", highlight: "useEffect" },
        ],
        questions: [
          { q: "useState returns:", options: ["Just the value", "An array with [value, setter]", "A promise", "An object"], answer: 1 },
          { q: "When state changes, React:", options: ["Refreshes the whole page", "Re-renders the component", "Crashes", "Does nothing"], answer: 1 },
          { q: "useEffect is used for:", options: ["Styling", "Side effects like API calls", "Creating HTML", "Defining routes"], answer: 1 },
        ]
      },
      {
        title: "Routing & State Management",
        slides: [
          { type: "teach", content: "**React Router** enables navigation between pages without full page reloads. Use `<Route path='/about' element={<About />} />`.", highlight: "React Router" },
          { type: "teach", content: "For global state: **Context API** for simple needs, **Zustand** for medium apps, **Redux Toolkit** for complex apps. **React Query** handles server state.", highlight: "global state" },
        ],
        questions: [
          { q: "React Router enables:", options: ["Database access", "Client-side navigation", "CSS animations", "Testing"], answer: 1 },
          { q: "For simple global state, use:", options: ["Redux", "Context API", "GraphQL", "jQuery"], answer: 1 },
          { q: "React Query is best for managing:", options: ["CSS themes", "Server/API state with caching", "Form inputs", "Animations"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 8, title: "Node/Express", icon: "\u{1F5A5}\uFE0F", color: "#339933", desc: "Backend Dev",
    lessons: [
      {
        title: "Express Server Basics",
        slides: [
          { type: "teach", content: "**Express** is a minimal Node.js framework for building APIs. Create routes with `app.get()`, `app.post()`, etc. Each route has a handler function.", highlight: "Express" },
          { type: "teach", content: "**Middleware** functions run between request and response. They can log, authenticate, validate, or transform data. Call `next()` to pass control along.", highlight: "Middleware" },
        ],
        questions: [
          { q: "Express is a framework for:", options: ["React", "Node.js servers", "CSS", "Databases"], answer: 1 },
          { q: "Middleware runs:", options: ["Only on errors", "Between request and response", "After the page loads", "Only once"], answer: 1 },
          { q: "To send JSON from Express, use:", options: ["res.write()", "res.json()", "res.html()", "res.send.json()"], answer: 1 },
        ]
      },
      {
        title: "Project Structure & Validation",
        slides: [
          { type: "teach", content: "Organize backend code into folders: **routes/** (URLs), **controllers/** (handlers), **models/** (data), **middleware/** (auth, validation), **services/** (logic).", highlight: "folders" },
          { type: "teach", content: "ALWAYS validate user input on the server. Never trust the client. Use libraries like **express-validator** or **Zod** to validate and sanitize.", highlight: "validate" },
        ],
        questions: [
          { q: "Controllers handle:", options: ["Database schemas", "Request/response logic", "CSS styles", "Git merges"], answer: 1 },
          { q: "Input validation should happen:", options: ["Only on the frontend", "Only on the backend", "On BOTH frontend and backend", "Never"], answer: 2 },
          { q: "Environment variables store:", options: ["HTML templates", "Secrets and configuration", "CSS variables", "Test results"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 9, title: "Databases", icon: "\u{1F5C4}\uFE0F", color: "#336791", desc: "SQL & NoSQL",
    lessons: [
      {
        title: "SQL & PostgreSQL",
        slides: [
          { type: "teach", content: "**SQL databases** store data in structured **tables** with rows and columns. **Relationships** connect tables using foreign keys. Think: organized spreadsheets.", highlight: "tables" },
          { type: "teach", content: "**CRUD** in SQL: INSERT (create), SELECT (read), UPDATE (modify), DELETE (remove). **JOINs** combine data from multiple tables \u2014 the most powerful SQL feature.", highlight: "JOINs" },
        ],
        questions: [
          { q: "SQL databases store data in:", options: ["Documents", "Tables with rows/columns", "Key-value pairs", "Files"], answer: 1 },
          { q: "A JOIN does what?", options: ["Deletes tables", "Combines data from multiple tables", "Creates indexes", "Backs up data"], answer: 1 },
          { q: "Which SQL command reads data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], answer: 2 },
        ]
      },
      {
        title: "MongoDB & ORMs",
        slides: [
          { type: "teach", content: "**MongoDB** stores data as flexible **documents** (JSON-like). No rigid schema needed \u2014 great for data that evolves. But less structured than SQL.", highlight: "documents" },
          { type: "teach", content: "**ORMs** (like Prisma) let you interact with databases using JavaScript instead of raw SQL. Define your schema in code, get type safety and migrations.", highlight: "Prisma" },
        ],
        questions: [
          { q: "MongoDB stores data as:", options: ["Tables", "JSON-like documents", "Spreadsheets", "XML files"], answer: 1 },
          { q: "An ORM lets you:", options: ["Write CSS", "Use JS instead of raw SQL", "Deploy servers", "Create React components"], answer: 1 },
          { q: "Choose SQL when you need:", options: ["Flexible schemas", "Complex relationships and joins", "Real-time data only", "No structure"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 10, title: "Auth & Security", icon: "\u{1F510}", color: "#E74C3C", desc: "JWT, OAuth, OWASP",
    lessons: [
      {
        title: "Authentication & Authorization",
        slides: [
          { type: "teach", content: "**Authentication** = proving WHO you are (login). **Authorization** = what you're ALLOWED to do (permissions). JWT tokens carry both in a signed payload.", highlight: "JWT" },
          { type: "teach", content: "Hash passwords with **bcrypt** (never store plain text!). Use **httpOnly cookies** for tokens (not localStorage). Implement **rate limiting** against brute force.", highlight: "bcrypt" },
        ],
        questions: [
          { q: "Authentication verifies:", options: ["What you can access", "Who you are", "Your IP address", "Your browser"], answer: 1 },
          { q: "Passwords should be stored as:", options: ["Plain text", "Encrypted", "Bcrypt hashes", "Base64 encoded"], answer: 2 },
          { q: "JWT stands for:", options: ["Java Web Token", "JSON Web Token", "JavaScript Widget Tool", "Just Web Tech"], answer: 1 },
        ]
      },
      {
        title: "OAuth & Sessions",
        slides: [
          { type: "teach", content: "**OAuth 2.0** lets users log in with Google, GitHub, etc. without sharing their password with your app. Your app gets a **token** from the provider.", highlight: "OAuth 2.0" },
          { type: "teach", content: "**Sessions** store user state on the server (in memory or Redis). **Cookies** carry the session ID. Sessions expire for security \u2014 balance UX vs. safety.", highlight: "Sessions" },
        ],
        questions: [
          { q: "OAuth lets users sign in using:", options: ["Only email/password", "Third-party providers like Google", "Their IP address", "SMS only"], answer: 1 },
          { type: "fill", q: "Complete the OAuth flow:", code: "User clicks \"Login with Google\"\nApp redirects to ___BLANK1___\nUser grants permission\nGoogle sends back an ___BLANK2___", blanks: [{ id: "BLANK1", options: ["your database", "Google's auth server", "localhost", "the CDN"], answer: 1 }, { id: "BLANK2", options: ["password", "access token", "HTML page", "cookie"], answer: 1 }] },
          { q: "Session data is stored:", options: ["In the browser only", "On the server", "In the URL", "In CSS"], answer: 1 },
        ]
      },
      {
        title: "OWASP Top 10",
        slides: [
          { type: "teach", content: "The **OWASP Top 10** lists the most critical web security risks: **Injection** (SQL/XSS), **Broken Auth**, **Sensitive Data Exposure**, and more.", highlight: "OWASP Top 10" },
          { type: "teach", content: "Defend with: **parameterized queries** (SQL injection), **sanitize output** (XSS), **HTTPS everywhere**, **CSRF tokens**, and **Content Security Policy** headers.", highlight: "parameterized queries" },
        ],
        questions: [
          { type: "output", q: "What vulnerability does this code have?", code: "const query = `SELECT * FROM users\n  WHERE name = '${req.body.name}'`;", options: ["XSS attack", "SQL Injection", "CSRF attack", "No vulnerability"], answer: 1 },
          { q: "To prevent XSS attacks, you should:", options: ["Use plain HTTP", "Sanitize/escape user output", "Store passwords in plain text", "Disable CORS"], answer: 1 },
          { q: "HTTPS protects data:", options: ["Only on the server", "In transit between client and server", "In the database", "In localStorage"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 11, title: "APIs", icon: "\u{1F517}", color: "#3498DB", desc: "REST & GraphQL",
    lessons: [
      {
        title: "REST API Design",
        slides: [
          { type: "teach", content: "REST APIs use **resource-based URLs** (nouns, not verbs): `/api/products` not `/api/getProducts`. HTTP methods define the action.", highlight: "resource-based" },
          { type: "teach", content: "Good APIs have: **versioning** (/v1/), **pagination**, **filtering**, consistent **error responses**, and proper **status codes**.", highlight: "versioning" },
        ],
        questions: [
          { q: "RESTful URLs should use:", options: ["Verbs (getUser)", "Nouns (users)", "Random strings", "Numbers only"], answer: 1 },
          { q: "API versioning looks like:", options: ["/api/products", "/v1/api/products", "/api/v1/products", "/products/v1"], answer: 2 },
          { q: "For a list of 10,000 items, use:", options: ["Send all at once", "Pagination", "Delete most of them", "Compress to 1 item"], answer: 1 },
        ]
      },
      {
        title: "GraphQL Basics",
        slides: [
          { type: "teach", content: "**GraphQL** lets clients request exactly the data they need \u2014 no more, no less. One endpoint, flexible queries. Solves REST's over-fetching problem.", highlight: "GraphQL" },
          { type: "teach", content: "Define a **schema** with types, then write **resolvers** to fetch data. Clients send **queries** (read) or **mutations** (write) specifying exact fields.", highlight: "schema" },
        ],
        questions: [
          { q: "GraphQL solves REST's problem of:", options: ["Slow servers", "Over-fetching and under-fetching data", "Missing documentation", "No authentication"], answer: 1 },
          { type: "output", q: "What does this GraphQL query return?", code: "query {\n  user(id: 1) {\n    name\n    email\n  }\n}", options: ["All user fields", "Only name and email of user 1", "A list of all users", "An error"], answer: 1 },
          { q: "In GraphQL, to modify data you use a:", options: ["Query", "Mutation", "Subscription", "Resolver"], answer: 1 },
        ]
      },
      {
        title: "API Auth & Rate Limiting",
        slides: [
          { type: "teach", content: "Protect APIs with **API keys** (simple), **OAuth tokens** (user-specific), or **JWT** (stateless). Always send auth in the **Authorization header**, never in URLs.", highlight: "Authorization header" },
          { type: "teach", content: "**Rate limiting** prevents abuse: limit requests per IP/user (e.g., 100/minute). Return **429 Too Many Requests** when exceeded. Use libraries like `express-rate-limit`.", highlight: "Rate limiting" },
        ],
        questions: [
          { q: "API authentication should be sent via:", options: ["URL query parameters", "Authorization header", "The request body always", "Cookies only"], answer: 1 },
          { q: "HTTP status 429 means:", options: ["Not Found", "Server Error", "Too Many Requests", "Unauthorized"], answer: 2 },
          { type: "fill", q: "Complete the auth header:", code: "fetch('/api/data', {\n  headers: {\n    '___BLANK1___': '___BLANK2___ my-token-here'\n  }\n})", blanks: [{ id: "BLANK1", options: ["Content-Type", "Authorization", "Accept", "Cookie"], answer: 1 }, { id: "BLANK2", options: ["Basic", "Bearer", "Token", "Key"], answer: 1 }] },
        ]
      }
    ]
  },
  {
    id: 12, title: "Testing", icon: "\u{1F9EA}", color: "#27AE60", desc: "Unit, Integration, E2E",
    lessons: [
      {
        title: "Testing Pyramid",
        slides: [
          { type: "teach", content: "The testing pyramid: **Unit tests** (70%) test functions in isolation. **Integration tests** (20%) test modules together. **E2E tests** (10%) test full user flows.", highlight: "pyramid" },
          { type: "teach", content: "Write tests with **Vitest** (unit), **Supertest** (API), and **Playwright** (E2E). Use `describe`, `it`, and `expect` to structure readable tests.", highlight: "Vitest" },
        ],
        questions: [
          { q: "Which test type should you have the MOST of?", options: ["E2E tests", "Integration tests", "Unit tests", "Manual tests"], answer: 2 },
          { q: "Unit tests check:", options: ["Full user flows", "Individual functions in isolation", "Server deployment", "CSS styling"], answer: 1 },
          { q: "E2E tests simulate:", options: ["Database queries", "A real user using the app", "npm installs", "Git commits"], answer: 1 },
        ]
      },
      {
        title: "Writing Unit Tests",
        slides: [
          { type: "teach", content: "A good unit test follows **AAA**: **Arrange** (set up data), **Act** (call the function), **Assert** (check the result). Keep tests small and focused.", highlight: "AAA" },
          { type: "teach", content: "Use **mocks** to replace dependencies (APIs, databases) so tests run fast and predictably. `vi.fn()` in Vitest creates mock functions.", highlight: "mocks" },
        ],
        questions: [
          { type: "order", q: "Arrange the AAA testing pattern:", lines: ["expect(result).toBe(5)", "const result = add(2, 3)", "const add = (a, b) => a + b"], correctOrder: [2, 1, 0] },
          { type: "output", q: "What does this test check?", code: "test('adds numbers', () => {\n  expect(add(2, 3)).toBe(5);\n  expect(add(-1, 1)).toBe(0);\n});", options: ["That add() returns strings", "That add() correctly sums two numbers", "That add() throws an error", "That add() is async"], answer: 1 },
          { q: "Mocks are used to:", options: ["Slow down tests", "Replace real dependencies with fakes", "Test CSS styling", "Deploy code"], answer: 1 },
        ]
      },
      {
        title: "Integration & E2E Testing",
        slides: [
          { type: "teach", content: "**Integration tests** verify that modules work together: API route + database, component + API call. Use **Supertest** to test Express endpoints.", highlight: "Integration tests" },
          { type: "teach", content: "**E2E tests** with Playwright automate a real browser: click buttons, fill forms, verify pages. Slow but catch bugs that unit tests miss.", highlight: "Playwright" },
        ],
        questions: [
          { q: "Integration tests verify:", options: ["Individual functions", "Modules working together", "CSS appearance", "Git history"], answer: 1 },
          { type: "fill", q: "Complete the Supertest integration test:", code: "const response = await ___BLANK1___(app)\n  .get('/api/users')\n  .expect(___BLANK2___);", blanks: [{ id: "BLANK1", options: ["fetch", "request", "axios", "http"], answer: 1 }, { id: "BLANK2", options: ["404", "200", "500", "302"], answer: 1 }] },
          { q: "Playwright tests run in:", options: ["Node.js only", "A real browser", "The terminal only", "A database"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 13, title: "DevOps", icon: "\u{1F433}", color: "#2496ED", desc: "Docker, CI/CD, Cloud",
    lessons: [
      {
        title: "Docker & CI/CD",
        slides: [
          { type: "teach", content: "**Docker** packages your app + its environment into a **container** that runs identically everywhere. No more 'works on my machine'! Write a `Dockerfile` to define it.", highlight: "container" },
          { type: "teach", content: "**CI/CD** automates testing and deployment. On every push: run tests \u2192 build \u2192 deploy. **GitHub Actions** defines this in a YAML workflow file.", highlight: "CI/CD" },
        ],
        questions: [
          { q: "Docker containers ensure:", options: ["Faster internet", "Consistent environments everywhere", "Better CSS", "Free hosting"], answer: 1 },
          { q: "CI/CD stands for:", options: ["Code Integration / Code Delivery", "Continuous Integration / Continuous Deployment", "Container Init / Container Deploy", "Cloud Instance / Cloud Database"], answer: 1 },
          { q: "GitHub Actions workflows are defined in:", options: ["JavaScript", "YAML files", "HTML", "SQL"], answer: 1 },
        ]
      },
      {
        title: "Cloud Deployment",
        slides: [
          { type: "teach", content: "The big 3 cloud providers: **AWS**, **Google Cloud**, **Azure**. For beginners, start with **PaaS** options like Vercel, Railway, or Render \u2014 they handle infrastructure for you.", highlight: "PaaS" },
          { type: "teach", content: "Key concepts: **environment variables** for secrets, **SSL/TLS** for HTTPS, **domains** via DNS. Use `.env` files locally, platform settings in production.", highlight: "environment variables" },
        ],
        questions: [
          { q: "PaaS stands for:", options: ["Programming as a Service", "Platform as a Service", "Protocol as a System", "Process as a Stack"], answer: 1 },
          { type: "order", q: "Arrange the deployment workflow:", lines: ["Push code to GitHub", "CI runs tests automatically", "Build step creates production bundle", "App is deployed to production URL"], correctOrder: [0, 1, 2, 3] },
          { q: "Production secrets should be stored in:", options: ["The source code", "A public README", "Environment variables on the platform", "Comments in HTML"], answer: 2 },
        ]
      },
      {
        title: "Monitoring & Logging",
        slides: [
          { type: "teach", content: "**Monitoring** tracks app health: uptime, response times, error rates. Tools like **Datadog**, **New Relic**, or **Grafana** visualize metrics in real-time dashboards.", highlight: "Monitoring" },
          { type: "teach", content: "**Structured logging** with JSON makes logs searchable: `{ level: 'error', message: '...', timestamp, requestId }`. Use **log levels**: debug, info, warn, error.", highlight: "Structured logging" },
        ],
        questions: [
          { q: "Application monitoring tracks:", options: ["Git commits", "Uptime, errors, and performance", "CSS styles", "Database schemas"], answer: 1 },
          { q: "The correct log levels from least to most severe:", options: ["error, warn, info, debug", "debug, info, warn, error", "info, debug, error, warn", "warn, error, debug, info"], answer: 1 },
          { type: "output", q: "What log level should this use?", code: "// User submitted a form successfully\nlogger.___('Form submitted', {\n  userId: 123,\n  formType: 'signup'\n});", options: ["logger.error", "logger.warn", "logger.info", "logger.debug"], answer: 2 },
        ]
      }
    ]
  },
  {
    id: 14, title: "Capstone", icon: "\u{1F3C6}", color: "#F39C12", desc: "Full Stack Project",
    lessons: [
      {
        title: "Building Your Capstone",
        slides: [
          { type: "teach", content: "Your capstone combines EVERYTHING: React frontend, Node/Express API, PostgreSQL database, authentication, testing, Docker, and cloud deployment.", highlight: "EVERYTHING" },
          { type: "teach", content: "Follow this process: **Plan** (wireframes + schema) \u2192 **Build API** \u2192 **Build Frontend** \u2192 **Integrate** \u2192 **Test** \u2192 **Deploy**. Ship it!", highlight: "Plan" },
        ],
        questions: [
          { q: "The first step in a capstone project is:", options: ["Writing code", "Planning and wireframing", "Deploying", "Testing"], answer: 1 },
          { q: "A production app needs:", options: ["Just a frontend", "Frontend + backend + database + deployment", "Only an API", "Just a design"], answer: 1 },
          { q: "After building, you should:", options: ["Delete it", "Test and deploy it", "Start over", "Only show friends"], answer: 1 },
        ]
      },
      {
        title: "Deployment & Portfolio",
        slides: [
          { type: "teach", content: "Deploy your capstone to a **custom domain** with HTTPS. Write a compelling **README**: project description, screenshots, tech stack, setup instructions.", highlight: "README" },
          { type: "teach", content: "Build your **portfolio**: deploy 3\u20135 projects, write clean commit history, add a portfolio website. Your GitHub profile IS your resume in tech.", highlight: "portfolio" },
        ],
        questions: [
          { type: "order", q: "Arrange steps to launch your portfolio:", lines: ["Build 3-5 polished projects", "Write READMEs with screenshots", "Deploy projects to live URLs", "Create a portfolio site linking them all"], correctOrder: [0, 1, 2, 3] },
          { q: "A good project README includes:", options: ["Only the title", "Description, screenshots, tech stack, and setup instructions", "Just a link", "The entire source code"], answer: 1 },
          { q: "Your GitHub profile is important because:", options: ["It replaces your ID card", "Employers review it as a technical resume", "It makes code run faster", "It's required by law"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 15, title: "Python", icon: "\u{1F40D}", color: "#3776AB", desc: "Python Programming",
    lessons: [
      {
        title: "Variables, Types & I/O",
        slides: [
          { type: "teach", content: "Python uses **dynamic typing** \u2014 no need to declare types. Just assign: `name = \"Alice\"`, `age = 25`, `pi = 3.14`. Python figures out the type automatically.", highlight: "dynamic typing" },
          { type: "teach", content: "Core types: **str** (text), **int** (whole numbers), **float** (decimals), **bool** (True/False). Use **f-strings** for formatting: `f\"Hello, {name}!\"`", highlight: "f-strings" },
        ],
        questions: [
          { type: "output", q: "What does this print?", code: "name = \"World\"\nprint(f\"Hello, {name}!\")", options: ["Hello, World!", "Hello, {name}!", "f\"Hello, World!\"", "Error"], answer: 0 },
          { type: "fill", q: "Complete the code to get user input:", code: "name = ___BLANK1___(\"Enter your name: \")\nage = ___BLANK2___(input(\"Enter age: \"))\nprint(f\"{name} is {age}\")", blanks: [{ id: "BLANK1", options: ["print", "input", "read", "scan"], answer: 1 }, { id: "BLANK2", options: ["str", "int", "float", "bool"], answer: 1 }] },
          { q: "Python's `type()` function returns:", options: ["The value of a variable", "The data type of a variable", "The size in bytes", "The variable name"], answer: 1 },
        ]
      },
      {
        title: "Control Flow",
        slides: [
          { type: "teach", content: "Python uses **indentation** (not braces!) to define code blocks. **if/elif/else** for conditions, **for/while** for loops. Indentation IS the syntax.", highlight: "indentation" },
          { type: "teach", content: "**range(start, stop, step)** generates number sequences. `break` exits a loop early, `continue` skips to the next iteration. Keep loops simple!", highlight: "range" },
        ],
        questions: [
          { type: "output", q: "What does this print?", code: "for i in range(3):\n    print(i, end=\" \")", options: ["1 2 3", "0 1 2", "0 1 2 3", "3 2 1"], answer: 1 },
          { type: "order", q: "Arrange to print even numbers 2-10:", lines: ["for num in range(2, 11, 2):", "    print(num)"], correctOrder: [0, 1] },
          { type: "output", q: "What does this output?", code: "x = 15\nif x > 20:\n    print(\"big\")\nelif x > 10:\n    print(\"medium\")\nelse:\n    print(\"small\")", options: ["big", "medium", "small", "Error"], answer: 1 },
        ]
      },
      {
        title: "Functions",
        slides: [
          { type: "teach", content: "Define functions with **def**: `def greet(name): return f\"Hi, {name}!\"`. Use **default parameters**: `def greet(name=\"World\")`. Functions are first-class objects in Python!", highlight: "def" },
          { type: "teach", content: "**\\*args** collects extra positional arguments as a tuple. **\\*\\*kwargs** collects keyword arguments as a dict. **Lambda** creates tiny anonymous functions: `lambda x: x * 2`.", highlight: "*args/**kwargs" },
        ],
        questions: [
          { type: "fill", q: "Complete the function:", code: "___BLANK1___ add(a, b):\n    ___BLANK2___ a + b", blanks: [{ id: "BLANK1", options: ["function", "def", "func", "fn"], answer: 1 }, { id: "BLANK2", options: ["print", "return", "yield", "pass"], answer: 1 }] },
          { type: "freeform", q: "Write a function `is_even` that returns True if n is even, False otherwise:", starterCode: "def is_even(n):\n    ", patterns: ["def\\s+is_even", "return.*%\\s*2\\s*==\\s*0"], sampleAnswer: "def is_even(n):\n    return n % 2 == 0" },
          { type: "output", q: "What does this return?", code: "double = lambda x: x * 2\nresult = double(7)\nprint(result)", options: ["7", "14", "72", "Error"], answer: 1 },
        ]
      },
      {
        title: "Data Structures",
        slides: [
          { type: "teach", content: "**Lists** are ordered, mutable: `[1, 2, 3]`. **Tuples** are ordered, immutable: `(1, 2, 3)`. **Dicts** map keys to values: `{\"name\": \"Alice\"}`. **Sets** store unique items: `{1, 2, 3}`.", highlight: "Lists" },
          { type: "teach", content: "**List comprehensions** are Pythonic one-liners: `[x**2 for x in range(5)]` creates `[0, 1, 4, 9, 16]`. Add filters: `[x for x in nums if x > 0]`.", highlight: "List comprehensions" },
        ],
        questions: [
          { type: "output", q: "What does this produce?", code: "nums = [1, 2, 3, 4, 5]\nresult = [x**2 for x in nums if x % 2 != 0]\nprint(result)", options: ["[1, 4, 9, 16, 25]", "[1, 9, 25]", "[4, 16]", "[2, 4]"], answer: 1 },
          { q: "Which data structure uses key-value pairs?", options: ["List", "Tuple", "Dictionary", "Set"], answer: 2 },
          { type: "fill", q: "Complete the dictionary operation:", code: "user = {\"name\": \"Alice\", \"age\": 30}\nuser_name = user___BLANK1___\nuser[\"email\"] = ___BLANK2___", blanks: [{ id: "BLANK1", options: [".name", "[\"name\"]", "(name)", ".get[name]"], answer: 1 }, { id: "BLANK2", options: ["email", "\"alice@test.com\"", "None", "True"], answer: 1 }] },
        ]
      },
      {
        title: "File I/O & Modules",
        slides: [
          { type: "teach", content: "Use **with open()** for safe file handling \u2014 it auto-closes the file: `with open('data.txt', 'r') as f: content = f.read()`. Modes: 'r' (read), 'w' (write), 'a' (append).", highlight: "with open()" },
          { type: "teach", content: "**import** brings in modules: `import math` or `from os import path`. Use **pip** to install packages. `if __name__ == '__main__':` runs code only when the file is executed directly.", highlight: "import" },
        ],
        questions: [
          { type: "order", q: "Arrange to safely read a file:", lines: ["with open('data.txt', 'r') as f:", "    content = f.read()", "    print(content)"], correctOrder: [0, 1, 2] },
          { q: "`if __name__ == '__main__':` runs code:", options: ["Always", "Only when imported", "Only when run directly", "Never"], answer: 2 },
          { type: "fill", q: "Complete the import and error handling:", code: "___BLANK1___ json\n\ntry:\n    data = json.loads(text)\n___BLANK2___:\n    print(\"Invalid JSON\")", blanks: [{ id: "BLANK1", options: ["require", "import", "include", "using"], answer: 1 }, { id: "BLANK2", options: ["catch Exception", "except Exception", "catch Error", "on Error"], answer: 1 }] },
        ]
      }
    ]
  }
];

export const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
