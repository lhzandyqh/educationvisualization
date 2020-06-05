import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import homePage from '@/components/homePage'
import newHomePage from '@/components/newHomePage'
import teacherPage from '@/components/teacherPage'
import jiaoshiPage from '@/components/jiaoshiPage'
import aboutUs from '@/components/aboutUs'
// import errorPage from '@/components/errorPage'

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
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})

// export const constantRouterMap = [
//   {
//     path: '/',
//     name: 'newHomePage',
//     component: newHomePage
//   },
//   {
//     path: '/errorPage',
//     name: 'errorPage',
//     component: errorPage
//   }
// ]
// export default new Router({
//   routes: constantRouterMap
// })
//
// export const asyncRouterMap = [
//   {
//     path: '/teacherPage',
//     name: 'teacherPage',
//     component: teacherPage,
//     meta: { role: ['领导'] } // 页面需要的权限
//   }, {
//     path: '/jiaoshiPage',
//     name: 'jiaoshiPage',
//     component: jiaoshiPage,
//     meta: { role: ['教师'] } // 页面需要的权限
//   }
// ]
