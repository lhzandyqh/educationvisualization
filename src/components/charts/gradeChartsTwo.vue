<template>
  <div class="app-container">
    <div id="gradeTwo" style="width:100%;height: 350px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
export default {
  name: 'gradeChartsTwo',
  data () {
    return {
      option: {
        backgroundColor: '', // 设置无背景色
        title: {
          text: '2020年第一次月考高一年级各班各科目平均分',
          textStyle: {// 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治'],
          x: 'right'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          // boundaryGap: false,
          data: ['一班', '二班', '三班', '四班', '五班', '六班', '七班']
        },
        yAxis: {
          type: 'value',
          min: 60,
          max: 100,
          interval: 5
        },
        series: [
          {
            name: '语文',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [80, 82, 75, 74, 77, 86, 80]
          },
          {
            name: '数学',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [75, 77, 70, 67, 80, 72, 73]
          },
          {
            name: '英语',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [90, 82, 83, 84, 86, 88, 79]
          },
          {
            name: '物理',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [71, 69, 74, 80, 75, 70, 68]
          },
          {
            name: '化学',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [80, 76, 81, 86, 70, 76, 74]
          },
          {
            name: '生物',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [83, 85, 90, 79, 87, 80, 78]
          },
          {
            name: '历史',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [86, 80, 85, 90, 79, 82, 91]
          },
          {
            name: '地理',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [78, 90, 79, 84, 82, 87, 83]
          },
          {
            name: '政治',
            type: 'line',
            // stack: '总量',
            smooth: true,
            data: [90, 87, 93, 85, 79, 88, 82]
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
      this.chart = echarts.init(document.getElementById('gradeTwo'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
