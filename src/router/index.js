import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
// import NoRoute from '@/components/nolinkcomponent/NoRoute';
// import HelloWorldComp from '@/components/HelloComponent';
import DaftarMakanan from '@/components/listcomponent/ListMakanan';
import NestingComponent from '@/nestingcomponent/NestingComponent';

Vue.use(Router);

// lazy loading component
const Hello = () => import('@/components/Hello');
const NoRoute = () => import('@/components/nolinkcomponent/NoRoute');
const HelloWorldComp = () => import('@/components/HelloComponent');
const HelloWorldCompSeparated = () => import('@/components/hellocomponent/HelloComponentSpr');

const MainCSSComponent = () => import('@/components/csscomponent/CSSComponent');

const LifecyclerComponent = () => import('@/complifecycle/LifeComponent');

const SlotComponent = () => import('@/slotkomponen/SlotComponent');

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
    {
      path: '/cssdemo',
      name: 'MainCSSComponent',
      component: MainCSSComponent,
    },
    {
      path: '/nestingcom',
      name: 'NestingComponent',
      component: NestingComponent,
    },
    {
      path: '/lifec',
      name: 'LifecyclerComponent',
      component: LifecyclerComponent,
    },
    {
      path: '/slots',
      name: 'SlotComponent',
      component: SlotComponent,
    },
  ],
});
