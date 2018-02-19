const MongoClient = require('mongodb').MongoClient;

const state = {
    db : null
};

exports.connect = async function (url) {
    if (state.db) {
        return;
    }
    try {
        let db = await MongoClient.connect(url);
        state.db = db;
    } catch (err) {
        return err;
    }
};

exports.get = function () {
    return state.db;
};