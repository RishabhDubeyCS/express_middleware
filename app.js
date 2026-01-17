const express = require("express");

const app = express();
const PORT = 5000;

// built-in middleware
app.use(express.json());

// custom middleware
app.use((req, res, next) => {
  console.log("Hey I am middleware");
 return next();
});

app.use((req, res, next )=>{
    console.log("Hey i am  2nd middleware");
   return next();
})

// routes
app.get("/", (req, res) => {
  res.send(" Hey i am Root🚀");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
