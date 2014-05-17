var assert = require('assert');
var client = require('restify').createJsonClient({
  url: 'http://localhost:8080',
  version: '*'
});

client.post('/ranging/enter', {
    'uuid': 'TempUUID',
    'major': 'TempMajor',
    'minor' : 'TempMinor',
    'region' : 'TempRegionName',
    'uid' : 'TempUserID'
}, function(err, req, res, obj) {
  assert.ifError(err);
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', obj);
});