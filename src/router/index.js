import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({ type: route.query.type || 'general' }),
    },
    {
      path: '/feed/:type',
      name: 'feed',
      component: HomeView,
      props: true,
    },
  ],
})

export default router
