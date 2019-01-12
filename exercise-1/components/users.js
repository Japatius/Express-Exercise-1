const express = require('express');
let router = express.Router();

let users = [
    {
        id: 1,
        name: "MaN"
    }
];

router.get('/', (req,res) => res.json(users));
router.post('/', (req,res) => {
    // read body data
    console.log(req.body);
    
    // append user data to users array
    users.push(req.body);

    res.send('OK');
});

module.exports = router;