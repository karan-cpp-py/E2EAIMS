const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    offeringid: {
        type:Number,
        required:true,
        unique:true
    },
    facultyid: {
        type: Number,
        required:true
    },
    semester: {
        type: Number,
        required:true
    },
    cgpamin: {
        type: Number,
        required:true
    },
    cid: {
        type: Number,
        required:true
    },
    year: {
        type: Number
    }
},  {
    timestamps: true
})

const offeringcourse = new mongoose.model("offeringcourse",userSchema);

module.exports = offeringcourse;