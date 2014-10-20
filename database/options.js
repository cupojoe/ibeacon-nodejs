var fs = require('fs'),
    configPath = './config/config.json';

console.log('options runing');
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
exports.dbConfig = parsed;