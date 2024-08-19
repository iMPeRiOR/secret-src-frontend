import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/share/:token',
      name: 'share',

      component: () => import('../views/ShareView.vue')
    },
    {
      path: '/check/:token/:token1/:token2',
      name: 'check',

      component: () => import('../views/DetailsView.vue')
    },
    {
       path: '/:pathMatch(.*)*',
       name: 'notfound',
      component: () => import('../views/NotFoundView.vue')

    }

  ]
})

export default router
