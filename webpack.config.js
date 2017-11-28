const webpack = require('webpack');
const path = require('path');
const _plugins = require('./config/plugins');
const _loaders = require('./config/loaders');
const _routers = require('./src/routers');
const _build = require('./config/build');

module.exports = {
    entry : _routers.entries,
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'assets/js/[name].js',
        publicPath : _build.publicPath
    },
    module : {
        rules : _loaders
    },
    plugins : _plugins,
    devServer : {
        host : _build.host,
        port : _build.port,
        contentBase : path.resolve(__dirname,'dist')
    }
};