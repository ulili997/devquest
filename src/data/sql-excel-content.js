export const SQL_EXCEL_MODULES = [
  {
    id: 1,
    title: "SQL Fundamentals",
    icon: "🗄️",
    color: "#336791",
    desc: "SELECT, WHERE, ORDER BY",
    lessons: [
      {
        title: "SELECT & WHERE",
        slides: [
          { type: "teach", content: "**SQL** (Structured Query Language) is used to query relational databases. The most fundamental statement is **SELECT**, which retrieves data from tables.", highlight: "SELECT" },
          { type: "teach", content: "**WHERE** filters rows based on a condition. Think of SELECT as 'which columns' and WHERE as 'which rows'.", highlight: "WHERE" },
        ],
        questions: [
          { q: "Which SQL keyword retrieves data from a table?", options: ["GET", "FETCH", "SELECT", "READ"], answer: 2, explanation: "SELECT is the SQL keyword used to retrieve data from one or more tables." },
          { q: "What does WHERE do in a SQL query?", options: ["Sorts results", "Filters rows by condition", "Groups rows", "Joins tables"], answer: 1, explanation: "WHERE filters rows based on a specified condition." },
          { q: "Which symbol means 'not equal to' in SQL?", options: ["!=", "=/=", "NOT =", "Both A and C"], answer: 3, explanation: "Both != and <> mean 'not equal to' in SQL. != is the most common modern syntax." },
          { difficulty: "average", type: "output", q: "What rows does this query return?", code: "SELECT name, salary\nFROM employees\nWHERE salary > 50000\n  AND department = 'Sales';", options: ["All employees", "All Sales employees", "Sales employees earning over $50,000", "Employees earning exactly $50,000"], answer: 2, explanation: "Both conditions must be true: department must be Sales AND salary must exceed 50000." },
          { difficulty: "average", type: "fill", q: "Complete the query to get all products cheaper than $20:", code: "___BLANK1___ name, price\nFROM products\n___BLANK2___ price < 20;", blanks: [{ id: "BLANK1", options: ["FETCH", "GET", "SELECT", "SHOW"], answer: 2 }, { id: "BLANK2", options: ["HAVING", "FILTER", "WHERE", "LIMIT"], answer: 2 }], explanation: "SELECT retrieves columns, WHERE filters rows." },
          { difficulty: "average", q: "What does SELECT * mean?", options: ["Select nothing", "Select all columns", "Select the first column", "Select only numeric columns"], answer: 1, explanation: "The asterisk (*) is a wildcard that selects all columns from the table." },
          { difficulty: "advanced", type: "freeform", q: "Write a SQL query to find all customers from 'New York' or 'Los Angeles' who have spent more than $1000, showing their name, city, and total_spent, ordered by total_spent descending.", starterCode: "SELECT \nFROM customers\nWHERE \nORDER BY ", patterns: ["SELECT", "name.*city|city.*name", "WHERE", "New York.*Los Angeles|IN.*New York|OR.*Los Angeles", "total_spent.*1000|1000.*total_spent", "ORDER BY.*DESC"], sampleAnswer: "SELECT name, city, total_spent\nFROM customers\nWHERE city IN ('New York', 'Los Angeles')\n  AND total_spent > 1000\nORDER BY total_spent DESC;" },
          { difficulty: "advanced", type: "output", q: "What does this query return?", code: "SELECT name, price\nFROM products\nWHERE category = 'Electronics'\n  AND (price BETWEEN 100 AND 500\n       OR is_on_sale = TRUE)\nORDER BY price ASC\nLIMIT 5;", options: ["All electronics products", "Up to 5 cheapest electronics priced $100-$500 or on sale", "Exactly 5 products between $100-$500", "All products on sale"], answer: 1, explanation: "LIMIT 5 caps results, WHERE filters by Electronics AND (price range OR sale), ORDER BY sorts ascending." },
          { difficulty: "advanced", q: "Which operator checks if a value matches any in a list?", options: ["LIKE", "BETWEEN", "IN", "EXISTS"], answer: 2, explanation: "IN checks whether a value matches any value in a list: WHERE city IN ('NYC', 'LA', 'Chicago')." },
        ],
      },
      {
        title: "ORDER BY, LIMIT & DISTINCT",
        slides: [
          { type: "teach", content: "**ORDER BY** sorts results. Use **ASC** (ascending, default) or **DESC** (descending). **LIMIT** caps the number of rows returned.", highlight: "ORDER BY" },
          { type: "teach", content: "**DISTINCT** removes duplicate values from results. Use it when you want unique values only — like a list of unique countries your customers are from.", highlight: "DISTINCT" },
        ],
        questions: [
          { q: "How do you sort results from newest to oldest (on a 'created_at' column)?", options: ["ORDER BY created_at ASC", "ORDER BY created_at DESC", "SORT BY created_at DESC", "ORDER created_at NEWEST"], answer: 1, explanation: "ORDER BY column DESC sorts in descending order (largest/newest first)." },
          { q: "What does LIMIT 10 do?", options: ["Skips the first 10 rows", "Returns only 10 rows", "Returns every 10th row", "Caps results at 10 columns"], answer: 1, explanation: "LIMIT restricts the query to return at most the specified number of rows." },
          { q: "Which keyword removes duplicate rows from results?", options: ["UNIQUE", "DEDUPE", "DISTINCT", "GROUP"], answer: 2, explanation: "SELECT DISTINCT eliminates duplicate rows from the result set." },
          { difficulty: "average", type: "fill", q: "Complete the query to get the top 3 most expensive products:", code: "SELECT name, price\nFROM products\nORDER BY price ___BLANK1___\n___BLANK2___ 3;", blanks: [{ id: "BLANK1", options: ["ASC", "DESC", "HIGH", "DOWN"], answer: 1 }, { id: "BLANK2", options: ["TOP", "MAX", "LIMIT", "FETCH"], answer: 2 }], explanation: "DESC sorts highest first, LIMIT restricts to 3 rows." },
          { difficulty: "average", type: "output", q: "What does this query return?", code: "SELECT DISTINCT country\nFROM customers\nORDER BY country ASC;", options: ["All customer rows", "One row per unique country, alphabetically", "The number of customers per country", "Customers sorted by country"], answer: 1, explanation: "DISTINCT removes duplicates so each country appears once; ORDER BY sorts alphabetically." },
          { difficulty: "average", q: "You want rows 11-20. Which SQL clause skips the first 10?", options: ["LIMIT 10 SKIP 10", "OFFSET 10 LIMIT 10", "START 11 LIMIT 10", "FETCH 11 TO 20"], answer: 1, explanation: "LIMIT 10 OFFSET 10 returns 10 rows starting after the first 10 (rows 11-20)." },
          { difficulty: "advanced", type: "order", q: "Arrange these SQL clauses in the correct execution order:", lines: ["FROM products", "WHERE price > 50", "SELECT name, price", "ORDER BY price DESC", "LIMIT 5"], correctOrder: [0, 1, 2, 3, 4], explanation: "SQL logical order: FROM → WHERE → SELECT → ORDER BY → LIMIT." },
          { difficulty: "advanced", type: "freeform", q: "Write a query that returns the 5 most recently hired employees (hire_date column) in the 'Engineering' department, showing only their name and hire_date.", starterCode: "SELECT \nFROM employees\nWHERE \nORDER BY \nLIMIT ", patterns: ["SELECT.*name.*hire_date|SELECT.*hire_date.*name", "FROM employees", "WHERE.*Engineering", "ORDER BY.*hire_date.*DESC", "LIMIT 5"], sampleAnswer: "SELECT name, hire_date\nFROM employees\nWHERE department = 'Engineering'\nORDER BY hire_date DESC\nLIMIT 5;" },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "SQL JOINs",
    icon: "🔗",
    color: "#2E86AB",
    desc: "Combining tables with JOINs",
    lessons: [
      {
        title: "INNER JOIN & LEFT JOIN",
        slides: [
          { type: "teach", content: "**JOIN** combines rows from two or more tables based on a related column. **INNER JOIN** returns only rows that have matches in BOTH tables.", highlight: "INNER JOIN" },
          { type: "teach", content: "**LEFT JOIN** returns ALL rows from the left table, plus matching rows from the right. If no match exists, right-side columns are NULL.", highlight: "LEFT JOIN" },
        ],
        questions: [
          { q: "INNER JOIN returns:", options: ["All rows from both tables", "Only rows with matches in both tables", "All rows from the left table", "All rows from the right table"], answer: 1, explanation: "INNER JOIN returns the intersection — only rows where the join condition matches in both tables." },
          { q: "If a customer has no orders, which JOIN still shows that customer?", options: ["INNER JOIN orders", "LEFT JOIN orders", "RIGHT JOIN customers", "CROSS JOIN orders"], answer: 1, explanation: "LEFT JOIN keeps all rows from the left table (customers), even if no matching rows exist in orders." },
          { q: "What value appears for unmatched columns in a LEFT JOIN?", options: ["0", "Empty string", "NULL", "N/A"], answer: 2, explanation: "When no match exists in the right table, SQL fills those columns with NULL." },
          { difficulty: "average", type: "fill", q: "Complete the query to get all orders with customer names:", code: "SELECT customers.name, orders.total\nFROM orders\n___BLANK1___ JOIN customers\n  ON orders.customer_id = ___BLANK2___;", blanks: [{ id: "BLANK1", options: ["LEFT", "INNER", "FULL", "CROSS"], answer: 1 }, { id: "BLANK2", options: ["orders.id", "customers.id", "customer_id", "orders.customer_id"], answer: 1 }], explanation: "INNER JOIN matches both tables; ON specifies the join key between the foreign key and primary key." },
          { difficulty: "average", type: "output", q: "Customers table has Alice (id=1) and Bob (id=2). Orders table has one order for Alice only. What does this query return?", code: "SELECT customers.name, orders.total\nFROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id;", options: ["Only Alice's row", "Alice with total, Bob with NULL total", "Two rows for Alice, none for Bob", "An error"], answer: 1, explanation: "LEFT JOIN keeps all customers. Bob has no orders so his total is NULL." },
          { difficulty: "average", q: "When should you use LEFT JOIN instead of INNER JOIN?", options: ["When you want faster queries", "When you need to include rows with no matching record in the other table", "When joining more than 2 tables", "When columns have the same name"], answer: 1, explanation: "Use LEFT JOIN when you need to preserve all records from the left table, even if no match exists." },
          { difficulty: "advanced", type: "freeform", q: "Write a query that lists all products, and for each product shows how many times it has been ordered (orders.product_id). Products with zero orders should still appear with a count of 0.", starterCode: "SELECT \nFROM products\n  JOIN orders\n  ON \nGROUP BY \nORDER BY ", patterns: ["SELECT.*products\\.name|name", "LEFT JOIN orders", "ON.*products.*id.*orders.*product_id|ON.*product_id", "COUNT", "GROUP BY.*products|GROUP BY.*name", "ORDER BY"], sampleAnswer: "SELECT products.name, COUNT(orders.id) AS order_count\nFROM products\nLEFT JOIN orders ON products.id = orders.product_id\nGROUP BY products.id, products.name\nORDER BY order_count DESC;" },
          { difficulty: "advanced", type: "output", q: "What pattern does this query identify?", code: "SELECT customers.name\nFROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id\nWHERE orders.id IS NULL;", options: ["Customers with at least one order", "Customers with no orders at all", "Orders with no matching customer", "Duplicate customer records"], answer: 1, explanation: "LEFT JOIN + WHERE right_table.id IS NULL is the standard pattern to find unmatched rows — customers with zero orders." },
        ],
      },
      {
        title: "Multiple JOINs & Aliases",
        slides: [
          { type: "teach", content: "You can chain multiple JOINs to combine several tables. Aliases (**AS**) make queries shorter and more readable: `FROM employees AS e`.", highlight: "aliases" },
          { type: "teach", content: "Table aliases are essential when joining a table to itself (**self-join**) or when column names conflict across tables.", highlight: "self-join" },
        ],
        questions: [
          { q: "What does 'AS' do in SQL?", options: ["Filters rows", "Renames a column or table temporarily", "Sorts results", "Creates a new table"], answer: 1, explanation: "AS creates an alias — a temporary name for a column or table in that query." },
          { q: "You need data from 3 tables: orders, customers, products. How many JOINs do you need?", options: ["1", "2", "3", "4"], answer: 1, explanation: "To join N tables you need N-1 JOINs. Three tables require two JOINs." },
          { q: "When is a self-join useful?", options: ["Joining a table to itself to compare rows within the same table", "When you have no foreign keys", "When two tables have identical data", "When tables are in different databases"], answer: 0, explanation: "Self-joins compare rows within the same table — e.g., finding employees managed by the same manager." },
          { difficulty: "average", type: "fill", q: "Complete the query using aliases for readability:", code: "SELECT c.name, o.total, p.title\nFROM orders ___BLANK1___ o\nINNER JOIN customers ___BLANK2___ c ON o.customer_id = c.id\nINNER JOIN products AS p ON o.product_id = p.id;", blanks: [{ id: "BLANK1", options: ["IN", "AS", "IS", "TO"], answer: 1 }, { id: "BLANK2", options: ["IN", "ON", "AS", "FOR"], answer: 2 }], explanation: "AS creates a table alias, making long queries more concise." },
          { difficulty: "average", type: "output", q: "What does this self-join return?", code: "SELECT e.name AS employee, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;", options: ["All managers only", "All employees with their manager's name (NULL if no manager)", "Employees who share a manager", "An error — can't join a table to itself"], answer: 1, explanation: "Self-joining employees to itself maps manager_id to the manager's row, LEFT JOIN keeps employees with no manager (like the CEO)." },
          { difficulty: "advanced", type: "freeform", q: "Write a query joining orders, customers, and products tables to show: customer name, product name, quantity, and order_date — for all orders in 2024.", starterCode: "SELECT \nFROM orders o\n  JOIN customers c ON \n  JOIN products p ON \nWHERE \nORDER BY ", patterns: ["SELECT.*name.*name|c\\.name.*p\\.name", "JOIN customers.*ON.*customer_id|JOIN.*c.*ON", "JOIN products.*ON.*product_id|JOIN.*p.*ON", "WHERE.*2024|order_date.*2024", "ORDER BY"], sampleAnswer: "SELECT c.name AS customer, p.name AS product, o.quantity, o.order_date\nFROM orders o\n  INNER JOIN customers c ON o.customer_id = c.id\n  INNER JOIN products p ON o.product_id = p.id\nWHERE YEAR(o.order_date) = 2024\nORDER BY o.order_date DESC;" },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "SQL Aggregations",
    icon: "📊",
    color: "#8E44AD",
    desc: "GROUP BY, HAVING & aggregate functions",
    lessons: [
      {
        title: "COUNT, SUM, AVG, MIN, MAX",
        slides: [
          { type: "teach", content: "**Aggregate functions** compute a single result from multiple rows: **COUNT** (count rows), **SUM** (total), **AVG** (average), **MIN** (smallest), **MAX** (largest).", highlight: "aggregate functions" },
          { type: "teach", content: "**GROUP BY** groups rows with the same value so aggregates apply per group — e.g., total sales per region, average salary per department.", highlight: "GROUP BY" },
        ],
        questions: [
          { q: "Which function counts the number of non-NULL values in a column?", options: ["SUM()", "TOTAL()", "COUNT()", "NUM()"], answer: 2, explanation: "COUNT(column) counts non-NULL values. COUNT(*) counts all rows including NULLs." },
          { q: "What does AVG(salary) return?", options: ["The highest salary", "The lowest salary", "The total of all salaries", "The mean salary"], answer: 3, explanation: "AVG() returns the arithmetic mean — sum of values divided by count of non-NULL values." },
          { q: "GROUP BY is used with aggregate functions to:", options: ["Filter rows before grouping", "Compute aggregates per group", "Sort aggregated results", "Join tables"], answer: 1, explanation: "GROUP BY groups rows sharing the same value, then aggregates are computed per group." },
          { difficulty: "average", type: "fill", q: "Complete the query to find total revenue per product category:", code: "SELECT category, ___BLANK1___(price * quantity) AS total_revenue\nFROM orders\nJOIN products ON orders.product_id = products.id\n___BLANK2___ category;", blanks: [{ id: "BLANK1", options: ["COUNT", "AVG", "SUM", "MAX"], answer: 2 }, { id: "BLANK2", options: ["ORDER BY", "FILTER BY", "GROUP BY", "SORT BY"], answer: 2 }], explanation: "SUM adds up values per group; GROUP BY category creates one row per category." },
          { difficulty: "average", type: "output", q: "What does this query return?", code: "SELECT department, COUNT(*) AS headcount, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nORDER BY avg_salary DESC;", options: ["One row per employee with salary", "One row per department with employee count and average salary", "Total company headcount only", "The highest-paid employee per department"], answer: 1, explanation: "GROUP BY department collapses all employees in each department into one row with COUNT and AVG calculations." },
          { difficulty: "average", q: "What is the difference between COUNT(*) and COUNT(column_name)?", options: ["No difference", "COUNT(*) counts all rows; COUNT(col) skips NULL values", "COUNT(*) is faster", "COUNT(col) counts all rows; COUNT(*) skips NULLs"], answer: 1, explanation: "COUNT(*) counts every row. COUNT(column) only counts rows where that column is not NULL." },
          { difficulty: "advanced", type: "fill", q: "Complete the query using HAVING to filter groups with more than 5 employees:", code: "SELECT department, COUNT(*) AS headcount\nFROM employees\nGROUP BY department\n___BLANK1___ ___BLANK2___ > 5\nORDER BY headcount DESC;", blanks: [{ id: "BLANK1", options: ["WHERE", "FILTER", "HAVING", "AND"], answer: 2 }, { id: "BLANK2", options: ["department", "headcount", "COUNT(*)", "employees"], answer: 2 }], explanation: "HAVING filters after aggregation. WHERE filters before. Use HAVING with aggregate conditions." },
          { difficulty: "advanced", type: "output", q: "What is wrong with this query?", code: "SELECT department, AVG(salary)\nFROM employees\nWHERE AVG(salary) > 60000\nGROUP BY department;", options: ["AVG cannot be used with salary", "WHERE cannot filter on aggregate functions — use HAVING", "GROUP BY must come before WHERE", "Missing ORDER BY clause"], answer: 1, explanation: "Aggregate functions cannot be used in WHERE (which runs before grouping). Use HAVING AVG(salary) > 60000 instead." },
          { difficulty: "advanced", type: "freeform", q: "Write a query showing each salesperson's name, number of deals closed, total revenue, and average deal size — but only for salespeople who closed more than 10 deals. Sort by total revenue descending.", starterCode: "SELECT \nFROM deals d\n  JOIN salespeople s ON d.salesperson_id = s.id\nGROUP BY \nHAVING \nORDER BY ", patterns: ["SELECT.*name|s\\.name", "COUNT.*deals|COUNT\\(", "SUM.*revenue|SUM\\(", "AVG.*deal|AVG\\(", "GROUP BY.*s\\.id|GROUP BY.*name", "HAVING.*COUNT.*10|HAVING.*> 10", "ORDER BY.*DESC"], sampleAnswer: "SELECT s.name, COUNT(d.id) AS deals_closed, SUM(d.revenue) AS total_revenue, AVG(d.revenue) AS avg_deal_size\nFROM deals d\n  JOIN salespeople s ON d.salesperson_id = s.id\nGROUP BY s.id, s.name\nHAVING COUNT(d.id) > 10\nORDER BY total_revenue DESC;" },
        ],
      },
      {
        title: "Subqueries & CTEs",
        slides: [
          { type: "teach", content: "A **subquery** is a query nested inside another query. Use them to filter, compute values, or build intermediate result sets.", highlight: "subquery" },
          { type: "teach", content: "A **CTE** (Common Table Expression) uses `WITH` to name a subquery, making complex queries readable. Think of it as a temporary named result set.", highlight: "CTE" },
        ],
        questions: [
          { q: "Where can a subquery appear in a SQL statement?", options: ["Only in WHERE", "Only in FROM", "In WHERE, FROM, SELECT, or HAVING", "Only in JOIN"], answer: 2, explanation: "Subqueries can appear in SELECT (scalar), FROM (inline view), WHERE (filter), and HAVING clauses." },
          { q: "What does WITH in SQL create?", options: ["A stored procedure", "A Common Table Expression (CTE)", "A new table", "A view"], answer: 1, explanation: "WITH defines a CTE — a named temporary result set you can reference in the main query." },
          { q: "When is a CTE preferred over a subquery?", options: ["When you need faster performance always", "When the same subquery is referenced multiple times or for readability", "When joining 2 tables", "CTEs are never better than subqueries"], answer: 1, explanation: "CTEs improve readability and can be referenced multiple times in one query, unlike subqueries repeated inline." },
          { difficulty: "average", type: "fill", q: "Complete the subquery to find products priced above the average:", code: "SELECT name, price\nFROM products\nWHERE price > (\n  SELECT ___BLANK1___(price)\n  FROM ___BLANK2___\n);", blanks: [{ id: "BLANK1", options: ["MAX", "COUNT", "SUM", "AVG"], answer: 3 }, { id: "BLANK2", options: ["categories", "orders", "products", "prices"], answer: 2 }], explanation: "AVG(price) in the subquery calculates the average; the outer WHERE compares each product's price to that average." },
          { difficulty: "average", type: "fill", q: "Complete the CTE:", code: "___BLANK1___ high_earners AS (\n  SELECT name, salary\n  FROM employees\n  WHERE salary > 80000\n)\nSELECT * FROM ___BLANK2___;", blanks: [{ id: "BLANK1", options: ["CREATE", "DEFINE", "WITH", "TEMP"], answer: 2 }, { id: "BLANK2", options: ["employees", "high_earners", "salary", "results"], answer: 1 }], explanation: "WITH names the CTE; you reference it by name in the final SELECT." },
          { difficulty: "advanced", type: "freeform", q: "Using a CTE, find all customers whose total order value exceeds the average total order value across all customers. Show customer name and their total.", starterCode: "WITH customer_totals AS (\n  SELECT \n  FROM orders o\n    JOIN customers c ON o.customer_id = c.id\n  GROUP BY \n),\navg_total AS (\n  SELECT \n  FROM customer_totals\n)\nSELECT \nFROM customer_totals, avg_total\nWHERE ", patterns: ["WITH.*customer_totals", "SUM.*total|total_value", "GROUP BY.*customer|GROUP BY.*name", "avg_total|AVG\\(", "WHERE.*total.*avg|WHERE.*>.*avg"], sampleAnswer: "WITH customer_totals AS (\n  SELECT c.name, SUM(o.total) AS total_value\n  FROM orders o\n    JOIN customers c ON o.customer_id = c.id\n  GROUP BY c.id, c.name\n),\navg_total AS (\n  SELECT AVG(total_value) AS avg_value\n  FROM customer_totals\n)\nSELECT ct.name, ct.total_value\nFROM customer_totals ct, avg_total\nWHERE ct.total_value > avg_total.avg_value\nORDER BY ct.total_value DESC;" },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Advanced SQL",
    icon: "⚡",
    color: "#E74C3C",
    desc: "Window functions & real-world patterns",
    lessons: [
      {
        title: "Window Functions",
        slides: [
          { type: "teach", content: "**Window functions** compute values across a set of rows related to the current row — without collapsing them like GROUP BY. They use the **OVER()** clause.", highlight: "OVER()" },
          { type: "teach", content: "Common window functions: **ROW_NUMBER()** (rank each row), **RANK()** (tied rows get same rank), **LAG/LEAD** (access previous/next row values).", highlight: "ROW_NUMBER" },
        ],
        questions: [
          { q: "What makes window functions different from GROUP BY aggregates?", options: ["Window functions are faster", "Window functions compute per group AND return a value for each row without collapsing", "GROUP BY is deprecated", "Window functions only work with numeric columns"], answer: 1, explanation: "GROUP BY collapses rows into groups. Window functions keep all rows and add a computed column alongside each." },
          { q: "Which clause defines the window (set of rows) for a window function?", options: ["GROUP BY", "PARTITION BY inside OVER()", "WHERE", "HAVING"], answer: 1, explanation: "PARTITION BY inside OVER() divides rows into partitions — similar to GROUP BY but without collapsing rows." },
          { q: "What does ROW_NUMBER() return?", options: ["A unique sequential integer per partition ordered by the ORDER BY clause", "The total count of rows", "A rank allowing ties", "A random number"], answer: 0, explanation: "ROW_NUMBER() assigns a unique sequential number to each row within its partition — ties are broken arbitrarily." },
          { difficulty: "average", type: "fill", q: "Complete the query to rank employees by salary within each department:", code: "SELECT name, department, salary,\n  ___BLANK1___() OVER (\n    PARTITION BY department\n    ORDER BY salary ___BLANK2___\n  ) AS dept_rank\nFROM employees;", blanks: [{ id: "BLANK1", options: ["COUNT", "RANK", "AVG", "ROW"], answer: 1 }, { id: "BLANK2", options: ["ASC", "DESC", "NULLS LAST", "RANDOM"], answer: 1 }], explanation: "RANK() over PARTITION BY department gives salary ranking within each department; DESC ranks highest salary as 1." },
          { difficulty: "average", type: "output", q: "What does LAG() do in this context?", code: "SELECT month, revenue,\n  LAG(revenue, 1) OVER (ORDER BY month) AS prev_month_revenue\nFROM monthly_sales;", options: ["Shows next month's revenue", "Shows previous month's revenue alongside current", "Calculates the difference in revenue", "Groups revenue by month"], answer: 1, explanation: "LAG(revenue, 1) looks back 1 row in the ORDER BY sequence, returning the previous row's revenue value." },
          { difficulty: "advanced", type: "freeform", q: "Write a query using window functions to show each sale's amount, the running total of sales per salesperson, and each sale's percentage of that salesperson's total.", starterCode: "SELECT \n  salesperson_id,\n  amount,\n  \nFROM sales\n  WINDOW ", patterns: ["SUM.*amount.*OVER|SUM.*OVER.*salesperson", "PARTITION BY.*salesperson", "amount.*100.*SUM|amount\\/.*SUM|percent", "ORDER BY"], sampleAnswer: "SELECT\n  salesperson_id,\n  sale_date,\n  amount,\n  SUM(amount) OVER (PARTITION BY salesperson_id ORDER BY sale_date) AS running_total,\n  ROUND(100.0 * amount / SUM(amount) OVER (PARTITION BY salesperson_id), 2) AS pct_of_total\nFROM sales\nORDER BY salesperson_id, sale_date;" },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Excel Fundamentals",
    icon: "📗",
    color: "#217346",
    desc: "Formulas, cell references & core functions",
    lessons: [
      {
        title: "Formulas & Cell References",
        slides: [
          { type: "teach", content: "Every Excel formula starts with **=**. Formulas reference cells like **A1**, ranges like **A1:A10**, and can include operators: +, -, *, /, ^.", highlight: "formula" },
          { type: "teach", content: "**Relative references** (A1) change when copied. **Absolute references** ($A$1) are locked. **Mixed** ($A1 or A$1) lock only the column or row.", highlight: "absolute references" },
        ],
        questions: [
          { q: "What symbol must every Excel formula start with?", options: ["#", "@", "=", "+"], answer: 2, explanation: "Excel formulas must begin with = to tell Excel to evaluate the expression rather than treat it as text." },
          { q: "What does $A$1 mean?", options: ["Absolute reference — row and column are locked", "Relative reference", "Named range", "An error value"], answer: 0, explanation: "$A$1 is an absolute reference. The $ locks both the column (A) and row (1) when the formula is copied." },
          { q: "You copy =A1+B1 from row 1 to row 2. What does it become?", options: ["=A1+B1", "=A2+B2", "=$A$1+$B$1", "=#REF!+#REF!"], answer: 1, explanation: "Relative references adjust automatically when copied. Moving down one row changes A1→A2 and B1→B2." },
          { difficulty: "average", type: "fill", q: "Complete the formula to calculate tax on a fixed rate in C1, applied to prices in column B:", code: "=B2 * ___BLANK1___\n\n# When copied down rows, B2 should change\n# but the tax rate reference should stay fixed", blanks: [{ id: "BLANK1", options: ["C1", "$C1", "$C$1", "C$1"], answer: 2 }], explanation: "$C$1 is fully absolute — when the formula is copied down, the tax rate reference stays locked to C1." },
          { difficulty: "average", type: "output", q: "Cell A1=10, A2=20, A3=30. What does =SUM(A1:A3) return?", code: "A1: 10\nA2: 20\nA3: 30\n\n=SUM(A1:A3)", options: ["10", "30", "60", "20"], answer: 2, explanation: "SUM(A1:A3) adds all values in the range: 10 + 20 + 30 = 60." },
          { difficulty: "average", q: "What is the shortcut to quickly apply SUM to a selected range?", options: ["Ctrl+S", "Alt+=", "Ctrl+T", "F4"], answer: 1, explanation: "Alt+= (AutoSum) automatically inserts =SUM() for the selected range or detects the adjacent range." },
          { difficulty: "advanced", type: "freeform", q: "Write Excel formulas for: (1) the average of B2:B100 excluding zeros, (2) a running total in column C where C2=B2, C3=C2+B3, etc., using only one formula you can copy down.", starterCode: "// (1) Average excluding zeros:\n=\n\n// (2) Running total formula for C2 (to copy down):\n=", patterns: ["AVERAGEIF.*B2:B100.*<>0|AVERAGEIF.*\"<>0\"|AVERAGEIF.*0", "C.*\\+B|SUM.*\\$B\\$2.*B"], sampleAnswer: "// (1) Average excluding zeros:\n=AVERAGEIF(B2:B100,\"<>0\")\n\n// (2) Running total formula for C2 (to copy down):\n=SUM($B$2:B2)\n// The first reference is absolute, the second is relative\n// so it expands as you copy down" },
          { difficulty: "advanced", q: "Column A has dates. You want to extract just the month number. Which formula is correct?", options: ["=DATE(A1)", "=MONTH(A1)", "=MID(A1,4,2)", "=TEXT(A1,\"MM\")"], answer: 1, explanation: "=MONTH(A1) extracts the month number (1-12) from a date. TEXT(A1,\"MM\") returns text, not a number." },
        ],
      },
      {
        title: "IF, VLOOKUP & XLOOKUP",
        slides: [
          { type: "teach", content: "**IF(condition, value_if_true, value_if_false)** returns different values based on a test. Nest IFs for multiple conditions, or use **IFS()** for cleaner multi-condition logic.", highlight: "IF" },
          { type: "teach", content: "**VLOOKUP** searches the first column of a range and returns a value from another column. **XLOOKUP** is its modern replacement — more flexible and works in any direction.", highlight: "VLOOKUP" },
        ],
        questions: [
          { q: "=IF(A1>100, \"High\", \"Low\") — A1=75. What does it return?", options: ["High", "Low", "75", "TRUE"], answer: 1, explanation: "75 is not greater than 100, so the condition is FALSE and Excel returns the third argument: \"Low\"." },
          { q: "In VLOOKUP, what does the 4th argument (FALSE) control?", options: ["Whether to return the 4th column", "Whether to use exact match (FALSE) or approximate match (TRUE)", "Case sensitivity", "Whether to search left to right"], answer: 1, explanation: "FALSE means exact match — VLOOKUP will only return a result if the lookup value matches exactly." },
          { q: "What is a key limitation of VLOOKUP compared to XLOOKUP?", options: ["VLOOKUP is slower", "VLOOKUP can only look right — it can't return values to the left of the lookup column", "VLOOKUP doesn't work with text", "VLOOKUP requires sorted data always"], answer: 1, explanation: "VLOOKUP always searches the leftmost column and returns from columns to the right. XLOOKUP can look in any direction." },
          { difficulty: "average", type: "fill", q: "Complete the VLOOKUP to find an employee's department from a lookup table in G:H:", code: "=VLOOKUP(\n  A2,        -- lookup value (employee ID)\n  ___BLANK1___,    -- table range\n  ___BLANK2___,    -- column index to return\n  FALSE      -- exact match\n)", blanks: [{ id: "BLANK1", options: ["A:H", "G:H", "G2:H100", "$G:$H"], answer: 3 }, { id: "BLANK2", options: ["1", "2", "G", "H"], answer: 1 }], explanation: "The range $G:$H is absolute so it doesn't shift when copied. Column 2 returns the second column (H) of the range." },
          { difficulty: "average", type: "output", q: "What does this XLOOKUP return?", code: "Product table:\nA: [Apple, Banana, Cherry]\nB: [1.20, 0.50, 2.00]\n\n=XLOOKUP(\"Banana\", A1:A3, B1:B3, \"Not found\")", options: ["1.20", "0.50", "2.00", "Not found"], answer: 1, explanation: "XLOOKUP finds \"Banana\" in A1:A3 and returns the corresponding value from B1:B3, which is 0.50." },
          { difficulty: "average", type: "fill", q: "Complete the nested IF for a grade system:", code: "=IF(A1>=90, \"A\",\n  IF(A1>=80, \"B\",\n    IF(A1>=70, ___BLANK1___,\n      IF(A1>=60, \"D\", ___BLANK2___))))", blanks: [{ id: "BLANK1", options: ["\"B\"", "\"C\"", "\"D\"", "70"], answer: 1 }, { id: "BLANK2", options: ["\"D\"", "0", "\"F\"", "FALSE"], answer: 2 }], explanation: "Each nested IF handles a grade boundary. Scores below 60 fall through to the innermost false value: \"F\"." },
          { difficulty: "advanced", type: "freeform", q: "Write an XLOOKUP formula to look up a product name (in A2) from a Products sheet (column A = names, column D = price), returning 0 if not found, with exact match.", starterCode: "=XLOOKUP(", patterns: ["XLOOKUP", "A2", "Products!A|Products!\\$A", "Products!D|Products!\\$D", "0", "0,0|,0\\)"], sampleAnswer: "=XLOOKUP(A2, Products!$A:$A, Products!$D:$D, 0, 0)\n// Arguments: lookup_value, lookup_array, return_array, if_not_found, match_mode\n// match_mode 0 = exact match, if_not_found = 0" },
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Excel Advanced",
    icon: "📊",
    color: "#107C41",
    desc: "Pivot Tables, SUMIF & dynamic arrays",
    lessons: [
      {
        title: "SUMIF, COUNTIF & AVERAGEIF",
        slides: [
          { type: "teach", content: "**SUMIF(range, criteria, sum_range)** sums values where a condition is met. **COUNTIF** counts matching rows. **AVERAGEIF** averages them.", highlight: "SUMIF" },
          { type: "teach", content: "Use **SUMIFS/COUNTIFS/AVERAGEIFS** (plural) when you need **multiple conditions** — e.g., sum sales for region='East' AND year=2024.", highlight: "SUMIFS" },
        ],
        questions: [
          { q: "=COUNTIF(A1:A10, \"Apple\") — what does it count?", options: ["Cells containing any fruit", "Cells where value is exactly \"Apple\"", "All non-empty cells", "Cells starting with \"A\""], answer: 1, explanation: "COUNTIF with a text criteria counts cells that exactly match that text (case-insensitive)." },
          { q: "What is the correct syntax for SUMIF?", options: ["SUMIF(criteria, range, sum_range)", "SUMIF(range, criteria, sum_range)", "SUMIF(range, sum_range, criteria)", "SUMIF(sum_range, criteria, range)"], answer: 1, explanation: "SUMIF(range, criteria, [sum_range]) — range is where to check the condition, sum_range is what to add up." },
          { q: "You want to count orders where region='East' AND amount>500. Which function?", options: ["COUNTIF with two criteria", "COUNTIFS", "SUMIF", "COUNT + IF"], answer: 1, explanation: "COUNTIFS supports multiple range/criteria pairs: =COUNTIFS(region_range,\"East\",amount_range,\">500\")." },
          { difficulty: "average", type: "fill", q: "Complete the SUMIF to total sales for the 'North' region:", code: "=SUMIF(\n  ___BLANK1___,    -- range to check\n  \"North\",       -- criteria\n  ___BLANK2___     -- range to sum\n)", blanks: [{ id: "BLANK1", options: ["C:C", "B:B", "A:A", "D:D"], answer: 1 }, { id: "BLANK2", options: ["A:A", "B:B", "C:C", "D:D"], answer: 2 }], explanation: "B:B contains regions (criteria range), C:C contains sales amounts (sum range)." },
          { difficulty: "average", type: "output", q: "Data: Region A in B2:B6, Sales in C2:C6. What does this return?", code: "B2: East  C2: 1000\nB3: West  C3: 500\nB4: East  C4: 750\nB5: North C5: 300\nB6: East  C6: 200\n\n=SUMIF(B2:B6, \"East\", C2:C6)", options: ["1000", "1750", "1950", "2750"], answer: 2, explanation: "East rows: 1000 + 750 + 200 = 1950. SUMIF adds C values where B = \"East\"." },
          { difficulty: "advanced", type: "freeform", q: "Write SUMIFS formula to calculate total revenue for product category 'Electronics' in Q4 2024 (October-December). Assume: column B = category, column C = sale_date, column D = revenue.", starterCode: "=SUMIFS(\n  D:D,  -- sum range\n  \n)", patterns: ["SUMIFS", "D:D", "B:B.*Electronics|Electronics.*B:B", "C:C.*>=.*2024-10|C:C.*DATE.*2024.*10|>=DATE", "C:C.*<=.*2024-12|C:C.*DATE.*2024.*12|<=DATE"], sampleAnswer: "=SUMIFS(\n  D:D,\n  B:B, \"Electronics\",\n  C:C, \">=\"&DATE(2024,10,1),\n  C:C, \"<=\"&DATE(2024,12,31)\n)" },
        ],
      },
      {
        title: "Pivot Tables",
        slides: [
          { type: "teach", content: "**Pivot Tables** summarize large datasets interactively. Drag fields to Rows, Columns, Values, and Filters to instantly reshape your data — no formulas needed.", highlight: "Pivot Tables" },
          { type: "teach", content: "Best practices: keep source data in a flat table format (one row per record, headers in row 1), use **Ctrl+T** to create an Excel Table that auto-expands when data grows.", highlight: "flat table" },
        ],
        questions: [
          { q: "Where do you place a field to calculate totals like SUM or COUNT in a Pivot Table?", options: ["Rows area", "Columns area", "Values area", "Filters area"], answer: 2, explanation: "The Values area contains the aggregate computations (SUM, COUNT, AVERAGE, etc.) for your pivot table." },
          { q: "What does the 'Filters' area in a Pivot Table do?", options: ["Filters the source data permanently", "Adds an interactive slicer to filter the entire pivot report", "Removes rows from the dataset", "Sorts the pivot table"], answer: 1, explanation: "The Filters area creates a dropdown at the top of the pivot table to filter the whole report by a field value." },
          { q: "Your Pivot Table shows old data after adding new rows to the source. What do you do?", options: ["Delete and recreate the pivot", "Press Ctrl+Z", "Right-click and Refresh", "Save and reopen the file"], answer: 2, explanation: "Pivot Tables cache data. Right-click → Refresh (or Data → Refresh All) updates it with new source data." },
          { difficulty: "average", type: "output", q: "You have sales data with columns: Region, Product, Month, Revenue. You drag Region to Rows, Month to Columns, Revenue to Values (SUM). What does the pivot show?", code: "Rows: Region\nColumns: Month\nValues: SUM of Revenue", options: ["One row per product", "Revenue totals broken down by Region (rows) and Month (columns)", "A list of all transactions", "Region totals only"], answer: 1, explanation: "This classic cross-tabulation shows total revenue at the intersection of each Region and Month." },
          { difficulty: "average", q: "What is a Slicer in Excel?", options: ["A formula that splits text", "A visual filter button panel that filters Pivot Tables interactively", "A chart type", "A VBA macro tool"], answer: 1, explanation: "Slicers (Insert → Slicer) provide clickable filter buttons for Pivot Tables, making dashboards more interactive." },
          { difficulty: "advanced", type: "freeform", q: "Describe (step by step) how to create a Pivot Table report showing total and average revenue by product category and month, with a slicer for Region.", starterCode: "// Step 1: Select source data\n// Step 2:\n// Step 3:\n// Step 4:\n// Step 5:\n// Step 6:", patterns: ["Insert.*Pivot|Pivot.*Insert", "Category.*Row|Row.*Category", "Month.*Column|Column.*Month", "Revenue.*Value|Value.*Revenue|SUM.*Revenue", "Average|AVG", "Slicer.*Region|Region.*Slicer"], sampleAnswer: "// Step 1: Click anywhere in your data table\n// Step 2: Insert → PivotTable → New Worksheet\n// Step 3: Drag 'Category' to Rows area\n// Step 4: Drag 'Month' to Columns area\n// Step 5: Drag 'Revenue' to Values twice:\n//   - First: summarize by SUM → rename 'Total Revenue'\n//   - Second: summarize by AVERAGE → rename 'Avg Revenue'\n// Step 6: Click inside pivot → Insert → Slicer → select 'Region'" },
        ],
      },
    ],
  },

  {
    id: 7,
    title: "Power Query",
    icon: "⚙️",
    color: "#F39C12",
    desc: "ETL, data cleaning & M language",
    lessons: [
      {
        title: "Power Query Basics",
        slides: [
          { type: "teach", content: "**Power Query** is Excel's ETL (Extract, Transform, Load) tool. Access it via Data → Get Data. It connects to files, databases, web APIs, and more — all without VBA.", highlight: "Power Query" },
          { type: "teach", content: "Every transformation you apply creates a **step** in the Applied Steps panel. Power Query records these as **M language** code you can inspect and edit.", highlight: "Applied Steps" },
        ],
        questions: [
          { q: "What does ETL stand for?", options: ["Edit, Test, Load", "Extract, Transform, Load", "Export, Transfer, Link", "Evaluate, Table, Layout"], answer: 1, explanation: "ETL = Extract (get data), Transform (clean/reshape), Load (output to Excel or data model)." },
          { q: "Where do you find Power Query in Excel?", options: ["Home tab → Styles", "Insert tab → Charts", "Data tab → Get Data / Get & Transform", "View tab → Macros"], answer: 2, explanation: "Power Query is in the Data tab under 'Get Data' (Excel 2016+) or 'Get & Transform Data'." },
          { q: "What are 'Applied Steps' in Power Query?", options: ["Excel macros", "A recorded list of every transformation applied to your data", "Column headers", "Data validation rules"], answer: 1, explanation: "Applied Steps shows each transformation as a named step (Remove Columns, Filter Rows, etc.) — easily reordered or deleted." },
          { difficulty: "average", type: "output", q: "You import a CSV. Column 'Revenue' has values like '$1,200.50' (text). What Power Query steps clean this?", code: "Step 1: Replace '$' with ''\nStep 2: Replace ',' with ''\nStep 3: Change column type to Decimal Number", options: ["This can't be done in Power Query", "Steps 1-3 convert text currency to a numeric decimal", "Only Step 3 is needed", "You need VBA for this"], answer: 1, explanation: "Power Query's Replace Values removes formatting characters, then Change Type converts the cleaned text to a number." },
          { difficulty: "average", q: "You have monthly sales files (Jan.csv, Feb.csv…). What Power Query feature combines them automatically?", options: ["VLOOKUP across files", "Combine & Transform / Append Queries", "Macro recorder", "Power Pivot only"], answer: 1, explanation: "Get Data → From Folder, then Combine & Transform automatically appends all files in a folder into one table." },
          { difficulty: "average", type: "fill", q: "In M language, what does this step do?", code: "= Table.SelectRows(\n    Source,\n    each [Revenue] ___BLANK1___ 0\n)", blanks: [{ id: "BLANK1", options: ["<", ">", "=", "<>"], answer: 1 }], explanation: "Table.SelectRows filters rows. [Revenue] > 0 keeps only rows where Revenue is positive." },
          { difficulty: "advanced", type: "freeform", q: "Describe a Power Query workflow to: (1) load data from multiple monthly Excel files in a folder, (2) add a 'Month' column from each filename, (3) remove duplicates, (4) load to the data model for PivotTable use.", starterCode: "// Step 1: Connect to folder\n// Step 2: Combine files\n// Step 3: Add Month column\n// Step 4: Remove duplicates\n// Step 5: Load to data model", patterns: ["Get Data.*Folder|Folder|folder", "Combine|Append|Merge Files", "filename|Source.Name|FileName", "Remove Duplicates|Table.Distinct", "Data Model|Connection Only|Power Pivot|Add to Data Model"], sampleAnswer: "// Step 1: Data → Get Data → From File → From Folder → navigate to folder\n// Step 2: Click 'Combine & Transform' to merge all Excel files into one table\n// Step 3: In Applied Steps, select 'Source.Name' column → Add Column → Extract → Text Before Delimiter ('.') → rename to 'Month'\n// Step 4: Home → Remove Rows → Remove Duplicates (or Table.Distinct in M)\n// Step 5: Home → Close & Load → Close & Load To → 'Add this data to the Data Model' → Connection Only" },
          { difficulty: "advanced", type: "output", q: "What does this M code do?", code: "let\n  Source = Excel.CurrentWorkbook(){[Name=\"SalesData\"]}[Content],\n  FilteredRows = Table.SelectRows(Source, each [Qty] > 0),\n  AddedRevenue = Table.AddColumn(FilteredRows, \"Revenue\", each [Price] * [Qty])\nin\n  AddedRevenue", options: ["Loads a CSV and calculates profit", "Reads an Excel table, removes zero-quantity rows, adds a Revenue column (Price × Qty)", "Creates a new Excel table", "Runs a SQL query against Excel"], answer: 1, explanation: "The M code: reads 'SalesData' named table → filters out Qty ≤ 0 → adds Revenue column as Price × Qty → outputs the result." },
        ],
      },
      {
        title: "Data Cleaning & Transformations",
        slides: [
          { type: "teach", content: "Power Query's most-used transforms: **Remove Columns**, **Rename Columns**, **Filter Rows**, **Split Column** (by delimiter), **Unpivot** (wide → tall format), and **Merge Queries** (like VLOOKUP).", highlight: "transforms" },
          { type: "teach", content: "**Unpivot** is essential for converting wide 'crosstab' data (Jan, Feb, Mar as columns) into tall 'tidy' data (Date, Value columns) that works with Pivot Tables and charts.", highlight: "Unpivot" },
        ],
        questions: [
          { q: "What does 'Unpivot Columns' do in Power Query?", options: ["Removes selected columns", "Converts wide column headers into row values (crosstab → tidy format)", "Sorts columns alphabetically", "Splits one column into many"], answer: 1, explanation: "Unpivot transforms multiple value columns (e.g., months) into two columns: Attribute (month name) and Value (the amount)." },
          { q: "Power Query's 'Merge Queries' is similar to which Excel function?", options: ["SUMIF", "VLOOKUP / JOIN", "CONCATENATE", "INDEX-MATCH"], answer: 1, explanation: "Merge Queries performs a join between two queries — like VLOOKUP or a SQL JOIN — matching rows by a key column." },
          { q: "How do you split 'John Smith' in a Name column into First and Last name columns?", options: ["Use a nested IF formula", "Split Column → By Delimiter → Space", "VBA only", "Text to Columns is the only way"], answer: 1, explanation: "Power Query's 'Split Column → By Delimiter → Space' splits text at the space character into separate columns." },
          { difficulty: "average", type: "output", q: "Original data has columns: Product, Jan, Feb, Mar (sales per month). After Unpivot on Jan/Feb/Mar, what is the new structure?", code: "Original:\nProduct | Jan  | Feb  | Mar\nApple   | 100  | 150  | 120\n\nAfter Unpivot:", options: ["Still 4 columns", "3 columns: Product, Attribute (month), Value (sales)", "2 columns: Product, Total", "Product column is removed"], answer: 1, explanation: "Unpivot collapses the 3 month columns into Attribute (Jan/Feb/Mar) and Value (100/150/120) columns — 3 rows per product." },
          { difficulty: "average", type: "fill", q: "Complete the M code to add a 'Full Name' column combining First and Last:", code: "= Table.AddColumn(\n  Source,\n  \"Full Name\",\n  each [First] & ___BLANK1___ & ___BLANK2___\n)", blanks: [{ id: "BLANK1", options: ["\" \"", "\"+\"", "\",\"", "\" - \""], answer: 0 }, { id: "BLANK2", options: ["[First]", "[Name]", "[Last]", "Text.From([Last])"], answer: 2 }], explanation: "& concatenates text in M language. \" \" adds a space between first and last names." },
          { difficulty: "advanced", type: "freeform", q: "You receive a monthly report as a wide Excel file: rows are store names, columns are weeks (Week1, Week2 … Week52), values are sales. Describe how to transform this into a tidy table with columns: Store, Week, Sales — ready for trend analysis.", starterCode: "// Step 1:\n// Step 2:\n// Step 3:\n// Step 4:", patterns: ["Unpivot|unpivot", "Store|store.*column|select.*store", "Week|Attribute.*Week|rename.*Attribute", "Sales|Value.*Sales|rename.*Value", "type|Change Type|data type"], sampleAnswer: "// Step 1: Load the Excel file via Data → Get Data → From File → From Workbook\n// Step 2: Select only the 'Store' column, then right-click other columns and choose 'Unpivot Other Columns'\n//   This creates Attribute (Week1, Week2…) and Value (sales amounts) columns\n// Step 3: Rename 'Attribute' → 'Week' and 'Value' → 'Sales'\n// Step 4: Change 'Sales' column type to Whole Number or Decimal\n// Step 5: Close & Load to sheet or Data Model for PivotTable analysis" },
        ],
      },
    ],
  },
];
