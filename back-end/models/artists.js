var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection('artists').find().toArray(function (err, docs) {
        cb(err, docs);
    });
}

exports.findById = function (id, cb) {
    db.get().collection('artists').findOne(
        {_id: ObjectID(id)},
        function (err, doc) {
            cb(err, doc);
        });
}