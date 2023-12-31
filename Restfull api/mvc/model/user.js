const mongoose = require("mongoose");



//Schema
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
            unique: true,
      },
      jobTitle:{
            type: String,

      },
      gender:{
            type : String,
      }

},{timestamps: true})
;


//create model from schema
const User = mongoose.model("user",userSchema);


module.exports = User;