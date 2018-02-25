const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const usersController = require('./controller/users');

const session = require('express-session');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");

    next();
});

// Use the session middleware
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 600000 },
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.get('/users', usersController.all);

app.post('/users', usersController.create);

app.put('/users/:id', usersController.update);

app.delete('/deleteUser', usersController.delete);

app.post('/login', usersController.login);

app.post('/logout', usersController.logout);

try {
    db.connect('mongodb://localhost:27017').then((err) =>{
        if (err) {
            console.log(err)
        } else {
            app.listen(3050, function () {
                console.log('API app started');
            });
        }
    });
} catch (err) {
    console.log(err);
}
