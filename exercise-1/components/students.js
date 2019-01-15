const express = require('express')
let router = express.Router()

// fixed data
let studentData = {
    students: [
        {
            id: 1,
            name: "John Smith",
            class: "DIN19SP",
            address: "Ouluntie 1"
        },
        {
            id: 2,
            name: "Kevin Anderson",
            class: "DIN19SP",
            address: "Torikuja 7"
        },
        {
            id: 3,
            name: "Steve Jobs",
            class: "DIN19SP",
            address: "Omenatie 13"
        }
    ]
}

// get all
router.get('/', (req,res) => res.json(studentData));

// get by id
router.get('/:studentId', (req,res) => {
    const studentResult = studentData.students.find( s => {
        if (s.id == req.params.studentId) {
            return true;
        } else {
            return false;
        }
    });
    if (studentResult == undefined)
    {
        res.sendStatus(404)
    } else {
        res.json(studentResult);
    }
})

// add student
router.post('/', (req,res) => {
    studentData.students.push({
        id: studentData.students.length + 1,
        name: req.body.name,
        class: req.body.class,
        address: req.body.address
    })
    res.sendStatus(201);
});

// update a student
router.put('/:studentId', (req,res,next) => {
    let studentId = req.params.studentId ;
    studentData.students.find(sd => {
        if(sd.id == studentId){
    
    studentData.students[studentId].name = req.body.name,
    studentData.students[studentId].class = req.body.class,
    studentData.students[studentId].address = req.body.address
    }})
    res.json(studentData)
});

// delete student
router.delete('/:studentId', (req,res) => {

    let studentId = req.params.studentId - 1;
    delete studentData.students[studentId];
    res.send(201);
});

module.exports = router;