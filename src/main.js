import Vue from 'vue'
import App from './App.vue'

Vue.directive('test', {
  bind(el){
    el.style.backgroundColor = 'red';
  }
});

Vue.config.productionTip = false,

new Vue({
  render: h => h(App),
}).$mount('#app')
