import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/MainLanding.vue')
    },
    {
      path: '/aboutTheAuthor',
      name: 'aboutTheAuthor',
      component: () => import('../views/TheAuthor.vue')
    },
    {
      path: '/seeGithub',
      name: 'seeGithub',
      component: () => import('../views/SeeGithub.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    }
  ]
})

export default router
