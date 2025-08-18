import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: 'Services' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact' },
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/signin.vue'),
      meta: { title: 'Sign In' },
    },
  ],
})

router.afterEach((to, from) => {
  document.title = to.meta.title || 'Accurx App'
  window.scrollTo(0, 0)
})

export default router
