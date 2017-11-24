const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglifyPlugin = require('uglifyjs-webpack-plugin');
const routers = require('../src/routers');
const ENV = process.env.npm_lifecycle_event;
var config = {
    hash : true,
    inject : true,
    chunksSortMode : 'manual',
    chunks : ['jquery','base'],
    minify : false,
    showErrors : true
};
var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        names : ['base','jquery'],
        filename : 'assets/js/[name].js',
        minChunks : 2
    }),
    new webpack.ProvidePlugin({
        echarts : 'echarts'
    })    
];
console.log('**********************'+ ENV +'***********************');
if(ENV == 'build') {
    plugins.push(new uglifyPlugin({
        compress : {
            warnings : false
        }        
    }));
    config.minify = {
        htmlminify : true,
        collapseWhitespace : true,
        removeAttributeQuotes : true
    };
    config.showErrors = false;
}

var pages = routers.pages,
    htmlConfig = [];
for(let i=0,len=pages.length; i<len; i++) {
    const page = pages[i];
    htmlConfig.push(new htmlWebpackPlugin({
        template : page.path,
        filename : page.path.replace('./src/',''),
        hash : page.hash || config.hash,
        chunks : page.chunks || (function() {
            const _arr = page.path.split('/');
            return config.chunks.concat(_arr[_arr.length-1].split('.')[0])
        })()
    }));
}
module.exports = plugins.concat(htmlConfig);
