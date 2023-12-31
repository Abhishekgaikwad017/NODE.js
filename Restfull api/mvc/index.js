const express = require("express");
const {connectMongoDb} = require("./connection");
const userRouter = require("./routes/user");
const {logReqRes} = require("./middleware")

//express
const app = express();
const PORT = 8000;


//connection
connectMongoDb(" mongodb://127.0.0.1:27017/firstproj");

//middleware
app.use(express.urlencoded({extended : false}));
app.use(logReqRes("log.txt"));


//routes
app.use("/user",userRouter);

app.listen(PORT,()=>console.log("server started"));