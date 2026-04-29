# JavaScript Learning Roadmap

This repository shows a practical JavaScript learning journey from fundamentals to advanced concepts.  
The work already includes hands-on practice with arrays, strings, DOM manipulation, browser storage, object-oriented programming, asynchronous JavaScript, and modern ES6+ features.

As a senior software engineer, I would describe this codebase as an early-stage learning lab with strong topic coverage. The next step is to organize these topics clearly, improve naming and consistency, and keep building small projects that reinforce each concept with clean examples.

## Topics Already Covered

### 1. Array Methods and Data Transformation
You have already practiced:

- `filter()`
- `find()`
- `map()`
- `reduce()`
- truthy and falsy value filtering

Examples from your work:

- `truthy-filter.js`
- `advanced-javascript/array-methods-practice-2025-07-11.html`
- `advanced-javascript/array-find-filter-practice.html`

Example:

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
const squared = numbers.map((num) => num * num);
const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(evenNumbers);
console.log(squared);
console.log(total);
```

### 2. String Manipulation
You have practiced string searching and replacement using `slice()`.

Examples from your work:

- `extra-exercises/string-slice-replace.js`
- `extra-exercises/string-replace-example.js`

Example:

```js
let text = "This is the World War II started in 1945";

for (let i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "Second World War" + text.slice(i + 12);
  }
}

console.log(text);
```

### 3. DOM Manipulation and Events
You have already worked with:

- `getElementById()`
- `querySelector()`
- form handling
- `addEventListener()`
- updating `innerHTML`

Examples from your work:

- `dom-projects/dom-basics.js`
- `dom-projects/login-page.js`
- `dom-projects/todo-home.js`
- `dom-projects/registration-page.js`

Example:

```js
const form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});
```

### 4. Browser Storage
You have practiced:

- `localStorage`
- `sessionStorage`
- storing objects with `JSON.stringify()`
- reading objects with `JSON.parse()`

Examples from your work:

- `dom-projects/login-page.js`
- `dom-projects/todo-home.js`
- `dom-projects/registration-page.js`
- `advanced-javascript/storage-and-fetch-notes-2025-05-30.html`

Example:

```js
const user = {
  fullName: "Ali Khan",
  email: "ali@example.com",
};

localStorage.setItem("currentUser", JSON.stringify(user));

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser.fullName);
```

### 5. Object-Oriented Programming
You have already explored:

- classes
- constructors
- inheritance
- encapsulation with private fields
- methods

Examples from your work:

- `object-oriented-programming/oop-basics.html`
- `object-oriented-programming/bank-account-inheritance.html`
- `advanced-javascript/modules/optional-chaining.html`

Example:

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} ${this.model} is driving`);
  }
}

class ElectricCar extends Car {
  constructor(brand, model, batteryLife) {
    super(brand, model);
    this.batteryLife = batteryLife;
  }
}

const myCar = new ElectricCar("Tesla", "Model X", 90);
myCar.drive();
```

### 6. Destructuring, Rest, and Spread
You have already practiced:

- array destructuring
- object destructuring
- nested destructuring
- default values
- rest operator
- spread operator

Examples from your work:

- `advanced-javascript/destructuring.html`
- `advanced-javascript/rest-and-spread.html`
- `advanced-javascript/spread-operator.html`
- `advanced-javascript/destructuring-exercises.js`

Example:

```js
const person = {
  name: "Osama",
  age: 22,
  city: "Peshawar",
};

const { name, age, ...rest } = person;
console.log(name);
console.log(age);
console.log(rest);
```

### 7. Set, Map, Optional Chaining, and Generators
You have already touched:

- `Set`
- `Map`
- optional chaining `?.`
- generator functions

Examples from your work:

- `advanced-javascript/set.html`
- `advanced-javascript/modules/optional-chaining.html`
- `advanced-javascript/generator-functions.html`

Example:

```js
const uniqueNumbers = [...new Set([1, 2, 2, 3, 4, 4])];
console.log(uniqueNumbers);

const user = {
  profile: {
    city: "Peshawar",
  },
};

console.log(user?.profile?.city);
```

### 8. Asynchronous JavaScript
You have already practiced:

- `setTimeout()`
- callback-based flow
- Promise chains
- `fetch()`
- `async/await`
- API data handling

Examples from your work:

- `advanced-javascript/asynchronous.html`
- `advanced-javascript/async-user-posts.html`
- `advanced-javascript/callback-hell/callback-hell.html`

Example:

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
```

## Advanced Topics I Will Cover With Examples

The next stage should focus on writing cleaner, more scalable JavaScript. These are the advanced topics I will cover with examples:

### 1. Closures

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
```

### 2. Higher-Order Functions

```js
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result = applyOperation(5, 3, (x, y) => x + y);
console.log(result);
```

### 3. `this`, `call`, `apply`, and `bind`

```js
const user = {
  name: "Faisal",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const anotherUser = { name: "Osama" };
user.greet.call(anotherUser);
```

### 4. Error Handling and Defensive Coding

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}
```

### 5. ES Modules

```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";

console.log(add(2, 3));
```

### 6. Array and Object Problem Solving

```js
const users = [
  { name: "Ali", active: true },
  { name: "Ahmed", active: false },
  { name: "Talha", active: true },
];

const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);
```

### 7. Async Patterns for Real Projects

```js
async function getUserPosts(userId) {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  const user = await userResponse.json();
  const posts = await postResponse.json();

  return { user, posts };
}
```

### 8. Clean Code and Project Structure
I will also cover:

- better variable naming
- consistent file structure
- reusable functions
- separating UI logic from business logic
- input validation
- debugging strategy

## Senior Engineer Notes

Your repository already shows strong curiosity and hands-on effort. That matters a lot.

The biggest improvement areas are:

- fix small syntax mistakes early
- use consistent naming
- separate practice code from project code
- prefer small reusable functions
- validate user input before storing or rendering data
- use `setItem()` when writing to `localStorage`
- use correct page paths in redirects

For example, in a few files you used `localStorage.getItem()` where `localStorage.setItem()` was expected. That is a very common learning-stage mistake, and fixing these details will make your projects much more reliable.

## Final Summary

This JavaScript work already covers a meaningful set of practical topics:

- arrays and string methods
- DOM manipulation
- events and forms
- local storage and session storage
- OOP and inheritance
- destructuring, rest, and spread
- Set, Map, generators, and optional chaining
- asynchronous JavaScript with `fetch`, Promises, and `async/await`

The next goal is not only to learn more topics, but to write cleaner, safer, and more production-style JavaScript with examples and mini projects.
