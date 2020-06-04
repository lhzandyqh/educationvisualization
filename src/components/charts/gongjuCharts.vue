<template>
  <div class="app-container">
    <div id="gongju" style="width:100%;height: 300px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'gongjuCharts',
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['分数', '平均分']
        },
        xAxis: [
          {
            type: 'category',
            data: ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '分数',
            min: 0,
            max: 100,
            interval: 10
            // axisLabel: {
            //   formatter: '{value} ml'
            // }
          },
          {
            type: 'value',
            name: '分数',
            min: 0,
            max: 100,
            interval: 10
            // axisLabel: {
            //   formatter: '{value} °C'
            // }
          }
        ],
        series: [
          {
            name: '分数',
            type: 'bar',
            data: [82, 89, 70, 92, 75.6, 76.7, 65.6, 72.2, 82.6]
          },
          {
            name: '平均分',
            type: 'line',
            yAxisIndex: 1,
            data: [79, 85, 74, 82, 71.6, 70.7, 75.6, 75.2, 72.6]
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
      this.chart = echarts.init(document.getElementById('gongju'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
