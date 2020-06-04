<template>
    <div class="app ">
      <div class="nav-container">
        <div class="row">
          <div class="col-md-4">
            <img class="nav_img" src="../assets/weblogo.png">
            <span class="nav_title">数字校园教育智慧大脑服务平台</span>
<!--            <span @click="goTest">fdfdf</span>-->
          </div>
          <div class="col-md-1 el-col-md-offset-11">
            <div style="display: inline-block">
              <a :href="url" title="下载"><img class="nav_right_logo" src="../assets/icon/jilu.png"></a>
            </div>
            <div style="display: inline-block">
              <el-tooltip class="item" effect="light" content="平台采取统一身份认证，登录后依权限可查看“智慧校园综合数据可视化”、“智慧校园分类数据可视化-教师”，以及各应用系统或平台。统一登录与认证请点击右侧按钮。" placement="bottom-start">
                <img class="nav_right_logo" src="../assets/icon/tongzhi.png">
              </el-tooltip>
            </div>
            <div style="display: inline-block">
              <img class="nav_right_shu" src="../assets/icon/shuxian.png">
            </div>
<!--            <img class="nav_right_logo" src="../assets/icon/jilu.png">-->
<!--            <img class="nav_right_logo" src="../assets/icon/tongzhi.png">-->
<!--            <img class="nav_right_shu" src="../assets/icon/shuxian.png">-->
          </div>
          <div class="col-md-1">
<!--            <img class="nav_touxiang" v-if="dengluFlag" src="../assets/touxiang.png">-->
<!--            <img class="nav_last_logo" v-if="dengluFlag" src="../assets/icon/xiangxia.png" @click="gotoTeacher">-->
<!--            <img class="nav_last_logo_denglu" @click="gotoLogin" v-else src="../assets/icon/denglu.png">-->
            <user-setting-popover v-if="dengluFlag"  style="margin-top: 17px"></user-setting-popover>
            <img class="nav_last_logo_denglu" @click="gotoLogin" v-else src="../assets/icon/denglu.png">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <el-card class="box-card">
            <div class="card_head">
              <div class="card_head_left">
                <span>数字智能</span>
                <span class="more" @click="changeCharts">切换</span>
              </div>
            </div>
