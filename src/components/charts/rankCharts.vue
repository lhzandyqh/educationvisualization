<template>
  <div class="app-container">
    <div id="grade" style="width:100%;height: 200px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
import { getTeacherWorkNum } from '@/api/homePageData'
export default {
  name: 'rankCharts',
  data () {
    return {
      option: {
        title: {
          text: '工作量分析图',
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
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // legend: {
        //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
        // },
        grid: {
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '基本工作',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '绩效工作',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      }
    }
  },
  mounted () {
    this.getWorkNum()
    setTimeout(() => {
      this.initChart()
    }, 500)
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('grade'), 'macarons')
      this.chart.setOption(this.option)
    },
    getWorkNum: function () {
      const prams = {
        year: '2019'
        // month: '08'
      }
      this.option.xAxis[0].data = []
      this.option.series[0].data = []
      this.option.series[1].data = []
      getTeacherWorkNum(prams).then(response => {
        console.log(('测试拿工作量数据'))
        console.log(response.data.data)
        for (let i = 0; i < response.data.data.length; i++) {
          this.option.xAxis[0].data.push(response.data.data[i].date)
          this.option.series[0].data.push(response.data.data[i].baseworkScore)
          this.option.series[1].data.push(response.data.data[i].performWorkScore)
        }
      })
    }
  }
}
</script>

<style scoped>
  .title span {
    font-size: 18px;
    color: #0092ce;
  }

</style>
