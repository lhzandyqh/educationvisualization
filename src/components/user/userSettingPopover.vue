<template>
  <div class="appContainer">
    <el-popover
      placement="bottom"
      width="200"
      trigger="hover">
      <div class="content">
        <span style="font-weight: bolder">当前用户：</span>
<!--        <span>{{this.toPopoverData}}</span>-->
        <span style="font-weight: bolder">ruitongAI</span>
        <el-divider style="padding-top: 10px"></el-divider>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-s-platform"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="gotoTeacher">进入系统</el-button>
          </div>
        </div>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-open"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="logout">退出登录</el-button>
          </div>
        </div>
      </div>
      <i class="el-icon-s-custom" style="color: white" slot="reference"></i>
<!--      <img style="width: 20px;height: 20px" slot="reference" src="../../assets/icon/wode.png">-->
    </el-popover>
  </div>
</template>

<script>
// import {verifyLogin } from '@/api/login'
export default {
  name: 'userSettingPopover',
  methods: {
    gotoTeacher: function () {
      console.log('测试进入里面的平台页')
      this.$router.push('/teacherPage')
      // this.$router.push('/jiaoshiPage')
      // var change = localStorage.getItem('userRole')
      // // const dangqian = localStorage.getItem('userRole')
      // // const roles = localStorage.getItem('roles')
      // // if (dangqian === roles[0]) {
      // //   change = roles[1]
      // // } else {
      // //   change = roles[0]
      // // }
      // this.$store.dispatch('ChangeRoles', change).then(() => {
      //   this.$emit('change')
      // })
    },
    logout: function () {
      console.log('测试CASlogin登出')
      window.location.href = 'https://zhongkeruitong.top/cas/logout?service=https://zhongkeruitong.top/zhenghe/'
      // verifyLogin().then(response => {
      //   console.log('测试登陆接口')
      //   console.log(response)
      // })
    }
  }
}
</script>

<style scoped>
  .content{
    text-align: center;
  }
  .function_item{
    float: left;
    display: inline-block;
  }
  .functionLogo{
    float: left;
    margin-left: 30px;
  }
  .functionTitle{
    float: left;
    margin-left: 60px;
    margin-top: -10px;
  }

</style>
