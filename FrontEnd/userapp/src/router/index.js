import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('logged');

  if (to.path == '/' && loggedIn) {
    return next('/home')
  } else if (to.path == '/' && !loggedIn) {
    return next('/login')
  }

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  if (loggedIn && to.path == '/login') {
    return next('/home')
  }



  next();
})




export default router
