module.exports = {
    test() {
        console.log('base.js');
    },
    //object根据key取value时，检验该key是否存在
    testKey(o) {
        return new Proxy(o,{
            get : function(target,property) {
                if(property in target) return target[property];
                throw new Error('Property '+ property +' does not exist.');
            }
        });
    }
};