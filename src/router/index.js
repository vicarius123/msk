import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AboutUS from '@/components/AboutUs'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/about-us',
      name:'AboutUS',
      component:AboutUS,
      props:{
        menuBlue : true
      }
    }
  ]
})

export default router
