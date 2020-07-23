import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible'//适配
import '../static/common/css/reset.css' /*引入公共样式*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import md5 from 'js-md5'
import axios from 'axios'
import qs from 'qs';
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

Vue.prototype.$md5 = md5
Vue.use(Antd);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