<!--            <el-divider></el-divider>-->
            <grade-charts v-if="chartsFlag"></grade-charts>
            <grade-charts-two v-else></grade-charts-two>
          </el-card>
        </div>
        <div class="col-md-4">
          <el-card class="box-card-right">
            <div class="card_head">
              <div class="card_head_left">
                <span>校园动态</span>
                <span class="more">更多</span>
              </div>
            </div>
            <div class="row dongtai">
              <div class="col-md-8">
                <span style="cursor: pointer">2020年高三在线月考成绩</span>
              </div>
              <div class="col-md-4">
                <span style="color: #929292">2020-03-10</span>
              </div>
            </div>
            <div class="row dongtai">
              <div class="col-md-8">
                <span style="cursor: pointer">2020年资产登记</span>
              </div>
              <div class="col-md-4">
                <span style="color: #929292">2020-03-06</span>
              </div>
            </div>
            <div class="row dongtai">
              <div class="col-md-8">
                <span style="cursor: pointer">2020年第一季度教学评测</span>
              </div>
              <div class="col-md-4">
                <span style="color: #929292">2020-03-02</span>
              </div>
            </div>
            <div class="row dongtai">
              <div class="col-md-8">
                <span style="cursor: pointer">2020年教育讲座举办</span>
              </div>
              <div class="col-md-4">
                <span style="color: #929292">2020-02-28</span>
              </div>
            </div>
            <div class="row dongtai">
              <div class="col-md-8">
                <span style="cursor: pointer">2020年食堂安全会议召开</span>
              </div>
              <div class="col-md-4">
                <span style="color: #929292">2020-02-15</span>
              </div>
            </div>
            <div class="row dongtai">
              <div class="col-md-8">
                <span style="cursor: pointer">2020年防疫工作准备</span>
              </div>
              <div class="col-md-4">
                <span style="color: #929292">2020-02-13</span>
              </div>
            </div>
            <div class="row dongtai">
              <div class="col-md-8">
                <span style="cursor: pointer">2020年返校工作安排</span>
              </div>
              <div class="col-md-4">
                <span style="color: #929292">2020-02-10</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <el-card class="box-card-bottom">
            <div class="card_head">
              <div class="card_head_left">
                <span>智能教学</span>
              </div>
              <div class="row">
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter" @click="goPaike">
                    <div class="xitong_item" style="background-color: #f99636">
                      <img src="../assets/icon/kecheng_one.png">
                      <div class="xitong_item_name">
                        <span>走班排课</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter" @click="gokaoqing">
                    <div class="xitong_item" style="background-color: #37c6eb">
                      <img :src="imgOne" @mouseover="mouseOver" @mouseout="mouseOut">
                      <div class="xitong_item_name">
                        <span>课堂考勤</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter" @click="goPijiao">
                    <div class="xitong_item" style="background-color: #9f85eb">
                      <img src="../assets/icon/pingxue.png">
                      <div class="xitong_item_name">
                        <span>评教评学</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter" @click="goJiaoshipingce">
                    <div class="xitong_item" style="background-color: #eb5a74">
                      <img src="../assets/icon/jixiao_two.png">
                      <div class="xitong_item_name">
                        <span>教师评测</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter" @click="goChengjifenxi">
                    <div class="xitong_item" style="background-color: #b6eb69">
                      <img src="../assets/icon/chengjifenxi.png">
                      <div class="xitong_item_name">
                        <span>成绩分析</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="col-md-5">
          <el-card class="box-card-bottom" style="margin-left: -25px">
            <div class="card_head">
              <div class="card_head_left">
                <span>智慧学习</span>
              </div>
              <div class="row">
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter">
                    <div class="xitong_item" style="background-color: #f99636" @click="xianshiEr(2)">
                      <img v-if="zaixianFlag" :src="Two">
                      <img v-else :src="erweiTwo">
                      <div class="xitong_item_name">
                        <span>在线题库</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter" @click="goXiezuo">
                    <div class="xitong_item" style="background-color: #37c6eb">
                      <img src="../assets/icon/xiezuo.png">
                      <div class="xitong_item_name">
                        <span>智慧写作</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter">
                    <div class="xitong_item" style="background-color: #9f85eb" @click="xianshiEr(3)">
                      <img v-if="xueyaFlag" :src="Three">
                      <img v-else :src="erweiThree">
                      <div class="xitong_item_name">
                        <span>学涯测评</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter">
                    <div class="xitong_item" style="background-color: #eb5a74" @click="xianshiEr(4)">
<!--                      <img v-if="gaokaoFlag" :src="Four" @mouseover="mouseOver(4)" @mouseout="mouseOut(4)">-->
                      <img v-if="gaokaoFlag" :src="Four">
                      <img v-else :src="erweiFour">
                      <div class="xitong_item_name">
                        <span>高考填报</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2" style="margin-right: 12px">
                  <div class="xitong_enter" @click="goZaixian">
                    <div class="xitong_item" style="background-color: #b6eb69">
                      <img src="../assets/icon/zaixianxuexi.png">
                      <div class="xitong_item_name">
                        <span>青程在线</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="col-md-2">
          <el-card class="box-card-bottom" style="margin-left: -80px;width: 115%">
            <div class="card_head">
              <div class="card_head_left">
                <span>智能管理</span>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="xitong_enter" @click="goZichan">
                    <div class="xitong_item" style="background-color: #9f85eb">
                      <img src="../assets/icon/zichan.png">
                      <div class="xitong_item_name">
                        <span>可视资产</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style="margin-left: -20px">
                  <div class="xitong_enter">
                    <div class="xitong_item" style="background-color: #f99636" @click="xianshiEr(5)">
<!--                      //@mouseover="mouseOver(5)" @mouseout="mouseOut(5)-->
                      <img v-if="canyingFlag" :src="Five">
                      <img v-else :src="erweiFive">
                      <div class="xitong_item_name">
                        <span>餐饮时评</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
