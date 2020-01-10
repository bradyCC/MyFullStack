import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios, { AxiosInstance } from 'axios';
import './plugins/element';

// 引入 vue-ele-form
import EleForm from 'vue-ele-form';

// 注册 vue-ele-form
Vue.use(EleForm);

Vue.config.productionTip = false;

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000',
});

// 模块补充、类型声明
declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance;
    $message: any;
    $confirm: any;
  }
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
