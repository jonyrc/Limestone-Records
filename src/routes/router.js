import { createWebHistory, createRouter } from "vue-router";
import Home from '@/pages/Home'

const routes = [{
    path: '/',
    component: Home
}]

const router = new createRouter({
    routes,
    history: createWebHistory()
})

export default router