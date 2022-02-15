import {createRouter, createWebHistory} from "vue-router";

import Projects from '../views/Projects.vue'
import About from '../views/About.vue';
import Career from '../views/Career.vue';

const routes = [
  {
    path: '/',
    component: Projects,
    props: true
  },
  {
    path: '/about',
    component: About,
    props: true
  },

  {
    path: '/career',
    component: Career,
    props: true
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router