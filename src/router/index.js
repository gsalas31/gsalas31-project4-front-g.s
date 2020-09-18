import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/products',
    name: 'Products',
    component: Products
  },{
    path: '/register',
    name: 'Register',
    components: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
