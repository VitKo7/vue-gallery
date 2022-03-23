import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './pages/MainPage.vue';
import HomePage from './pages/HomePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/photo',
        component: () => import('./pages/PhotoPage.vue'), // lazy-loading
    },
    {
        path: '/home',
        component: HomePage,
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
