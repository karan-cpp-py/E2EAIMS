require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const router = require("./routes/router");
app.use(router);

const courses = require("./models/courses");
const enrollment = require("./models/enrollment");
//const faculty = require("./models/faculty");
const offeringcourse = require("./models/offeringcourse");
const prereque = require("./models/prereque");
//const student = require("./models/student");
const users = require("./models/users");

mongoose.connect("mongodb://127.0.0.1:27017/aims",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})

port = 8000;
app.listen(port, () => {
    console.log(`sertver started at port no ${port}`);
});