var mongo = require('mongodb');
var monk = require('monk');

var getDB = function () {
    var db = monk('localhost:27017/ibeacon-node');  
    return db;
}
module.exports.getDB = getDB;