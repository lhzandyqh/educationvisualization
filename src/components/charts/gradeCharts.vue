<template>
  <div class="app-container">
    <div id="grade" style="width:100%;height: 350px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
export default {
  name: 'gradeCharts',
  data () {
    return {
      option: {
        backgroundColor: '', // 设置无背景色
        title: {
          text: '2020年高一第一次月考各科平均分',
          textStyle: {// 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 'normal'
          }
        },
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [82.7, 82.7, '政治'],
            [70.6, 70.6, '历史'],
            [69.6, 69.6, '地理'],
            [68.1, 68.1, '生物'],
            [89.7, 89.7, '化学'],
            [70.1, 70.1, '物理'],
            [74.4, 74.4, '英语'],
            [87.1, 87.1, '数学'],
            [89.3, 89.3, '语文']
          ]
        },
        grid: {containLabel: true},
        xAxis: {name: '分数'},
        yAxis: {type: 'category'},
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['高分', '低分'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#D7DA8B', '#E15457']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: '分数',
              // Map the "product" column to Y axis
              y: 'product'
            }
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
      this.chart = echarts.init(document.getElementById('grade'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>
  .title {
    /*padding-left: 20px;*/
  }

</style>
