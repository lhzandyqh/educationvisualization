<template>
  <div class="app my-background">
    <div class="row">
      <div class="col-md-4 left_head" >
        <img class="nav_img" src="../assets/weblogo.png">
        <span class="nav_title">智慧校园综合数据可视化</span>
      </div>
      <div class="col-md-4">
        <div class="center_head">
          <span>智慧校园综合数据可视化</span>
        </div>
      </div>
      <div class="col-md-3 right_head el-col-offset-1">
        <div style="display: inline-block">
          <span style="color: white">2020年4月22日星期三 15:31:42</span>
        </div>
        <div style="display: inline-block">
          <img src="../assets/icon/shezhiwhite.png">
        </div>
        <div style="display: inline-block">
          <img src="../assets/icon/dianyuanwhite.png" @click="goHomePage">
        </div>
        <div style="display: inline-block">
          <el-tooltip class="item" effect="dark" content="点击切换身份信息，获取对应身份的系统权限" placement="bottom-start">
            <img src="../assets/icon/qiehuan.png" @click="qiehuanRole">
          </el-tooltip>
        </div>
<!--        <img src="../assets/icon/shezhiwhite.png">-->
<!--        <img src="../assets/icon/dianyuanwhite.png" @click="goHomePage">-->
<!--        <img src="../assets/icon/qiehuan.png" @click="qiehuanRole">-->
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
                <img style="width: 20px;height: 20px;float: right;margin-right: 20px;cursor: pointer" @click="beginSearch" src="../assets/icon/chaxun.png">
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
<!--              <img style="width: 20px;height: 20px;float: right;margin-right: 20px;cursor: pointer" @click="beginSearchTwo" src="../assets/icon/chaxun.png">-->
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
                  <div class="chaxun_container" v-if="searchFlag">
                    <div class="row">
                      <div class="col-md-8">
                        <span style="margin-left: 20px;color: black">学生情况查询工具</span>
                      </div>
                      <div class="col-md-4" style="text-align: right">
                        <img src="../assets/icon/chahao.png" style="width: 20px;height: 20px;margin-right: 20px;cursor: pointer" @click="closeSearch">
                      </div>
                    </div>
                    <div class="search_title" style="margin-top: 10px">
                      <div style="width:180px;height: 100px;background-color: white;display: inline-block;margin-left: 10px;padding-top: 20px">
                        <div style="text-align: center">
                          <span style="font-weight: bold">月考前100人数</span>
                          <div>
                            <span style="font-size: 20px">20</span>
                          </div>
                        </div>
                      </div>
                      <div style="width:180px;height: 100px;background-color: white;display: inline-block;margin-left: 10px;padding-top: 20px">
                        <div style="text-align: center">
                          <span style="font-weight: bold">年级班级成绩排名</span>
                          <div>
                            <span style="font-size: 20px">5</span>
                          </div>
                        </div>
                      </div>
                      <div style="width:180px;height: 100px;background-color: white;display: inline-block;margin-left: 10px;padding-top: 20px">
                        <div style="text-align: center">
                          <span style="font-weight: bold">年级三科排名</span>
                          <div>
                            <span style="font-size: 20px">4</span>
                          </div>
                        </div>
                      </div>
                      <div style="width:180px;height: 100px;background-color: white;display: inline-block;margin-left: 10px;padding-top: 20px">
                        <div style="text-align: center">
                          <span style="font-weight: bold">模拟上线人数</span>
                          <div>
                            <span style="font-size: 20px">43</span>
                          </div>
                        </div>
                      </div>

<!--                      <div style="width:180px;height: 100px;background-color: white;display: inline-block;margin-left: 10px">-->
<!--                      </div>-->
<!--                      <div style="width:180px;height: 100px;background-color: white;display: inline-block;margin-left: 10px">-->

<!--                      </div>-->
<!--                      <div style="width:180px;height: 100px;background-color: white;display: inline-block;margin-left: 10px">-->

