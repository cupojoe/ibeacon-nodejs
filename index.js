var restify = require('restify');
var saveEnterInRage = require('./routes/ranging/enter');

var server = restify.createServer();

server.use(restify.bodyParser());
server.post('/ranging/enter', saveEnterInRage);
server.pre(restify.pre.userAgentConnection());

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});