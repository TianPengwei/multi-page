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
    
}

{
        
    function step1(resolve,reject) {
        const status = 1;
        if(status == 1) {
            resolve('step1-resolve');
            console.log('step1完成');
        } else {
            reject('step1-reject');
            console.log('step1失败');
        }
    }
    function step2(resolve,reject) {
        const status = 1;
        if(status == 1) {
            resolve('step2-resolve');
            console.log('step2完成');
        } else {
            reject('step2-reject');
            console.log('step2失败');
        }
    }
    function step3(resolve,reject) {
        const status = 1;
        if(status == 1) {
            resolve('step3-resolve');
            console.log('step3完成');
        } else {
            reject('step3-reject');
            console.log('step3失败');
        }
    }
    console.log(new Promise(step1));
    new Promise(step1).then(function(val) {
        console.log(val);
        return new Promise(step2);
    }).then(function(val) {
        console.log(val);
    });
}

{
    console.log('----------------Map-------------');
    let json = {
        name : 'test',skill : 'web'
    }; 
    let arr = [1,2,3];
    var map = new Map();
    map.set(json,'iam');
    map.set(arr,'数组');
    console.log(map.size);
    console.log(map.get(json));
}

{
    console.log('-------------set------------');
    let arr = ['a','b','c',1,2];
    let setArr = new Set(arr);
    console.log(setArr.size);
    setArr.add('测试');
    setArr.delete('a');
    console.log(setArr.has('b'));
    console.log(setArr);
    // for(let item of setArr) {
    //     console.log(item);
    // }
    // setArr.forEach((val)=>console.log('---'+val));
}
{
    console.log('---------------------------------------');
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