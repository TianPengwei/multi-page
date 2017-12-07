const $ = require('jquery');
const base = require('./base');
require('../css/pages/echarts.scss');
//渲染公共头部
{
    const renderHead = require('../../tpls/html/renderHead');
    renderHead('JS_head',$);
}
//渲染公共导航
{
    const renderNav = require('../../tpls/html/renderNav');
    renderNav('JS_nav',$);

}
{
    var myChart = echarts.init(document.getElementById('test'));
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例1'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });  
}

