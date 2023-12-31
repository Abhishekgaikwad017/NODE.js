const express = require("express");
const User = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const fs = require("fs");



const app = express();


//Schema 



//Connecting to mongoDB
mongoose
      .connect("mongodb://127.0.0.1:27017/firstproj")
      .then(()=> console.log("MongoDB connected"))
      .catch((err) => console.log("Mongo Error",err));







//middle ware -Plugin
app.use(express.urlencoded({extended:false}));


//get users in json format
app.get("/api/users",async (req,res)=>{
      const alldbuser = await User.find({});
      return res.json(alldbuser);
});

//get all user in html format
app.get("/users",async (req,res)=>{
      const alldbUser = await User.find({});
      const html = `
      <ul>
      ${alldbUser.map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")}
      </ul>
      `;
      return res.send(html);
});


//using route
app
      .route("/api/users/:id")
      .get(async (req,res)=>{
            const user = await User.findById(req.params .id);
            return res.json(user);             
      })
      .patch( async (req,res)=>{
            await User.findByIdAndUpdate(req.params.id,{lastname:"deep"})
            return res.json({status:"Success"});
      })
      .delete(async (req,res)=>{
            await User.findByIdAndDelete(req.params.id);
            return res.json({status :"Succesfully deleted"});
      });

//post method to add user      
// app.post("/api/users",(req,res)=>{
//       const body = req.body;
//       users.push({...body,id:users.length+1});
//       fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(req,data)=>{
//             return res.json({status :"User added"});
//       })
// });

app.post("/api/users", async (req,res)=>{
      const body = req.body;
      const result = await User.create({
            firstName : body.firstName,
            lastname : body.lastname,
            email: body.email,
            gender: body.gender,
            jobTitle: body.jobTitle,
      });
      console.log("RESULT", result);
      return res.status(201).json({msg:"user has added"});
})

app.listen(8000,()=>console.log("Server  start"));






