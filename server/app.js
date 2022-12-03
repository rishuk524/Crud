require("dotenv").config()
const express = require("express")
const connectodb = require("./config/database")
const userRouter = require("./routes/userRoutes")
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

connectodb()




app.use("/", userRouter)





module.exports = app
