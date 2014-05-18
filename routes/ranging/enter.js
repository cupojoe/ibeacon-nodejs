var db = require('../../database-scripts/init').getDB();

module.exports = function (req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // Create a new message model, fill it up and save it to Mongodb
  // Set our collection
  var collection = db.get('enterrangecollection');

  console.log('%j', req.params);

  // Submit to the DB
  collection.insert({
      "uuid" : req.params.uuid,
      "major" : req.params.major,
      "minor" : req.params.minor,
      "region" : req.params.region,
      "uid" : req.params.userid
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send(500, "There was a problem adding the information to the database.");
      }
      else {
          // Send success header
          res.send(200);
      }
  });
  next();
}