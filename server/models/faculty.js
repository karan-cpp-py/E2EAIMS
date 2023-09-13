const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    facultyid: {
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
    department: {
        type:String,
        required:true
    },
    startdate: {
        type: String
    },
    enddate: {
        type: String
    },
    userid: {
        type: Number
    }
},  {
    timestamps: true
})

const faculty = new mongoose.model("faculty",userSchema);

module.exports = faculty;