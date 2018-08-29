
const entries = {
    index : './src/assets/js/index',
    page1 : './src/assets/js/page1',
    es6 : './src/assets/js/es6',
    jquery : 'jquery',
    base : './src/assets/js/base',
    echarts : './src/assets/js/echarts',
    media : './src/assets/js/media',
    fetch : './src/assets/js/fetch',
    sass : './src/assets/js/sass'
};
const pages = [
    {
        path : './src/index.html'
    },{
        path : './src/pages/page1.html'
    },{
        path : './src/pages/echarts.html'
    },{
        path : './src/pages/es6.html'
    },{
        path : './src/pages/sass.html'
    },{
        path : './src/pages/media.html'
    },{
        path : './src/pages/fetch.html'
    }
];

module.exports = {
    entries : entries,
    pages : pages
};