import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheCard',
      component: () => import('../components/TheCard.vue')
      
    }
  ]
})

export default router
