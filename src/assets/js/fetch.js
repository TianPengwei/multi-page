const $ = require('jquery');
const base = require('./base');
require('../css/pages/media.scss');
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
    let list = document.getElementById('students');
    fetch("../assets/data/fetch.json").then(function(response) {
        if(response.status !== 200){
            console.log("存在一个问题，状态码为："+ response.status);
            return;
        }
        //检查响应文本
        response.json().then(function(data) {
            if(data.status == 0) {
                if(data.result.length > 0) {
                    let str = ``;
                    for(let [i,val] of data.result.entries()) {
                        str += `<li>
                            <strong>姓名：</strong>${val.name}，
                            <strong>年龄：</strong>${val.age}，
                            <strong>住址：</strong>${val.addr}
                        </li>`;
                    }
                    list.innerHTML = str;
                }                
            }
            console.log(1);
        });
    }).catch(function(err) {
        console.log("Fetch错误:"+ err);
    })
    console.log(2);
}