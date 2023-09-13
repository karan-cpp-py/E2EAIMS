const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    enrollmentid: {
        type:Number,
        required:true,
        unique:true
    },
    studentid: {
        type:Number,
        required:true
    },
    cid: {
        type:Number,
        required:true
    },
    status: {
        type:Number,
        required:true
    },
    semester: {
        type:Number,
        required:true
    },
    offeringid: {
        type:Number,
        required:true
    },
    year: {
        type:Number,
        required:true
    }
},  {
    timestamps: true
})

const enrollment = new mongoose.model("enrollment",userSchema);

module.exports = enrollment;