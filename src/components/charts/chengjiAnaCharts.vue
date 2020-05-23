<template>
  <div class="app-container">
    <!--    <div content="title">-->
    <!--      <span style="font-weight: bolder;font-size: 18px">教师积分统计详情图</span>-->
    <!--    </div>-->
    <div class="content">
      <div id="chengjiana" style="width:100%;height: 400px"/>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
export default {
  name: 'integralCharts',
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
        // toolbox: {
        //   feature: {
        //     dataView: {show: true, readOnly: false},
        //     magicType: {show: true, type: ['line', 'bar']},
        //     restore: {show: true},
        //     saveAsImage: {show: true}
        //   }
        // },
        // legend: {
        //   data: ['蒸发量', '降水量', '平均温度']
        // },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '分数',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '语文',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '数学',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '平均分',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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
      this.chart = echarts.init(document.getElementById('chengjiana'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
