var db = require('../../database-scripts/init').getDB();

module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  // Set our collection
  var collection = db.get('users');
  console.log('%j', req.params);

  // Search the the DB
  collection.find({
      "deviceid" : req.params.deviceid
  }, function (err, doc) {
    var promise;
    if (err) {
        // If it failed, return error
        //console.log('Respond 500');
        res.send(500, 'There was a problem finding the information in the database.');
    }
    else {
      console.log('%j', doc);
      if (doc.length > 0) {
        promise = collection.updateById(doc[0]._id, req.params);
        promise.on('error', function(err){
          res.send(500, err);
        });
        promise.on('success', function() {
          res.send(200);
        });
      } else {
        promise = collection.insert(req.params);
        promise.on('error', function(err){
          res.send(500, err);
        });
        promise.on('success', function() {
          res.send(200);
        });
      }
    }
  });
  next();
}