// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router'
import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';
Vue.config.productionTip = false
Vue.use(vuerouter);
/* eslint-disable no-new */
// 2. 定义路由
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  {path:'/seller',component:seller},
]

const router = new vuerouter({
  routes // （缩写）相当于 routes: routes
})

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
const app = new Vue({
  router,
  template: '<App/>',
  components:{App}
}).$mount('#app')
