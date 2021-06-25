import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBoxpae79POruX_7wjaLYdJuX3kMD3_S7U',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
