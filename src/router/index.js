import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Person from '@/pages/Person'
import Even from '@/pages/Even'
import Login from '@/pages/Login'
import CharacterTree from '@/pages/characterTree'
import Home from '@/components/Home'
import TheHome from '@/components/TheHome'
import Min from '@/components/TheMin'
import login from '@/views/login/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/min',
      name: 'Min',
      component: Min
    },
    {
      path: '/TheHome',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/person',
        name: 'Person',
        component: Person
      },
      {
        path: '/even',
        name: 'Even',
        component: Even
      },
      {
        path: '/characterTree',
        name: 'CharacterTree',
        component: CharacterTree
      }
      ]
    }
  ]
})
