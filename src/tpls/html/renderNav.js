import html from './nav.html';
require('./nav.css');
function renderNav(id) {
    document.getElementById(id).innerHTML = html;
};
module.exports = renderNav;