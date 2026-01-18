const express = require("express");

const app = express();
const PORT = 5000;

/* =====================================
   Built-in Middleware
===================================== */
app.use(express.json());

/* =====================================
   Custom Middleware Examples (Commented)
===================================== */
// app.use((req, res, next) => {
//   console.log("Hey I am middleware");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("Hey i am 2nd middleware");
//   return next();
// });

/* =====================================
   Human-readable Time Logger (Commented)
===================================== */
// app.use((req, res, next) => {
//   req.time = new Date().toLocaleString();

//   console.log(
//     req.method,
//     req.hostname,
//     req.path,
//     req.time
//   );

//   next();
// });

/* =====================================
   404 Error Middleware (Commented)
===================================== */
// app.use((req, res) => {
//   res.status(404).send("Page not found");
// });

/* =====================================
   API Token Middleware (Commented)
===================================== */
// app.use("/api", (req, res, next) => {
//   let { token } = req.query;

//   if (token === "giveaccess") {
//     return next();
//   }

//   res.status(403).send("Access Denied");
// });

// app.get("/api", (req, res) => {
//   res.send("data");
// });

/* =====================================
   Multiple Middlewares
===================================== */
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

/*
 Test URLs:
 ✔ http://localhost:5000/api?token=giveaccess
 ✖ http://localhost:5000/api
*/

/* =====================================
   Route-Level Middleware
===================================== */
app.use("/random", (req, res, next) => {
  console.log("Random route middleware");
  next();
});



/* =====================================
   Routes
===================================== */
app.get("/", (req, res) => {
  res.send(" Hey i am Root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});



app.get('/err', (req, res)=>{
abcd = abcd
})
app.use((err, req, res , next )=>{
  console.log("---------Error--------!")
  next(err);
})


/* =====================================
   Server Start
===================================== */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
