<template>
  <div class="app-container">
    <div id="test" style="width:100%;height: 200px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getAttendance } from '@/api/homePageData'
// require('echarts/theme/macarons') // echarts theme
import 'echarts/theme/macarons.js'
export default {
  name: 'testCharts',
  data () {
    return {
      option: {
        title: {
          text: '学生出勤趋势图',
          x: 'center',
          textStyle: {// 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: 'white'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        // legend: {
        //   data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        // },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          min: 80,
          max: 100,
          interval: 2
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    }
  },
  mounted () {
    this.getAttenData()
    setTimeout(() => {
      this.initChart()
    }, 500)
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('test'), 'macarons')
      this.chart.setOption(this.option)
    },
    getAttenData: function () {
      const prams = {
        date: '2019-05'
      }
      getAttendance(prams).then(response => {
        console.log('测试出勤获取数据')
        console.log(response.data.data)
        this.option.xAxis.data = []
        this.option.series[0].data = []
        for (let i = 0; i < response.data.data.length; i++) {
          this.option.xAxis.data.push(response.data.data[i].date)
          this.option.series[0].data.push(response.data.data[i].attendance)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
