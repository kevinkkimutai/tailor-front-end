import { createRouter,createWebHistory } from 'vue-router';
import DashBoard from '../components/DashBoard.vue';
import HomePage from '../components/HomePage.vue';
import InboxPage from '../components/inbox/InboxPage.vue';
import UserPage from '../components/users/UserPage.vue';
import StaffPage from '../components/users/StaffPage.vue';
import LadyProduct from '../components/products/LadyProduct.vue';
import MenProduct from '../components/products/MenProduct.vue';
import ExpensePage from '../components/expense/ExpensePage.vue';
import LoginPage from '../components/auth/LoginPage.vue';

const routes = [
    { path: '/', component: LoginPage},
    { path: '/home', component: HomePage},
    { path: '/dashboard', component: DashBoard},
    { path: '/inbox', component: InboxPage},
    { path: '/users', component: UserPage},
    { path: '/staff', component: StaffPage},
    { path: '/ladyproduct', component: LadyProduct},
    { path: '/menproduct', component: MenProduct},
    { path: '/allexpense', component: ExpensePage},

  
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;