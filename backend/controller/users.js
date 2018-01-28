const Users = require('../models/users');
const ObjectID = require('mongodb').ObjectID;

exports.all = function (req, res) {
    Users.all( (err, users) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        users.forEach(function (user) {
            delete user.pass
        });
        res.send(users);
    })
}

exports.create = function (req, res) {
    Users.create(req.body, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        delete result.ops[0].pass;
        res.send(result.ops[0])
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
    let usersDelete = [];
    req.body.forEach(function(item){
        usersDelete.push(new ObjectID(item._id));
    });
    Users.delete(usersDelete, (err, result) => {
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
        delete result.pass;
        res.send(result);
    });
}