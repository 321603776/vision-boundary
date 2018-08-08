import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import login from '@/page/login'
import person from '@/page/person'
import register from '@/page/register'
import shoot from '@/page/shoot'
import upload from '@/page/upload'
import personmessge from '@/page/personmessge'
import fensi from '@/page/fensi'
import guanzhu from '@/page/guanzhu'
import forgetPassword from '@/page/forgetPassword'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/person',
      name: 'person',
      component: person,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/shoot',
      name: 'shoot',
      component: shoot,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/personmessge',
      name: 'personmessge',
      component: personmessge,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/fensi',
      name: 'fensi',
      component: fensi,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword,
      meta: {
        requireAuth: false
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (!(window.localStorage.getItem('token') === null)) { // 获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
