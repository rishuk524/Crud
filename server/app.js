require("dotenv").config()
const express = require("express")
const connectodb = require("./config/database")
const userRouter = require("./routes/userRoutes")
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectodb()




app.use("/", userRouter)





module.exports = app
