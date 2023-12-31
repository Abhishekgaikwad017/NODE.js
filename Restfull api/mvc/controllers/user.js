const User = require("../model/user");

async function handleGetAllUsers(req,res){
      const alldb = await User.find({});
      return res.json(alldb);
}

module.exports={
      handleGetAllUsers,
};