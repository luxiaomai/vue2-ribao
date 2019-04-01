// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import swipe from './components/swipe/swiper.vue'
import backScroll from './components/backScroll'
import infinite from  './components/infiniteScroll'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.component(swipe.name, swipe)
Vue.component(backScroll.name, backScroll)
Vue.component(infinite.name, infinite)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    num: 1,
    drawer: false,
    circleFlag: false,
    theme: {},
    article: {},
    before: ''
  },
  mutations: {
    add: ( state, n ) => state.num = n,
    back( state, n ) { //列表、返回按钮切换
      if ( n ) {
        state.drawer = false
      } else {
        state.drawer = true
      }
    },
    toggle( state, n ) {
      if ( n ) {
        state.circleFlag = true
      } else {
        state.circleFlag = false
      }
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

let indexScrollTop = 0;
let dom = document.querySelector( '.app-view' );
router.beforeEach( ( to, from, next ) => {
  if ( to.path == '/article' ) {
    dom = document.querySelector( '.app-view' );
    indexScrollTop = dom.scrollTop;
    store.commit( 'back' );
  } else {
    store.commit( 'back', 1 );
  }
  store.commit( 'toggle' );
  next()
} )
router.afterEach( ( to, from, next ) => {
  if ( to.path == '/article' ) {
    dom.scrollTop = 0;
  } else {
    Vue.nextTick( () => {
      if(to.path=='/theme'){
        store.commit( 'add', location.href.split('=')[1] );
      }
      dom.scrollTop = indexScrollTop;
    })
  }
})
