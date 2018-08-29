let address = require('../config/getIPAddress');
module.exports = {
    defaultConfig : {
        names : ['base','jquery'],
        filename : 'assets/js/[name].js',
        minChunks : 2
    },
    globalJs : {
        echarts : 'echarts'
    },
    htmlWebpackPluginConfig : {
        hash : false,
        inject : true,
        chunksSortMode : 'manual',
        chunks : ['jquery','base'],
        minify : false,
        showErrors : true
    },
    host : address,//可选参数，默认为localhost
    port : 8083  //可选参数，默认为8081
};