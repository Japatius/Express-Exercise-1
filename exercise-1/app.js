const express = require('express')
const app = express()
const port = 3000
const students = require('./components/students');
const courses = require('./components/courses');
const grades = require('./components/grades');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/students', students);
app.use('/courses', courses);
app.use('/grades', grades);


app.get('/', (req, res) => res.send('!dlrow olleH'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))