const mongoose = require("mongoose");


async function ConnectMongoDb(url){
      mongoose
      .connect(url)
      .then(()=>console.log("Connected to MongoDb"))
      .catch((err)=>console.log("MongoDB error",err))
}

module.exports ={
      ConnectMongoDb,
};