<!--      <div class="row">-->
<!--        <div class="col-md-2">-->
<!--          <el-card class="box-card-bottom">-->
<!--            <div class="card_head">-->
<!--              <div class="card_head_left">-->
<!--                <span>教师评测</span>-->
<!--              </div>-->
<!--              <div class="xitong_enter">-->
<!--                <div class="xitong_item">-->
<!--                  <img src="../assets/icon/jiaoshi.png">-->
<!--                  <div class="xitong_item_name">-->
<!--                    <span>教师评测系统</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-card>-->
<!--        </div>-->
<!--        <div class="col-md-6">-->
<!--          <el-card class="box-card-bottom">-->
<!--            <div class="card_head">-->
<!--              <div class="card_head_left">-->
<!--                <span>教学管理</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-md-4">-->
<!--                <div class="xitong_enter">-->
<!--                  <div class="xitong_item" style="background-color: #f99636">-->
<!--                    <img src="../assets/icon/chengjitwo.png">-->
<!--                    <div class="xitong_item_name">-->
<!--                      <span>成绩系统</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-md-4">-->
<!--                <div class="xitong_enter">-->
<!--                  <div class="xitong_item" style="background-color: #37c6eb">-->
<!--                    <img src="../assets/icon/kecheng.png">-->
<!--                    <div class="xitong_item_name">-->
<!--                      <span>排课系统</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-md-4">-->
<!--                <div class="xitong_enter">-->
<!--                  <div class="xitong_item" style="background-color: #9f85eb">-->
<!--                    <img src="../assets/icon/kaoqingtwo.png">-->
<!--                    <div class="xitong_item_name">-->
<!--                      <span>考勤系统</span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-card>-->
<!--        </div>-->
<!--        <div class="col-md-4">-->
<!--          <el-card class="box-card-last">-->
<!--            <div class="card_head">-->
<!--              <div class="card_head_left">-->
<!--                <span>校园服务</span>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-md-6">-->
<!--                  <div class="xitong_enter">-->
<!--                    <div class="xitong_item" style="background-color: #cfde2b">-->
<!--                      <img src="../assets/icon/zichan.png">-->
<!--                      <div class="xitong_item_name">-->
<!--                        <span>资产系统</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col-md-6">-->
<!--                  <div class="xitong_enter">-->
<!--                    <div class="xitong_item" style="background-color: #51ce8a">-->
<!--                      <img src="../assets/icon/canying.png">-->
<!--                      <div class="xitong_item_name">-->
<!--                        <span>餐饮时评</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-card>-->
<!--        </div>-->
<!--      </div>-->
      <div class="copyright">
        <span>Copyright   中科智禾教育大数据中心 ©2019</span>
      </div>
    </div>
</template>

