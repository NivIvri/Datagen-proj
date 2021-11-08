import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import productDetails from '../views/product-details.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:productId',
    name: 'productDetails',
    component: productDetails
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
