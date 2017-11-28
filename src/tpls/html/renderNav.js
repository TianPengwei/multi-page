import html from './nav.html';
require('./nav.css');
function renderNav(id,$) {
    document.getElementById(id).innerHTML = html;
    //加载完dom，绑定事件
    $('nav li').click(function() {
        if($(this).find('a').length > 0) {
            $(this).addClass('cur').siblings().removeClass('cur');
        }
    });
    const base = $('body').attr('base');
    $('body').removeAttr('base');
    $('nav li a').each(function() {
        var _href = $(this).attr('href');
        if(base == './pages/') {            
        } else if(base == './'){
            $(this).attr('href','./pages/'+ _href);
        }
    });
};
module.exports = renderNav;