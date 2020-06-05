<template>
  <div class="app-container">
    <div id="zichan" style="width:100%;height: 320px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
export default {
  name: 'zichanCharts',
  data () {
    return {
      option: {
        angleAxis: {
          type: 'category',
          data: ['固定资产', '无形资产', '低值资产', '易消耗资产', '其他资产']
          // data: ['物品A', '物品B', '物品C', '物品D', '物品E', '物品F', '物品G']
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
          type: 'bar',
          data: [2, 2, 3, 4, 3],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a'}]
        // }, {
        //   type: 'bar',
        //   data: [2, 4, 6, 1, 3, 2, 1],
        //   coordinateSystem: 'polar',
        //   name: 'B',
        //   stack: 'a'
        // }, {
        //   type: 'bar',
        //   data: [1, 2, 3, 4, 1, 2, 5],
        //   coordinateSystem: 'polar',
        //   name: 'C',
        //   stack: 'a'
        // }]
        // legend: {
        //   show: true,
        //   data: ['A', 'B', 'C']
        // }
        // radar: [
        //   {
        //     indicator: [
        //       { text: '出差', max: 150 },
        //       { text: '迟到', max: 150 },
        //       { text: '请假', max: 150 },
        //       { text: '早退', max: 120 },
        //       { text: '加班', max: 108 },
        //       { text: '旷工', max: 72 }
        //     ],
        //     center: ['60%', '50%'],
        //     radius: 100
        //   }
        // ],
        // series: [
        //   {
        //     name: '成绩单',
        //     type: 'radar',
        //     radarIndex: 0,
        //     data: [
        //       {
        //         value: [90, 113, 140, 30, 70, 60],
        //         name: '李四',
        //         label: {
        //           show: true,
        //           formatter: function (params) {
        //             return params.value
        //           }
        //         },
        //         areaStyle: {
        //           opacity: 0.9,
        //           color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
        //             {
        //               color: '#B8D3E4',
        //               offset: 0
        //             },
        //             {
        //               color: '#72ACD1',
        //               offset: 1
        //             }
        //           ])
        //         }
        //       }
        //     ]
        //   }
        // ]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('zichan'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>
  .title {
    /*padding-left: 20px;*/
  }
  #kaoqing {
    margin-left: -50px;
  }

</style>
