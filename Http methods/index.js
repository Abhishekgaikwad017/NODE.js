const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req,res)=>{
      if(req.url === "/favicon.ico") return res.end();
      const log = `${Date.now()} :method-> ${req.method}: url-> ${req.url} :  request \n`;
      const MyUrl = url.parse(req.url,true);
      fs.appendFile("./log.txt",log,(err,data)=>{
            // console.log(MyUrl);
            // switch(req.url){
               switch(MyUrl.pathname){
                  case "/": 
                        if(req.method === "GET"){
                              res.end("Home Page");
                        }
                   break;
                  case "/about": 
                        const username = MyUrl.query.name;
                        res.end(`hi, ${username}`); 
                  break;
                  case "/contact": res.end("Contact");
                  break;
                  case "/signup": 
                  if(req.method === "GET") res.end("SIGN UP Form");
                  else if(req.method === "POST"){
                        res.end("Success");
                  }
                  break;
                  default: res.end("404 : ERROR");
            }
      })
})

myServer.listen(8000,()=>console.log("Server start"));



