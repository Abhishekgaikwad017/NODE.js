const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
      const myUrl = url.parse(req.url,true);
      console.log(myUrl);
      switch(myUrl.pathname){
                  case "/": res.end("Home Page");
                  break;
                  case "/aboutus": res.end("About Us");
                  break;
                  case "/contact": res.end("Contact");
                  break;
                  default: res.end("404 : ERROR");
      }
})

myServer.listen(8000,()=>console.log("Server start"));