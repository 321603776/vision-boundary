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

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/shoot',
      name: 'shoot',
      component: shoot
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/personmessge',
      name: 'personmessge',
      component: personmessge
    },
    {
      path: '/fensi',
      name: 'fensi',
      component: fensi
    },
    {
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    }
  ]
})
