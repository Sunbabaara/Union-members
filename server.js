const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const unionRoutes = require ("./routes/unionRoutes")

dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(express.json())
app.use(morgan("dev"));

//routes
app.use("/api/v3/union", unionRoutes)


//home
app.get("/", (req, res)=>{
    res.send("<h2>Welcome to our unions api</h2>");
})

const port = process.env.PORT || 5005

app.listen(port, ()=>console.log (`server is running on port ${port}`))