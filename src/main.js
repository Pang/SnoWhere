import './plugins/axios';

import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from './plugins/axios';
import { routes } from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')