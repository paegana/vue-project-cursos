import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Administracion from '@/views/Administracion.vue';


const NOTFOUND = ()=> import('../views/NotFound.vue');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: Administracion,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NOTFOUND
    },
  ],
})

export default router
