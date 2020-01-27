import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Animes from '../views/Animes.vue';
import WathcEpisode from '../views/WatchEpisode.vue';
import Pages from '../views/Pages.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/page/:page',
    name: 'pages',
    component: Pages,
    props:true
  },
  {
    path: '/animes/:type/:link_name',
    name: 'animes',
    component: Animes,
    props:true
  },
  {
    path: '/episode/:episode',
    name: 'episode',
    component: WathcEpisode,
    props:true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
