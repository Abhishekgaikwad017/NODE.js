const User = require("../model/user");

async function HandleGetAllUser(req,res){
      const allDBUser = await User.find({});
      return res.json(allDBUser);
}

async function HandleCreateNewUser(req,res){
      const body = req.body;
      const result = await User.create({
            firstName : body.firstName,
            lastname : body.lastname,
            email : body.email,
            gender : body.gender,
            jobTitle : body.jobTitle,

      })
      console.log("RESULT ",result);
      return res.status(201).json({mgs : "User Added succesfully"});
}

async function HandleGetUserById(req,res){
      const user = await User.findById(req.params.id);
      if(!user) return res.status(400).json({error : "User not found"})
      return res.json(user);
}

async function HandleUpadateUserById(req,res){
      await User.findByIdAndUpdate(req.params.id,{lastname : "Changed"})
      return res.json({ststus : "Updated"})
}

async function HandleDeleteUserById(req,res){
      await User.findByIdAndDelete(req.params.id);
      return res.json({status : "Deleted Succesfully"})
}

module.exports = {
      HandleGetAllUser,
      HandleCreateNewUser,
      HandleGetUserById,
      HandleUpadateUserById,
      HandleDeleteUserById,
};