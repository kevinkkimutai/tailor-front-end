import { createRouter,createWebHistory } from 'vue-router';
import DashBoard from '../components/DashBoard.vue';
import HomePage from '../components/HomePage.vue';


const routes = [
    { path: '/', component: HomePage},
    { path: '/dashboard', component: DashBoard},
  
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;