<!--                      </div>-->
                    </div>
                    <div style="margin-top: 10px">
                      <el-container>
                        <el-aside width="200px">
                          <div>
                            <span style="display: inline-block;width: 100px;height: 20px;margin-left: 20px;border-left-style: solid;border-left-color: #4c4c4c;border-left-width: 5px;line-height: 20px;padding-left: 10px">功能选区</span>
                          </div>
                          <div style="padding: 20px">
                            <el-tree node-key="id" :default-checked-keys="[1]" :default-expand-all="true" :data="data"  :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                          </div>
                        </el-aside>
                        <el-main>
                          <div>
                            <el-row>
                              <div class="selectContainer">
                                <div class="shuoming">
                                  <span style="font-weight: bolder">学生姓名</span>
                                  <div style="display: inline-block">
                                    <el-input v-model="input" placeholder="请输入内容" style="width: 120px"></el-input>
                                  </div>
                                  <span style="font-weight: bolder">科目</span>
                                  <div style="display: inline-block">
                                    <el-select v-model="subjectValue" style="width: 140px" placeholder="请选择" @change="changeLocationValue">
                                      <el-option
                                        v-for="item in optionsTwo"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                      />
                                    </el-select>
                                  </div>
                                  <span style="margin-left: 60px;font-size: 15px;cursor: pointer">查询</span>
                                </div>
                                <div style="margin-top: 20px">
                                  <gongju-charts></gongju-charts>
                                </div>
                              </div>
                            </el-row>
                          </div>
                        </el-main>
                      </el-container>
                    </div>
                  </div>
                  <div class="chaxun_container" style="background-color: #0092ce" v-if="searchFlagTwo">
                    <div class="row">
                      <div class="col-md-8">

                      </div>
                      <div class="col-md-4" style="text-align: right">
                        <img src="../assets/icon/chahao.png" style="width: 20px;height: 20px;margin-right: 20px" @click="closeSearchTwo">
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
import gongjuCharts from '@/components/charts/gongjuCharts'
export default {
  name: 'teacherPage',
  components: {
    testCharts,
    testTwoCharts,
    testThreeCharts,
    rankCharts,
    gongjuCharts
  },
  data () {
    return {
      subjectValue: '全科',
      appFlag: true,
      todayData: [],
      searchFlag: false,
      searchFlagTwo: false,
      optionsTwo: [{
        value: '全科',
        label: '全科'
      }, {
        value: '语文',
        label: '语文'
      }, {
        value: '数学',
        label: '数学'
      }, {
        value: '英语',
        label: '英语'
      }, {
        value: '物理',
        label: '物理'
      }, {
        value: '化学',
        label: '化学'
      }, {
        value: '生物',
        label: '生物'
      }, {
        value: '历史',
        label: '历史'
      }, {
        value: '政治',
        label: '政治'
      }, {
        value: '地理',
        label: '地理'
      }],
      data: [{
        id: 1,
        label: '学生成绩',
        children: [{
          id: 2,
          label: '学生成绩查询'
        },
        {
          id: 3,
          label: '学生成绩历史比较'
        }]
      }, {
        id: 4,
        label: '班级成绩',
        children: [{
          id: 5,
          label: '单科成绩查询'
        },
        {
          id: 6,
          label: '单科成绩历史比较'
        }, {
          id: 7,
          label: '重点关注'
        }]
      }, {
        id: 8,
        label: '学生课表',
        children: [{
          id: 9,
          label: '班级选课分布'
        }, {
          id: 10,
          label: '学生课表查询'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    this.getToday()
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    beginSearch: function () {
      this.searchFlag = true
    },
    closeSearch: function () {
      this.searchFlag = false
    },
    beginSearchTwo: function () {
      this.searchFlagTwo = true
    },
    closeSearchTwo: function () {
      this.searchFlagTwo = false
    },
    goHomePage: function () {
      this.$router.replace('/')
    },
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
    },
    qiehuanRole: function () {
      this.$router.push('/jiaoshiPage')
      // var change
      // const dangqian = localStorage.getItem('userRole')
      // const roles = localStorage.getItem('roles')
      // if (dangqian === roles[0]) {
      //   change = roles[1]
      // } else {
      //   change = roles[0]
      // }
      // this.$store.dispatch('ChangeRoles', change).then(() => {
      //   this.$emit('change')
      // })
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
  .chaxun_container {
    width: 800px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #f3f3f3;
    border-radius: 5px;
  }
  .item el-tooltip__popper {
    /*background: #008ac0;*/
    /*color: #FFF;*/
  }
</style>
