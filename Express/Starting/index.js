const  express = require("express");
const http = require("http");

let app = express();

app.get("/",(req,res)=>{
      return res.send("hello from home page");
});

app.get("/about",(req,res)=>{
      return res.send(`hey ${req.query.name}`);
});

app.get("/contact",(req,res)=>{
      return res.send("Contact : "+req.query.pno);
});



app.listen(8000,()=>console.log("Server Started"));



//alternate method
// const myServer = http.createServer(app);

// myServer.listen(8000,()=>console.log("Server start"));



















