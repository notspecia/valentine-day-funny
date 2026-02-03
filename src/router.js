import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue';
import Valentine from './views/Valentine.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/valentine', component: Valentine },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})