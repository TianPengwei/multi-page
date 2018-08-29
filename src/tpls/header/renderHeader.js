import tpl from './header.tpl';
import loginHeader from './login_header.html';
require('./header.scss');
function renderHeader(id,$,data) {
    document.getElementById(id).innerHTML = tpl(data);
    $('#J_loginOut').click(function() {
        if(window.confirm('是否退出登录？')) {
            $('li#loginInfo').html("大额充值");
            localStorage.removeItem('_token');
            data.isLogin = false;
            document.getElementById(id).innerHTML = tpl(data);
        }
    });
    
}
module.exports = {
    header(id,$,data) {
        document.getElementById(id).innerHTML = tpl(data);
        $('#J_loginOut').click(function() {
            if(window.confirm('是否退出登录？')) {
                $('li#loginInfo').html("大额充值");
                localStorage.removeItem('token');
                sessionStorage.removeItem('userInfo');
                location.href = './';
                // data.nickName = null;
                // document.getElementById(id).innerHTML = tpl(data);
            }
        });
        
    },
    loginHeader(id,$,data) {
        document.getElementById(id).innerHTML = loginHeader;
    }
};