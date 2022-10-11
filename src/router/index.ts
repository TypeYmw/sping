
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './modules';

const env = import.meta.env;

console.log('env.DEV', env.DEV);


// hash模式：createWebHashHistory
// history模式：createWebHistory
const router = createRouter({
  history: createWebHashHistory('/'),
  routes
});

export default router;
