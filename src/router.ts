import HomePage from '@/views/HomePage.vue'
import NetworkPage from '@/views/NetworkPage.vue'
import NetworkCompApiPage from './views/NetworkCompApiPage.vue'

export const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/network', name: 'network', component: NetworkPage },
  { path: '/network-comp-api', name: 'network comp', component: NetworkCompApiPage }
]
