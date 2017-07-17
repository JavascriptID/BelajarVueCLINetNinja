import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
// import NoRoute from '@/components/nolinkcomponent/NoRoute';
// import HelloWorldComp from '@/components/HelloComponent';
import DaftarMakanan from '@/components/listcomponent/ListMakanan';

Vue.use(Router);

// lazy loading component
const Hello = () => import('@/components/Hello');
const NoRoute = () => import('@/components/nolinkcomponent/NoRoute');
const HelloWorldComp = () => import('@/components/HelloComponent');
const HelloWorldCompSeparated = () => import('@/components/hellocomponent/HelloComponentSpr');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/404',
      name: 'NoRoute',
      component: NoRoute,
    },
    {
      path: '/helloworld',
      name: 'HelloWorldComp',
      component: HelloWorldComp,
    },
    {
      path: '/pisah',
      name: 'HelloPisah',
      component: HelloWorldCompSeparated,
    },
    {
      path: '/daftarmakan',
      name: 'DaftarMakanan',
      component: DaftarMakanan,
    },
  ],
});
