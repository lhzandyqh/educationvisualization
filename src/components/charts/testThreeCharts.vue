<template>
  <div class="app-container">
    <div id="testthree" style="width:100%;height: 200px"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons.js'
import { getWorkDis } from '@/api/homePageData'
export default {
  name: 'testCharts',
  data () {
    return {
      option: {
        title: {
          text: '工作类别占比',
          x: 'right',
          textStyle: {// 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: 'Arial, Verdana, sans...',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: 'white'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   left: 'center',
        //   top: 'bottom',
        //   data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        // },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: {show: true},
        //     dataView: {show: true, readOnly: false},
        //     magicType: {
        //       show: true,
        //       type: ['pie', 'funnel']
        //     },
        //     restore: {show: true},
        //     saveAsImage: {show: true}
        //   }
        // },
        series: [
          {
            name: '半径模式',
            type: 'pie',
            radius: [30, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              {value: 10, name: '行政获奖'},
              {value: 5, name: '学术成果'},
              {value: 15, name: '项目课题'},
              {value: 25, name: '指导培养教师'},
              {value: 20, name: '完成教育工作'},
              {value: 35, name: '指导学生参加学科竞赛'},
              {value: 30, name: '组织课外活动'},
              {value: 40, name: '基本工作'},
              {value: 40, name: '校本培训'},
              {value: 40, name: '完成教育工作'},
              {value: 40, name: '系统进修或继续教育'},
              {value: 40, name: '汇报课观摩课研究课'},
              {value: 40, name: '教育教学成果'},
              {value: 40, name: '学术讲座与经验分享'},
              {value: 40, name: '艺科体社团'},
              {value: 40, name: '绩效工作'},
              {value: 40, name: '研究课'},
              {value: 40, name: '教育教学评比竞赛'}
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.getDis()
    setTimeout(() => {
      this.initChart()
    }, 500)
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('testthree'), 'macarons')
      this.chart.setOption(this.option)
    },
    getDis: function () {
      const prams = {
        year: '2019'
      }
      getWorkDis(prams).then(response => {
        console.log('测试拿工作类别数据111')
        console.log(response.data.data)
        this.option.series[0].data[0].value = response.data.data[0].adminstrative_score
        this.option.series[0].data[1].value = response.data.data[0].academic_score
        this.option.series[0].data[2].value = response.data.data[0].project_topic_score
        this.option.series[0].data[3].value = response.data.data[0].guideTrainTecScore
        this.option.series[0].data[4].value = response.data.data[0].teachWorkScore
        this.option.series[0].data[5].value = response.data.data[0].guide_stu_score
        this.option.series[0].data[6].value = response.data.data[0].organizeExtraActivity
        this.option.series[0].data[7].value = response.data.data[0].baseworkScore
        this.option.series[0].data[8].value = response.data.data[0].train_score
        this.option.series[0].data[9].value = response.data.data[0].eduWorkScore
        this.option.series[0].data[10].value = response.data.data[0].furLearnContinusEdu
        this.option.series[0].data[11].value = response.data.data[0].reportObsResearch
        this.option.series[0].data[12].value = response.data.data[0].edu_teach_ach_score
        this.option.series[0].data[13].value = response.data.data[0].lec_exp_share_score
        this.option.series[0].data[14].value = response.data.data[0].assoication_score
        this.option.series[0].data[15].value = response.data.data[0].performWorkScore
        this.option.series[0].data[16].value = response.data.data[0].reserch_score
        this.option.series[0].data[17].value = response.data.data[0].edu_teach_compet_score
      })
    }
  }
}
</script>

<style scoped>

</style>
