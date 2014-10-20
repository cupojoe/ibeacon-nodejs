var db = require('../../database/init').db();

module.exports = function (req, res, next) {
  console.log(db);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  // Set our collection
  var collection = db.get('users');
  console.log('%j', req.params);
  console.log('get all 2');
  // Search the the DB
  collection.find({}, function (err, doc) {
      console.log('Mongo returned something');
      if (err) {
          // If it failed, return error
          console.log(err);
          console.log('Respond 500');
          res.send(500, 'There was a problem finding the information in the database.');
      }
      else {
        console.log('%j', doc);
        if (doc.length > 0) {
          res.send(doc);
        } else {
          console.log('Respond 204: Content Not Found');
          res.send(204);
        }
      }
  });
  next();
}