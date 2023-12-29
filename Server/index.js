// const http = require("http");
// const fs = require("fs"); //fs is used for file system fro I/O operation

// const myser = http.createServer((req,res)=>{
      // console.log("new req rec");
      // console.log(req.headers);/
      // const log = `${Date.now()}: ${req.url} : server is access \n`;
      // fs.appendFile("./login.txt",log,(err)=>{  //using NOn blocking / async not want to engage a=our all threads
      //       res.end("Hello from server");
      // })
      // console.log(req);
    
// }); 



// myser.listen(8000,()=>console.log("Server start"));




const http = require("http");
const fs = require("fs");



const myServer = http.createServer((req,res)=>{
      if(req.url === "/favicon.ico") return res.end();
      const log = `${Date.now()}: ${req.url} : server access \n`;
      fs.appendFile("./login.txt",log, (err,data)=>{
            switch(req.url){
                  case "/": res.end("Home Page");
                  break;
                  case "/aboutus": res.end("About Us");
                  break;
                  case "/contact": res.end("Contact");
                  break;
                  default: res.end("404 : ERROR");
            }
      })
})

myServer.listen(8000,()=>console.log("server start"));