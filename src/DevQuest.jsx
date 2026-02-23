import { useState, useEffect, useCallback, useRef } from "react";

const MODULES = [
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
      }
    ]
  }
];

const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);

// Persistent storage helpers using localStorage
const STORAGE_KEY = "devquest-state";

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { console.error("Save failed:", e); }
};

const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  hearts: 5,
  completedLessons: [],
  currentModule: 0,
  level: 1,
  gems: 50,
  achievements: [],
};

// Confetti effect
function Confetti({ active }) {
  if (!active) return null;
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1 + Math.random() * 1.5,
    color: ["#58CC02", "#FFC800", "#FF4B4B", "#1CB0F6", "#CE82FF", "#FF9600"][i % 6],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.x}%`, top: "-10px",
          width: p.size, height: p.size, backgroundColor: p.color,
          borderRadius: p.size > 10 ? "50%" : "2px",
          animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
          transform: `rotate(${p.rotation}deg)`,
        }} />
      ))}
    </div>
  );
}

// XP Burst animation
function XPBurst({ amount, visible }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      zIndex: 9998, animation: "xpBurst 1.2s ease-out forwards",
      fontSize: "3rem", fontWeight: 900, color: "#FFC800",
      textShadow: "0 0 30px rgba(255,200,0,0.6)", fontFamily: "'Nunito', sans-serif",
    }}>+{amount} XP</div>
  );
}

// Heart display
function Hearts({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{
          fontSize: "1.1rem", opacity: i < count ? 1 : 0.2,
          filter: i < count ? "none" : "grayscale(1)",
          transition: "all 0.3s ease",
        }}>{"\u2764\uFE0F"}</span>
      ))}
    </div>
  );
}

// Progress ring
function ProgressRing({ progress, size = 52, stroke = 4, color = "#58CC02" }) {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s ease" }} />
    </svg>
  );
}

// Lesson view
function LessonView({ lesson, moduleColor, onComplete, hearts, onLoseHeart }) {
  const [phase, setPhase] = useState("slides");
  const [slideIdx, setSlideIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [shake, setShake] = useState(false);

  const totalSteps = lesson.slides.length + lesson.questions.length;
  const currentStep = phase === "slides" ? slideIdx : lesson.slides.length + qIdx;
  const progress = ((currentStep + (answered ? 1 : 0)) / totalSteps) * 100;

  const handleNext = () => {
    if (phase === "slides") {
      if (slideIdx < lesson.slides.length - 1) setSlideIdx(s => s + 1);
      else { setPhase("quiz"); setQIdx(0); }
    }
  };

  const handleAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === lesson.questions[qIdx].answer;
    if (isCorrect) setCorrect(c => c + 1);
    else {
      setWrong(w => w + 1);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onLoseHeart();
    }
  };

  const handleNextQ = () => {
    if (qIdx < lesson.questions.length - 1) {
      setQIdx(q => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setPhase("result");
    }
  };

  const slide = phase === "slides" ? lesson.slides[slideIdx] : null;
  const question = phase === "quiz" ? lesson.questions[qIdx] : null;

  return (
    <div style={{ minHeight: "100vh", background: "#131F24", display: "flex", flexDirection: "column" }}>
      {/* Progress bar */}
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, height: 12, background: "rgba(255,255,255,0.1)", borderRadius: 99 }}>
          <div style={{
            height: "100%", borderRadius: 99, background: moduleColor,
            width: `${Math.min(progress, 100)}%`, transition: "width 0.4s ease",
            boxShadow: `0 0 12px ${moduleColor}66`,
          }} />
        </div>
        <Hearts count={hearts} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        {phase === "slides" && slide && (
          <div style={{ maxWidth: 560, width: "100%", animation: "slideIn 0.3s ease" }}>
            <div style={{
              background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: "32px 28px",
              border: `1px solid ${moduleColor}33`, marginBottom: 32,
            }}>
              <div style={{
                fontSize: "0.75rem", fontWeight: 800, color: moduleColor, letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: 16,
              }}>NEW CONCEPT</div>
              <div style={{
                fontSize: "1.15rem", lineHeight: 1.7, color: "#E5E5E5", fontFamily: "'Nunito', sans-serif",
              }}>{slide.content.split("**").map((part, i) =>
                i % 2 === 1 ? <span key={i} style={{ color: moduleColor, fontWeight: 800 }}>{part}</span> : part
              )}</div>
            </div>
            <button onClick={handleNext} style={{
              width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
              background: moduleColor, color: "#fff", fontSize: "1rem", fontWeight: 800,
              fontFamily: "'Nunito', sans-serif", letterSpacing: "0.02em",
              boxShadow: `0 4px 0 ${moduleColor}88, 0 6px 20px ${moduleColor}33`,
              transform: "translateY(0)", transition: "transform 0.1s",
            }} onMouseDown={e => e.target.style.transform = "translateY(3px)"}
               onMouseUp={e => e.target.style.transform = "translateY(0)"}>
              CONTINUE
            </button>
          </div>
        )}

        {phase === "quiz" && question && (
          <div style={{
            maxWidth: 560, width: "100%",
            animation: shake ? "shakeX 0.4s ease" : "slideIn 0.3s ease",
          }}>
            <div style={{
              fontSize: "0.75rem", fontWeight: 800, color: "#89E219", letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 12, textAlign: "center",
            }}>QUESTION {qIdx + 1} OF {lesson.questions.length}</div>
            <div style={{
              fontSize: "1.3rem", fontWeight: 800, color: "#fff", textAlign: "center",
              marginBottom: 32, fontFamily: "'Nunito', sans-serif", lineHeight: 1.4,
            }}>{question.q}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {question.options.map((opt, i) => {
                let bg = "rgba(255,255,255,0.06)";
                let borderColor = "rgba(255,255,255,0.15)";
                let textColor = "#E5E5E5";
                if (answered) {
                  if (i === question.answer) { bg = "#58CC0222"; borderColor = "#58CC02"; textColor = "#58CC02"; }
                  else if (i === selected && i !== question.answer) { bg = "#FF4B4B22"; borderColor = "#FF4B4B"; textColor = "#FF4B4B"; }
                } else if (i === selected) { bg = `${moduleColor}22`; borderColor = moduleColor; textColor = moduleColor; }
                return (
                  <button key={i} onClick={() => handleAnswer(i)} style={{
                    padding: "16px 20px", borderRadius: 14, border: `2px solid ${borderColor}`,
                    background: bg, color: textColor, fontSize: "1rem", fontWeight: 700,
                    fontFamily: "'Nunito', sans-serif", cursor: answered ? "default" : "pointer",
                    textAlign: "left", transition: "all 0.2s",
                  }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: 28, height: 28, borderRadius: 8, border: `2px solid ${borderColor}`,
                      marginRight: 12, fontSize: "0.8rem", fontWeight: 800,
                    }}>{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <div style={{ marginTop: 20, animation: "slideUp 0.3s ease" }}>
                <div style={{
                  padding: "14px 20px", borderRadius: 14, marginBottom: 16,
                  background: selected === question.answer ? "#58CC0218" : "#FF4B4B18",
                  border: `1px solid ${selected === question.answer ? "#58CC0244" : "#FF4B4B44"}`,
                  color: selected === question.answer ? "#58CC02" : "#FF4B4B",
                  fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Nunito', sans-serif",
                }}>
                  {selected === question.answer ? "Correct! Great job!" : `The correct answer was: ${question.options[question.answer]}`}
                </div>
                <button onClick={handleNextQ} style={{
                  width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
                  background: selected === question.answer ? "#58CC02" : "#FF4B4B",
                  color: "#fff", fontSize: "1rem", fontWeight: 800, fontFamily: "'Nunito', sans-serif",
                  boxShadow: `0 4px 0 ${selected === question.answer ? "#58CC0288" : "#FF4B4B88"}`,
                }}>CONTINUE</button>
              </div>
            )}
          </div>
        )}

        {phase === "result" && (
          <div style={{ maxWidth: 480, width: "100%", textAlign: "center", animation: "slideIn 0.4s ease" }}>
            <div style={{ fontSize: "4rem", marginBottom: 16 }}>
              {correct === lesson.questions.length ? "\u{1F389}" : correct >= lesson.questions.length / 2 ? "\u{1F44F}" : "\u{1F4AA}"}
            </div>
            <div style={{
              fontSize: "1.8rem", fontWeight: 900, color: "#fff", fontFamily: "'Nunito', sans-serif",
              marginBottom: 8,
            }}>{correct === lesson.questions.length ? "Perfect!" : correct >= lesson.questions.length / 2 ? "Great Job!" : "Keep Practicing!"}</div>
            <div style={{ color: "#89E219", fontSize: "1.2rem", fontWeight: 800, marginBottom: 32, fontFamily: "'Nunito', sans-serif" }}>
              +{correct * 10} XP earned
            </div>
            <div style={{
              display: "flex", justifyContent: "center", gap: 32, marginBottom: 40,
              color: "#A0A0A0", fontSize: "0.95rem", fontFamily: "'Nunito', sans-serif",
            }}>
              <div><span style={{ fontSize: "1.5rem", display: "block", color: "#58CC02", fontWeight: 900 }}>{correct}</span>Correct</div>
              <div><span style={{ fontSize: "1.5rem", display: "block", color: "#FF4B4B", fontWeight: 900 }}>{wrong}</span>Wrong</div>
              <div><span style={{ fontSize: "1.5rem", display: "block", color: "#FFC800", fontWeight: 900 }}>{correct * 10}</span>XP</div>
            </div>
            <button onClick={() => onComplete(correct * 10, correct === lesson.questions.length)} style={{
              width: "100%", padding: "16px", borderRadius: 16, border: "none", cursor: "pointer",
              background: "#58CC02", color: "#fff", fontSize: "1.1rem", fontWeight: 800,
              fontFamily: "'Nunito', sans-serif",
              boxShadow: "0 4px 0 #46a302, 0 6px 20px rgba(88,204,2,0.3)",
            }}>CONTINUE</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Main App
export default function DevQuest() {
  const [state, setState] = useState(DEFAULT_STATE);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("home");
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeModuleIdx, setActiveModuleIdx] = useState(null);
  const [confetti, setConfetti] = useState(false);
  const [xpBurst, setXpBurst] = useState({ visible: false, amount: 0 });
  const [expandedModule, setExpandedModule] = useState(null);

  useEffect(() => {
    const saved = loadState();
    if (saved) {
      const today = new Date().toDateString();
      const last = saved.lastActiveDate;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (last === today) { /* same day */ }
      else if (last === yesterday) { saved.streak += 1; saved.lastActiveDate = today; }
      else { saved.streak = 1; saved.lastActiveDate = today; }
      if (last !== today) saved.hearts = 5;
      setState(saved);
    } else {
      setState(s => ({ ...s, streak: 1, lastActiveDate: new Date().toDateString() }));
    }
    setLoaded(true);
  }, []);

  useEffect(() => { if (loaded) saveState(state); }, [state, loaded]);

  const getLessonKey = (mIdx, lIdx) => `${mIdx}-${lIdx}`;
  const isLessonComplete = (mIdx, lIdx) => state.completedLessons.includes(getLessonKey(mIdx, lIdx));
  const isModuleComplete = (mIdx) => MODULES[mIdx].lessons.every((_, lIdx) => isLessonComplete(mIdx, lIdx));
  const isModuleUnlocked = (mIdx) => mIdx === 0 || isModuleComplete(mIdx - 1);
  const completedCount = state.completedLessons.length;
  const overallProgress = Math.round((completedCount / TOTAL_LESSONS) * 100);
  const level = Math.floor(state.xp / 100) + 1;

  const startLesson = (mIdx, lIdx) => {
    if (!isModuleUnlocked(mIdx)) return;
    if (state.hearts <= 0) return;
    setActiveModuleIdx(mIdx);
    setActiveLesson({ mIdx, lIdx });
    setView("lesson");
  };

  const completeLesson = (xpEarned, perfect) => {
    const key = getLessonKey(activeLesson.mIdx, activeLesson.lIdx);
    setState(prev => {
      const newCompleted = prev.completedLessons.includes(key) ? prev.completedLessons : [...prev.completedLessons, key];
      const bonusXp = perfect ? 5 : 0;
      const newGems = prev.gems + (perfect ? 10 : 2);
      return { ...prev, xp: prev.xp + xpEarned + bonusXp, completedLessons: newCompleted, gems: newGems };
    });
    setXpBurst({ visible: true, amount: xpEarned });
    setTimeout(() => setXpBurst({ visible: false, amount: 0 }), 1300);
    if (perfect) { setConfetti(true); setTimeout(() => setConfetti(false), 2500); }
    setView("home");
    setActiveLesson(null);
  };

  const loseHeart = () => {
    setState(prev => ({ ...prev, hearts: Math.max(0, prev.hearts - 1) }));
  };

  if (!loaded) return (
    <div style={{ minHeight: "100vh", background: "#131F24", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#58CC02", fontSize: "2rem", fontWeight: 900, fontFamily: "'Nunito', sans-serif", animation: "pulse 1.5s infinite" }}>
        Loading DevQuest...
      </div>
    </div>
  );

  if (view === "lesson" && activeLesson) {
    const mod = MODULES[activeLesson.mIdx];
    const lesson = mod.lessons[activeLesson.lIdx];
    return (
      <>
        <Confetti active={confetti} />
        <XPBurst {...xpBurst} />
        <LessonView lesson={lesson} moduleColor={mod.color} hearts={state.hearts}
          onComplete={completeLesson} onLoseHeart={loseHeart} />
      </>
    );
  }

  if (view === "profile") {
    return (
      <div style={{ minHeight: "100vh", background: "#131F24", fontFamily: "'Nunito', sans-serif", padding: "0 0 100px" }}>
        <div style={{ background: "linear-gradient(180deg, #1a2f38 0%, #131F24 100%)", padding: "40px 20px 32px", textAlign: "center", position: "relative" }}>
          <button onClick={() => setView("home")} style={{
            position: "absolute", top: 16, left: 16, background: "none", border: "none", color: "#89E219", fontSize: "1.1rem", fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito', sans-serif",
          }}>{"\u2190"} Back</button>
          <div style={{
            width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #58CC02, #89E219)",
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px",
            fontSize: "2rem", fontWeight: 900, color: "#131F24", boxShadow: "0 0 30px rgba(88,204,2,0.3)",
          }}>{level}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff" }}>Level {level}</div>
          <div style={{ color: "#89E219", fontWeight: 700 }}>Full Stack Developer</div>
        </div>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "24px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
            {[
              { label: "Total XP", value: state.xp, icon: "\u26A1", color: "#FFC800" },
              { label: "Streak", value: `${state.streak} day${state.streak !== 1 ? "s" : ""}`, icon: "\u{1F525}", color: "#FF9600" },
              { label: "Gems", value: state.gems, icon: "\u{1F48E}", color: "#1CB0F6" },
            ].map(s => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: "16px 12px", textAlign: "center",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: "0.75rem", color: "#A0A0A0", fontWeight: 700 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", marginBottom: 16 }}>Module Progress</div>
          {MODULES.map((m, i) => {
            const done = m.lessons.filter((_, li) => isLessonComplete(i, li)).length;
            const pct = Math.round((done / m.lessons.length) * 100);
            return (
              <div key={m.id} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <span style={{ fontSize: "1.3rem" }}>{m.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#E5E5E5", fontWeight: 700, fontSize: "0.9rem" }}>{m.title}</div>
                  <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 99, marginTop: 4 }}>
                    <div style={{ height: "100%", background: m.color, borderRadius: 99, width: `${pct}%`, transition: "width 0.3s" }} />
                  </div>
                </div>
                <span style={{ color: m.color, fontWeight: 800, fontSize: "0.85rem" }}>{done}/{m.lessons.length}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // HOME VIEW
  return (
    <div style={{ minHeight: "100vh", background: "#131F24", fontFamily: "'Nunito', sans-serif", paddingBottom: 80 }}>
      <Confetti active={confetti} />
      <XPBurst {...xpBurst} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
        @keyframes xpBurst { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 30% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); } 100% { opacity: 0; transform: translate(-50%, -80%) scale(1); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shakeX { 0%,100% { transform: translateX(0); } 20% { transform: translateX(-8px); } 40% { transform: translateX(8px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes glow { 0%,100% { box-shadow: 0 0 15px rgba(88,204,2,0.2); } 50% { box-shadow: 0 0 30px rgba(88,204,2,0.5); } }
        body { background: #131F24; }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #1a2f38 0%, #131F24 100%)",
        padding: "20px 20px 24px", position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "1.5rem" }}>{"\u{1F5A5}\uFE0F"}</span>
              <span style={{ fontWeight: 900, fontSize: "1.2rem", color: "#58CC02", letterSpacing: "-0.02em" }}>DevQuest</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: "1.1rem" }}>{"\u{1F525}"}</span>
                <span style={{ color: "#FF9600", fontWeight: 800, fontSize: "0.95rem" }}>{state.streak}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: "1.1rem" }}>{"\u{1F48E}"}</span>
                <span style={{ color: "#1CB0F6", fontWeight: 800, fontSize: "0.95rem" }}>{state.gems}</span>
              </div>
              <Hearts count={state.hearts} />
              <button onClick={() => setView("profile")} style={{
                width: 36, height: 36, borderRadius: "50%", border: "2px solid #58CC02",
                background: "rgba(88,204,2,0.15)", color: "#58CC02", fontWeight: 900,
                fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Nunito', sans-serif",
              }}>{level}</button>
            </div>
          </div>
          {/* XP bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, height: 10, background: "rgba(255,255,255,0.08)", borderRadius: 99 }}>
              <div style={{
                height: "100%", borderRadius: 99, background: "linear-gradient(90deg, #58CC02, #89E219)",
                width: `${state.xp % 100}%`, transition: "width 0.5s ease",
                boxShadow: "0 0 10px rgba(88,204,2,0.3)",
              }} />
            </div>
            <span style={{ color: "#89E219", fontWeight: 800, fontSize: "0.8rem", minWidth: 50, textAlign: "right" }}>
              {state.xp % 100}/100
            </span>
          </div>
        </div>
      </div>

      {/* Overall progress */}
      <div style={{ maxWidth: 560, margin: "24px auto 0", padding: "0 20px" }}>
        <div style={{
          background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "20px 24px",
          border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 20,
          marginBottom: 32,
        }}>
          <ProgressRing progress={overallProgress} size={60} stroke={5} />
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>{overallProgress}% Complete</div>
            <div style={{ color: "#A0A0A0", fontSize: "0.85rem", fontWeight: 600 }}>
              {completedCount} of {TOTAL_LESSONS} lessons finished
            </div>
          </div>
          <div style={{ marginLeft: "auto", color: "#FFC800", fontWeight: 900, fontSize: "1.3rem" }}>
            {"\u26A1"}{state.xp}
          </div>
        </div>

        {/* Module path */}
        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <div style={{
            position: "absolute", left: 35, top: 40, bottom: 40, width: 3,
            background: "rgba(255,255,255,0.06)", borderRadius: 99, zIndex: 0,
          }} />

          {MODULES.map((mod, mIdx) => {
            const unlocked = isModuleUnlocked(mIdx);
            const complete = isModuleComplete(mIdx);
            const doneLessons = mod.lessons.filter((_, li) => isLessonComplete(mIdx, li)).length;
            const pct = Math.round((doneLessons / mod.lessons.length) * 100);
            const isExpanded = expandedModule === mIdx;
            const isNext = unlocked && !complete;

            return (
              <div key={mod.id} style={{ position: "relative", zIndex: 1, marginBottom: 8 }}>
                {/* Module button */}
                <button
                  onClick={() => unlocked ? setExpandedModule(isExpanded ? null : mIdx) : null}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 16,
                    padding: "14px 16px", borderRadius: 16, cursor: unlocked ? "pointer" : "default",
                    background: isExpanded ? `${mod.color}15` : "rgba(255,255,255,0.03)",
                    border: isExpanded ? `1px solid ${mod.color}44` : "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.2s", textAlign: "left",
                    opacity: unlocked ? 1 : 0.4,
                    animation: isNext ? "glow 2s infinite" : "none",
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", flexShrink: 0, position: "relative",
                    background: complete ? mod.color : `${mod.color}22`,
                    border: `3px solid ${complete ? mod.color : unlocked ? `${mod.color}88` : "rgba(255,255,255,0.1)"}`,
                    boxShadow: isNext ? `0 0 20px ${mod.color}44` : "none",
                  }}>
                    {complete ? "\u2713" : unlocked ? mod.icon : "\u{1F512}"}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      color: unlocked ? "#fff" : "#666", fontWeight: 800, fontSize: "1rem",
                      fontFamily: "'Nunito', sans-serif",
                    }}>
                      <span style={{ color: mod.color, fontWeight: 900 }}>{mod.id}.</span> {mod.title}
                    </div>
                    <div style={{ color: unlocked ? "#A0A0A0" : "#444", fontSize: "0.8rem", fontWeight: 600 }}>
                      {mod.desc} {"\u2022"} {mod.lessons.length} lesson{mod.lessons.length > 1 ? "s" : ""}
                    </div>
                    {unlocked && (
                      <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 99, marginTop: 6 }}>
                        <div style={{ height: "100%", background: mod.color, borderRadius: 99, width: `${pct}%`, transition: "width 0.3s" }} />
                      </div>
                    )}
                  </div>
                  {unlocked && (
                    <span style={{
                      color: mod.color, fontSize: "1.2rem", fontWeight: 900,
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.2s",
                    }}>{"\u25BC"}</span>
                  )}
                </button>

                {/* Expanded lessons */}
                {isExpanded && (
                  <div style={{ padding: "8px 0 8px 36px", animation: "slideIn 0.2s ease" }}>
                    {mod.lessons.map((lesson, lIdx) => {
                      const lComplete = isLessonComplete(mIdx, lIdx);
                      return (
                        <button
                          key={lIdx}
                          onClick={() => startLesson(mIdx, lIdx)}
                          disabled={state.hearts <= 0}
                          style={{
                            width: "100%", display: "flex", alignItems: "center", gap: 12,
                            padding: "12px 16px", borderRadius: 12,
                            background: lComplete ? `${mod.color}10` : "rgba(255,255,255,0.02)",
                            border: `1px solid ${lComplete ? `${mod.color}33` : "rgba(255,255,255,0.05)"}`,
                            cursor: state.hearts > 0 ? "pointer" : "not-allowed",
                            marginBottom: 6, textAlign: "left", transition: "all 0.15s",
                            opacity: state.hearts > 0 ? 1 : 0.5,
                          }}
                        >
                          <div style={{
                            width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: lComplete ? mod.color : "rgba(255,255,255,0.08)",
                            color: lComplete ? "#fff" : "#A0A0A0", fontSize: "0.8rem", fontWeight: 900,
                          }}>
                            {lComplete ? "\u2713" : lIdx + 1}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ color: "#E5E5E5", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Nunito', sans-serif" }}>
                              {lesson.title}
                            </div>
                            <div style={{ color: "#777", fontSize: "0.75rem", fontWeight: 600 }}>
                              {lesson.questions.length} questions {"\u2022"} +{lesson.questions.length * 10} XP
                            </div>
                          </div>
                          <span style={{ color: lComplete ? "#58CC02" : mod.color, fontSize: "0.85rem", fontWeight: 800 }}>
                            {lComplete ? "REDO" : "START"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Hearts warning */}
        {state.hearts <= 0 && (
          <div style={{
            background: "#FF4B4B18", border: "1px solid #FF4B4B44", borderRadius: 16,
            padding: "20px", textAlign: "center", marginTop: 24, animation: "slideIn 0.3s ease",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>{"\u{1F494}"}</div>
            <div style={{ color: "#FF4B4B", fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>No hearts left!</div>
            <div style={{ color: "#A0A0A0", fontSize: "0.85rem" }}>Hearts refill tomorrow. Review your notes in the meantime!</div>
          </div>
        )}
      </div>
    </div>
  );
}
