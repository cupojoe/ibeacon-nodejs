var restify = require('restify');
//var socketio = require('socket.io');
var server = restify.createServer();
var io = require('./socket').createSocket(server);
var postRangeUpdate = require('./routes/range/post');
var getUser = require('./routes/user/get');
var putUser = require('./routes/user/put');
var getAllStatusesSocket = require('./routes/states/get-all');
var getAllStatuses = require('./routes/states/get');
var getPractices = require('./routes/practices/get');
var getAllRegions = require('./routes/regions/get');

//var io = socketio.listen(server);

server.use(restify.bodyParser());
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);
server.post('/range/post', postRangeUpdate);
server.get('/user/:deviceid/get', getUser);
server.put('/user/put', putUser);
server.get('/practices/get', getPractices);
server.get('/statuses/get', getAllStatuses);
server.get('/regions/get', getAllRegions);
server.pre(restify.pre.userAgentConnection());

io.sockets.on('connection', getAllStatusesSocket);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});