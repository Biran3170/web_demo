import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/MainLayout.vue'),
      children: [
        { path: '', name: 'home', component: () => import('../views/HomeView.vue') },
        { path: 'search', name: 'search', component: () => import('../views/SearchView.vue') },
        { path: 'product/:id', name: 'product-detail', component: () => import('../views/SearchView.vue') }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue'),
      meta: { requiresAuth: true }
    },

    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
    { path: '/thank-you', name: 'thank-you', component: () => import('../views/ThankYouView.vue') },

    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') }
  ]
})

router.beforeEach((to, from) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.user) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router