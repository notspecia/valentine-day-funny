import { createWebHistory, createRouter } from 'vue-router'

import Letter from './views/Letter.vue';
import Valentine from './views/Valentine.vue';

const routes = [
    { path: '/', component: Letter },
    { path: '/valentine', component: Valentine },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})