<script>
// import $ from 'jquery'
import { getTodayData } from '@/api/homePageData'
import { loginStatus, verifyLogin } from '@/api/login'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import gradeCharts from '@/components/charts/gradeCharts'
import gradeChartsTwo from '@/components/charts/gradeChartsTwo'
import userSettingPopover from '@/components/user/userSettingPopover'
export default {
  name: 'newHomePage',
  components: {
    gradeCharts,
    gradeChartsTwo,
    userSettingPopover
  },
  data () {
    return {
      url: 'http://zhongkeruitong.top/zhenghe/%E6%95%B0%E5%AD%97%E6%A0%A1%E5%9B%AD%E6%95%99%E8%82%B2%E6%99%BA%E6%85%A7%E5%A4%A7%E8%84%91%E4%BA%A7%E5%93%81%E4%B8%8E%E6%9C%8D%E5%8A%A1%E7%B3%BB%E7%BB%9F2017-2019.pdf',
      dengluFlag: true,
      zaixianFlag: true,
      xueyaFlag: true,
      gaokaoFlag: true,
      canyingFlag: true,
      chartsFlag: false,
      // url: 'www.baidu.com'
      erwei: true,
      // img: require('../assets/icon/jiaoshi.png'),
      // imgUrl: require('../assets/icon/jiaoshi.png'),
      // imgt: require('../assets/icon/tongzhi.png'),
      One: require('../assets/icon/kaoqingtwo.png'),
      Two: require('../assets/icon/zaixiantiku.png'),
      Three: require('../assets/icon/xueya.png'),
      Four: require('../assets/icon/gaokao.png'),
      Five: require('../assets/icon/canyintwo.png'),
      imgOne: require('../assets/icon/kaoqingtwo.png'),
      imgTwo: require('../assets/icon/zaixiantiku.png'),
      imgThree: require('../assets/icon/xueya.png'),
      imgFour: require('../assets/icon/gaokao.png'),
      imgFive: require('../assets/icon/canyintwo.png'),
      imgSix: require('../assets/icon/tongzhi.png'),
      erweiFour: require('../assets/erwei/gaokao.png'),
      erweiTwo: require('../assets/erwei/tiku.png'),
      erweiThree: require('../assets/erwei/xueya.png'),
      erweiFive: require('../assets/erwei/canying.jpg')
    }
  },
  created: function () {
    this.getLoginStatus()
  },
  methods: {
    gokaoqing: function () {
      window.open('https://zhongkeruitong.top/zhenghe_qianduan/kaoqin/index.html#/')
    },
    goTest: function () {
      this.$router.push('/teacherPage')
    },
    changeCharts: function () {
      this.chartsFlag = !this.chartsFlag
    },
    gotoTeacher: function () {
      this.$router.push('/teacherPage')
      // this.$router.push('/jiaoshiPage')
    },
    getToday: function () {
      const prams = {
        date: '2019-04-01'
      }
      getTodayData(prams).then(response => {
        console.log('测试拿今天的数据')
        console.log(response)
      })
    },
    goPaike: function () {
      if (this.dengluFlag) {
        // window.location.href = 'http://58.119.112.11:11004/teacherworks/#/login?redirect=%2FcountInfo%2Findex'
        window.open('https://zhongkeruitong.top/zhenghe_qianduan/class/#/administrativeStudent')
      } else {
        this.$message({
          message: '请登录后再试',
          type: 'warning'
        })
      }
    },
    goJiaoshipingce: function () {
      if (this.dengluFlag) {
        // window.location.href = 'http://58.119.112.11:11004/teacherworks/#/login?redirect=%2FcountInfo%2Findex'
        window.open('https://zhongkeruitong.top/zhenghe_qianduan/teacher/')
      } else {
        this.$message({
          message: '请登录后再试',
          type: 'warning'
        })
      }
    },
    goChengjifenxi: function () {
      if (this.dengluFlag) {
        // window.location.href = 'http://58.119.112.11:11004/teacherworks/#/login?redirect=%2FcountInfo%2Findex'
        window.open('https://zhongkeruitong.top/zhenghe_qianduan/score/')
      } else {
        this.$message({
          message: '请登录后再试',
          type: 'warning'
        })
      }
    },
    goXiezuo: function () {
      // window.location.href = 'http://114.242.223.253/zihui/#/'
      window.open('http://114.242.223.253/zihui/#/')
    },
    goZichan: function () {
      if (this.dengluFlag) {
        // window.location.href = 'http://58.119.112.11:11004/teacherworks/#/login?redirect=%2FcountInfo%2Findex'
        window.open('https://zhongkeruitong.top/zhenghe_qianduan/assert/#/dashboard')
      } else {
        this.$message({
          message: '请登录后再试',
          type: 'warning'
        })
      }
    },
    goPijiao: function () {
      // window.location.href = 'http://zhongkeruitong.top/show/taq/#/login'
      window.open('https://zhongkeruitong.top/show/taq/dist/index.html#/dashboard')
    },
    goZaixian: function () {
      // window.location.href = 'http://www.zhongkeruitong.top/show/qingcheng/#/'
      window.open('http://www.zhongkeruitong.top/show/qingcheng/#/')
    },
    gotoLogin: function () {
      // console.log('登陆接口文档')
      // window.location.href = 'https://zhongkeruitong.top/integration/swagger-ui.html#/'
      console.log('测试CASlogin登录')
      window.location.href = 'https://zhongkeruitong.top/cas/login?service=http://zhongkeruitong.top/zhenghe'
      verifyLogin().then(response => {
        console.log('测试登陆接口')
        console.log(response.data)
      })
    },
    mouseOver: function (index) {
      console.log('鼠标移入')
      switch (index) {
        case 2:
          this.Two = this.erweiTwo
          console.log('触发2')
          break
        case 4:
          this.Four = this.erweiFour
          console.log('触发4')
          break
        case 3:
          this.Three = this.erweiThree
          console.log('触发3')
          break
        case 5:
          this.Five = this.erweiFive
          console.log('触发5')
          break
      }
    },
    mouseOut: function (index) {
      console.log('鼠标移出')
      switch (index) {
        case 2:
          this.Two = this.imgTwo
          console.log('离开触发2')
          break
        case 4:
          this.Four = this.imgFour
          console.log('离开触发4')
          break
        case 3:
          this.Three = this.imgThree
          console.log('离开触发3')
          break
        case 5:
          this.Five = this.imgFive
          console.log('离开触发5')
          break
      }
    },
    xianshiEr: function (index) {
      switch (index) {
        case 2:
          this.zaixianFlag = !this.zaixianFlag
          break
        case 3:
          this.xueyaFlag = !this.xueyaFlag
          break
        case 4:
          this.gaokaoFlag = !this.gaokaoFlag
          break
        case 5:
          this.canyingFlag = !this.canyingFlag
          break
      }
    },
    getLoginStatus: function () {
      loginStatus().then(response => {
        console.log('测试登陆状态')
        console.log(response.data.code)
        if (response.data.code === -1) {
          console.log('未登陆')
          this.dengluFlag = false
        } else {
          console.log('已登陆')
          this.dengluFlag = true
        }
        // this.dengluFlag = false
      })
      verifyLogin().then(response => {
        console.log('测试登陆接口')
        console.log(response)
        if (response.data.code === 0) {
          console.log('登陆成功')
          this.dengluFlag = true
          console.log('检查权限')
          console.log(response.data.data.role[0])
          window.localStorage.setItem('userRole', response.data.data.role[0])
          window.localStorage.setItem('roles', response.data.data.role)
        }
      })
    }
  }
}
</script>

