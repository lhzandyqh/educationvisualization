<template>
  <div class="app-container">
    <div id="testtwo" style="width:100%;height: 200px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
import { getNewExamGrade } from '@/api/homePageData'
export default {
  name: 'testTwoCharts',
  data () {
    return {
      option: {
        title: {
          text: '最新考试成绩分析图',
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
        grid: {
          // top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
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
            max: 600,
            interval: 60,
            axisLabel: {
              // formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '出勤率',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: '{value}%'
            }
          }
        ],
        series: [
          {
            name: '平均分',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '优秀人数',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '出勤率',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
    }
  },
  mounted () {
    this.getNewGrade()
    setTimeout(() => {
      this.initChart()
    }, 500)
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('testtwo'), 'macarons')
      this.chart.setOption(this.option)
    },
    getNewGrade: function () {
      const prams = {
        grade: '高二'
      }
      this.option.xAxis[0].data = []
      this.option.series[0].data = []
      this.option.series[1].data = []
      this.option.series[2].data = []
      getNewExamGrade(prams).then(response => {
        console.log(('测试拿最新成绩'))
        console.log(response.data.data)
        for (let i = 0; i < response.data.data.length; i++) {
          this.option.xAxis[0].data.push(response.data.data[i].className + '班')
          this.option.series[0].data.push(response.data.data[i].averageScore)
          this.option.series[1].data.push(response.data.data[i].excellentNum)
          this.option.series[2].data.push(response.data.data[i].averageAttendance)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
