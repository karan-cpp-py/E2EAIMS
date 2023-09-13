const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    studentid: {
        type:Number,
        required:true,
        unique:true
    },
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    year: {
        type:Number,
        required:true
    },
    department: {
        type:String,
        required:true
    },
    userid: {
        type: Number,
        required:true
    }
},  {
    timestamps: true
})

const student = new mongoose.model("student",userSchema);

module.exports = student;