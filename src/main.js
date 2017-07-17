// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import ListMakananComponent from './components/listcomponent/ListMakanan';
import GlobalComponent from './components/globalkomponen/GlobalComponent';

Vue.config.productionTip = false;

// register komponen secara global , bisa dengan async method component
// const ListMakananComponent = () => import('@/components/listcomponent/ListMakanan');
// Vue.component('list-makanan', ListMakananComponent);

// cara register komponen global
Vue.component('global-komponen', GlobalComponent);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
