var db = require('../../database-scripts/init').getDB();
var io = require('../../socket').getSocket();

module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // Create a new message model, fill it up and save it to Mongodb
  // Set our collection
  var collection = db.get('rangeupdates');

  // Submit to the DB
  collection.insert({
      "uuid" : req.params.uuid,
      "major" : req.params.major,
      "minor" : req.params.minor,
      "region" : req.params.region,
      "uid" : req.params.uid,
      "date": req.params.date,
      "state": req.params.state
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          console.log('Respond 500');
          res.send(500, 'There was a problem adding the information to the database.');
      }
      else {
          console.log('update ' + req.params.uid);
          var ucollection = db.get('users');
        
          ucollection.findAndModify(
            {"deviceid": req.params.uid}, 
            {$set: { "state": req.params.state, "date": req.params.date}}, 
            {new: true}, 
            function(err, doc) {
              io.sockets.emit('update-user', doc);
              console.log('Updated user ' + req.params.uid + ' to state ' + req.params.state);
            }
          );
          // Send success header
          console.log('Respond 200');
          res.send(200);
      }
  });
  next();
}