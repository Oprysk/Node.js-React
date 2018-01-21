const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const usersController = require('./controller/users');

const session = require('express-session');
const app = express();

// Use the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Access the session as req.session
app.get('/', (req, res, next) => {
    if (req.session.views) {
        req.session.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + req.session.views + '</p>');
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>');
        res.end()
    } else {
        res.write('<h1>'+'Hello Liubert, I am ready!'+'</h1>');
        req.session.views = 1;
        res.end('welcome to the session demo. refresh!')
    }
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