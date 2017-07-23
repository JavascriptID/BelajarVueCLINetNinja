// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import ListMakananComponent from './components/listcomponent/ListMakanan';
// import GlobalComponent from './components/globalkomponen/GlobalComponent';
import GlobalComponent from './components/globalkomponen/GlobalComponent';

Vue.config.productionTip = false;

// register komponen secara global , bisa dengan async method component
// const ListMakananComponent = () => import('@/components/listcomponent/ListMakanan');
// Vue.component('list-makanan', ListMakananComponent);

// cara register komponen global
Vue.component('global-komponen', GlobalComponent);

// menggunakan bus untuk mengirim data antar komponen
// jika ekspor satu variabel gunakan export default
// jika banyak variabel bisa gunakan export biasa
// const EventBus = new Vue();
// export default EventBus;
// export const foo = 'foo';
// export const bar = 'bar';
// export const data = 'data';
// export const EventBus = new Vue();
// export default new Vue();
// const bus = new Vue();
// export { bus as default };
const foo = 'foo';
const bar = 'bar';
const EventBus = new Vue();
export { foo, bar, EventBus };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
