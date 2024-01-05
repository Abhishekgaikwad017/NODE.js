const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
      const myUrl = url.parse(req.url,true);
      console.log(myUrl);
      switch(myUrl.pathname){
                  case "/": res.send("Home Page");
                  break;
                  case "/aboutus": res.send("About Us");
                  break;
                  case "/contact": res.send("Contact");
                  break;
                  default: res.send("404 : ERROR");
      }
})

myServer.listen(8000,()=>console.log("Server start"));
