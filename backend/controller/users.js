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

exports.create = function (req, res) {
    let user = {
        name : req.body.userName,
        email: req.body.email,
        pass : req.body.pass,
        role : req.body.role ? req.body.role : "guest"
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

exports.login = function (req, res) {
    Users.login(req.body, (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        delete result.pass
        res.send(result);
    })
}