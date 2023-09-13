const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    prereqid: {
        type:Number,
        required:true,
        unique:true
    },
    courseid: {
        type:Number,
        required:true
    },
    prereqcourseid: {
        type:Number,
        required:true
    }
},  {
    timestamps: true
})

const prereque = new mongoose.model("prereque",userSchema);
module.exports = prereque;