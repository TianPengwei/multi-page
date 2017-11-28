import tpl from './index.tpl';
function renderIndex(id,obj,$) {
    document.getElementById(id).innerHTML = tpl(obj);
};
module.exports = renderIndex;