# express_middleware

This repository demonstrates **Express.js middleware concepts** with clear examples, interview notes, and commonly used middleware libraries.

---
Built-in middleware

Custom middleware (commented)

Logger middleware

API token authentication

Multiple middleware chaining

Route-level middleware

Proper routing setup

---

## 📌 What is Express.js?

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

---
## 📌 What is Middleware?

Middleware is a function that has access to:

* `req` (request)
* `res` (response)
* `next` (to move to the next middleware)

It executes **between the request and the response**.

---

## 🔹 Basic Middleware Example

```js
app.use(() => {
  console.log("middleware 1");
});
```

---

## 🔹 Using `req` & `res` Object in Middleware

```js
app.use((req, res) => {
  console.log("Hi, I am a middleware");
  res.send("BYE");
});
```

📌 Once `res.send()` is called, the request–response cycle ends.

---

## 📖 Official Documentation

If you need more information, check the Express documentation:
👉 [https://expressjs.com/en/guide/using-middleware.html](https://expressjs.com/en/guide/using-middleware.html)

Also visit: **blog.bitsrc.io**
👉 *5 Express Middleware Libraries Every Developer Should Know*

---

## ⭐ 5 Express Middleware Libraries Every Developer Should Know

### 1️⃣ Helmet — Increase HTTP Header Security

Helmet helps secure Express applications by setting various HTTP headers.

---

### 2️⃣ Cookie-parser — Parse Cookies

Cookie-parser is a middleware that parses cookies attached to client requests.

---

### 3️⃣ Passport — Authentication Middleware

Passport is a simple and flexible authentication middleware for Node.js that supports multiple strategies.

-

### 4️⃣ Morgan — Log HTTP Requests and Errors

Morgan is an HTTP request logger middleware commonly used in Express applications.

---

### 5️⃣ CORS — Control Cross-Origin Requests

CORS allows or restricts requested resources on a web server from different origins.

---

## 🔚 Conclusion

Each middleware library has its own advantages and drawbacks.
The choice of middleware depends on **project requirements**, **security needs**, and **application scale**.

---

## 🧪 Example: Express App with Middleware

```js
const express = require("express");

const app = express();
const PORT = 5000;

// Built-in middleware
app.use(express.json());

app.use((req, res) => {
  let { query } = req.query;
  console.log(query);

  console.log("Hey I am middleware");
  res.send("Middleware finished");
});

// Routes
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

app.get("/random", (req, res) => {
  res.send("Hi I am random");
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 🛠 Creating Utility Middleware (Logger)

```js
app.use((req, res, next) => {
  req.responseTime = new Date(Date.now()).toLocaleString();
  console.log(req.method, req.path, req.responseTime, req.hostname);
  next();
});
```

---

## 🔐 API Token as Query String

Create middleware to check if an access token is passed in the query string.

---

## 🔁 Example 1: Global Multiple Middlewares

```js
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});
```

---

## 🔁 Example 2: Route-Level Multiple Middlewares

```js
const checkToken = (req, res, next) => {
  if (req.query.token === "giveaccess") {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};

const logRoute = (req, res, next) => {
  console.log("API route hit");
  next();
};

app.get("/api", checkToken, logRoute, (req, res) => {
  res.send("Secure Data");
});
```

---

## 🧠 Key Rules (Interview Gold)

* Middlewares execute **top to bottom**
* `next()` → moves to next middleware
* `res.send()` → ends the request
* **Order matters** 🔥

---

## 🎯 Interview One-Liner

> **Multiple middleware means chaining more than one middleware function to handle a single request in a sequential manner.**
> **Middleware functions can be used to perform various tasks such as logging, authentication, and data validation.**

---

## 📚 References

* [https://expressjs.com/en/guide/using-middleware.html](https://expressjs.com/en/guide/using-middleware.html)