import {Carouse, Base, $, CryptoJS} from './pub/packages';
require('../css/base.less');
require('../css/pages/index.scss');
import Swiper from "swiper";
import 'swiper/dist/css/swiper.css'
   

let main = {
    data : {
        userInfo : {
            nickName : null
        }
    },
    doms : {
        divSwiper : $('#J_swiper'),  //swiper容器
        divLoginCon : $('#J_loginCon'),  //banner登录状态容器
        btnAccount : $('#J_account'),  //我的账户按钮
    },
    fncs : {
        //重置userInfo
        initUserInfo() {
            if(sessionStorage.getItem('userInfo')) {
                main.data.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            }
        },
        //swiper
        initSwiper() {
            var mySwiper = new Swiper ('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
                clickable: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
              })        
        },
        //获取banner&初始化swiper
        getBannerList() {
            $.ajax({
                type: "POST",
                headers: Base.initAjaxHeader(0,{}),
                dataType: 'json',
                async: true,
                url: '/api/find/banner',
                success: function(data) {
                    if (data.status == 0) {
                        for (var i = 0; i < data.result.bannerList.length; i++) {
                            main.doms.divSwiper.append(`<div class='swiper-slide' style='background: url(${data.result.bannerList[i].imagePath}) top center no-repeat;background-size: auto 100%;'><a target='_blank' href='${data.result.bannerList[i].bannerLink}'></a></div>`);
                            if (i == data.result.bannerList.length - 1) {
                                main.fncs.initSwiper();
                            }                            
                        }
                    }
                }
            });
        },
        //登录or未登录banner UI
        initLoginCon() {
            console.log(Base.isLogin());
            if(main.data.userInfo.nickName == null || !Base.isLogin()) {
                main.doms.divLoginCon.html(`
                <div class="new tac">
                    <strong class="f20">新手</strong>
                    <strong>15</strong>
                    <span>.0%</span>
                </div>
                <p class="tar f16 fc999">往期年化收益</p>
                <a href="javascript:;" class="btn dsb tac">立即注册</a>
                <p class="tips tac f16"><a class="fc999" href="./index_login.html">已有账户? 立即登录</a></p>
                `);
            } else {
                main.doms.divLoginCon.html(`
                <dl>
                    <dt>${
                        main.data.userInfo.headImg.length > 0 ?
                        `<img src="${main.data.userInfo.headImg}"/>` : ''
                    }</dt>
                    <dd>${main.data.userInfo.nickName}</dd>
                </dl>
                <a href="javascript:;" class="btn dsb tac">进入我的账户</a>
                `);
            }
        }
    },
    bind() {
        $('#J_account').click(function() {
            if(main.data.userInfo.nickName == null || !Base.isLogin()) {
                location.href = './index_login.html';
            } else {
                alert('去我的账户');
            }
        });
    },
    init() {
        this.fncs.initUserInfo();
        //渲染公共头部
        Base.initModules(['footer','header','goToTop'],this.data.userInfo);
        this.fncs.getBannerList();
        this.fncs.initLoginCon();
        this.bind();
        return main;
    }
};
main.init().bind();


