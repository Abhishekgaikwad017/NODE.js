const fs = require("fs");

// fs.writeFileSync("./text.txt","Hello abhishek");

// fs.writeFile("./text.txt","Hello A",(err)=>{});

// const data = fs.readFileSync("./text.txt","utf-8");
// console.log(data);

// fs.readFile("./text.txt","utf-8",(err,result)=>{
//       if(err){
//             console.log("nothing");
//       }else{
//             console.log(result);
//       }
// })
fs.appendFileSync("./text.txt",`${Date.now()} how are you \n`);

// fs.cpSync("./text.txt","./copy.txt");
// fs.unlinkSync("./copy.txt");
console.log(fs.statSync("./text.txt"));