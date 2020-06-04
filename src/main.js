// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router, { asyncRouterMap, constantRouterMap } from './router'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'Vuex'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'

// import { loginStatus, verifyLogin } from '@/api/login'
// eslint-disable-next-line no-unused-vars
// import $ from 'jquery'
// import axios from 'axios'
// axios.defaults.withCredentials = true
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false
// function hasPermission (roles, route) {
//   if (route.meta && route.meta.role) {
//     return roles.some(role => route.meta.role.includes(role))
//   } else {
//     return true
//   }
// }

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter (routes, roles) {
//   const res = []
//
//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRouter(tmp.children, roles)
//       }
//       res.push(tmp)
//     }
//   })
//   return res
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     token: 'asdsd',
//     userRole: '', // 当前正在使用的角色
//     roles: '',
//     routers: [],
//     addRouters: []
//   },
//   getters: {
//     token () {
//       return 'asdsd'
//     },
//     roles (state) {
//       return state.roles
//     },
//     addRouters (state) {
//       return state.addRouters
//     },
//     routers (state) {
//       return state.routers
//     }
//   },
//   actions: {
//     ChangeRoles ({ commit, dispatch }, role) {
//       console.log('开始执行ChangeRoles方法')
//       var name = ''
//       if (role === '教师') {
//         name = '教师'
//       } else {
//         name = '领导'
//       }
//       return new Promise(resolve => {
//         window.localStorage.setItem('userRole', name)
//         store.dispatch('GenerateRoutes', { name }).then(accessRoutes => {
//           // 根据roles权限生成可访问的路由表
//           router.addRoutes(accessRoutes) // 动态添加可访问路由表
//           // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//         })
//         resolve()
//         history.go(0)
//         // console.log('测试不太好拿的token')
//         // console.log(user.state.token)
//         // getUserInfo(user.state.token).then(response => {
//         //   console.log('测试修改后getUserInfo请求到的data')
//         //   const data = response.data
//         //   user.loginInfo.username = response.data.staff_number
//         //   user.loginInfo.password = response.data.password
//         //   console.log(data.userRole)
//         //   console.log('测试切换的权限在权限数组中是否存在')
//         //   console.log(data.userRole.includes(name))
//         //   if (data.userRole.includes(name)) {
//         //     window.localStorage.setItem('userRole', name)
//         //     // var roles = []
//         //     // roles.push(data.userRole)
//         //     commit('SET_ROLES', data.roles)
//         //     commit('SET_NAME', data.name)
//         //     commit('SET_AVATAR', data.avatar)
//         //     commit('SET_INTRODUCTION', data.introduction)
//         //     // dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
//         //     store.dispatch('GenerateRoutes', { name }).then(accessRoutes => {
//         //       // 根据roles权限生成可访问的路由表
//         //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
//         //       // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//         //     })
//         //     resolve()
//         //     history.go(0)
//         //   }
//         //   // }
//         // })
//         // history.go(0)
//         // })
//       })
//     },
//     // GetInfo ({state}) {
//     //   return {
//     //     data: {
//     //       role: state.roles = ['admin']
//     //     }
//     //   }
//     // },
//     GenerateRoutes ({ commit }, data) {
//       return new Promise(resolve => {
//         // eslint-disable-next-line no-unused-vars
//         const { roles } = data
//         let accessedRouters
//         // if (roles.includes('admin')) {
//         //   accessedRouters = asyncRouterMap
//         // } else {
//         const role = window.localStorage.getItem('userRole')
//         // if (roles.indexOf('elv') > -1) {
//         // eslint-disable-next-line
//         accessedRouters = filterAsyncRouter(asyncRouterMap, [role])
//         console.log('输出GenerateRoutes中的role看一看')
//         console.log(role)
//         console.log('输出accessedRouters')
//         console.log(accessedRouters)
//         commit('SET_ROUTERS', accessedRouters)
//         resolve()
//       })
//     }
//   },
//   mutations: {
//     SET_ROUTERS: (state, routers) => {
//       console.log(routers)
//       state.addRouters = routers
//       state.routers = constantRouterMap.concat(routers)
//     }
//   }
// })
// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem('userRole')) {
//     const roles = localStorage.getItem('roles')
//     store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//       console.log(store.getters.addRouters)
//       router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//     })
//   } else {
//     // 没有登录，去跳转登录页
//     if (to.path === '/') {
//       next()
//     } else {
//       next({
//         path: '/'
//       })
//     }
//   }
//   // if (store.getters.token) { // 判断是否有token
//   //   if (to.path === '/login') {
//   //     next({ path: '/' })
//   //   } else {
//   //     if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//   //       const roles = localStorage.getItem('roles')
//   //       store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//   //         console.log(store.getters.addRouters)
//   //         router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//   //         next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//   //       })
//   //     } else {
//   //       next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//   //     }
//   //   }
//   // } else {
//   //   next('/') // 否则全部重定向到登录页
//   // }
// })
