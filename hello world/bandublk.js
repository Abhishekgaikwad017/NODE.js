const fs = require("fs");


console.log("1");

//Blocking
// const result  = fs.readFileSync("./text.txt","utf8") ;

fs.readFile("./text.txt","utf-8", (err,req)=>{
      console.log(req);
})
// console.log(result);

console.log("2");