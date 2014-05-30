var socketio = require('socket.io');
var io;

module.exports.createSocket = function(server) {
  io = socketio.listen(server);
  return io;
};

module.exports.getSocket = function () {
  return io;
};