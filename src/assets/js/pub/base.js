let $ = require('jquery');
let CryptoJS = require('crypto-js');
export let Base = {
    test() {
        
    },
    secretKey: '3cf8dec999164de3a334e3488b04aaf6', //秘钥
    desKey: '1492bd85794e4217a82bf145fa1dc68e', //3DES密钥

    //加密用到的数据
    data : {
        clientType: 6, //客户端类型
        clientVersion: '1.0', //版本
        timeStamp: (function() {
            var ls = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var str = '';
            for (let i = 0; i < 10; i++) {
                str += ls[Math.floor(Math.random() * 26)];
            }
            return str + new Date().getTime();
        })(), //时间戳
        token: (function() { //获取本地存储中的token，没有为空字符串
            return localStorage.getItem('_token') ? localStorage.getItem('_token') : '';
        })() 
    },

    //正则表达式
    regs : {
        mobile : /^1[356789]\d{9}$/,  //手机号
        pwd : /[\d\w]{6,20}/,  //密码
    },

    //字符串处理方法
    handleStr : {
        //去除所有空格
        trimSpace(str) {
            return str.replace(/\s/g,'');
        }
    },

    tips : {
        nullMobile : '* 请输入手机号',
        errorMobile : '* 请输入正确的手机号',
        nullPassword : '* 请输入密码',
        errorPassword : '* 请输入正确的密码'
    },

    //判断是否登录
    isLogin() {
        let token = localStorage.getItem('token'),
            userInfo = sessionStorage.getItem('userInfo');
        if(!token || !userInfo) {
            return false;
        }
        if(token.length < 1 || userInfo.length < 1) {
            return false;
        }
        return true;
    },
    
    /**
     * create 田鹏伟
     * date 2018-08-28
     * @param {Array[String]} 'footer'-页脚|'header'-页头|'goToTop'-返回顶部&客服
     * 根据参数渲染公共模块
     */
    initModules(arr,data) {
        for(let i=0; i<arr.length; i++) {
            if(arr[i] == 'footer' || arr[i] == 'loginFooter') {
                const render = require('../../../tpls/footer/renderFooter');
                render[arr[i]]('JS_footer',$,data);
            }
            if(arr[i] == 'header' || arr[i] == 'loginHeader') {
                const render = require('../../../tpls/header/renderHeader');
                render[arr[i]]('JS_header',$,data);
            }
            if(arr[i] == 'goToTop') {
                const renderGoTop = require('../../../tpls/goToTop/top');
                renderGoTop('JS_goToTop',$);
            }
        }
    },

    /**
     * create 田鹏伟
     * date 2018-08-28
     * @param1 {Number} 是否带token：1带，0不带
     * @param2 {Object} 需要加密传递给后端的额外参数
     * desc 生成ajax交互headers对象
     */
    initAjaxHeader(type,obj) {
        var headers = {
            "clientType": Base.data.clientType,
            "clientVersion": Base.data.clientVersion,
            "timeStamp": Base.data.timeStamp,
            "sign": Base.getPostStr(type,obj),
            "token": Base.data.token,
            "imei": Base.data.timeStamp
            // "imei": base.getImei()
        };
        return headers;
    },

    /**
     * create 田鹏伟
     * date 2018-08-28
     * @param1 {Number} 是否带token：1带，0不带
     * @param2 {Object} 需要加密传递给后端的额外参数
     * desc 生成加密串
     */
    getPostStr(type,obj) {
        let _data = Base.data;
        //如果不带token则移除o.token
        if(type == 1) o.token = null;
        //判断有没有加密方法
        if (typeof CryptoJS.HmacSHA256 == 'function' && typeof CryptoJS.enc.Base64.stringify == 'function') {
            var timeStamp = _data.timeStamp,
                keyArr = [],
                o = obj,
                signStr = '';
            if (o) {
                for (var n in _data) {
                    if(_data[n]!=null) {
                        o[n] = _data[n]
                    }
                };
            } else {
                o = _data;
            }
            for (var k in o) keyArr.push(k);
            keyArr.sort();
            for (var i = 0, l = keyArr.length; i < l; i++) signStr += keyArr[i] + '=' + o[keyArr[i]] + '&';
            signStr = signStr.substr(0, signStr.length - 1);
            signStr = CryptoJS.HmacSHA256(signStr, Base.secretKey);
            return CryptoJS.enc.Base64.stringify(signStr);
        } else {
            throw new Error('参数错误');
        }
    },
    
    //object根据key取value时，检验该key是否存在
    testKey(o) {
        return new Proxy(o,{
            get : function(target,property) {
                if(property in target) return target[property];
                throw new Error('Property '+ property +' does not exist.');
            }
        });
    },

    //检验是否空字符
    checkNullStr(str) {
        if(Base.handleStr.trimSpace(str).length < 1) {
            return false;
        }
        return true;
    },

    //校验手机号
	checkPhone: function(number) {
        let regExp = Base.regs.mobile;
		if(!(regExp.test(number))) {
			return false;
		} else {
			return true;
		}
	},
	//检验6-20位字母与数字的组合密码
	checkPassword: function(number) {
        var regExp = Base.regs.pwd;
		if(regExp.test(number)) {
			return true;
		} else {
			return false;
		}
	},

	//input 限制长度
	inputLimitlengthFunc: function(obj, length) {
		if(typeof obj !== 'object' || obj == '') throw new Error('object is nessary -- by WYC');
		if(typeof length !== 'number' || length == '') throw new Error('please input length  --by WYC');
		if(obj.val().length > length) {
			obj.val(obj.val().substr(0, length));
		}
	},

	//检查用户是否登录
	checkLogin: function() {
		if(localStorage.getItem('token') && localStorage.getItem('IMEI') && sessionStorage.getItem('userInfo')) {
			var userInfo = '';
			var info;
			userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
			info = "用户 " + userInfo.nickName;
			$('li#loginInfo').html(info + '<font id="signOut"> 退出<font>');
			$('li#loginInfo').attr('data-href', '');
			$('font#signOut').on('click', function() {
				if(window.confirm('是否退出登录？')) {
					$('li#loginInfo').html("大额充值");
					Utils.signOut();
					Web.go('index.html');
				}
			});
			return true;
		} else {
			return false;
		}
	},

	//退出登录
	signOut: function(callBack) {
		localStorage.clear();
		sessionStorage.clear();
		if(callBack && typeof callBack == "function") {
			callBack();
		}
	},

	//生成imei 号码
	creatImeiNumber: function() {
		var time = new Date();
		var imeiNumber = time.getTime() + time.getTime().toString().substr(4, 11);
		return imeiNumber;
    },
    
	//键盘事件  例：Utils.keyboardDownFunc($('div') , 13 , 'click');
	keyboardDownFunc: function(obj, keyNumber,event) {
		if(typeof obj != 'object') throw new Error('first argument is onject --by wyc');
		document.onkeydown = function(e) {
			var ev = document.all ? window.event : e;
			if(ev.keyCode == keyNumber) {
				obj.trigger(event);
			}
		}
	},	
	
	// 从url解析请求参数
	getQueryParameter: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return unescape(r[2]);
		}
		return null;
	}
};