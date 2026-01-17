const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 5000;

// built-in middleware
app.use(express.json());

// Morgan logger (HTTP request logger)
app.use(morgan("dev"));

// custom logger middleware
app.use((req, res, next) => {
  req.time = new Date().toLocaleString();

  console.log(
    req.method,
    req.hostname,
    req.path,
    req.time
  );

  next();
});

// routes
app.get("/", (req, res) => {
  res.send(" Hey i am Root 🚀");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
