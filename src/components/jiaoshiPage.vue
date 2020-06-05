<template>
  <div class="app my-background">
    <div class="row">
      <div class="col-md-4 left_head" >
        <img class="nav_img" src="../assets/nav_logo.png">
        <span class="nav_title">数字校园教育智慧大脑服务平台</span>
      </div>
      <div class="col-md-4">
        <div class="center_head">
          <span>智慧校园分类数据可视化-教师</span>
        </div>
      </div>
      <div class="col-md-4 right_head">
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
            <img src="../assets/icon/qiehuan.png" @click="fanhui">
          </el-tooltip>
        </div>
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
        <div class="row daka_container">
          <div class="col-md-2 el-col-md-offset-20">
            <div class="daka_button">
              <span>打卡</span>
            </div>
            <div class="daka_button">
              <span>打卡记录</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 touxiang">
            <div class="row" style="margin-top: 40px">
              <div class="col-md-6">
                <div>
                  <img style="width: 100px;width: 100px" src="../assets/touxiang.png">
                  <div style="text-align: center">
                    <span style="font-size: 8px">修改头像</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <span style="color: #42b983">张老师</span>
                </div>
                <div style="margin-top: 20px">
                  <span style="font-size: 10px;font-weight: bold;color: white">教育大数据中心</span>
                </div>
                <div>
                  <span style="font-size: 10px;font-weight: bold;color: white">教工号：100001</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <div class="row ">
              <div class="col-md-6">
                <div class="dongtai">
                  <div class="dongtai_title">
                    <span>系统动态</span>
                  </div>
                  <div class="dongtai_container">
                    <div class="row dongtai_item">
                      <div class="col-md-8">
                        <span  style="margin-left: 6px">2020年度第二次月考成绩出炉</span>
                      </div>
                      <div class="col-md-4">
                        <span>2020-05-28</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-8">
                        <span style="margin-left: 6px">2020年度教师评测开始</span>
                      </div>
                      <div class="col-md-4">
                        <span>2020-03-21</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-8">
                        <span  style="margin-left: 6px">2020年度第一次月考成绩</span>
                      </div>
                      <div class="col-md-4">
                        <span>2020-02-28</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-8">
                        <span  style="margin-left: 6px">关于在线教学准备工作指导</span>
                      </div>
                      <div class="col-md-4">
                        <span>2020-02-15</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-8">
                        <span  style="margin-left: 6px">食堂卫生检查通知</span>
                      </div>
                      <div class="col-md-4">
                        <span>2020-02-05</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-8">
                        <span  style="margin-left: 6px">2020年度第一季度资产清点</span>
                      </div>
                      <div class="col-md-4">
                        <span>2020-01-27</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-8">
                        <span  style="margin-left: 6px">全校防疫会议召开</span>
                      </div>
                      <div class="col-md-4">
                        <span>2020-01-21</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="dongtai">
                  <div class="dongtai_title">
                    <span>我的动态</span>
                  </div>
                  <div class="dongtai_container">
                    <div class="row dongtai_item">
                      <div class="col-md-2" style="text-align: center">
                        <span style="height: 30px;background-color: #094369;display: block;margin:5px;line-height: 30px;width: 91px">系统</span>
                      </div>
                      <div class="col-md-6" style="text-align: center">
                        <span style="height: 30px;background-color: #094369;display: block;margin:5px;line-height: 30px;width: 278px">内容</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #094369;display: block;margin:5px;line-height: 30px;width: 70px">进度</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #094369;display: block;margin-left: -14px;margin-top: 5px;line-height: 30px;width: 70px">日期</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-2" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 91px;margin-top: -2px">教师</span>
                      </div>
                      <div class="col-md-6" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 278px;margin-top: -2px">绩效工作提交</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 70px;margin-top: -2px;color: red">待审核</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin-left: -14px;margin-top: 5px;line-height: 30px;width: 70px;margin-top: -2px">2020-03-02</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-2" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 91px;margin-top: -2px">资产</span>
                      </div>
                      <div class="col-md-6" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 278px;margin-top: -2px">资产审核开始</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 70px;margin-top: -2px;color: green">已完成</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin-left: -14px;margin-top: 5px;line-height: 30px;width: 70px;margin-top: -2px">2020-01-23</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-2" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 91px;margin-top: -2px">成绩</span>
                      </div>
                      <div class="col-md-6" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 278px;margin-top: -2px">成绩审核</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 70px;margin-top: -2px;color: green">已完成</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin-left: -14px;margin-top: 5px;line-height: 30px;width: 70px;margin-top: -2px">2020-02-20</span>
                      </div>
                    </div>
                    <div class="row dongtai_item">
                      <div class="col-md-2" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 91px;margin-top: -2px">考勤</span>
                      </div>
                      <div class="col-md-6" style="text-align: center">
                        <span style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 278px;margin-top: -2px">考勤记录确认</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin:5px;line-height: 30px;width: 70px;margin-top: -2px;color: green;">已完成</span>
                      </div>
                      <div class="col-md-2" style="text-align: center">
                        <span  style="height: 30px;background-color: #21395b;display: block;margin-left: -14px;margin-top: 5px;line-height: 30px;width: 70px;margin-top: -2px">2020-01-01</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="kebiao">
              <div class="kebiao_title">
                <span>班级课表</span>
              </div>
            </div>
            <div class="kebiao_container">
              <div class="row">
                <div class="col-md-2">
                  <span style="width: 50px;background-color: #0b4865;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px"></span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #0b4865;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">星期一</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #0b4865;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">星期二</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #0b4865;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">星期三</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #0b4865;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">星期四</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #0b4865;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">星期五</span>
                </div>
              </div>
              <div class="row " style="margin-top: 2px">
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 50px;background-color: #263749;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px">1</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">语文</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">数学</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">英语</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">数学</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">英语</span>
                </div>
              </div>
              <div class="row " style="margin-top: 2px">
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 50px;background-color: #263749;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px">2</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">数学</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">语文</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">语文</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">英语</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">物理</span>
                </div>
              </div>
              <div class="row " style="margin-top: 2px">
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 50px;background-color: #263749;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px">3</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">化学</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">物理</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">生物</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">历史</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">化学</span>
                </div>
              </div>
              <div class="row " style="margin-top: 2px">
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 50px;background-color: #263749;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px">4</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">历史</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">数学</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">历史</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">地理</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">生物</span>
                </div>
              </div>
              <div class="row " style="margin-top: 2px">
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 50px;background-color: #263749;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px">5</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">体育</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">化学</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">地理</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">物理</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">化学</span>
                </div>
              </div>
              <div class="row " style="margin-top: 2px">
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 50px;background-color: #263749;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px">6</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">地理</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">生物</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">体育</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">化学</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">历史</span>
                </div>
              </div>
              <div class="row " style="margin-top: 2px">
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 50px;background-color: #263749;height: 25px;display: inline-block;margin-left: 4px;margin-top: 4px;color: white;font-size: 10px;line-height: 25px">7</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -20px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">自习</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">自习</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width:60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">自习</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">自习</span>
                </div>
                <div class="col-md-2" style="text-align: center">
                  <span style="width: 60px;background-color: #263749;height: 25px;display: inline-block;margin-left: -25px;margin-top: 4px;color: white;font-size: 12px;line-height: 25px">自习</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="kebiao">
              <div class="kebiao_title">
                <span>本月考勤</span>
              </div>
            </div>
            <kaoqing-charts></kaoqing-charts>
          </div>
          <div class="col-md-4">
            <div class="kebiao">
              <div class="kebiao_title">
                <span>名下资产</span>
              </div>
            </div>
            <zichan-charts></zichan-charts>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="kebiao">
              <div class="kebiao_title">
                <span>学生成绩分析</span>
              </div>
            </div>
            <chengji-ana-charts></chengji-ana-charts>
          </div>
          <div class="col-md-6">
            <div class="kebiao">
              <div class="kebiao_title">
                <span>教师发展分析</span>
              </div>
            </div>
            <fazhan-ana-charts></fazhan-ana-charts>
          </div>
        </div>
