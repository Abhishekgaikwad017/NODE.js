const express = require("express");
const urlRoute = require("./routes/url");
const {connectToMongoDB} =  require("./connection");


const app = express();
const PORT = 8001;

//connection to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/urlShortner")
.then(()=> console.log("connected to MongoDB"))
.catch((err)=> console.log("Error to connect MongoDB",err));

//middleware
app.use(express.json());


//routes
app.use("/url",urlRoute);

app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`));
