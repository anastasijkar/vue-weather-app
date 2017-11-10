import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'

// import HelloWorld from './components/HelloWorld'
// import About from './components/About'

// Vue.use(VueRouter)

/* const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/about',
    component: About
  }
] */

/* const router = new VueRouter({
  routes,
  mode: 'history'
}) */

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
  // router
}).$mount('#app')// mount the router on the app
