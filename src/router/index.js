import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import login from './login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    home,
    login,
    {
      path:"**",
      redirect:"/home"
    }
  ]
})
