import Home from './components/Home.vue'
import User from './components/user/User.vue'
import Signup from './components/user/Signup.vue'
import Login from './components/user/Login.vue'
import Count from './components/count/Count.vue'
import Model from './components/model/Model.vue'


export const routes = [
    {path: '/' , component: Home},
    {path: '/user' , component: User, meta: { reqAuth: true } },
    {path: '/count' , component: Count},
    {path: '/model' , component: Model},
    {path: '/login' , component: Login},
    {path: '/signup' , component: Signup},
    { path: '/*', redirect: '/login' }
]
