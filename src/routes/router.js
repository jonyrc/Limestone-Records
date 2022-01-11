import { createWebHistory, createRouter } from "vue-router";
import Home from '@/pages/Home'
import Playlists from '@/pages/Playlists'
import Videos from '@/pages/Videos'

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
    }
]

const router = new createRouter({
    routes,
    history: createWebHistory()
})

export default router