const express = require("express");
const {ConnectMongoDb} = require("./connection");
const {logReqRes} = require("./middleware")
const userRouter = require("./routes")

const app = express();
const PORT = 8000;


//connection
ConnectMongoDb("mongodb://127.0.0.1:27017/firstprog");

//middleware
app.use(express.urlencoded({extended : false}));
app.use(logReqRes("log.txt"));


//routes
app.use("/api/users",userRouter);

app.listen(PORT,()=>console.log(`Server started Listing to Port ${PORT}`));
