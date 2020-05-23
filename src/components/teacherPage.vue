<template>
  <div class="app my-background">
    <div class="row">
      <div class="col-md-4 left_head" >
        <img class="nav_img" src="../assets/weblogo.png">
        <span class="nav_title">数字校园教育智慧大脑服务平台</span>
      </div>
      <div class="col-md-4">
        <div class="center_head">
          <span>校园信息可视化平台</span>
        </div>
      </div>
      <div class="col-md-3 right_head el-col-offset-1">
        <span style="color: white">2020年4月22日星期三 15:31:42</span>
        <img src="../assets/icon/shezhiwhite.png">
        <img src="../assets/icon/dianyuanwhite.png">
      </div>
    </div>
    <div class="row content_container">
      <div class="col-md-1 left_application">
        <div class="myapp" @click="appControl">
          <img src="../assets/icon/yingyong.png">
          <span>我的应用</span>
        </div>
        <div class="apps" v-show="appFlag">
          <div class="appitem">
            <span>教师评测</span>
          </div>
          <div class="appitem">
            <span>成绩分析</span>
          </div>
          <div class="appitem">
            <span>可视资产</span>
          </div>
          <div class="appitem">
            <span>课堂考勤</span>
          </div>
          <div class="appitem">
            <span>评教评学</span>
          </div>
        </div>
      </div>
      <div class="col-md-11">
        <div class="row">
          <div class="col-md-2">
            <div style="margin-top: 15px">
              <div style="text-align: center">
                <span style="font-size: 28px;color: white">{{this.todayData.courseNum}}</span>
              </div>
              <div style="text-align: center">
                <span style="color:#ff7391 ">今日课程数</span>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div style="margin-top: 15px">
              <div style="text-align: center">
                <span style="font-size: 28px;color: white">{{this.todayData.classroomNum}}%</span>
              </div>
              <div style="text-align: center">
                <span style="color:#b7804f ">教室排课率</span>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div style="margin-top: 15px">
              <div style="text-align: center">
                <span style="font-size: 28px;color: white">{{this.todayData.attendanceNum}}%</span>
              </div>
              <div style="text-align: center">
                <span style="color:#ae74f3 ">全校出勤率</span>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div style="margin-top: 15px">
              <div style="text-align: center">
                <span style="font-size: 28px;color: white">{{this.todayData.diningNum}}%</span>
              </div>
              <div style="text-align: center">
                <span style="color:#03c2ae ">餐饮好评率</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="dongtai">
              <div class="dongtai_title">
                <span>我的动态</span>
              </div>
              <div class="dongtai_container">
                <div class="row dongtai_item">
                  <div class="col-md-8">
                    <span  style="margin-left: 6px">2020年度第一次月考成绩</span>
                  </div>
                  <div class="col-md-4">
                    <span>2020-03-21</span>
                  </div>
                </div>
                <div class="row dongtai_item">
                  <div class="col-md-8">
                    <span style="margin-left: 6px">2020年度个人资产审核开始</span>
                  </div>
                  <div class="col-md-4">
                    <span>2020-03-15</span>
                  </div>
                </div>
                <div class="row dongtai_item">
                  <div class="col-md-8">
                    <span  style="margin-left: 6px">2020年度3月份考勤报告</span>
                  </div>
                  <div class="col-md-4">
                    <span>2020-03-09</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row middle_layer">
          <div class="col-md-3">
            <div class="gaikuang">
              <div class="gaikaung_title">
                <span>学校概况</span>
              </div>
              <div class="row gaikaung_item">
                <div class="col-md-6">
                  <span style="float: right;color: white">学生总数</span>
                </div>
                <div class="col-md-6">
                  <span style="float: left;color: #17ff56">3045</span>
                </div>
              </div>
              <div class="row gaikaung_item">
                <div class="col-md-6">
                  <span style="float: right;color: white">教师总数</span>
                </div>
                <div class="col-md-6">
                  <span style="float: left;color: #17ff56">346</span>
                </div>
              </div>
              <div class="row gaikaung_item">
                <div class="col-md-6">
                  <span style="float: right;color: white">教室总数</span>
                </div>
                <div class="col-md-6">
                  <span style="float: left;color: #17ff56">109</span>
                </div>
              </div>
              <div class="row gaikaung_item">
                <div class="col-md-6">
                  <span style="float: right;color: white">资产总数</span>
                </div>
                <div class="col-md-6">
                  <span style="float: left;color: #17ff56">14533045</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="qingkuang">
              <div class="qingkuang_title">
                <span>学生情况分析</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5">
                <test-charts></test-charts>
              </div>
              <div class="col-md-5">
                <test-two-charts></test-two-charts>
              </div>
              <div class="col-md-2">
                <div style="margin-top: 20px">
                  <div style="text-align: center">
                    <span style="font-size: 20px;color: white">552</span>
                  </div>
                  <div  style="text-align: center">
                    <span style="font-size: 13px;color: #9e516f;font-weight: bold">全校平均分</span>
                  </div>
                </div>
                <el-divider></el-divider>
                <div style="margin-top: 20px">
                  <div style="text-align: center">
                    <span style="font-size: 20px;color: white">100</span>
                  </div>
                  <div  style="text-align: center">
                    <span style="font-size: 13px;color: #e4964f;font-weight: bold">全校上线人数</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row bottom_layer">
          <div class="col-md-12">
            <div class="qingkuang_title">
              <span>教师成果分析</span>
            </div>
            <div class="row">
              <div class="col-md-4">
