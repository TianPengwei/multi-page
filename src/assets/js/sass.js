const $ = require('jquery');
const base = require('./base');
require('../css/base.less');
require('../css/pages/sass.scss');
//渲染公共头部
{
    const renderHead = require('../../tpls/html/renderHead');
    renderHead('JS_head',$);
}
//渲染公共导航
{
    const renderNav = require('../../tpls/html/renderNav');
    renderNav('JS_nav',$);
}
{
    let o = {
        name : '田鹏伟',
        skill : 'web'
    };
    let age = Symbol();
    o[age] = 18;
    console.log(o);
    for(let val in o) {
        console.log(o[val]);
    }
}