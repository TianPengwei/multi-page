const $ = require('jquery');
const base = require('./base');
require('../css/base.less');
require('../css/pages/index.scss');
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
//渲染首页内容
{
    let renderIndex = require('../../tpls/ejs/renderIndex');
    let obj = {
        "status" : 0,
        "result" : [
            {
                "title" : "上线了",
                "date" : "2017-11-20",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！",
                "date" : "2017-11-21",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            },
            {
                "title" : "上线了！！！",
                "date" : "2017-11-22",
                "desc" : [
                    "测试第一条","测试第二条","测试第三条"
                ]
            }
        ]
    };
    $.ajax({
        url : './assets/data/index.json',
        async : false,
        success : function(result) {
            if(result.status == 0) obj = result;
        },
        error : function() {
            alert('请求失败');
        }
    });
   renderIndex('J_index',obj,$);
}

