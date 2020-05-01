import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue';
import Upload from './Upload.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/upload',
  component: Upload
}, {
  path: '*',
  redirect: '/'
}]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router