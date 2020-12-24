import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
  	path: '/form',
  	name: 'Form',
  	component: () => import('../views/Form.vue')
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('../views/Testing.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