<!--                <test-three-charts></test-three-charts>-->
                <rank-charts></rank-charts>
              </div>
              <div class="col-md-4">
                <test-three-charts></test-three-charts>
              </div>
              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-6">
                    <div style="margin-top: 50px">
                      <div style="text-align: center">
                        <span style="font-size: 37px;font-weight: bold;color: white">19</span>
                      </div>
                      <div  style="text-align: center">
                        <span style="font-size: 20px;color: #3e3876;font-weight: bold">新增成果量</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div style="margin-top: 50px">
                      <div style="text-align: center">
                        <span style="font-size: 37px;font-weight: bold;color: white">219</span>
                      </div>
                      <div  style="text-align: center">
                        <span style="font-size: 20px;color: #327653;font-weight: bold">教师成果总量</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTodayData } from '@/api/homePageData'
import testCharts from '@/components/charts/testCharts'
import testTwoCharts from '@/components/charts/testTwoCharts'
import testThreeCharts from '@/components/charts/testThreeCharts'
import rankCharts from '@/components/charts/rankCharts'
export default {
  name: 'teacherPage',
  components: {
    testCharts,
    testTwoCharts,
    testThreeCharts,
    rankCharts
  },
  data () {
    return {
      appFlag: true,
      todayData: []
    }
  },
  mounted () {
    this.getToday()
  },
  methods: {
    appControl: function () {
      this.appFlag = !this.appFlag
    },
    getToday: function () {
      const prams = {
        date: '2019-04-01'
      }
      getTodayData(prams).then(response => {
        console.log('测试拿一下今天的数据')
        console.log(response)
        this.todayData = response.data.data
        console.log('测试是否保存')
        console.log(this.todayData)
      })
    }
  }
}
</script>

<style scoped>
  .left_head {
    margin-top: 30px;
  }
  .nav_img {
    width: 60px;
    height: 60px;
  }
  .nav_title {
    font-weight: bolder;
    color: white;
  }
  .center_head {
    text-align: center;
    margin-top: 10px;
  }
  .center_head span {
    font-size: 20px;
    font-weight: bolder;
    color: white;
  }
  .right_head {
    margin-top: 50px;
  }
  .right_head img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  .content_container {
    width: 97%;
    height: 80%;
    border-style: solid;
    border-color: #297b97;
    /*margin: 20px;*/
    margin-left: 20px;
    padding-bottom: 21px;
    /*margin-bottom: 10px;*/
  }
  .myapp img {
    width: 20px;
    height: 20px;
  }
  .myapp {
    /*border-style: solid;*/
    margin-left: 5px;
    padding: 3px;
    margin-top: 20px;
    background-color: #183b5c;
  }
  .myapp span {
    font-size: 13px;
    color: white;
    cursor: pointer;
  }
  .appitem {
    margin-left: 5px;
    padding: 3px;
    margin-top: 10px;
    background-color: #183b5c;
    text-align: center;
  }
  .appitem span {
    font-size: 13px;
    color: white;
    cursor: pointer;
  }
  .dongtai_title  {
    margin-top: 8px;
    height: 25px;
    background:linear-gradient(90deg,rgba(48,83,175,1),rgba(2,17,50,1));
    padding-left: 15px;
  }
  .dongtai_title span {
    line-height: 25px;
    font-size: 15px;
    color: white;
  }
  .dongtai_container {
    margin-top: 2px;
    background-color: #194a73;
    padding-bottom: 5px;
  }
  .dongtai_container span {
    color: white;
    font-size: 13px;
  }
  .gaikaung_title {
    margin-top: 8px;
    height: 25px;
    background:linear-gradient(90deg,rgba(48,83,175,1),rgba(2,17,50,1));
    padding-left: 15px;
  }
  .gaikaung_title span {
    line-height: 25px;
    font-size: 15px;
    color: white;
  }
  .gaikuang {
    background-color: #0c233f;
    border-style: solid;
    border-color: #3486da;
    border-width: 1px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
  .gaikaung_item {
    margin-top: 5px;
  }
  .middle_layer {
    margin-top: 10px;
  }
  .qingkuang_title {
    margin-top: 8px;
    height: 25px;
    background:linear-gradient(90deg,rgba(48,83,175,1),rgba(2,17,50,1));
    padding-left: 15px;
  }
  .qingkuang_title span {
    line-height: 25px;
    font-size: 15px;
    color: white;
  }
  .jiaoshi_title {
    margin-top: 8px;
    height: 25px;
    background:linear-gradient(90deg,rgba(48,83,175,1),rgba(2,17,50,1));
    padding-left: 15px;
  }
  .jiaoshi_title span {
    line-height: 25px;
    font-size: 15px;
    color: white;
  }
   .my-background {
    height:100% ;
    width: 100%;
    background-image: url("../assets/background.png");
    background-size: 100%;
  }
</style>
