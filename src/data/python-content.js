export const PYTHON_MODULES = [
  {
    id: 1, title: "Python Basics", icon: "\u{1F40D}", color: "#3776AB", desc: "Variables, Types & I/O",
    lessons: [
      {
        title: "Variables & Types",
        slides: [
          { type: "teach", content: "A **variable** is a name that stores a value. In Python, you create one with `x = 10` \u2014 no type declaration needed. Python figures out the type automatically through **dynamic typing**.", highlight: "variable" },
          { type: "teach", content: "Python has core **data types**: `int` (whole numbers), `float` (decimals), `str` (text in quotes), and `bool` (`True`/`False`). Use `type()` to check any value\u2019s type.", highlight: "data types" },
        ],
        questions: [
          { q: "What is the type of the value 3.14 in Python?", options: ["int", "float", "str", "bool"], answer: 1 },
          { q: "Which is a valid variable assignment in Python?", options: ["int x = 5", "x := 5", "x = 5", "var x = 5"], answer: 2 },
          { q: "What does type('hello') return?", options: ["<class 'text'>", "<class 'str'>", "<class 'string'>", "<class 'char'>"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "x = 10\nx = 'hello'\nprint(type(x))", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "Error: cannot reassign"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the variable declarations:", code: "name = ___BLANK1___\nage = 25\nis_student = ___BLANK2___", blanks: [{ id: "BLANK1", options: ["Alice", "'Alice'", "str Alice", "Alice()"], answer: 1 }, { id: "BLANK2", options: ["'true'", "1", "True", "yes"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this code output?", code: "a = 5\nb = 2.0\nc = a + b\nprint(type(c))", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Create variables for a user profile: a string name, an integer age, a float gpa, and a boolean is_active. Then print each variable with its type using an f-string.", starterCode: "# Create your variables below\n\n# Print each with its type", patterns: ["name\\s*=\\s*['\"]", "age\\s*=\\s*\\d+", "gpa\\s*=\\s*\\d+\\.\\d+", "is_active\\s*=\\s*(True|False)", "f['\"].*type"], sampleAnswer: "name = 'Alice'\nage = 21\ngpa = 3.85\nis_active = True\nprint(f'{name} is {type(name)}')\nprint(f'{age} is {type(age)}')\nprint(f'{gpa} is {type(gpa)}')\nprint(f'{is_active} is {type(is_active)}')" },
          { difficulty: "advanced", type: "output", q: "What happens when this code runs?", code: "x = '5'\ny = 3\nprint(x + y)", options: ["8", "'53'", "TypeError: can only concatenate str to str", "53"], answer: 2 },
          { difficulty: "advanced", q: "Which statement about Python variables is TRUE?", options: ["Variables must be declared with a type keyword", "A variable can change its type after assignment", "Variable names can start with a number", "Python is statically typed"], answer: 1 },
        ]
      },
      {
        title: "Input & Output",
        slides: [
          { type: "teach", content: "Use **print()** to display output. You can print multiple items separated by commas: `print('Age:', 25)`. The `sep` and `end` parameters control spacing and line endings.", highlight: "print()" },
          { type: "teach", content: "Use **input()** to get user input. It always returns a **string**, so convert it with `int()` or `float()` for math: `age = int(input('Age: '))`.", highlight: "input()" },
        ],
        questions: [
          { q: "What does input() always return in Python?", options: ["An integer", "A boolean", "A string", "The type you need"], answer: 2 },
          { q: "Which correctly prints 'Hello World'?", options: ["echo 'Hello World'", "print('Hello World')", "console.log('Hello World')", "printf('Hello World')"], answer: 1 },
          { q: "To convert user input to an integer, use:", options: ["input(int())", "int(input())", "integer(input())", "input().int()"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "print('A', 'B', 'C', sep='-')", options: ["A B C", "A-B-C", "A,B,C", "ABC"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the code to get a number from the user:", code: "user_age = ___BLANK1___(___BLANK2___('Enter your age: '))", blanks: [{ id: "BLANK1", options: ["str", "int", "float", "number"], answer: 1 }, { id: "BLANK2", options: ["get", "read", "input", "scan"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this print?", code: "name = 'Alice'\nage = 30\nprint(f'I am {name} and I am {age} years old.')", options: ["I am {name} and I am {age} years old.", "I am Alice and I am 30 years old.", "Error: invalid syntax", "name age"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a program that asks the user for their name and birth year, then calculates and prints their approximate age in a formatted message.", starterCode: "# Get name and birth year from user\n\n# Calculate age\n\n# Print formatted result", patterns: ["input\\(", "int\\(", "2026|2025", "print.*f['\"]|print.*format"], sampleAnswer: "name = input('Enter your name: ')\nbirth_year = int(input('Enter your birth year: '))\nage = 2026 - birth_year\nprint(f'Hello {name}, you are approximately {age} years old.')" },
          { difficulty: "advanced", type: "output", q: "What does this code output?", code: "print('Hello', end=' ')\nprint('World', end='!\\n')\nprint('Python')", options: ["Hello\\nWorld!\\nPython", "Hello World!\\nPython", "Hello World!Python", "HelloWorld!Python"], answer: 1 },
          { difficulty: "advanced", type: "order", q: "Arrange the steps to safely convert user input to a float:", lines: ["Prompt the user with input()", "Receive the string value from input()", "Pass the string to float()", "Store the result in a variable", "Use the numeric value in calculations"], correctOrder: [0, 1, 2, 3, 4] },
        ]
      },
      {
        title: "Operators",
        slides: [
          { type: "teach", content: "Python has **arithmetic operators**: `+`, `-`, `*`, `/` (true division), `//` (floor division), `%` (modulo), and `**` (exponent). Floor division truncates the decimal: `7 // 2` gives `3`.", highlight: "arithmetic operators" },
          { type: "teach", content: "**Comparison operators** (`==`, `!=`, `<`, `>`, `<=`, `>=`) return `True` or `False`. **Logical operators** (`and`, `or`, `not`) combine conditions: `x > 0 and x < 10`.", highlight: "Comparison operators" },
        ],
        questions: [
          { q: "What does 7 // 2 return in Python?", options: ["3.5", "3", "4", "3.0"], answer: 1 },
          { q: "Which operator is used for exponentiation in Python?", options: ["^", "**", "exp()", "^^"], answer: 1 },
          { q: "What does 10 % 3 return?", options: ["3", "1", "0", "3.33"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "x = 17\nprint(x // 5)\nprint(x % 5)", options: ["3 and 2", "3.4 and 2", "3 and 0.4", "4 and 2"], answer: 0 },
          { difficulty: "average", type: "fill", q: "Complete the expression:", code: "x = 10\ny = 3\nquotient = x ___BLANK1___ y   # floor division\nremainder = x ___BLANK2___ y  # modulo", blanks: [{ id: "BLANK1", options: ["/", "//", "%", "**"], answer: 1 }, { id: "BLANK2", options: ["/", "//", "%", "**"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this evaluate to?", code: "a = True\nb = False\nprint(a and b)\nprint(a or b)\nprint(not a)", options: ["True, True, True", "False, True, False", "False, False, True", "True, False, False"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a program that checks if a number is both even AND divisible by 5. Use modulo and logical operators. Print the result as a boolean.", starterCode: "num = 30\n# Check if num is even AND divisible by 5", patterns: ["num\\s*%\\s*2\\s*==\\s*0", "num\\s*%\\s*5\\s*==\\s*0", "and"], sampleAnswer: "num = 30\nis_even = num % 2 == 0\nis_div_by_5 = num % 5 == 0\nresult = is_even and is_div_by_5\nprint(result)" },
          { difficulty: "advanced", type: "output", q: "What does this expression evaluate to?", code: "x = 5\nresult = not (x > 3 and x < 4) or x == 5\nprint(result)", options: ["True", "False", "None", "Error"], answer: 0 },
          { difficulty: "advanced", q: "What is the result of 2 ** 3 ** 2 in Python?", options: ["64 (left to right: 8 ** 2)", "512 (right to left: 2 ** 9)", "36", "Error: ambiguous"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 2, title: "Control Flow", icon: "\u{1F40D}", color: "#3776AB", desc: "Conditionals & Loops",
    lessons: [
      {
        title: "if / elif / else",
        slides: [
          { type: "teach", content: "**Conditional statements** let your program make decisions. Use `if` to check a condition, `elif` (else if) for additional checks, and `else` as a fallback. Python uses **indentation** (4 spaces) instead of braces.", highlight: "Conditional statements" },
          { type: "teach", content: "Conditions are expressions that evaluate to `True` or `False`. You can chain them with `and`, `or`, and `not`. Python also supports **ternary expressions**: `x = 'yes' if score > 50 else 'no'`.", highlight: "ternary expressions" },
        ],
        questions: [
          { q: "What keyword is Python's version of 'else if'?", options: ["elseif", "else if", "elif", "elsif"], answer: 2 },
          { q: "How does Python define code blocks?", options: ["Curly braces {}", "Parentheses ()", "Indentation", "Keywords begin/end"], answer: 2 },
          { q: "Which is a valid Python conditional?", options: ["if x == 5:", "if (x == 5) {", "if x = 5:", "if x == 5 then"], answer: 0 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "score = 75\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\nprint(grade)", options: ["A", "B", "C", "F"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the conditional statement:", code: "age = 20\n___BLANK1___ age >= 18:\n    print('Adult')\n___BLANK2___:\n    print('Minor')", blanks: [{ id: "BLANK1", options: ["when", "if", "check", "case"], answer: 1 }, { id: "BLANK2", options: ["otherwise", "default", "else", "elif"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this ternary expression produce?", code: "x = 7\nresult = 'even' if x % 2 == 0 else 'odd'\nprint(result)", options: ["even", "odd", "7", "Error"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a function that takes a numeric grade (0-100) and returns the letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). Include input validation.", starterCode: "def get_letter_grade(score):\n    # Your code here\n    pass", patterns: ["def\\s+get_letter_grade", "if.*>=?\\s*90", "elif.*>=?\\s*80", "elif.*>=?\\s*70", "return"], sampleAnswer: "def get_letter_grade(score):\n    if score < 0 or score > 100:\n        return 'Invalid'\n    elif score >= 90:\n        return 'A'\n    elif score >= 80:\n        return 'B'\n    elif score >= 70:\n        return 'C'\n    elif score >= 60:\n        return 'D'\n    else:\n        return 'F'" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "x = 15\nif x > 10:\n    if x > 20:\n        print('big')\n    else:\n        print('medium')\nelse:\n    print('small')", options: ["big", "medium", "small", "Error"], answer: 1 },
          { difficulty: "advanced", q: "Which of the following is truthy in Python?", options: ["0", "'' (empty string)", "None", "[-1]"], answer: 3 },
        ]
      },
      {
        title: "for & while Loops",
        slides: [
          { type: "teach", content: "A **for loop** iterates over a sequence (list, string, range). Syntax: `for item in sequence:`. Each iteration assigns the next value to `item`. Use it when you know how many iterations you need.", highlight: "for loop" },
          { type: "teach", content: "A **while loop** repeats as long as a condition is `True`: `while count < 10:`. Be careful to update your condition variable inside the loop or you\u2019ll create an **infinite loop**!", highlight: "while loop" },
        ],
        questions: [
          { q: "Which loop is best when you know the number of iterations?", options: ["while", "do-while", "for", "repeat"], answer: 2 },
          { q: "What does 'for char in \"hello\":' iterate over?", options: ["The word hello once", "Each character: h, e, l, l, o", "Nothing, it's invalid", "The length of hello"], answer: 1 },
          { q: "What causes an infinite loop?", options: ["Using for instead of while", "The loop condition never becomes False", "Printing inside a loop", "Using too many variables"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)", options: ["6", "10", "15", "21"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the while loop:", code: "count = 0\n___BLANK1___ count < 5:\n    print(count)\n    count ___BLANK2___ 1", blanks: [{ id: "BLANK1", options: ["for", "while", "loop", "repeat"], answer: 1 }, { id: "BLANK2", options: ["=", "==", "+=", "-="], answer: 2 }] },
          { difficulty: "average", type: "output", q: "How many times does this loop execute?", code: "for i in range(2, 10, 3):\n    print(i)", options: ["10 times", "3 times (prints 2, 5, 8)", "8 times", "4 times"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a while loop that finds the first power of 2 greater than 1000. Print the exponent and the value.", starterCode: "# Find first power of 2 > 1000\n", patterns: ["while", "2\\s*\\*\\*|pow\\(2", "1000", "print"], sampleAnswer: "exponent = 0\nvalue = 1\nwhile value <= 1000:\n    exponent += 1\n    value = 2 ** exponent\nprint(f'2^{exponent} = {value}')" },
          { difficulty: "advanced", type: "output", q: "What is the output of this nested loop?", code: "for i in range(3):\n    for j in range(2):\n        if i == j:\n            print(f'{i},{j}', end=' ')", options: ["0,0 1,1", "0,0 1,1 2,2", "0,1 1,0", "0,0 1,0 2,0"], answer: 0 },
          { difficulty: "advanced", type: "order", q: "Arrange this code to print a multiplication table for 5 (5x1 through 5x5):", lines: ["for i in range(1, 6):", "    result = 5 * i", "    print(f'5 x {i} = {result}')"], correctOrder: [0, 1, 2] },
        ]
      },
      {
        title: "range, break & continue",
        slides: [
          { type: "teach", content: "**range()** generates a sequence of numbers. `range(5)` gives 0-4, `range(2, 8)` gives 2-7, and `range(0, 10, 2)` gives even numbers 0-8. The stop value is always **exclusive**.", highlight: "range()" },
          { type: "teach", content: "**break** exits the loop immediately. **continue** skips the rest of the current iteration and jumps to the next one. The `else` clause on a loop runs only if the loop completes **without** a break.", highlight: "break" },
        ],
        questions: [
          { q: "What does range(3) produce?", options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3, 2, 1"], answer: 1 },
          { q: "What does 'break' do inside a loop?", options: ["Skips current iteration", "Exits the loop entirely", "Pauses the loop", "Restarts the loop"], answer: 1 },
          { q: "What does 'continue' do inside a loop?", options: ["Exits the loop", "Skips to the next iteration", "Repeats the current iteration", "Breaks the program"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "for i in range(10):\n    if i == 3:\n        continue\n    if i == 6:\n        break\n    print(i, end=' ')", options: ["0 1 2 3 4 5", "0 1 2 4 5", "0 1 2 4 5 6", "3 6"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the code to skip odd numbers:", code: "for num in range(10):\n    if num % 2 ___BLANK1___ 0:\n        ___BLANK2___\n    print(num)", blanks: [{ id: "BLANK1", options: ["==", "!=", ">", "<"], answer: 1 }, { id: "BLANK2", options: ["break", "continue", "pass", "return"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "for i in range(5):\n    pass\nelse:\n    print('Done')", options: ["Nothing", "Done", "0 1 2 3 4 Done", "Error"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a loop that searches for the first number between 2 and 100 that is divisible by both 7 and 11. Use break when found, and use the for/else pattern to print 'Not found' if none exists.", starterCode: "# Find first number divisible by both 7 and 11\n", patterns: ["for.*range", "%\\s*7\\s*==\\s*0", "%\\s*11\\s*==\\s*0", "break", "else"], sampleAnswer: "for num in range(2, 101):\n    if num % 7 == 0 and num % 11 == 0:\n        print(f'Found: {num}')\n        break\nelse:\n    print('Not found')" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "for i in range(3):\n    if i == 1:\n        break\nelse:\n    print('completed')\nprint('after loop')", options: ["completed\\nafter loop", "after loop", "completed", "1\\nafter loop"], answer: 1 },
          { difficulty: "advanced", q: "What does range(10, 0, -2) produce?", options: ["10, 8, 6, 4, 2, 0", "10, 8, 6, 4, 2", "0, 2, 4, 6, 8, 10", "Empty sequence"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 3, title: "Functions", icon: "\u{1F40D}", color: "#3776AB", desc: "def, Args & Scope",
    lessons: [
      {
        title: "Defining Functions",
        slides: [
          { type: "teach", content: "A **function** is a reusable block of code defined with **def**: `def greet(name): return f'Hello {name}'`. Functions promote the **DRY** principle (Don\u2019t Repeat Yourself).", highlight: "function" },
          { type: "teach", content: "Functions can **return** values with the `return` statement. Without `return`, a function returns `None`. You can return multiple values as a **tuple**: `return x, y`.", highlight: "return" },
        ],
        questions: [
          { q: "Which keyword defines a function in Python?", options: ["function", "func", "def", "define"], answer: 2 },
          { q: "What does a function return if there's no return statement?", options: ["0", "False", "'' (empty string)", "None"], answer: 3 },
          { q: "Which correctly calls a function named greet?", options: ["greet[]", "call greet()", "greet()", "greet::()"], answer: 2 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "def add(a, b):\n    return a + b\n\nresult = add(3, 4)\nprint(result)", options: ["34", "7", "None", "add(3, 4)"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the function definition:", code: "___BLANK1___ multiply(x, y):\n    ___BLANK2___ x * y\n\nprint(multiply(3, 5))", blanks: [{ id: "BLANK1", options: ["function", "def", "fn", "define"], answer: 1 }, { id: "BLANK2", options: ["print", "yield", "return", "output"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this function return?", code: "def get_stats(numbers):\n    return min(numbers), max(numbers), sum(numbers)\n\nresult = get_stats([3, 1, 4, 1, 5])\nprint(type(result))", options: ["<class 'list'>", "<class 'tuple'>", "<class 'int'>", "<class 'dict'>"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a function called 'is_palindrome' that takes a string and returns True if it reads the same forwards and backwards (case-insensitive). Test it with 'Racecar'.", starterCode: "def is_palindrome(text):\n    # Your code here\n    pass\n\n# Test\nprint(is_palindrome('Racecar'))", patterns: ["def\\s+is_palindrome", "lower\\(\\)|upper\\(\\)", "\\[::-1\\]|reversed", "return.*True|return.*=="], sampleAnswer: "def is_palindrome(text):\n    cleaned = text.lower()\n    return cleaned == cleaned[::-1]\n\nprint(is_palindrome('Racecar'))" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "def mystery(n):\n    if n <= 0:\n        return 0\n    return n + mystery(n - 1)\n\nprint(mystery(4))", options: ["4", "10", "6", "0"], answer: 1 },
          { difficulty: "advanced", type: "order", q: "Arrange the code to create a function that returns the factorial of n:", lines: ["def factorial(n):", "    if n <= 1:", "        return 1", "    return n * factorial(n - 1)"], correctOrder: [0, 1, 2, 3] },
        ]
      },
      {
        title: "Arguments & Parameters",
        slides: [
          { type: "teach", content: "Functions accept **positional arguments** (by order) and **keyword arguments** (by name): `greet('Alice', greeting='Hi')`. **Default parameters** provide fallback values: `def greet(name, greeting='Hello')`.", highlight: "keyword arguments" },
          { type: "teach", content: "Use **`*args`** to accept any number of positional arguments (as a tuple) and **`**kwargs`** to accept any number of keyword arguments (as a dict). This makes functions flexible.", highlight: "*args" },
        ],
        questions: [
          { q: "What are *args in a function definition?", options: ["Required arguments", "Variable-length positional arguments", "Keyword arguments", "Default arguments"], answer: 1 },
          { q: "What does **kwargs collect?", options: ["Positional arguments as a list", "Keyword arguments as a dictionary", "All arguments as a tuple", "Error arguments"], answer: 1 },
          { q: "In def greet(name='World'), what is 'World'?", options: ["A required argument", "A return value", "A default parameter value", "A global variable"], answer: 2 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))\nprint(greet('Bob', greeting='Hi'))", options: ["Hello, Alice!\\nHello, Bob!", "Hello, Alice!\\nHi, Bob!", "Alice, Hello!\\nBob, Hi!", "Error"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the function with *args:", code: "def total(___BLANK1___args):\n    return ___BLANK2___(args)\n\nprint(total(1, 2, 3, 4))", blanks: [{ id: "BLANK1", options: ["**", "*", "&", "..."], answer: 1 }, { id: "BLANK2", options: ["len", "max", "sum", "min"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this code output?", code: "def show(**kwargs):\n    for key, value in kwargs.items():\n        print(f'{key}={value}', end=' ')\n\nshow(a=1, b=2, c=3)", options: ["a=1 b=2 c=3", "{a:1, b:2, c:3}", "(a,1)(b,2)(c,3)", "Error"], answer: 0 },
          { difficulty: "advanced", type: "freeform", q: "Write a function 'make_profile' that accepts a required 'name', a default 'age' of 0, and any number of extra keyword arguments. Return a dictionary with all the information.", starterCode: "def make_profile(name, age=0, **kwargs):\n    # Your code here\n    pass", patterns: ["def\\s+make_profile.*\\*\\*kwargs", "\\{.*name.*age|dict\\(", "\\*\\*kwargs|\\.update"], sampleAnswer: "def make_profile(name, age=0, **kwargs):\n    profile = {'name': name, 'age': age}\n    profile.update(kwargs)\n    return profile" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "def func(a, b, /, c, *, d):\n    print(a, b, c, d)\n\nfunc(1, 2, c=3, d=4)", options: ["1 2 3 4", "Error: invalid syntax", "Error: too many arguments", "4 3 2 1"], answer: 0 },
          { difficulty: "advanced", q: "In Python, which argument order is correct in a function definition?", options: ["**kwargs, *args, defaults, positional", "positional, defaults, *args, **kwargs", "*args, positional, defaults, **kwargs", "defaults, positional, *args, **kwargs"], answer: 1 },
        ]
      },
      {
        title: "Lambda, Scope & Recursion",
        slides: [
          { type: "teach", content: "A **lambda** is an anonymous one-line function: `square = lambda x: x ** 2`. Lambdas are great for short operations, especially with `map()`, `filter()`, and `sorted()`.", highlight: "lambda" },
          { type: "teach", content: "Python uses the **LEGB** rule for variable scope: **L**ocal, **E**nclosing, **G**lobal, **B**uilt-in. Variables inside a function are local. Use the `global` keyword to modify a global variable from inside a function.", highlight: "LEGB" },
        ],
        questions: [
          { q: "What is a lambda function?", options: ["A named function", "An anonymous one-line function", "A class method", "A built-in function"], answer: 1 },
          { q: "In LEGB scope, what does 'L' stand for?", options: ["Library", "Local", "Lambda", "Linked"], answer: 1 },
          { q: "Which is a valid lambda expression?", options: ["lambda: x + 1", "lambda x: x + 1", "def lambda(x): x + 1", "lambda(x) = x + 1"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "nums = [1, 2, 3, 4, 5]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)", options: ["[1, 3, 5]", "[2, 4]", "[1, 2, 3, 4, 5]", "[False, True, False, True, False]"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the lambda and map usage:", code: "numbers = [1, 2, 3, 4]\nsquared = list(___BLANK1___(___BLANK2___ x: x ** 2, numbers))", blanks: [{ id: "BLANK1", options: ["filter", "map", "reduce", "apply"], answer: 1 }, { id: "BLANK2", options: ["def", "fn", "lambda", "func"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "x = 10\ndef change():\n    x = 20\n    print(x)\n\nchange()\nprint(x)", options: ["20\\n20", "10\\n10", "20\\n10", "Error"], answer: 2 },
          { difficulty: "advanced", type: "freeform", q: "Write a recursive function 'fibonacci(n)' that returns the nth Fibonacci number (0, 1, 1, 2, 3, 5, 8...). Include base cases for n=0 and n=1.", starterCode: "def fibonacci(n):\n    # Your code here\n    pass\n\n# Test\nfor i in range(8):\n    print(fibonacci(i), end=' ')", patterns: ["def\\s+fibonacci", "if.*n\\s*(==|<=)\\s*(0|1)", "fibonacci\\(n\\s*-\\s*1\\)", "fibonacci\\(n\\s*-\\s*2\\)", "return"], sampleAnswer: "def fibonacci(n):\n    if n <= 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nfor i in range(8):\n    print(fibonacci(i), end=' ')" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "def outer():\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n        return count\n    return inner\n\nfn = outer()\nprint(fn(), fn(), fn())", options: ["0 0 0", "1 1 1", "1 2 3", "Error"], answer: 2 },
          { difficulty: "advanced", q: "What is the main risk of naive recursion without memoization?", options: ["It can't return values", "Exponential time complexity from redundant calculations", "It doesn't support base cases", "Python doesn't allow recursion"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 4, title: "Data Structures", icon: "\u{1F40D}", color: "#3776AB", desc: "Lists, Dicts & Sets",
    lessons: [
      {
        title: "Lists & Tuples",
        slides: [
          { type: "teach", content: "A **list** is an ordered, mutable collection: `fruits = ['apple', 'banana']`. Use `.append()`, `.insert()`, `.pop()`, and `.remove()` to modify lists. Access items by **index** starting at 0.", highlight: "list" },
          { type: "teach", content: "A **tuple** is like a list but **immutable** \u2014 it cannot be changed after creation: `point = (3, 4)`. Use tuples for fixed data like coordinates. They\u2019re faster than lists and can be dictionary keys.", highlight: "tuple" },
        ],
        questions: [
          { q: "How do you add an item to the end of a list?", options: [".add()", ".append()", ".push()", ".insert()"], answer: 1 },
          { q: "What is the main difference between lists and tuples?", options: ["Lists use () and tuples use []", "Lists are mutable, tuples are immutable", "Tuples can only hold numbers", "Lists are faster"], answer: 1 },
          { q: "What does fruits[0] access?", options: ["The last item", "The first item", "The list length", "Nothing, lists start at 1"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])\nprint(nums[-2:])", options: ["[20, 30, 40] and [40, 50]", "[10, 20, 30] and [50]", "[20, 30, 40] and [30, 40, 50]", "[20, 30] and [40, 50]"], answer: 0 },
          { difficulty: "average", type: "fill", q: "Complete the list operations:", code: "colors = ['red', 'green', 'blue']\ncolors.___BLANK1___('yellow')\nremoved = colors.___BLANK2___(1)\nprint(colors)", blanks: [{ id: "BLANK1", options: ["add", "append", "push", "insert"], answer: 1 }, { id: "BLANK2", options: ["remove", "delete", "pop", "slice"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What happens when you run this code?", code: "t = (1, 2, 3)\nt[0] = 10\nprint(t)", options: ["(10, 2, 3)", "(1, 2, 3)", "TypeError: tuples are immutable", "[10, 2, 3]"], answer: 2 },
          { difficulty: "advanced", type: "freeform", q: "Write code that takes a list of numbers and returns a new list with duplicates removed while preserving the original order.", starterCode: "def remove_duplicates(lst):\n    # Your code here\n    pass\n\nprint(remove_duplicates([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]))", patterns: ["def\\s+remove_duplicates", "for|while", "not\\s+in|set\\(|seen"], sampleAnswer: "def remove_duplicates(lst):\n    seen = set()\n    result = []\n    for item in lst:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result\n\nprint(remove_duplicates([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]))" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)", options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"], answer: 1 },
          { difficulty: "advanced", q: "Which method creates a true independent copy of a nested list?", options: ["list.copy()", "list[:]", "copy.deepcopy(list)", "list(original)"], answer: 2 },
        ]
      },
      {
        title: "Dictionaries & Sets",
        slides: [
          { type: "teach", content: "A **dictionary** stores **key-value pairs**: `user = {'name': 'Alice', 'age': 25}`. Access values with `user['name']` or safely with `user.get('name')`. Keys must be immutable (strings, numbers, tuples).", highlight: "dictionary" },
          { type: "teach", content: "A **set** is an unordered collection of **unique** values: `{1, 2, 3}`. Sets support math operations: **union** (`|`), **intersection** (`&`), and **difference** (`-`). Great for removing duplicates!", highlight: "set" },
        ],
        questions: [
          { q: "How do you access a value in a dictionary?", options: ["dict.value", "dict(key)", "dict[key]", "dict->key"], answer: 2 },
          { q: "What makes sets special compared to lists?", options: ["Sets are ordered", "Sets only hold unique values", "Sets are immutable", "Sets hold key-value pairs"], answer: 1 },
          { q: "What does dict.get('key', 'default') do if key is missing?", options: ["Raises KeyError", "Returns None", "Returns 'default'", "Adds the key"], answer: 2 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "d = {'a': 1, 'b': 2, 'c': 3}\nd['b'] = 20\nd['d'] = 4\nprint(len(d))\nprint(list(d.keys()))", options: ["3\\n['a', 'b', 'c']", "4\\n['a', 'b', 'c', 'd']", "4\\n['a', 'c', 'd']", "5\\n['a', 'b', 'c', 'd']"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the set operations:", code: "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nunion = a ___BLANK1___ b\nintersect = a ___BLANK2___ b", blanks: [{ id: "BLANK1", options: ["+", "|", "&", "-"], answer: 1 }, { id: "BLANK2", options: ["+", "|", "&", "-"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this code output?", code: "person = {'name': 'Alice', 'age': 25}\nfor key, value in person.items():\n    print(f'{key}: {value}')", options: ["name\\nage", "Alice\\n25", "name: Alice\\nage: 25", "('name', 'Alice')\\n('age', 25)"], answer: 2 },
          { difficulty: "advanced", type: "freeform", q: "Write a function that takes a string and returns a dictionary with each character as a key and its count as the value. Ignore spaces.", starterCode: "def char_count(text):\n    # Your code here\n    pass\n\nprint(char_count('hello world'))", patterns: ["def\\s+char_count", "for.*in.*text", "\\[.*\\].*=|get\\(|Counter|dict"], sampleAnswer: "def char_count(text):\n    counts = {}\n    for char in text:\n        if char != ' ':\n            counts[char] = counts.get(char, 0) + 1\n    return counts\n\nprint(char_count('hello world'))" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a - b)\nprint(a ^ b)", options: ["{1} and {1, 4}", "{1} and {2, 3}", "{1, 2, 3} and {4}", "{} and {1, 2, 3, 4}"], answer: 0 },
          { difficulty: "advanced", q: "Which of the following CANNOT be a dictionary key?", options: ["(1, 2)", "'hello'", "[1, 2]", "42"], answer: 2 },
        ]
      },
      {
        title: "Comprehensions",
        slides: [
          { type: "teach", content: "A **list comprehension** creates a list in one line: `[x**2 for x in range(5)]` gives `[0, 1, 4, 9, 16]`. Add conditions with `if`: `[x for x in range(10) if x % 2 == 0]` gives even numbers.", highlight: "list comprehension" },
          { type: "teach", content: "Python also has **dict comprehensions** `{k: v for k, v in items}`, **set comprehensions** `{x for x in items}`, and **generator expressions** `(x for x in items)` which are memory-efficient for large datasets.", highlight: "dict comprehensions" },
        ],
        questions: [
          { q: "What does [x*2 for x in range(4)] produce?", options: ["[0, 1, 2, 3]", "[2, 4, 6, 8]", "[0, 2, 4, 6]", "[1, 2, 3, 4]"], answer: 2 },
          { q: "Which adds a filter to a list comprehension?", options: ["[x for x in list where x > 0]", "[x for x in list if x > 0]", "[x if x > 0 for x in list]", "[x for x in list when x > 0]"], answer: 1 },
          { q: "What type does {x**2 for x in range(5)} create?", options: ["list", "tuple", "set", "dict"], answer: 2 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "words = ['Hello', 'World', 'Python']\nresult = [w.lower() for w in words if len(w) > 4]\nprint(result)", options: ["['hello', 'world', 'python']", "['hello', 'world']", "['world', 'python']", "['Hello', 'World', 'Python']"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the dict comprehension:", code: "names = ['alice', 'bob', 'charlie']\nname_lengths = {___BLANK1___: ___BLANK2___ for name in names}", blanks: [{ id: "BLANK1", options: ["name", "len(name)", "names", "i"], answer: 0 }, { id: "BLANK2", options: ["name", "len(name)", "name[0]", "True"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does this produce?", code: "matrix = [[1, 2], [3, 4], [5, 6]]\nflat = [num for row in matrix for num in row]\nprint(flat)", options: ["[[1, 2], [3, 4], [5, 6]]", "[1, 2, 3, 4, 5, 6]", "[[1, 3, 5], [2, 4, 6]]", "[6, 15]"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a dict comprehension that inverts a dictionary (swaps keys and values). Handle the case where values might not be unique by using the last occurrence.", starterCode: "original = {'a': 1, 'b': 2, 'c': 3}\n# Invert the dictionary", patterns: ["\\{.*:.*for.*in.*\\.items\\(\\)", "v.*:.*k|value.*:.*key"], sampleAnswer: "original = {'a': 1, 'b': 2, 'c': 3}\ninverted = {v: k for k, v in original.items()}\nprint(inverted)" },
          { difficulty: "advanced", type: "output", q: "What does this code produce?", code: "result = {x: x**2 for x in range(5) if x % 2 != 0}\nprint(result)", options: ["{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}", "{1: 1, 3: 9}", "{0: 0, 2: 4, 4: 16}", "{1: 2, 3: 6}"], answer: 1 },
          { difficulty: "advanced", type: "order", q: "Arrange the code to flatten and filter a 2D list using comprehension:", lines: ["matrix = [[1, -2, 3], [-4, 5, -6]]", "positives = [", "    num for row in matrix", "    for num in row", "    if num > 0", "]"], correctOrder: [0, 1, 2, 3, 4, 5] },
        ]
      }
    ]
  },
  {
    id: 5, title: "File I/O & Modules", icon: "\u{1F40D}", color: "#3776AB", desc: "Files, Imports & Packages",
    lessons: [
      {
        title: "Reading & Writing Files",
        slides: [
          { type: "teach", content: "Open files with **open()** and the **with** statement for automatic cleanup: `with open('file.txt', 'r') as f:`. Modes include `'r'` (read), `'w'` (write/overwrite), `'a'` (append), and `'r+'` (read+write).", highlight: "with" },
          { type: "teach", content: "Read methods: **`.read()`** gets the entire file, **`.readline()`** gets one line, **`.readlines()`** gets a list of all lines. Write with **`.write()`** for strings or **`.writelines()`** for lists.", highlight: ".read()" },
        ],
        questions: [
          { q: "Which file mode opens a file for reading only?", options: ["'w'", "'a'", "'r'", "'x'"], answer: 2 },
          { q: "Why use 'with open(...)' instead of just open()?", options: ["It's faster", "It automatically closes the file", "It reads binary files", "It creates the file first"], answer: 1 },
          { q: "What does .readlines() return?", options: ["A single string", "A list of lines", "A dictionary", "An integer count"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code do?", code: "with open('data.txt', 'w') as f:\n    f.write('Hello\\n')\n    f.write('World\\n')\n\nwith open('data.txt', 'r') as f:\n    content = f.read()\n    print(content.strip())", options: ["Hello World", "Hello\\nWorld", "HelloWorld", "Error: file not found"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the file reading code:", code: "___BLANK1___ open('log.txt', 'r') ___BLANK2___ f:\n    for line in f:\n        print(line.strip())", blanks: [{ id: "BLANK1", options: ["using", "with", "open", "file"], answer: 1 }, { id: "BLANK2", options: ["=", "as", "to", "into"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does mode 'a' do?", code: "# File already contains: 'Hello'\nwith open('file.txt', 'a') as f:\n    f.write(' World')\n\nwith open('file.txt', 'r') as f:\n    print(f.read())", options: [" World", "Hello World", "World", "Error"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write code that reads a CSV-like file, parses each line into fields, and creates a list of dictionaries. Assume the first line is the header.", starterCode: "# Assume data.csv contains:\n# name,age,city\n# Alice,30,NYC\n# Bob,25,LA\n\ndef read_csv(filename):\n    # Your code here\n    pass", patterns: ["open\\(", "split\\(", "strip\\(|rstrip", "append|\\[\\]", "dict|zip|\\{"], sampleAnswer: "def read_csv(filename):\n    with open(filename, 'r') as f:\n        lines = f.readlines()\n    headers = lines[0].strip().split(',')\n    records = []\n    for line in lines[1:]:\n        values = line.strip().split(',')\n        records.append(dict(zip(headers, values)))\n    return records" },
          { difficulty: "advanced", type: "output", q: "What happens when this code runs?", code: "with open('test.txt', 'r') as f:\n    first = f.readline()\n    second = f.readline()\n    f.seek(0)\n    all_text = f.read()\n    print(f.tell() > 0)", options: ["False", "True", "Error: can't seek after readline", "None"], answer: 1 },
          { difficulty: "advanced", q: "When should you use binary mode ('rb'/'wb') instead of text mode?", options: ["For large text files", "For files with unicode characters", "For images, PDFs, or any non-text data", "For JSON files"], answer: 2 },
        ]
      },
      {
        title: "Imports & Standard Library",
        slides: [
          { type: "teach", content: "Use **import** to load modules: `import math` then `math.sqrt(16)`. Use **from** to import specific items: `from math import sqrt`. Alias with **as**: `import numpy as np`.", highlight: "import" },
          { type: "teach", content: "Python\u2019s **standard library** is massive. Key modules: `os` (file system), `sys` (system), `json` (data format), `datetime` (dates/times), `random` (randomness), `collections` (advanced data structures).", highlight: "standard library" },
        ],
        questions: [
          { q: "Which correctly imports the sqrt function from math?", options: ["import sqrt from math", "from math import sqrt", "include math.sqrt", "use math.sqrt"], answer: 1 },
          { q: "What does 'import os' give you access to?", options: ["Web requests", "File system operations", "Database queries", "GUI elements"], answer: 1 },
          { q: "What does 'as' do in 'import numpy as np'?", options: ["Installs the module", "Creates a shorter alias", "Imports all functions", "Converts the module type"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "from datetime import datetime\n\nnow = datetime.now()\nprint(type(now).__name__)", options: ["str", "date", "datetime", "time"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the import statements:", code: "___BLANK1___ json\n___BLANK2___ os.path import exists\n\ndata = json.loads('{\"name\": \"Alice\"}')\nprint(exists('test.txt'))", blanks: [{ id: "BLANK1", options: ["from", "import", "include", "use"], answer: 1 }, { id: "BLANK2", options: ["import", "from", "include", "get"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does this code produce?", code: "import random\nrandom.seed(42)\nprint(random.randint(1, 10))\nrandom.seed(42)\nprint(random.randint(1, 10))", options: ["Two different random numbers", "Two identical numbers", "Error: can't reset seed", "42 and 42"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write code using the collections module to find the 3 most common words in a text string (case-insensitive). Use Counter.", starterCode: "from collections import Counter\n\ntext = 'the cat sat on the mat the cat'\n# Find 3 most common words", patterns: ["Counter", "split\\(\\)", "most_common", "lower\\(\\)"], sampleAnswer: "from collections import Counter\n\ntext = 'the cat sat on the mat the cat'\nwords = text.lower().split()\ncounts = Counter(words)\nprint(counts.most_common(3))" },
          { difficulty: "advanced", type: "order", q: "Arrange the code to read and parse a JSON file:", lines: ["import json", "with open('config.json', 'r') as f:", "    data = json.load(f)", "print(data['settings']['theme'])"], correctOrder: [0, 1, 2, 3] },
          { difficulty: "advanced", q: "What is the difference between 'import json' and 'from json import *'?", options: ["No difference, they're identical", "'import json' requires json.func() prefix; 'from json import *' puts all names in your namespace, risking name collisions", "'from json import *' is faster", "'import json' only loads part of the module"], answer: 1 },
        ]
      },
      {
        title: "pip & Packages",
        slides: [
          { type: "teach", content: "**pip** is Python\u2019s package installer. Install packages from **PyPI** with `pip install requests`. Manage project dependencies with a **requirements.txt** file: `pip freeze > requirements.txt`.", highlight: "pip" },
          { type: "teach", content: "Use **virtual environments** to isolate project dependencies: `python -m venv myenv` creates one, then activate it. This prevents version conflicts between projects. Each venv has its own pip and packages.", highlight: "virtual environments" },
        ],
        questions: [
          { q: "What command installs a Python package?", options: ["python install pkg", "pip install pkg", "npm install pkg", "apt install pkg"], answer: 1 },
          { q: "What is a virtual environment for?", options: ["Running Python faster", "Isolating project dependencies", "Encrypting your code", "Creating GUIs"], answer: 1 },
          { q: "What does 'pip freeze' output?", options: ["The Python version", "A list of installed packages with versions", "Frozen compiled code", "System information"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this requirements.txt specify?", code: "requests==2.28.1\nflask>=2.0,<3.0\nnumpy~=1.23.0", options: ["Exact version for all three", "Exact requests, range for flask, compatible release for numpy", "Latest versions for all", "Minimum versions for all"], answer: 1 },
          { difficulty: "average", type: "order", q: "Arrange the steps to set up a new Python project with dependencies:", lines: ["Create a virtual environment: python -m venv venv", "Activate the environment: source venv/bin/activate", "Install packages: pip install requests flask", "Freeze dependencies: pip freeze > requirements.txt"], correctOrder: [0, 1, 2, 3] },
          { difficulty: "average", type: "fill", q: "Complete the virtual environment commands:", code: "# Create the environment\npython -m ___BLANK1___ myenv\n\n# Install from requirements\npip install ___BLANK2___ requirements.txt", blanks: [{ id: "BLANK1", options: ["env", "venv", "virtualenv", "pip"], answer: 1 }, { id: "BLANK2", options: ["-f", "-r", "--from", "--file"], answer: 1 }] },
          { difficulty: "advanced", type: "freeform", q: "Write a setup for a Python package structure. Create a proper __init__.py and show how to make a local package importable with a setup.py or pyproject.toml.", starterCode: "# Project structure:\n# mypackage/\n#   __init__.py\n#   utils.py\n# setup.py\n\n# Write the __init__.py\n\n# Write the setup.py", patterns: ["__init__", "from.*import|import", "setup\\(|pyproject", "name.*=|version.*="], sampleAnswer: "# __init__.py\nfrom .utils import helper_function\n\n__version__ = '0.1.0'\n\n# setup.py\nfrom setuptools import setup, find_packages\n\nsetup(\n    name='mypackage',\n    version='0.1.0',\n    packages=find_packages(),\n)" },
          { difficulty: "advanced", q: "What is the purpose of __init__.py in a Python package?", options: ["It initializes variables at startup", "It marks a directory as a Python package and controls what gets imported", "It runs first when Python starts", "It installs dependencies automatically"], answer: 1 },
          { difficulty: "advanced", type: "output", q: "What does 'pip install -e .' do in a project directory with setup.py?", code: "# In project root containing setup.py\npip install -e .", options: ["Installs the package globally", "Installs in editable/development mode, so code changes take effect without reinstalling", "Exports the package to PyPI", "Creates an executable from the package"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 6, title: "OOP", icon: "\u{1F40D}", color: "#3776AB", desc: "Classes & Inheritance",
    lessons: [
      {
        title: "Classes & Objects",
        slides: [
          { type: "teach", content: "A **class** is a blueprint for creating objects. Define one with `class Dog:`. The **__init__** method is the constructor, called when creating an instance. Use **self** to refer to the current instance.", highlight: "class" },
          { type: "teach", content: "**Instance attributes** belong to each object (`self.name = name`). **Class attributes** are shared across all instances. **Methods** are functions defined inside a class that operate on instance data.", highlight: "Instance attributes" },
        ],
        questions: [
          { q: "What keyword creates a class in Python?", options: ["object", "struct", "class", "type"], answer: 2 },
          { q: "What does __init__ do in a class?", options: ["Destroys the object", "Initializes a new instance", "Imports modules", "Creates a class variable"], answer: 1 },
          { q: "What does 'self' refer to?", options: ["The class itself", "The current instance", "The parent class", "A global variable"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "class Dog:\n    species = 'Canine'\n    def __init__(self, name):\n        self.name = name\n\nd1 = Dog('Rex')\nd2 = Dog('Buddy')\nprint(d1.species, d1.name)\nprint(d2.species, d2.name)", options: ["Canine Rex\\nCanine Buddy", "Rex Canine\\nBuddy Canine", "Dog Rex\\nDog Buddy", "Error"], answer: 0 },
          { difficulty: "average", type: "fill", q: "Complete the class definition:", code: "___BLANK1___ BankAccount:\n    def __init__(___BLANK2___, owner, balance=0):\n        self.owner = owner\n        self.balance = balance", blanks: [{ id: "BLANK1", options: ["def", "class", "object", "struct"], answer: 1 }, { id: "BLANK2", options: ["this", "self", "cls", "me"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does this code output?", code: "class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\na = Counter()\nb = Counter()\nc = Counter()\nprint(Counter.count)", options: ["1", "2", "3", "0"], answer: 2 },
          { difficulty: "advanced", type: "freeform", q: "Create a BankAccount class with deposit, withdraw, and get_balance methods. Withdrawals should not allow the balance to go below 0.", starterCode: "class BankAccount:\n    # Your code here\n    pass\n\n# Test\nacc = BankAccount('Alice', 100)\nacc.deposit(50)\nacc.withdraw(30)\nprint(acc.get_balance())", patterns: ["class\\s+BankAccount", "__init__.*self.*owner.*balance|__init__.*self.*balance.*owner", "def\\s+deposit", "def\\s+withdraw", "if.*balance|if.*<\\s*0|if.*>\\s*self"], sampleAnswer: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            print('Insufficient funds')\n            return\n        self.balance -= amount\n\n    def get_balance(self):\n        return self.balance\n\nacc = BankAccount('Alice', 100)\nacc.deposit(50)\nacc.withdraw(30)\nprint(acc.get_balance())" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "class MyClass:\n    data = []\n    def add(self, item):\n        self.data.append(item)\n\na = MyClass()\nb = MyClass()\na.add(1)\nb.add(2)\nprint(b.data)", options: ["[2]", "[1, 2]", "[1]", "[]"], answer: 1 },
          { difficulty: "advanced", q: "Why does the code above print [1, 2] instead of [2]?", options: ["It's a bug in Python", "Class attributes (mutable ones like lists) are shared across all instances", "b inherits from a", "append() affects all objects"], answer: 1 },
        ]
      },
      {
        title: "Inheritance & Polymorphism",
        slides: [
          { type: "teach", content: "**Inheritance** lets a class reuse another class\u2019s code: `class Dog(Animal):`. The child class inherits all methods and attributes. Use **super()** to call the parent\u2019s methods: `super().__init__(name)`.", highlight: "Inheritance" },
          { type: "teach", content: "**Polymorphism** means different classes can share the same method name but behave differently. A `Dog.speak()` returns 'Woof' while `Cat.speak()` returns 'Meow'. Python also supports **multiple inheritance**: `class C(A, B):`.", highlight: "Polymorphism" },
        ],
        questions: [
          { q: "How do you create a child class in Python?", options: ["class Child extends Parent:", "class Child inherits Parent:", "class Child(Parent):", "class Child -> Parent:"], answer: 2 },
          { q: "What does super() do?", options: ["Creates a new superclass", "Calls the parent class's method", "Deletes the parent class", "Makes the class abstract"], answer: 1 },
          { q: "What is polymorphism?", options: ["Having many classes", "Same method name, different behavior in different classes", "Using multiple constructors", "Changing a variable's type"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof!'\n\nclass Cat(Animal):\n    def speak(self):\n        return 'Meow!'\n\nanimals = [Dog('Rex'), Cat('Whiskers'), Animal('Unknown')]\nfor a in animals:\n    print(f'{a.name}: {a.speak()}')", options: ["Rex: Some sound\\nWhiskers: Some sound\\nUnknown: Some sound", "Rex: Woof!\\nWhiskers: Meow!\\nUnknown: Some sound", "Error: cannot iterate", "Rex: Woof!\\nWhiskers: Meow!\\nUnknown: Woof!"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the inheritance:", code: "class Shape:\n    def area(self):\n        return 0\n\nclass Circle(___BLANK1___):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(___BLANK2___):\n        return 3.14159 * self.radius ** 2", blanks: [{ id: "BLANK1", options: ["object", "Shape", "Circle", "Base"], answer: 1 }, { id: "BLANK2", options: ["self", "()", "self, radius", "cls"], answer: 0 }] },
          { difficulty: "average", type: "output", q: "What does isinstance() check here?", code: "class Vehicle:\n    pass\n\nclass Car(Vehicle):\n    pass\n\nc = Car()\nprint(isinstance(c, Car))\nprint(isinstance(c, Vehicle))", options: ["True\\nFalse", "True\\nTrue", "False\\nTrue", "False\\nFalse"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Create a class hierarchy: Shape (base) with an abstract-like area() method, Rectangle(Shape) and Circle(Shape) as subclasses. Each should implement area(). Write a function that takes a list of shapes and returns the total area.", starterCode: "class Shape:\n    pass\n\nclass Rectangle(Shape):\n    pass\n\nclass Circle(Shape):\n    pass\n\ndef total_area(shapes):\n    pass", patterns: ["class\\s+Shape", "class\\s+Rectangle\\(Shape\\)", "class\\s+Circle\\(Shape\\)", "def\\s+area", "def\\s+total_area", "sum|\\+.*area"], sampleAnswer: "class Shape:\n    def area(self):\n        raise NotImplementedError\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14159 * self.radius ** 2\n\ndef total_area(shapes):\n    return sum(s.area() for s in shapes)" },
          { difficulty: "advanced", type: "output", q: "What is the MRO (Method Resolution Order) output?", code: "class A:\n    def greet(self): return 'A'\n\nclass B(A):\n    def greet(self): return 'B'\n\nclass C(A):\n    def greet(self): return 'C'\n\nclass D(B, C):\n    pass\n\nprint(D().greet())", options: ["A", "B", "C", "Error: ambiguous"], answer: 1 },
          { difficulty: "advanced", q: "In Python's MRO for class D(B, C), what order are classes searched?", options: ["D -> A -> B -> C", "D -> B -> C -> A", "D -> B -> A -> C", "D -> C -> B -> A"], answer: 1 },
        ]
      },
      {
        title: "Magic Methods & Encapsulation",
        slides: [
          { type: "teach", content: "**Magic methods** (dunder methods) customize class behavior. `__str__` defines how `print()` displays your object. `__repr__` provides a developer-friendly string. `__len__`, `__eq__`, `__lt__` enable built-in operations.", highlight: "Magic methods" },
          { type: "teach", content: "**Encapsulation** hides internal details. Prefix attributes with `_` for convention-private or `__` for name-mangled private. Use **@property** to create getters and setters that look like attribute access.", highlight: "Encapsulation" },
        ],
        questions: [
          { q: "What magic method does print() call on an object?", options: ["__print__", "__str__", "__display__", "__show__"], answer: 1 },
          { q: "What does the __ (double underscore) prefix do to an attribute?", options: ["Makes it truly private", "Triggers name mangling for privacy", "Deletes the attribute", "Makes it a class method"], answer: 1 },
          { q: "What decorator creates a getter property?", options: ["@getter", "@property", "@get", "@attr"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n    def __str__(self):\n        return f'{self.title} ({self.pages}p)'\n    def __len__(self):\n        return self.pages\n\nb = Book('Python 101', 350)\nprint(b)\nprint(len(b))", options: ["<Book object>\\n350", "Python 101 (350p)\\n350", "Python 101\\n350", "Error: __len__ not valid"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the property decorator:", code: "class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n\n    ___BLANK1___\n    def celsius(self):\n        return self._celsius\n\n    @celsius.___BLANK2___\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError('Too cold!')\n        self._celsius = value", blanks: [{ id: "BLANK1", options: ["@getter", "@property", "@attribute", "@field"], answer: 1 }, { id: "BLANK2", options: ["getter", "setter", "property", "value"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does this code produce?", code: "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    def __repr__(self):\n        return f'Vector({self.x}, {self.y})'\n\nv = Vector(1, 2) + Vector(3, 4)\nprint(v)", options: ["Vector(4, 6)", "(4, 6)", "Error: can't add objects", "Vector(1, 2) + Vector(3, 4)"], answer: 0 },
          { difficulty: "advanced", type: "freeform", q: "Create a class 'Money' that supports addition, subtraction, and comparison using magic methods. It should store amount and currency, and only allow operations between same currencies.", starterCode: "class Money:\n    # Your code here\n    pass\n\n# Test\na = Money(10.50, 'USD')\nb = Money(5.25, 'USD')\nprint(a + b)\nprint(a > b)", patterns: ["class\\s+Money", "__init__.*self.*amount.*currency|__init__.*self.*currency.*amount", "__add__", "__gt__|__lt__|__eq__", "currency.*==|same.*currency|raise.*ValueError|raise.*TypeError"], sampleAnswer: "class Money:\n    def __init__(self, amount, currency):\n        self.amount = amount\n        self.currency = currency\n\n    def _check_currency(self, other):\n        if self.currency != other.currency:\n            raise ValueError('Currency mismatch')\n\n    def __add__(self, other):\n        self._check_currency(other)\n        return Money(self.amount + other.amount, self.currency)\n\n    def __sub__(self, other):\n        self._check_currency(other)\n        return Money(self.amount - other.amount, self.currency)\n\n    def __gt__(self, other):\n        self._check_currency(other)\n        return self.amount > other.amount\n\n    def __repr__(self):\n        return f'Money({self.amount}, {self.currency})'\n\na = Money(10.50, 'USD')\nb = Money(5.25, 'USD')\nprint(a + b)\nprint(a > b)" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "class Secret:\n    def __init__(self):\n        self.__hidden = 42\n\ns = Secret()\ntry:\n    print(s.__hidden)\nexcept AttributeError:\n    print(s._Secret__hidden)", options: ["42 (from __hidden)", "42 (from _Secret__hidden)", "AttributeError", "None"], answer: 1 },
          { difficulty: "advanced", q: "Which magic method is called for the 'in' operator (e.g., 'x in my_obj')?", options: ["__in__", "__has__", "__contains__", "__includes__"], answer: 2 },
        ]
      }
    ]
  },
  {
    id: 7, title: "Error Handling", icon: "\u{1F40D}", color: "#3776AB", desc: "Exceptions & Debugging",
    lessons: [
      {
        title: "try / except",
        slides: [
          { type: "teach", content: "**Exceptions** are errors that occur during execution. Use **try/except** to handle them gracefully instead of crashing: `try: risky_code() except ValueError: handle_error()`. Always catch **specific** exceptions.", highlight: "try/except" },
          { type: "teach", content: "The full syntax includes **else** (runs if no exception) and **finally** (always runs, for cleanup). You can also access the error message: `except ValueError as e: print(e)`.", highlight: "finally" },
        ],
        questions: [
          { q: "What happens if an exception is NOT caught?", options: ["It's ignored", "The program crashes", "It becomes a warning", "It retries automatically"], answer: 1 },
          { q: "Which block runs only if NO exception occurs?", options: ["except", "finally", "else", "try"], answer: 2 },
          { q: "Which block ALWAYS runs, even if an exception occurs?", options: ["else", "except", "try", "finally"], answer: 3 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "try:\n    x = int('hello')\nexcept ValueError:\n    print('A')\nexcept TypeError:\n    print('B')\nelse:\n    print('C')\nfinally:\n    print('D')", options: ["A\\nD", "B\\nD", "C\\nD", "A\\nC\\nD"], answer: 0 },
          { difficulty: "average", type: "fill", q: "Complete the error handling:", code: "___BLANK1___:\n    result = 10 / 0\n___BLANK2___ ZeroDivisionError as e:\n    print(f'Error: {e}')", blanks: [{ id: "BLANK1", options: ["catch", "try", "handle", "check"], answer: 1 }, { id: "BLANK2", options: ["catch", "handle", "except", "error"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\n    finally:\n        print('Done')\n\nresult = safe_divide(10, 0)\nprint(result)", options: ["Done\\nNone", "None\\nDone", "Done\\nError", "Error\\nDone"], answer: 0 },
          { difficulty: "advanced", type: "freeform", q: "Write a function 'safe_convert' that takes a string and tries to convert it to int, then float, and returns the converted value. If both fail, return None. Use nested try/except.", starterCode: "def safe_convert(value):\n    # Your code here\n    pass\n\nprint(safe_convert('42'))     # 42\nprint(safe_convert('3.14'))   # 3.14\nprint(safe_convert('hello'))  # None", patterns: ["def\\s+safe_convert", "try", "except.*ValueError|except.*Exception", "int\\(", "float\\(", "return\\s+None"], sampleAnswer: "def safe_convert(value):\n    try:\n        return int(value)\n    except ValueError:\n        try:\n            return float(value)\n        except ValueError:\n            return None\n\nprint(safe_convert('42'))\nprint(safe_convert('3.14'))\nprint(safe_convert('hello'))" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "def func():\n    try:\n        return 'try'\n    finally:\n        return 'finally'\n\nprint(func())", options: ["try", "finally", "try\\nfinally", "Error"], answer: 1 },
          { difficulty: "advanced", q: "Why is 'except Exception' preferred over bare 'except:'?", options: ["It's faster", "Bare except catches SystemExit and KeyboardInterrupt, which should usually propagate", "There's no difference", "It catches more exceptions"], answer: 1 },
        ]
      },
      {
        title: "Custom Exceptions & Raising",
        slides: [
          { type: "teach", content: "**Raise** exceptions with `raise ValueError('Invalid input')`. Create **custom exceptions** by subclassing `Exception`: `class InvalidAgeError(Exception): pass`. Custom exceptions make error handling domain-specific.", highlight: "Raise" },
          { type: "teach", content: "Use **exception chaining** with `raise NewError() from original_error` to preserve the cause. Re-raise the current exception with bare `raise` inside an except block to propagate it after logging.", highlight: "exception chaining" },
        ],
        questions: [
          { q: "How do you manually trigger an exception?", options: ["throw Error", "raise ValueError()", "new Exception()", "error.raise()"], answer: 1 },
          { q: "Custom exceptions should inherit from:", options: ["object", "BaseException", "Exception", "Error"], answer: 2 },
          { q: "What does bare 'raise' do inside an except block?", options: ["Raises a new error", "Re-raises the current exception", "Ignores the error", "Exits the program"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "class NegativeError(Exception):\n    pass\n\ndef check_positive(n):\n    if n < 0:\n        raise NegativeError(f'{n} is negative')\n    return n\n\ntry:\n    check_positive(-5)\nexcept NegativeError as e:\n    print(e)", options: ["-5", "NegativeError", "-5 is negative", "Error"], answer: 2 },
          { difficulty: "average", type: "fill", q: "Complete the custom exception:", code: "class ValidationError(___BLANK1___):\n    pass\n\ndef validate_age(age):\n    if age < 0:\n        ___BLANK2___ ValidationError('Age cannot be negative')\n    return age", blanks: [{ id: "BLANK1", options: ["object", "Error", "Exception", "BaseException"], answer: 2 }, { id: "BLANK2", options: ["throw", "raise", "return", "print"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does this code do?", code: "try:\n    x = int('abc')\nexcept ValueError as e:\n    print(f'Caught: {e}')\n    raise  # What happens here?", options: ["Prints the error and continues normally", "Prints the error then re-raises the ValueError", "Creates an infinite loop", "Raises a new RuntimeError"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Create a custom exception hierarchy for a banking app: BankError (base), InsufficientFundsError, and InvalidAmountError. Each should include a meaningful message. Write a withdraw function that uses them.", starterCode: "# Define exception hierarchy\n\n# Write withdraw function\ndef withdraw(balance, amount):\n    pass", patterns: ["class\\s+BankError\\(Exception\\)", "class\\s+InsufficientFundsError\\(BankError\\)", "class\\s+InvalidAmountError\\(BankError\\)", "def\\s+withdraw", "raise"], sampleAnswer: "class BankError(Exception):\n    pass\n\nclass InsufficientFundsError(BankError):\n    def __init__(self, balance, amount):\n        super().__init__(f'Cannot withdraw ${amount}: only ${balance} available')\n\nclass InvalidAmountError(BankError):\n    def __init__(self, amount):\n        super().__init__(f'Invalid amount: ${amount}')\n\ndef withdraw(balance, amount):\n    if amount <= 0:\n        raise InvalidAmountError(amount)\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount" },
          { difficulty: "advanced", type: "output", q: "What does exception chaining show here?", code: "try:\n    try:\n        1 / 0\n    except ZeroDivisionError as e:\n        raise ValueError('Bad calc') from e\nexcept ValueError as e:\n    print(e)\n    print(type(e.__cause__).__name__)", options: ["Bad calc\\nValueError", "Bad calc\\nZeroDivisionError", "ZeroDivisionError\\nValueError", "Error: chaining not allowed"], answer: 1 },
          { difficulty: "advanced", q: "When should you use exception chaining with 'from'?", options: ["Always, for every exception", "When converting one exception type to another while preserving the original cause", "Only for custom exceptions", "Never, it's deprecated"], answer: 1 },
        ]
      },
      {
        title: "Debugging & Logging",
        slides: [
          { type: "teach", content: "**Debugging** means finding and fixing bugs. Use `print()` for quick checks, Python\u2019s built-in **pdb** debugger for step-through debugging (`breakpoint()` in Python 3.7+), and **assertions** for sanity checks: `assert x > 0, 'x must be positive'`.", highlight: "Debugging" },
          { type: "teach", content: "The **logging** module replaces print statements in production. It has levels: `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`. Configure once with `logging.basicConfig(level=logging.INFO)` and use throughout your code.", highlight: "logging" },
        ],
        questions: [
          { q: "What does assert x > 0 do when x is -1?", options: ["Nothing", "Prints a warning", "Raises AssertionError", "Sets x to 0"], answer: 2 },
          { q: "Which logging level is most severe?", options: ["ERROR", "WARNING", "CRITICAL", "DEBUG"], answer: 2 },
          { q: "What built-in function triggers Python's debugger?", options: ["debug()", "breakpoint()", "pdb()", "inspect()"], answer: 1 },
          { difficulty: "average", type: "output", q: "What happens when this code runs?", code: "import logging\nlogging.basicConfig(level=logging.WARNING)\n\nlogging.debug('Debug message')\nlogging.info('Info message')\nlogging.warning('Warning message')\nlogging.error('Error message')", options: ["All 4 messages print", "Only Warning and Error print", "Only Error prints", "Nothing prints"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the assertion:", code: "def set_age(age):\n    ___BLANK1___ age >= 0, ___BLANK2___\n    return age", blanks: [{ id: "BLANK1", options: ["check", "assert", "verify", "validate"], answer: 1 }, { id: "BLANK2", options: ["'Age cannot be negative'", "True", "age", "ValueError"], answer: 0 }] },
          { difficulty: "average", type: "order", q: "Arrange logging levels from least to most severe:", lines: ["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"], correctOrder: [0, 1, 2, 3, 4] },
          { difficulty: "advanced", type: "freeform", q: "Set up a logging configuration that writes to both console and a file, with timestamps and log levels. Use different levels for each handler (DEBUG for file, INFO for console).", starterCode: "import logging\n\n# Configure logging with two handlers\n", patterns: ["logging", "FileHandler|basicConfig.*filename", "StreamHandler|console", "setLevel|level.*=", "Formatter|format.*="], sampleAnswer: "import logging\n\nlogger = logging.getLogger('myapp')\nlogger.setLevel(logging.DEBUG)\n\nfile_handler = logging.FileHandler('app.log')\nfile_handler.setLevel(logging.DEBUG)\n\nconsole_handler = logging.StreamHandler()\nconsole_handler.setLevel(logging.INFO)\n\nformatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')\nfile_handler.setFormatter(formatter)\nconsole_handler.setFormatter(formatter)\n\nlogger.addHandler(file_handler)\nlogger.addHandler(console_handler)" },
          { difficulty: "advanced", type: "output", q: "What does this assert statement do in production?", code: "# Running with: python -O script.py\nx = -5\nassert x > 0, 'x must be positive'\nprint('Passed')", options: ["Raises AssertionError", "Prints 'Passed' (asserts are disabled with -O flag)", "Prints x must be positive", "Silently sets x to 0"], answer: 1 },
          { difficulty: "advanced", q: "Why should assertions NOT be used for input validation in production code?", options: ["They are too slow", "They can be globally disabled with the -O flag, skipping critical checks", "They don't work with strings", "They only work in test files"], answer: 1 },
        ]
      }
    ]
  },
  {
    id: 8, title: "Python in Practice", icon: "\u{1F40D}", color: "#3776AB", desc: "APIs, JSON & Regex",
    lessons: [
      {
        title: "Working with APIs",
        slides: [
          { type: "teach", content: "The **requests** library makes HTTP calls simple: `response = requests.get('https://api.example.com/data')`. Check `response.status_code` for success (200) and use `response.json()` to parse the JSON body.", highlight: "requests" },
          { type: "teach", content: "APIs use **REST** conventions: GET (read), POST (create), PUT (update), DELETE (remove). Include **headers** for authentication (`Authorization: Bearer token`) and send data with the `json=` parameter.", highlight: "REST" },
        ],
        questions: [
          { q: "Which library is commonly used for HTTP requests in Python?", options: ["http", "urllib", "requests", "fetch"], answer: 2 },
          { q: "What does response.json() do?", options: ["Sends JSON data", "Parses the response body as JSON", "Creates a JSON file", "Validates JSON format"], answer: 1 },
          { q: "What status code means 'success'?", options: ["404", "500", "200", "301"], answer: 2 },
          { difficulty: "average", type: "output", q: "What does this code do?", code: "import requests\n\nresponse = requests.get('https://api.github.com/users/octocat')\nif response.status_code == 200:\n    data = response.json()\n    print(data['login'])\nelse:\n    print('Failed')", options: ["Prints the HTML of GitHub", "Prints 'octocat'", "Prints the entire JSON object", "Prints 'Failed'"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the API call:", code: "import requests\n\nresponse = requests.___BLANK1___('https://api.example.com/users',\n    ___BLANK2___={'name': 'Alice', 'email': 'alice@example.com'})", blanks: [{ id: "BLANK1", options: ["get", "post", "send", "fetch"], answer: 1 }, { id: "BLANK2", options: ["data", "body", "json", "params"], answer: 2 }] },
          { difficulty: "average", type: "output", q: "What does the params argument do here?", code: "import requests\n\nresponse = requests.get(\n    'https://api.example.com/search',\n    params={'q': 'python', 'limit': 5}\n)\nprint(response.url)", options: ["https://api.example.com/search", "https://api.example.com/search?q=python&limit=5", "Error: params not valid for GET", "https://api.example.com/search/python/5"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a function that fetches data from a paginated API. It should follow 'next' page links until there are no more pages. Return all collected items.", starterCode: "import requests\n\ndef fetch_all(base_url):\n    # Your code here\n    pass", patterns: ["requests\\.get", "while|for", "json\\(\\)", "append|extend|\\+=", "next|page|url"], sampleAnswer: "import requests\n\ndef fetch_all(base_url):\n    all_items = []\n    url = base_url\n    while url:\n        response = requests.get(url)\n        response.raise_for_status()\n        data = response.json()\n        all_items.extend(data['items'])\n        url = data.get('next', None)\n    return all_items" },
          { difficulty: "advanced", type: "order", q: "Arrange the steps for making an authenticated API request:", lines: ["import requests", "headers = {'Authorization': 'Bearer YOUR_TOKEN'}", "response = requests.get('https://api.example.com/me', headers=headers)", "response.raise_for_status()", "data = response.json()"], correctOrder: [0, 1, 2, 3, 4] },
          { difficulty: "advanced", q: "What does response.raise_for_status() do?", options: ["Always raises an exception", "Raises an HTTPError if status code is 4xx or 5xx", "Returns the status code", "Logs the status to a file"], answer: 1 },
        ]
      },
      {
        title: "JSON & Data Processing",
        slides: [
          { type: "teach", content: "**JSON** (JavaScript Object Notation) is the standard data format for APIs. Use `json.loads(string)` to parse a JSON string and `json.dumps(obj)` to convert Python objects to JSON. Use `json.load(file)` / `json.dump(obj, file)` for files.", highlight: "JSON" },
          { type: "teach", content: "Python dicts map directly to JSON objects, lists to arrays. Use `json.dumps(data, indent=2)` for pretty-printing. Handle nested JSON with chained key access: `data['users'][0]['name']`.", highlight: "json.dumps" },
        ],
        questions: [
          { q: "What does json.loads() do?", options: ["Loads a JSON file", "Parses a JSON string into Python objects", "Saves data to JSON", "Validates JSON syntax"], answer: 1 },
          { q: "What Python type does a JSON object become?", options: ["list", "tuple", "dict", "set"], answer: 2 },
          { q: "What is the difference between json.load() and json.loads()?", options: ["No difference", "load() reads from a file, loads() parses a string", "loads() is faster", "load() only works with URLs"], answer: 1 },
          { difficulty: "average", type: "output", q: "What does this code print?", code: "import json\n\ndata = {'name': 'Alice', 'scores': [90, 85, 92]}\njson_str = json.dumps(data)\nprint(type(json_str).__name__)\n\nparsed = json.loads(json_str)\nprint(type(parsed).__name__)", options: ["dict\\ndict", "str\\ndict", "str\\nstr", "dict\\nstr"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the JSON file operations:", code: "import json\n\n# Read JSON from file\nwith open('data.json', 'r') as f:\n    data = json.___BLANK1___(f)\n\n# Write JSON to file\nwith open('output.json', 'w') as f:\n    json.___BLANK2___(data, f, indent=2)", blanks: [{ id: "BLANK1", options: ["loads", "load", "read", "parse"], answer: 1 }, { id: "BLANK2", options: ["dumps", "dump", "write", "save"], answer: 1 }] },
          { difficulty: "average", type: "output", q: "What does this code produce?", code: "import json\n\ndata = {'b': 2, 'a': 1, 'c': 3}\nresult = json.dumps(data, sort_keys=True, indent=2)\nprint(result)", options: ["{'b': 2, 'a': 1, 'c': 3}", "Sorted JSON with a, b, c keys and 2-space indentation", "{'a': 1, 'b': 2, 'c': 3}", "Error: sort_keys not valid"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a function that reads a JSON file of user records, filters users by a minimum age, and writes the filtered results to a new JSON file.", starterCode: "import json\n\ndef filter_users(input_file, output_file, min_age):\n    # Your code here\n    pass", patterns: ["json\\.load", "json\\.dump", "for.*in|filter\\(", "age.*>=|>=.*age|>.*min_age", "open\\(.*w"], sampleAnswer: "import json\n\ndef filter_users(input_file, output_file, min_age):\n    with open(input_file, 'r') as f:\n        users = json.load(f)\n\n    filtered = [u for u in users if u['age'] >= min_age]\n\n    with open(output_file, 'w') as f:\n        json.dump(filtered, f, indent=2)" },
          { difficulty: "advanced", type: "output", q: "What does this code print?", code: "import json\n\ntext = '{\"name\": \"Alice\", \"age\": 30}'\ndata = json.loads(text)\ndata['scores'] = (90, 85)\nresult = json.dumps(data)\nprint('tuple' in result)\nprint(json.loads(result)['scores'])", options: ["True\\n(90, 85)", "False\\n[90, 85]", "True\\n[90, 85]", "Error: tuple not serializable"], answer: 1 },
          { difficulty: "advanced", q: "Which Python type is NOT directly JSON-serializable?", options: ["dict", "list", "set", "str"], answer: 2 },
        ]
      },
      {
        title: "Web Scraping & Regex",
        slides: [
          { type: "teach", content: "**Web scraping** extracts data from websites. Use `requests` to fetch HTML and **BeautifulSoup** to parse it: `soup = BeautifulSoup(html, 'html.parser')`. Find elements with `soup.find()`, `soup.find_all()`, or CSS selectors.", highlight: "Web scraping" },
          { type: "teach", content: "**Regular expressions** (regex) match text patterns. Use the `re` module: `re.search(r'\\d+', text)` finds the first number. Key patterns: `\\d` (digit), `\\w` (word char), `.` (any char), `*` (0+), `+` (1+), `?` (0 or 1).", highlight: "Regular expressions" },
        ],
        questions: [
          { q: "Which library parses HTML for web scraping?", options: ["requests", "BeautifulSoup", "json", "re"], answer: 1 },
          { q: "What does \\d+ match in regex?", options: ["One digit", "One or more digits", "Letters and digits", "Whitespace"], answer: 1 },
          { q: "What does re.findall() return?", options: ["The first match", "A match object", "A list of all matches", "True or False"], answer: 2 },
          { difficulty: "average", type: "output", q: "What does this code extract?", code: "import re\n\ntext = 'Contact us at info@example.com or support@test.org'\nemails = re.findall(r'[\\w.]+@[\\w.]+', text)\nprint(emails)", options: ["['info@example.com']", "['info@example.com', 'support@test.org']", "['example.com', 'test.org']", "['info', 'support']"], answer: 1 },
          { difficulty: "average", type: "fill", q: "Complete the web scraping code:", code: "from bs4 import BeautifulSoup\nimport requests\n\nhtml = requests.get('https://example.com').text\nsoup = BeautifulSoup(html, 'html.parser')\ntitles = soup.___BLANK1___(___BLANK2___)", blanks: [{ id: "BLANK1", options: ["find", "find_all", "search", "query"], answer: 1 }, { id: "BLANK2", options: ["'h1'", "'title'", "'div'", "'p'"], answer: 0 }] },
          { difficulty: "average", type: "output", q: "What does re.sub() do here?", code: "import re\n\ntext = 'Hello   World   Python'\nresult = re.sub(r'\\s+', ' ', text)\nprint(result)", options: ["HelloWorldPython", "Hello World Python", "Hello   World   Python", "Hello-World-Python"], answer: 1 },
          { difficulty: "advanced", type: "freeform", q: "Write a regex pattern that validates email addresses. It should match standard emails like user@domain.com but reject invalid ones. Use re.match() and test with examples.", starterCode: "import re\n\ndef is_valid_email(email):\n    # Your code here\n    pass\n\n# Tests\nprint(is_valid_email('user@example.com'))\nprint(is_valid_email('invalid@'))\nprint(is_valid_email('test.user@domain.co.uk'))", patterns: ["re\\.match|re\\.fullmatch|re\\.search", "\\[a-zA-Z\\]|\\\\w", "@", "\\.", "\\$|\\\\Z|fullmatch"], sampleAnswer: "import re\n\ndef is_valid_email(email):\n    pattern = r'^[\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,}$'\n    return bool(re.match(pattern, email))\n\nprint(is_valid_email('user@example.com'))\nprint(is_valid_email('invalid@'))\nprint(is_valid_email('test.user@domain.co.uk'))" },
          { difficulty: "advanced", type: "output", q: "What does this regex code extract?", code: "import re\n\ntext = 'Order #123 costs $45.99 and Order #456 costs $12.50'\nmatches = re.findall(r'#(\\d+).*?\\$(\\d+\\.\\d+)', text)\nprint(matches)", options: ["['#123', '#456']", "[('123', '45.99'), ('456', '12.50')]", "['45.99', '12.50']", "['123', '456', '45.99', '12.50']"], answer: 1 },
          { difficulty: "advanced", q: "What is the ethical/legal concern with web scraping?", options: ["It uses too much memory", "Websites may prohibit it in their robots.txt or Terms of Service, and aggressive scraping can overload servers", "Python doesn't officially support it", "It only works on static sites"], answer: 1 },
        ]
      }
    ]
  }
];
