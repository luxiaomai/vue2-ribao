import Vue from 'vue'
import Router from 'vue-router'
import home from './../views/home'
import theme from './../views/theme'
import article from './../views/article'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/theme',
      name: 'theme',
      component: theme
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
