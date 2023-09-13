const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userid: {
        type:Number,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    usertype: {
        type:Number,
        required:true
    }
},  {
    timestamps: true
})

const users = new mongoose.model("users",userSchema);

module.exports = users;