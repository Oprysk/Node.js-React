const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const usersController = require('./controller/users');

const session = require('express-session');
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;

app.get('/', (req,res) => {
    sess = req.session;
//Session set when user Request our app via URL
    if(sess.email) {
        /*
        * This line check Session existence.
        * If it existed will do some action.
        */
        res.redirect('/admin');
    }
    else {
        res.render('index.html');
    }
});

app.post('/login', (req,res) => {
    sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
    sess.email=req.body.email;
    res.end('done');
});

app.get('/admin', (req,res) => {
    sess = req.session;
    if(sess.email) {
        res.write('<h1>Hello '+sess.email+'</h1>');
        res.end('<a href="/">Logout</a>');
    } else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href="/login">Login</a>');
    }
});

app.get('/logout', (req,res) => {
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });

});


app.get('/', (req, res) => {
    res.send('<h1>'+'Hello Liubert, I am ready!'+'</h1>');
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