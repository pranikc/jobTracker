/**
 * Created by pranikchainani on 3/12/17.
 */
var db = require('../db');

var collectionName = 'companies';

module.exports = {
    all: function(callback) {
        db.get().collection(collectionName).find().toArray(callback);
    },

    add: function(newCompany, callback) {
        var inserted = function(err) {
            if(!err)
                callback('person added');
            else
                callback(err);
        };

        if(!newCompany || newCompany.name === undefined || newCompany.date === undefined)
            callback('unable to add person');
        else
            db.get().collection(collectionName).insertOne(newCompany, inserted);
    }
};