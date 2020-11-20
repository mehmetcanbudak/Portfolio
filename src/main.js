import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';
import index from './router'
import store from './store'
import VueKonva from 'vue-konva'


Vue.use(VueKonva);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  router: index,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
