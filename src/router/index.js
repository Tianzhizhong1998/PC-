import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import login from './login'
import details from './detail'
Vue.use(Router)

 const router =new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    home,
    login,
    details,
    {
      path:"**",
      redirect:"/login"
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;

