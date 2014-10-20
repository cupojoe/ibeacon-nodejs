var db = require('../../database/init').db();

module.exports = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  // Set our collection
  var collection = db.get('users');
  console.log('%j', req.params);

  // Search the the DB
  collection.find({
      "deviceid" : req.params.deviceid
  }, function (err, doc) {
      console.log('Mongo returned something');
      if (err) {
          // If it failed, return error
          console.log('Respond 500');
          res.send(500, 'There was a problem finding the information in the database.');
      }
      else {
        console.log('%j', doc);
        if (doc.length > 0) {
          res.send(doc[0]);
        } else {
          console.log('Respond 204: Content Not Found');
          res.send(204);
        }
      }
  });
  next();
}