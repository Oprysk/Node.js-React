const express = require('express');
const bodyParser = require('body-parser');
const tweetsController = require('./timeline-controller');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");

    next();
});

app.get('/getUserTweets', tweetsController.getUserTweets);

app.listen(3050, function () {
    console.log('API app started');
});