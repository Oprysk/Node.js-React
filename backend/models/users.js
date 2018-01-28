const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection('users').find().toArray((err, result) => {
        cb(err, result);
    });
}

exports.create = function (user, cb) {
    db.get().collection('users').insert(user, (err, result) => {
        cb(err, result)
    })
}

exports.update = function (id, newData, cb) {
    db.get().collection('users').updateOne({ _id : ObjectID(id) }, newData, (err, result) => {
            cb(err, result)
    })
}

exports.delete = function (id, cb) {
    db.get().collection('users').deleteOne({ _id : ObjectID(id) }, (err, result) => {
            cb(err, result)
    })
}

exports.login = function (user, cb) {
    db.get().collection('users').findOne(user, (err, result) => {
        cb(err, result);
    });
}