const express = require('express')
const app = express()
const port = 3000
const students = require('./components/students');
const courses = require('./components/courses');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use('/students', students);
app.use('/courses', courses);


app.get('/', (req, res) => res.send('!dlrow olleH'));
app.get('/customers', function(req, res){
    
    const customerData = [
        {
            name:"Jim"
        },
        {
            name:"Randy"
        },
        {
            name:"Ricky"
        }
    ];
    
    res.json(customerData);

});

app.post('/customers', function(req,res) {
    res.send("POST is OK");
});

app.put('/customers', function(req,res) {
    res.send("UPDATE is OK");
});

app.delete('/customers', function(req,res) {
    res.send("DELETE is OK");
});


//request chaining..
app.route('/orders/:orderId')
    .get((req,res) => {
        console.log('Order id is ' + req.params.orderId);
        res.send('Your orderId is ' + req.params.orderId);
    })
    .delete();

app.route('/orders')
    .get((req,res) => res.send('GET is working'))
    .post((req,res) => res.send('POST is working'))
    .put((req,res) => res.send('PUT is working'))
    .delete((req,res) => res.send('DELETE is working'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))