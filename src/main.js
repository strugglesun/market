import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../node_modules/swiper/css/swiper.min.css'
import './plugins/element.js'
import './filters/index'
Vue.config.devtools = true;
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
