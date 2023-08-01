import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../components/auth/LoginPage.vue';
import SignupPage from '../components/auth/SignupPage.vue';
import HomePage from '../components/HomePage.vue';
import DashBoard from '../components/DashBoard.vue';
import InboxPage from '../components/inbox/InboxPage.vue';
import UserPage from '../components/users/UserPage.vue';
import StaffPage from '../components/users/StaffPage.vue';
import LadyProduct from '../components/products/LadyDesigns.vue';
import MenProduct from '../components/products/MenDesigns.vue';
import ExpensePage from '../components/expense/ExpensePage.vue';
import AddDesign from '../components/products/AddDesign.vue';
import AddExpense from '../components/expense/AddExpense.vue';
import AddStaff from '../components/users/AddStaff.vue';
import ForgotPassword from '../components/auth/ForgotPassword.vue';
import ResetPassword from '../components/auth/ResetPassword.vue';
import AllDesigns from '../components/products/AllDesigns.vue';
import UserProfile from '../components/users/UserProfile.vue';

const routes = [
 
  {
    path: '/',
    component: HomePage,
    meta: { requiresAuth: false },
  },
  {
    path: '/inbox',
    component: InboxPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard',
    component: DashBoard,
    meta: { requiresAuth: true },
  },
  {
    path: '/addstaff',
    component: AddStaff,
    meta: { requiresAuth: true },
  },
  {
    path: '/users',
    component: UserPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    component: UserProfile,
    meta: { requiresAuth: true },
  },
  {
    path: '/staff',
    component: StaffPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/adddesign',
    component: AddDesign,
    meta: { requiresAuth: true },
  },
  {
    path: '/alldesigns',
    component: AllDesigns,
    meta: { requiresAuth: true },
  },
  {
    path: '/ladydesign',
    component: LadyProduct,
    meta: { requiresAuth: true },
  },
  {
    path: '/mendesign',
    component: MenProduct,
    meta: { requiresAuth: true },
  },
  {
    path: '/allexpense',
    component: ExpensePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/addexpense',
    component: AddExpense,
    meta: { requiresAuth: true },
  },
  {
    path: '/forgotpassword',
    component: ForgotPassword,
    meta: { requiresAuth: false },
  },
  {
    path: '/resetpassword/:token',
    component: ResetPassword,
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    component: LoginPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/signup',
    component: SignupPage,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth &&!token) {
    next('/login');
  } else {
    next();
  }
});

export default router;