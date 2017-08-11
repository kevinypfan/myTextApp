import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { store } from './store/store'

import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
});



new Vue({
  el: '#app',
    store,
    router,
    created(){
      window.localStorage.setItem("lastname", "dioypfan");
    },
  render: h => h(App)
})
