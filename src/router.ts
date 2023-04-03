import HomePage from '@/views/HomePage.vue'
import NetworkPage, { NetworkPageComposition, NetworkPageOptions } from '@/views/NetworkPage'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  { path: '/', name: 'home', component: HomePage },
  {
    path: '/network',
    name: 'network',
    redirect: '/network/options',
    component: NetworkPage,
    children: [
      { path: 'options', component: NetworkPageOptions, name: 'options' },
      { path: 'composition', component: NetworkPageComposition, name: 'composition' }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
