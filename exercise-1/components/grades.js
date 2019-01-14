const express = require('express')
let router = express.Router()


// some fixed grading data..

let gradingData = {
    grades:[
        {
            student: "John Smith",
            completedCourse: "Introduction to React.js",
            grade: 4
        },
        {
            student: "Steve Jobs",
            completedCourse: "Learning to use iOS devices",
            grade: 1
        },
        {
            student: "Randy Lahey",
            completedCourse: "Introduction to World of Burgers",
            grade: 5
        }
    ]
};

// get all grading data..
router.get('/', (req,res) => {
    res.json(gradingData)
});

// post grading data
router.post('/', (req,res) => {
    gradingData.grades.push({
        student: req.body.students,
        completedCourse: req.body.completedCourse,
        grade: req.body.grade
    })


    res.sendStatus(201);
});



module.exports = router;