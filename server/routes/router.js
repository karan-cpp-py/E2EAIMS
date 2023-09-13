const express = require("express");
const router = express.Router();

const courses = require("../models/courses");
const enrollment = require("../models/enrollment");
//const faculty = require("../models/faculty");
const offeringcourse = require("../models/offeringcourse");
const prereque = require("../models/prereque");
//const student = require("../models/student");
const users = require("../models/users");

//get data of all users
router.get("/getusers", async(req,res) => {
    const user = await users.find();
    res.send({user:user});
    console.log(user);
})

//login
router.post("/login",async(req,res) => {
    const {email,password} = req.body
    const user = await users.findOne({email:email});
    if(user){
        if(password===user.password){
            res.send({message:"user login successfully",user:user});
        }
        else{
            res.send({message:"wrong password"});
        }
    }
    else{
        res.send({message:"no users found"});
    }
})

//registercourses
router.get("/registercourses/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const userEnrollments = await enrollment.find({ studentid: userId });
    const enrolledCourseIds = await userEnrollments.map((enrollment) => enrollment.cid);
    const availableCourses = await offeringcourse.find({ cid: { $nin: enrolledCourseIds } });
    const courseIds = await availableCourses.map((offeringcourse) => offeringcourse.cid);
    const result = await courses.find({ cid:courseIds });
    res.send({ course: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//deregistercourses
router.get("/deregistercourses/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      console.log(userId);
      const userEnrollments = await enrollment.find({ studentid: userId });
      const enrolledCourseIds = await userEnrollments.map((enrollment) => enrollment.cid);
      const availableCourses = await offeringcourse.find({ cid:enrolledCourseIds });
      const courseIds = await availableCourses.map((offeringcourse) => offeringcourse.cid);
      const result = await courses.find({ cid:courseIds });
      res.send({ course: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

//offerings
router.get("/offerings/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const faculties = await offeringcourse.find({ facultyid: userId });
    const courseids = await faculties.map((offeringcourse) => offeringcourse.cid);
    const availableCourses = await courses.find({ cid: { $nin: courseids } });
    res.send({ course: availableCourses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//facilty offerings
//offerings
router.get("/facultyofferings/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const faculties = await offeringcourse.find({ facultyid: userId });
    const courseids = await faculties.map((offeringcourse) => offeringcourse.cid);
    const availableCourses = await courses.find({ cid:courseids});
    res.send({ course: availableCourses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;