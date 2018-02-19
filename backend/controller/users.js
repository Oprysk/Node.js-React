const Users = require('../models/users');

exports.all = async function (req, res) {
    try {
       let data = await Users.all();
       res.send(data)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.create = async function (req, res) {
    try {
        let data = await Users.create(req.body);
        delete data.ops[0].pass;
        res.send(data.ops[0])
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

exports.update = async function (req, res) {
    try {
        await Users.update(req.params.id, { name : req.body.name });
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

exports.delete = async function (req, res) {
    try {
        await Users.delete(req.body.id);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.login = async function (req, res) {
    try {
        let data = await Users.login(req.body);
        if (data == null) {
            res.sendStatus(404);
        } else {
            delete data.pass;
            res.send(data);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}