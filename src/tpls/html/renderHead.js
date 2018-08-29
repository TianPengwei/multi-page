import html from './head.html';
require('./head.css');
function renderHead(id,$) {
    document.getElementById(id).innerHTML = html;
    const base = $('body').attr('base');
    const _href = $('header a').attr('href');
    if(base == './') {
        $('header a').attr('href','./');
    } else if(base == './pages/') {
        $('header a').attr('href','../');
    }
}
module.exports = renderHead;