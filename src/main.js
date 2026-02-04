import { createApp } from 'vue'
import App from './App.vue'

// routes import from router.js 
import { router } from './router';

// import scss custom main file + bootstrap styles + icons + js interactions
import '@/styles/main.scss';

const app = createApp(App);
app.use(router); // use router for navigation of pages
app.mount('#app');
