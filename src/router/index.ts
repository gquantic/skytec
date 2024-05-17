import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutUs from '@/views/AboutUs.vue'
import Contacts from '@/views/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ]
})

export default router
