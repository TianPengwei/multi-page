
const entries = {    
    jquery : 'jquery',
    base : './src/assets/js/pub/base',
    index : './src/assets/js/index',
    page1 : './src/assets/js/page1',
    index_login : './src/assets/js/index_login'
};
const pages = [
    {  //首页
        path : './src/pages/index.html'
    },{
        path : './src/pages/page1.html'
    },{  //去登陆
        path : './src/pages/index_login.html'
    }
];

module.exports = {
    entries : entries,
    pages : pages
};