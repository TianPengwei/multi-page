const webpack = require('webpack');
const path = require('path');
const _plugins = require('./config/plugins');
const _loaders = require('./config/loaders');
const _routers = require('./src/routers');

var publicPath = 'http://localhost:8081';
module.exports = {
    entry : _routers.entries,
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'assets/js/[name].js',
        publicPath : publicPath
    },
    module : {
        rules : _loaders
    },
    plugins : _plugins,
    devServer : {
        host : 'localhost',
        port : 8081,
        contentBase : path.resolve(__dirname,'dist')
    }
};