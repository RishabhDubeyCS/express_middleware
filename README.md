# express_middleware


app.use(()=>{
    console.log("middleware 1");
})

using req&res object in middleware 


app.use((req,res)=>{
    console.log("Hy i am a middleware"
    )
    res.send("BYE)
})

If you need moreinformation so  check the express documentation useing middleware  https://expressjs.com/en/guide/using-middleware.html

also visit the blog.bitsrc.io 5 express middleware libraries Every Devloper should Know about middleware

5 Express Middleware Libraries Every Developer Should Know
Recommended Express middleware libraries

Helmet — Increase HTTP Header Security
Helmet helps you secure your Express apps by setting various HTTP headers.
2. Cookie-parser — Parse Cookies
Cookie-parser is a middleware that transfers cookies with client requests.


3. Passport — Access to Wide Range of Authentication Mechanisms
Passport is a simple unrobustive authentication middleware for Node.js.\




4. Morgan— Log HTTP Requests and Errors
Morgan is an HTTP request logger middleware for Node.js typically used for Express apps.


5. CORS — Allow or Restrict Requested Resources on a Web Server
CORS is a node.js package that provides a Connect/Express middleware for enabling CORS with a variety of options.




Conclusion
In this article, I discussed five different Express middleware libraries. Each of them has its advantages and drawbacks. It is up to you to choose the best library as per your project requirements.

So, I hope my recommendations will help you make a wise decision in selecting Express middleware libraries for your next project. And don't forget to share your experience in the comment section if you have already used them.












const express = require("express");

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

app.use((req, res) => {
    
    let  {query}=req.query;
    console.log(query);

  console.log("Hey I am middleware");
  res.send("Middle finished");
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





Creating Utility Middleware Logger 

app.use ((res, req , next)=>{
    req.responseTime = new Date(Date.now ()).toLocaleString();
    console.log(req.method , req.path , req.responseTime , req.hostname);
    next();
    
});










API Token as Query String 
Lets create a middleware for an api that checks if the access token was passed in the query string. or not 
