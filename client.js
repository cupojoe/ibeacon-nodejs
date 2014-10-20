var assert = require('assert');
var client = require('restify').createJsonClient({
  url: 'http://0.0.0.0:8080',
  version: '*'
});

client.post('/range/post', {
  "uuid" : 'req.params.uuid',
  "major" : 'req.params.major',
  "minor" : 'req.params.minor',
  "region" : 'req.params.region',
  "uid" : 'req.params.uid',
  "date": 'req.params.date',
  "state": 'req.params.state'
}, function(err, req, res, obj) {
  // assert.ifError(err);
  // console.log('%d -> %j', res.statusCode, res.headers);
  // console.log('%j', obj);
});