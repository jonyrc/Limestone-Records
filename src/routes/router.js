import { createWebHistory, createRouter } from "vue-router";
import Home from '@/pages/Home'
import Playlists from '@/pages/Playlists'
import Videos from '@/pages/Videos'
import About from '@/pages/About'

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/playlists',
        component: Playlists
    },
    {
        path: '/videos',
        component: Videos
    },
    {
        path: '/about',
        component: About
    }
]

const router = new createRouter({
    routes,
    base: '/limestone',
    history: createWebHistory()
})

export default router