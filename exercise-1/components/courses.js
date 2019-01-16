const express = require('express');
let router = express.Router();


// some fixed course data 
let courseData = {
    courses: [
        {
            id: 1,
            name: "Engineering Mathematics",
            description: "Students will learn to calculate maths needed in engineering studies"
        },
        {
            id: 2,
            name: "Introduction to React.js",
            description: "Students will learn to use React.js in web development"
        },
        {
            id: 3,
            name: "Entrepreneurship",
            description: "Students will learn how to become a successful entreprenour"
        },
    ]
}

// get courses
router.get('/', (req,res) => res.json(courseData));

// get by id
router.get('/:courseId', (req,res) => {
    const courseResult = courseData.courses.find( s => {
        if (s.id == req.params.courseId) {
            return true;
        } else {
            return false;
        }
    });
    if (courseResult == undefined)
    {
        res.sendStatus(404)
    }
    else{
        res.json(courseResult);
    }
})
// add course
router.post('/', (req,res) => {
    courseData.courses.push({
        id: courseData.courses.length + 1,
        name: req.body.name,
        description: req.body.description
    })
    res.sendStatus(201);
});

// update a course
router.put('/:courseId', (req,res) => {
    let coId = req.params.courseId - 1 ;
    courseData.courses.find(c => {
        if(c.id == coId){
    
    courseData.courses[coId].name = req.body.name;
    courseData.courses[coId].description = req.body.description;
    }})
    res.json("Updated!")
});

// delete a course
router.delete('/:courseId', (req,res) => {
    let coId = req.params.courseId - 1;
    delete courseData.courses[coId];
    res.sendStatus(201);
});

module.exports = router;