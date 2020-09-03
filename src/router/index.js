import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout/Index'

const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/views/Home'),
                meta: { title: 'dashboard', icon: 'el-icon-s-home', affix: true }
            }
        ]
    },
    {
        path: '/amap',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/aMap/Index'),
                name: 'AMap',
                meta: { title: '高德地图', icon: 'el-icon-map', affix: true }
            }
        ]
    },
]

const router = new VueRouter({
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

export { constantRoutes }
export default router
