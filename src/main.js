import './plugins/axios';

import App from './App.vue';
import Main from './components/Main';
import StateStations from './components/StateStations.vue';
import StationInfo from './components/StationInfo.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from './plugins/axios';

Vue.use(VueRouter);
const routes = [{
    path: '/',
    name: "Main",
    component: Main
  }, {
    path: '/:state',
    name: "StateStations",
    component: StateStations,
  },
  {
    path: '/:state/:station',
    name: "StationInfo",
    component: StationInfo
  }
]

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