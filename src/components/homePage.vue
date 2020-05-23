<template>
  <div class="app">
    <div class="row">
      <div class="col-md-4">
        <div class="school_name">
          <span>北京市中关村中学</span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="title">
          <div>
            <span>教师信息可视化平台</span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row time_container">
          <div class="col-md-4 time">
            <span>6:30</span>
          </div>
          <div class="col-md-3">
            <div class="date">
              <span>2020年4月9日</span>
            </div>
            <div class="date">
              <span>星期四</span>
            </div>
          </div>
          <div class="col-md-4 out">
            <span class="out_title">退出</span>
            <span>
              <img src="../assets/icon/tuichu.png">
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!bottom_show" class="row">
      <div class="col-md-3 basic_information">
        <el-card class="box-card-information">
          <div class="row">
            <div class="col-md-1">
              <img style="height: 15px;width: 15px" src="../assets/icon/jiben.png">
            </div>
            <div class="col-md-6">
              <span>基本信息</span>
            </div>
          </div>
          <div class="information_contianer">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="个人信息" name="first">个人信息</el-tab-pane>
              <el-tab-pane label="工作经历" name="second">工作经历</el-tab-pane>
              <el-tab-pane label="专业能力" name="third">专业能力</el-tab-pane>
              <el-tab-pane label="学习经历" name="fourth">学习经历</el-tab-pane>
              <el-tab-pane label="资产信息" name="fifth">资产信息</el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </div>
      <div class="col-md-5">
        <el-card class="box-card-information">
          <div class="row">
            <div class="col-md-1">
              <img style="height: 17px;width: 17px" src="../assets/icon/chengji.png">
            </div>
            <div class="col-md-6">
              <span>班级成绩分析</span>
            </div>
            <div class="col-md-5">
              <div class="qiehuan">
                <el-button type="text" @click="nextChart">切换图表</el-button>
              </div>
            </div>
          </div>
          <div class="chart_container">
            <grade-charts v-if="!chart_show"></grade-charts>
            <rank-charts v-if="chart_show"></rank-charts>
          </div>
        </el-card>
      </div>
      <div class="col-md-4">
        <el-card class="box-card-zichan">
          <div class="row">
            <div class="col-md-1">
              <img style="height: 17px;width: 17px" src="../assets/icon/kaoqing.png">
            </div>
            <div class="col-md-6">
              <span>考勤记录</span>
            </div>
          </div>
          <div class="kaoqingcontianer">
            <kaoqing-charts></kaoqing-charts>
          </div>
          <div class="shuoming">
            <span>注：当前页只显示本月数据</span>
          </div>
        </el-card>
      </div>
    </div>
    <div v-if="bottom_show" class="row">
      <div class="col-md-6">
        <el-card class="box-card-information">
          <div class="row">
            <div class="col-md-1">
              <img style="height: 15px;width: 15px" src="../assets/icon/jifen.png">
            </div>
            <div class="col-md-6">
              <span>积分详情</span>
            </div>
          </div>
          <div>
            <integral-charts></integral-charts>
          </div>
        </el-card>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <el-card class="box-card-one">
              <div class="row">
                <div class="col-md-1">
                  <img style="height: 15px;width: 15px" src="../assets/icon/gongzuo.png">
                </div>
                <div class="col-md-6">
                  <span>工作详情</span>
                </div>
              </div>
              <div>
                <work-charts></work-charts>
              </div>
            </el-card>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <el-card class="box-card-two">
              <div class="row">
                <div class="col-md-1">
                  <img style="height: 15px;width: 15px" src="../assets/icon/shenhe.png">
                </div>
                <div class="col-md-6">
                  <span>审核结果</span>
                </div>
              </div>
              <div class="row audit_item">
                <div class="col-md-4">
                  <span style="font-size: 14px">学术成果情况 2020-03-30</span>
                </div>
                <div class="col-md-6">
                  <div class="container">
                    <ul class="time-horizontal">
                      <li><b></b>已提交</li>
                      <li><b></b>已送达</li>
                      <li><b></b>正在审核</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2">
                  <el-button type="text">查看详情</el-button>
                </div>
              </div>
              <div class="row audit_item">
                <div class="col-md-4">
                  <span style="font-size: 14px">行政获奖情况 2020-03-27</span>
                </div>
                <div class="col-md-6">
                  <div class="container">
                    <ul class="time-horizontal">
                      <li><b></b>已提交</li>
                      <li><b></b>已送达</li>
                      <li><b></b>正在审核</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-2">
                  <el-button type="text">查看详情</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-md-2 bottom_button">
          <div v-if="bottom_show">
            <el-button type="text" @click="nextPage">返回</el-button>
          </div>
        </div>
        <div class="col-md-8">
        </div>
        <div class="col-md-2 bottom_button">
          <div v-if="!bottom_show">
            <el-button type="text" @click="nextPage">更多</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import gradeCharts from '@/components/charts/gradeCharts'
import kaoqingCharts from '@/components/charts/kaoqingCharts'
import rankCharts from '@/components/charts/rankCharts'
import integralCharts from '@/components/charts/integralCharts'
import workCharts from '@/components/charts/workCharts'
export default {
  name: 'homePage',
  components: {
    gradeCharts,
    kaoqingCharts,
    rankCharts,
    integralCharts,
    workCharts
  },
  data () {
    return {
      activeName: 'first',
      bottom_show: false,
      chart_show: false
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    hideh: function () {
      $('.hide').hide()
      console.log('6666牛逼')
    },
    nextPage: function () {
      this.bottom_show = !this.bottom_show
    },
    nextChart: function () {
      this.chart_show = !this.chart_show
    }
  }
}
</script>

<style scoped>
  .school_name{
    padding-left: 20px;
    padding-top: 40px;
  }
  .title{
    text-align: center;
    padding-top: 15px;
  }
  .time_container{
    padding-right: 20px;
    padding-top: 40px;
  }
  .time {
    text-align: right;
  }
  .time span {
    font-size: 30px;
    font-weight: bolder;
  }
  .date span {
    font-size: 13px;
  }
  .out img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .out_title {
    font-size: 15px;
    cursor: pointer;
  }
  .box-card-information{
    width: 100%;
    height: 500px;
    margin: 20px;
  }
  .box-card-zichan {
    width: 92%;
    height: 500px;
    margin: 20px;
  }
  .qiehuan {
    text-align: right;
  }
  .chart_container {
    width: 100%;
    margin-left: -20px;
  }
  .kaoqingcontianer {
    margin-left: -200px;
    padding-left: -30px;
  }
  .shuoming {
    text-align: right;
  }
  .shuoming span {
    font-size: 12px;
    font-weight: bolder;
  }
  .bottom_button {
    text-align: center;
  }
  .box-card-one {
    width: 92%;
    height: 300px;
    margin: 20px;
  }
  .box-card-two {
    width: 92%;
    height: 160px;
    margin: 20px;
  }

  .time-horizontal {
    list-style-type: none;
    border-top: 1px solid #707070;
    max-width: 400px;
    padding: 0px;
    margin: 0px;
  }

  .time-horizontal li {
    float: left;
    position: relative;
    text-align: center;
    width: 25%;
    padding-top: 10px;
    font-size: 14px;
  }

  .time-horizontal li b:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 47%;
    width: 12px;
    height: 12px;
    border: 2px solid #4c4c4c;
    border-radius: 8px;
    background: #4c4c4c;
  }
  .audit_item {
    margin-top: 10px;
  }
</style>
