const express = require("express");
const router = express.Router();

//import the controller
const Student = require('../controllers/Student');

router.get('/student/:schoolNumber', async(req, res) => {
    let schoolNumber = req.params.schoolNumber;
    let students = await new Student().getStudent(schoolNumber);
    res.send(students);
});
router.post('/student', async(req, res) => {

    let { title } = req.body;
    await new Student().createStudent({ title }, res);
});
router.post('/studentclass',async(req,res)=>{
    let { title } = req.body;
    console.log("sdsdsdsdsdsds");
    console.log("title: ",title);
    await new Student().createStudentClass({ title }, res);
})
router.delete('/student/:studentId', async(req, res) => {
    let { studentId } = req.params;
    await new Student().deleteStudent(studentId);
    let student = await new Student().getStudent();
});
module.exports = router;