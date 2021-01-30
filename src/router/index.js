import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const home = () => import('@/views/home/Home')
const cate = () => import('@/views/category/Category')
const cart = () => import('@/views/cart/Cart')
const profile = () => import('@/views/profile/Profile')


const routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: cate
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/profile',
        component: profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router