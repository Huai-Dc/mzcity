import Vue from 'vue'
import App from './App.vue'
/**
 * 顺序不能对调 否则router会读不到store的初始值
 */
import store from './store'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import './common.components.register'

Vue.use(ElementUI);
/**
 * 国际化
 */
import i18n from './lang';
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value),
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
    i18n,
  render: h => h(App)
}).$mount('#app')
