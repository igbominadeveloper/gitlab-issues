import Vue from 'vue';

import App from '@/App.vue';
import './assets/global.css';

Vue.config.productionTip = false;

Vue.filter('emoji', (hex) => String.fromCodePoint(`&#${hex};`.slice(2, -1)));

new Vue({
  render: (h) => h(App),
}).$mount('#app');
