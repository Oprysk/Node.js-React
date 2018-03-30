const express = require('express');
const app = express();

const tweetsController = require('./timeline-controller');


app.get('/getUserTweets', tweetsController.getUserTweets);

app.listen(3050, function () {
    console.log('API app started');
});