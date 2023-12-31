const express = require("express");
const user = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const fs = require("fs");


const app = express();

//Mongo Connection
mongoose
      .connect('mongodb://127.0.0.1:27017/firstconnect')
      .then(()=>console.log("MongoDB Connected"))
      .catch((err)=>console.log("Mongo Error",err));


//creating schema
const userSchema = new mongoose.Schema({
      firstName : {
            type:String,
            require: true,
      },
      lastname : {
            type : String,
      },
      email: {
            type : String,
            required : true,
      },
      jobTitle:{
            type: String,

      },
      gender:{
            type : String,
      }
});

const User = mongoose.model("user",userSchema);


//middle ware as plugin
app.use(express.urlencoded({extended : false}));

app.use((req,res,next)=>{
      console.log("middle ware 1")
      next();      
});


app.get("/api/user",(req,res)=>{
      return res.json(user);
});

app.get("/user",(req,res)=>{
      const html = `
      <ul>
      ${user.map((user)=>`<li>${user.first_name}</li>`).join("")}
      </ul>
      `;
      return res.send(html);
});

app
      .route("/api/user/:id")
      .get((req,res)=>{
            const id = Number(req.params.id);
            const usr = user.find((u)=> u.id === id);
            if(!usr) return res.status(404).json({err : "user not found"});
            return res.json(usr);
      })
      .patch((req,res)=>{
            //patch the data

            return res.json();
      })
      .delete((req,res)=>{
            //delete the data

            return res.json();
      });

app.post("/api/user/",(req,res)=>{
      const body = req.body ;
      // console.log("Body ", body);
      if(!body || !body.first_name || body.last_name || !body.email || body.gender || !body.job_title){
            return res.status(400).json({msg :"all field required"})
      }
      user.push({...body,id:user.length+1});
      fs.writeFile("./MOCK_DATA.json",JSON.stringify(user),(req,data)=>{
            return res.status(201).json({status :"success",id: user.length});
      })
     
})


app.listen(8000,()=>console.log("server start"));