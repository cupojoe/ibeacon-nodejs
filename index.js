var restify = require('restify');
//var socketio = require('socket.io');
var server = restify.createServer();
var io = require('./socket').createSocket(server);
var postRangeUpdate = require('./routes/range/post');
var getUser = require('./routes/user/get');
var putUser = require('./routes/user/put');
var getAllStatuses = require('./routes/states/get-all');

//var io = socketio.listen(server);

server.use(restify.bodyParser());
server.post('/range/post', postRangeUpdate);
server.get('/user/:deviceid/get', getUser);
server.put('/user/put', putUser);
server.pre(restify.pre.userAgentConnection());

io.sockets.on('connection', getAllStatuses);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});