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
    const base = $('body').attr('base'),
          page = $('body').attr('page');
    $('body').removeAttr('base').removeAttr('page');
    $('nav li a').each(function() {
        var _href = $(this).attr('href');
        $(this).parent().removeClass('cur');
        if(base == './pages/') {            
        } else if(base == './'){
            $(this).attr('href','./pages/'+ _href);
        }
        if(_href.split('.')[0] == page) {
            $(this).parent().addClass('cur');
        }
    });

};
module.exports = renderNav;