import html from './head.html';
require('./head.css');
function renderHead(id) {
    document.getElementById(id).innerHTML = html;
}
module.exports = renderHead;