import Home from "../components/HelloWorld.vue"
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    }
]

export default new VueRouter({
    routes
})