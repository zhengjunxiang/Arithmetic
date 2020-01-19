import Vue from 'vue'
import App from './App.vue'
import './components/km-grid/styles/km-grid.less'
import KmGrid from './components/km-grid/components/km-grid/index'
import iView from 'iview'

Vue.config.productionTip = false

Vue.use(KmGrid)
Vue.use(iView)

new Vue({
  render: h => h(App),
}).$mount('#app')


