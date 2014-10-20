var mongo = require('mongodb'),
    monk = require('monk');
    options = require('../database/options');

var getDB = function () {
    var db = monk(options.dbConfig.dbProtocol 
        +  options.dbConfig.dbUserName 
        + ':' 
        + options.dbConfig.dbPassword 
        + '@' 
        + options.dbConfig.dbURL);
    //var db = monk('localhost:27017/ibeacon-node');  
    return db;
}
module.exports.db = getDB;