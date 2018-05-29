// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import App from './App'
import router from './router'

import '@/styles/index.scss' // global css
Vue.config.productionTip = false
const theme = localStorage.getItem('themeActive') || 'one'
document.getElementById('themeLink').href = `./static/theme/stylesheets/${theme}/index.css`
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
