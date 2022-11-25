import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { useStore } from "../store";
import { GetDynamicRoutes } from '../apis'

// 静态路由表
const routes: Array<RouteRecordRaw> = [
    {
        // 路由重定向配置
        path: '/',
        redirect: '/Home'
    }, {
        path: '/Home',
        component: () => import('../views/HomePage.vue')
    }, {
        // 404页面配置
        path: '/:catchAll(.*)',
        component: () => import('../views/Errors/404.vue')
    }
]

// 路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.path !== '/Home' && to.path !== '/') {
        const store = useStore()
        if (store.routes.length < 1) {

            GetDynamicRoutes().then(res => {
                store.addRoutes(res.data.data, router)
                next({ path: to.path, replace: true })

            }).catch(_ => {
                next()
            })

        } else {
            next()
        }
    } else {
        next()
    }
})

export default router