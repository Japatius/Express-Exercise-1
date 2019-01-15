const express = require('express');
let router = express.Router();


// some fixed grading data..

let gradingData = {
    grades:[
        {
            id: 1,
            student: "John Smith",
            completedCourse: "Introduction to React.js",
            grade: 4
        },
        {
            id: 2,
            student: "Steve Jobs",
            completedCourse: "Learning to use iOS devices",
            grade: 1
        },
        {
            id: 3,
            student: "Randy Lahey",
            completedCourse: "Introduction to World of Burgers",
            grade: 5
        }
    ]
};

// get all grading data
router.get('/', (req,res) => {
    res.json(gradingData)
});

// get grading data by id
router.get('/:gradeId', (req, res) => {
    const gradeResult = gradingData.grades.find( g => {
        if (g.id == req.params.gradeId){
            return true;
        } else {
            return false;
        }
    });
    if(gradeResult == undefined) {
        res.sendStatus(404)
    } else {
        res.json(gradeResult);
    }
});

// post grading data
router.post('/', (req,res) => {
    gradingData.grades.push({
        id: gradingData.grades.length + 1,
        student: req.body.student,
        completedCourse: req.body.completedCourse,
        grade: req.body.grade
    })
    res.sendStatus(201);
});

// update grading data 
router.put('/:gradeId', (req,res) => {
    let gradeId = req.params.gradeId ;
    gradingData.grades.find(gd => {
        if(gd.id == gradeId){
    
    gradingData.grades[gradeId].name = req.body.name,
    gradingData.grades[gradeId].class = req.body.class,
    gradingData.grades[gradeId].address = req.body.address
    }})
    res.json(gradingData)
});


// delete grading data 
router.delete('/:gradeId', (req,res) => {
    let gradeId = req.params.gradeId - 1;
    delete gradingData.grades[gradeId];
    res.send(201);
});


module.exports = router;