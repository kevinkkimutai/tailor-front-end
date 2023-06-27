import { createRouter,createWebHistory } from 'vue-router';
import DashBoard from '../components/DashBoard.vue';
import HomePage from '../components/HomePage.vue';
import InboxPage from '../components/inbox/InboxPage.vue'
import UserPage from '../components/users/UserPage.vue'

const routes = [
    { path: '/', component: HomePage},
    { path: '/dashboard', component: DashBoard},
    { path: '/inbox', component: InboxPage},
    { path: '/users', component: UserPage},
  
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;