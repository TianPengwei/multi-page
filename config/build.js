const ENV = require('./env');
const routers = require('../src/routers');
var publicPath = 'http://'+ routers.host +':'+ routers.port;
if(ENV == 'build') {
    publicPath = 'http://192.168.3.247';
}

module.exports = {
    host : routers.host,
    port : routers.port,
    publicPath : publicPath
};