<!--        <div class="row middle_layer">-->
<!--          <div class="col-md-3">-->
<!--            <div class="gaikuang">-->
<!--              <div class="gaikaung_title">-->
<!--                <span>学校概况</span>-->
<!--              </div>-->
<!--              <div class="row gaikaung_item">-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: right;color: white">学生总数</span>-->
<!--                </div>-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: left;color: #17ff56">3045</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row gaikaung_item">-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: right;color: white">学生总数</span>-->
<!--                </div>-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: left;color: #17ff56">3045</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row gaikaung_item">-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: right;color: white">学生总数</span>-->
<!--                </div>-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: left;color: #17ff56">3045</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row gaikaung_item">-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: right;color: white">学生总数</span>-->
<!--                </div>-->
<!--                <div class="col-md-6">-->
<!--                  <span style="float: left;color: #17ff56">3045</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-9">-->
<!--            <div class="qingkuang">-->
<!--              <div class="qingkuang_title">-->
<!--                <span>学生情况分析</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-md-5">-->
<!--                <test-charts></test-charts>-->
<!--              </div>-->
<!--              <div class="col-md-5">-->
<!--                <test-two-charts></test-two-charts>-->
<!--              </div>-->
<!--              <div class="col-md-2">-->
<!--                <div style="margin-top: 20px">-->
<!--                  <div style="text-align: center">-->
<!--                    <span style="font-size: 20px">552</span>-->
<!--                  </div>-->
<!--                  <div  style="text-align: center">-->
<!--                    <span style="font-size: 13px;color: #9e516f;font-weight: bold">全校平均分</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <el-divider></el-divider>-->
<!--                <div style="margin-top: 20px">-->
<!--                  <div style="text-align: center">-->
<!--                    <span style="font-size: 20px">100</span>-->
<!--                  </div>-->
<!--                  <div  style="text-align: center">-->
<!--                    <span style="font-size: 13px;color: #e4964f;font-weight: bold">全校上线人数</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row bottom_layer">-->
<!--          <div class="col-md-12">-->
<!--            <div class="qingkuang_title">-->
<!--              <span>教师成果分析</span>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-md-4">-->
<!--                &lt;!&ndash;                <test-three-charts></test-three-charts>&ndash;&gt;-->
<!--                <rank-charts></rank-charts>-->
<!--              </div>-->
<!--              <div class="col-md-4">-->
<!--                <test-three-charts></test-three-charts>-->
<!--              </div>-->
<!--              <div class="col-md-4">-->
<!--                <div class="row">-->
<!--                  <div class="col-md-6">-->
<!--                    <div style="margin-top: 50px">-->
<!--                      <div style="text-align: center">-->
<!--                        <span style="font-size: 37px;font-weight: bold">19</span>-->
<!--                      </div>-->
<!--                      <div  style="text-align: center">-->
<!--                        <span style="font-size: 20px;color: #3e3876;font-weight: bold">新增成果量</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="col-md-6">-->
<!--                    <div style="margin-top: 50px">-->
<!--                      <div style="text-align: center">-->
<!--                        <span style="font-size: 37px;font-weight: bold">219</span>-->
<!--                      </div>-->
<!--                      <div  style="text-align: center">-->
<!--                        <span style="font-size: 20px;color: #327653;font-weight: bold">教师成果总量</span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import testCharts from '@/components/charts/testCharts'
import testTwoCharts from '@/components/charts/testTwoCharts'
import testThreeCharts from '@/components/charts/testThreeCharts'
import rankCharts from '@/components/charts/rankCharts'
import kaoqingCharts from '@/components/charts/kaoqingCharts'
import zichanCharts from '@/components/charts/zichanCharts'
import chengjiAnaCharts from '@/components/charts/chengjiAnaCharts'
import fazhanAnaCharts from '@/components/charts/fazhanAnaCharts'
export default {
  name: 'jiaoshiPage',
  components: {
    testCharts,
    testTwoCharts,
    testThreeCharts,
    rankCharts,
    kaoqingCharts,
    zichanCharts,
    chengjiAnaCharts,
    fazhanAnaCharts
  },
  data () {
    return {
      appFlag: true
    }
  },
  methods: {
    appControl: function () {
      this.appFlag = !this.appFlag
    },
    goHomePage: function () {
      this.$router.replace('/')
    },
    fanhui: function () {
      this.$router.push('/teacherPage')
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
    margin: 20px;
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
    /*background-color: #284799;*/
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
  .daka_container {
    margin-top: 10px;
  }
  .daka_button {
    width: 70px;
    height: 25px;
    background-color: #265279;
    border-style: solid;
    border-width: 1px;
    border-color: #307a95;
    border-radius: 8px 0 8px 0;
    text-align: center;
    margin-left: 20px;
    display: inline-block;
    cursor: pointer;
  }
  .daka_button span {
    color: white;
    height: 25px;
    line-height: 25px;
    font-size: 10px;
  }
  .touxiang {
    border-style: solid;
    border-color: #3f78bb;
    border-width: 1px;

  }
  .kebiao_container {
    margin-top: 2px;
    background-color: #194a73;
    padding-bottom: 5px;
  }
  .kebiao{
    margin-top: 8px;
    height: 25px;
    background-color: #284799;
    padding-left: 15px;
  }
  .kebiao_title span {
    line-height: 25px;
    font-size: 15px;
    color: white;
  }
  .my-background {
    height:100% ;
    width: 100%;
    background-image: url("../assets/background.png");
    background-size: 100%;
    background-attachment: fixed;
  }
</style>
