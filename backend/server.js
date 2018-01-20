const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const usersController = require('./controller/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello Liubert, I am ready!');
});

app.get('/users', usersController.all);

app.get('/users/:id', usersController.findById);

app.post('/users', usersController.create);

app.put('/users/:id', usersController.update);

app.delete('/users/:id', usersController.delete);


db.connect('mongodb://localhost:27017', (err) => {
    if (err) {
        return console.log(err);
    }
    app.listen(3050, function () {
        console.log('API app started');
    });
})