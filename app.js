const express = require("express");

const app = express();
const PORT = 5000;

// built-in middleware
app.use(express.json());

// // custom middleware
// app.use((req, res, next) => {
//   console.log("Hey I am middleware");
//  return next();
// });

// app.use((req, res, next )=>{
//     console.log("Hey i am  2nd middleware");
//    return next();
// })



// Human-readable time (BEST)
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


//Custom middleware of 404 error Error Handling Middleware 
app.use ((req, res )=>{
    res.status(404).send("Page not found");
})

// route-level middleware for /random
app.use("/random", (req, res, next) => {
  console.log("Random route middleware");
  next();
});


// routes
app.get("/", (req, res) => {
  res.send(" Hey i am Root🚀");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});


app.get("/login", (req, res) => {
  res.send("this is a login page");
});


// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
