var restify = require('restify');
var postRangeUpdate = require('./routes/range/post');
var getUser = require('./routes/user/get');
var putUser = require('./routes/user/put');
var server = restify.createServer();

server.use(restify.bodyParser());
server.post('/range/post', postRangeUpdate);
server.get('/user/:deviceid/get', getUser);
server.put('/user/put', putUser);
server.pre(restify.pre.userAgentConnection());

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});