const $ = require('jquery');
const base = require('./base');
require('../css/base.less');
require('../css/pages/es6.scss');
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
    const dom = document.getElementById('J_es6');
}