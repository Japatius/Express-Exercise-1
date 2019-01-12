const express = require('express');
let router = express.Router();

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
        }
    ]
}

// get all
router.get('/', (req,res) => res.json(studentData));

// get by id
router.get('/:studentId', (req,res) => {
    const studentData = studentData.students.find( s => {
        if (s.id == req.params.studentId) {
            return true;
        }else{
            return false;
        }
    });
    if (studentResult == undefined)
    {
        res.sendStatus(404)
    }
    else{
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

module.exports = router;