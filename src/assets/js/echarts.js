const $ = require('jquery');
const base = require('./base');
require('../css/base.less');
require('../css/pages/echarts.scss');
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
    let person = {
        name :  '张三',
        age : 22
    };
    let a = 10;
    document.getElementById('test').innerHTML = `我是${person.name}，今年${person.age+a}了`;
}

