import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: () => import('@/views/guest/WelcomePage.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/views/guest/LoginPage.vue')
    },
    {
        path: "/registration",
        name: "Registration",
        component: () => import('@/views/guest/RegistrationPage.vue')
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import('@/views/auth/DashboardPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;