<template>
  <div class="app-container">
    <div id="kaoqing" style="width:100%;height: 320px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
export default {
  name: 'kaoqingCharts',
  data () {
    return {
      option: {
        radar: [
          {
            indicator: [
              { text: '出差', max: 150 },
              { text: '迟到', max: 150 },
              { text: '请假', max: 150 },
              { text: '早退', max: 120 },
              { text: '加班', max: 108 },
              { text: '旷工', max: 72 }
            ],
            center: ['60%', '50%'],
            radius: 100
          }
        ],
        series: [
          {
            name: '成绩单',
            type: 'radar',
            radarIndex: 0,
            data: [
              {
                value: [90, 113, 140, 30, 70, 60],
                name: '李四',
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value
                  }
                },
                areaStyle: {
                  opacity: 0.9,
                  color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                      color: '#B8D3E4',
                      offset: 0
                    },
                    {
                      color: '#72ACD1',
                      offset: 1
                    }
                  ])
                }
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('kaoqing'), 'macarons')
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
