const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");

dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(morgan("dev"));


//home
app.get("/", (req, res)=>{
    res.send("<h2>Welcome to our unions api</h2>");
})

const port = process.env.PORT || 5005

app.listen(port, ()=>console.log (`server is running on port ${port}`))