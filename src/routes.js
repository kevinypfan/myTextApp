import Home from './components/Home.vue'
import User from './components/user/User.vue'
import Count from './components/count/Count.vue'
import Model from './components/model/Model.vue'


export const routes = [
    {path: '/' , component: Home},
    {path: '/user' , component: User},
    {path: '/count' , component: Count},
    {path: '/model' , component: Model}
]