import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ContactDetail from '../views/ContactDetail.vue';
import AddContact from '../views/AddContact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact/:id', name: 'ContactDetail', component: ContactDetail },
  { path: '/add-contact', name: 'AddContact', component: AddContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
