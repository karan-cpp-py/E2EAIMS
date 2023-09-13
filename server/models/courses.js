const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    cid: {
        type:Number,
        required:true,
        unique:true
    },
    cname: {
        type:String,
        required:true
    },
    l: {
        type:Number,
        required:true
    },
    t: {
        type:Number,
        required:true
    },
    p: {
        type:Number,
        required:true
    },
    department: {
        type: String
    },
    credits: {
        type: Number,
        required: true
    },
},  {
    timestamps: true
})

const courses = new mongoose.model("courses",userSchema);

module.exports = courses;