const ENV = require('./env');
const config = require('../src/routers');
var _path = 'http://'+ config.host +':'+ config.port;
// if(ENV == 'build') {
//     _path = config.proPath;
// } else if(ENV == 'te') {
//     _path = config.testPath;
// }

module.exports = {
    host : config.host,
    port : config.port,
    publicPath : _path,
    entry : config.entries
};