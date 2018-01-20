var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var artistsController = require('./controller/artists');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.send('Hello Liubert, I am ready!');
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', function (req, res) {
    db.get().collection('artists').findOne({_id: ObjectID(req.params.id)}, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs)
    });
});

app.post('/artists', function (req, res) {
    var solist = {
        name: req.body.name
    };
    db.get().collection('artists').insert(solist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(solist);
    })
});

app.put('/artists/:id', function (req, res) {
    db.get().collection('artists').updateOne(
        { _id : ObjectID(req.params.id)},
        { name : req.body.name },
        function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
});

app.delete('/artists/:id', function (req, res) {
    db.get().collection('artists').deleteOne(
        { _id : ObjectID(req.params.id) },
        function (err, result) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
});

db.connect('mongodb://localhost:27017',function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(3050, function () {
        console.log('API app started');
    });
})