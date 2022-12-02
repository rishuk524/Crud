const mongoose = require("mongoose")


const userschema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Name is Required"],
        trim: true,
        maxlength: [25, "Name must be in 25 ch long"]
    },
    email:{
        type: String,
        require:[true, "email is required"],
        unique: true,
    },
})

module.exports = mongoose.model("User", userschema)