<style scoped>
  .nav-container {
    height: 60px;
    background-color: #37b368;
  }
  .nav_img {
    width: 60px;
    height: 60px;
  }
  .nav_title {
    font-size: 20px;
    font-weight: normal;
    color: white;
  }
  .nav_right_logo {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
  .nav_right_shu {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-top: 20px;
  }
  .nav_touxiang {
    width: 35px;
    height: 35px;
    display: inline-block;
    margin-top: 15px;
  }
  .nav_last_logo {
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
  .nav_last_logo_denglu {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-top: 16px;
    margin-left: 10px;
    cursor: pointer;
  }
  .box-card {
    width: 92%;
    height: 400px;
    margin: 20px 20px 20px;
  }
  .box-card-right {
    width: 100%;
    height: 400px;
    margin-left: -45px;
    margin-top: 20px;
  }
  .card_head_left {
    font-weight: bolder;
    border-left-width: 5px;
    border-left-color: #37b368;
    border-left-style: solid;
    padding-left: 20px;
  }
  .more {
    float: right;
    cursor: pointer;
    font-size: 15px;
    font-weight: lighter;
    color: #37b368;
  }
  .box-card-bottom {
    width: 92%;
    height: 170px;
    margin-left: 20px;
  }
  .box-card-last {
    width: 96%;
    height: 170px;
    margin-left: -30px;
  }
  .xitong_item {
    width: 100px;
    height: 100px;
    background-color: #f45656;
    margin-left: 20%;
    margin-top: 5%;
    cursor: pointer;
  }
  .xitong_item img {
    width: 50px;
    height: 50px;
    text-align: center;
    margin-left: 25%;
    margin-top: 10px;
  }
  .xitong_item_name {
    text-align: center;
  }
  .xitong_item_name span {
    font-size: 12px;
    color: white;
  }
  .copyright {
    text-align: center;
  }
  .copyright span {
    font-size: 12px;
  }
  .dongtai {
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
