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
    var myChart = echarts.init(document.getElementById('con1'));
    // 绘制图表
    myChart.setOption({
        color: ['#3398DB'],
        title: {
            text: '柱状图'
        },
        tooltip: {},
        xAxis: {
            data: ['1月', '2月', '3月', '4月', '5月', '6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {},
        series: [{
            name: '投资额',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,20,18,19,32,10,11]
        }]
    });  
}
{
    var myChart = echarts.init(document.getElementById('con2'));
    // 绘制图表
    myChart.setOption({
        title: {
            text: '累计赚取',
            //subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        color: ['#f63'],
        toolbox: {
            show: false,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月','7月','8月','9月','10月']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}万'
            }
        },
        series: [            
            {
                name:'赚取（万）',
                type:'line',
                data:[20, 21, 23, 58, 35, 25, 10, 20,45,10],
                markPoint: {
                    data: [
                        
                    ]
                },
                markLine: {
                    
                }
            }
        ]
    });
}

