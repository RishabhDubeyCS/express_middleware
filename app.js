const express = require("express");

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());
app.use((req, res) => {
  console.log("Hey I am middleware");
  res.send("Hey I am middleware");
});


// test route
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

app.get("/random",(res,req)=>{
    res.send("Hi i am root ")
})


// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
