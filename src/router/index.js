import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import homePage from '@/components/homePage'
import newHomePage from '@/components/newHomePage'
import teacherPage from '@/components/teacherPage'
import jiaoshiPage from '@/components/jiaoshiPage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'newHomePage',
      component: newHomePage
    },
    {
      path: '/teacherPage',
      name: 'teacherPage',
      component: teacherPage
    },
    {
      path: '/jiaoshiPage',
      name: 'jiaoshiPage',
      component: jiaoshiPage
    }
  ]
})
