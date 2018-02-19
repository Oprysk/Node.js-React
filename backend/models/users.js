const db = require('../db');
const ObjectID = require('mongodb').ObjectID;
const uuid = require('uuid');

exports.all = async function () {
    let result = await db.get().collection('users').find().toArray();
    return result;
}

exports.create = async function (user) {
    let result = await db.get().collection('users').insert(user);
    return result;
}

exports.update = async function (id, newData) {
    let result = await db.get().collection('users').updateOne({ _id : ObjectID(id) }, newData);
    return result;
}

exports.delete = async function (id) {
    let result = await db.get().collection('users').deleteOne({ _id : ObjectID(id) });
    return result;
}

exports.login = async function (user) {
    let result = await db.get().collection('users').findOne(user);
    if (result !== null) {
        let token = uuid.v4();
        result.token = token;
        db.get().collection('users').updateOne({ _id : ObjectID(result._id) }, { $set : { token : token }});
        return result;
    } else {
        return result;
    }
}