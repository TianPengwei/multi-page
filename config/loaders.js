
var loaders = [
    {
        test : /\.css$/,
        use : [ {loader : 'style-loader'}, {loader : 'css-loader'} ]
    },
    {
        test : /\.(jpg|png|gif)$/,
        use : [
            {
                loader : 'url-loader',
                options : {
                    limit : 10000,
                    name : '[name].[hash:8].[ext]',
                    outputPath : '/assets/images/'
                }
            }
        ]
    },
    {
        test : /\.js$/,
        use : 'babel-loader'
        //mark-压缩jquery的时候如果排除这个文件夹报错
        //exclude : /node_modules/
    },
    {
        test : /\.scss$/,
        use : [ {loader : 'style-loader'}, {loader : 'css-loader'}, {loader : 'sass-loader'} ]
    },
    {
        test : /\.less$/,
        use : [ {loader : 'style-loader'}, {loader : 'css-loader'}, {loader : 'less-loader'} ]
    },
    {
        test : /\.html$/,
        use : 'html-withimg-loader'
    }
];
module.exports = loaders;