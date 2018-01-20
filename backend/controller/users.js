const Users = require('../models/users');

exports.all = function (req, res) {
    Users.all( (err, docs) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = function (req, res) {
    Users.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(doc);
    })
}

exports.create = function (req, res) {
    let user = {
        name: req.body.name,
        role: req.body.role ? req.body.role : "guest"
    };
    Users.create(user, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user)
    })
}

exports.update = function (req, res) {
    Users.update(req.params.id, { name : req.body.name }, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = function (req, res) {
    Users.delete(req.params.id, (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}