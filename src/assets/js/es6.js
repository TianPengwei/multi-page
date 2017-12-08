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
    let a = {
        name : 'bob',age : 20
    };
    let b = {
        name : '张三',addr : '深圳市'
    };
    console.log(Object.assign(b,a));
}

{
    //class
    console.log('----------------class-------------------');
    class Coder {
        name(val) {
            return val;
        }
        skill(val) {
            console.log(this.name('肥仔')+ ':Skill-' +val);
        }
    };
    let tpw = new Coder;
    tpw.skill('前端');
}

{
    //proxy
    console.log('----------------proxy-------------------');
    let o = {
        add : function(val) {
            return val + 100;
        },
        name : '田鹏伟'
    };
    let pro = new Proxy({
        add : function(val) {
            return val + 100;
        },
        name : '田鹏伟'
    },{
        get : function(target,key,property) {
            console.log('come in get');
            return target[key];
        }
    });
}

{
    //map
    console.log('----------------map-------------------');
    const o = {
        name : '田鹏伟',
        age : 20
    };
    const arr = [1,2,3];
    const m = new Map();
    m.set(o,'人');
    m.set(arr,o);
    m.delete(arr);
}

{
    const dom = document.getElementById('J_es6');
    let setArr = new Set(['田','鹏','伟','田']);
    console.log(Array.isArray(setArr));  //false
}