var db = require('../../database/init').db();

module.exports = function (socket) {
  // Set our collection
  var collection = db.get('users');

  // Search the the DB
  collection.find({},
    function (err, doc) {
      if (err) {
          // If it failed, return error
          //console.log('Respond 500');
          socket.emit('error', {
            error: err,
            description: 'Error happened while trying to get user statuses.'
          });
      }
      else {
        socket.emit('all-status', doc);
      }
  });
}