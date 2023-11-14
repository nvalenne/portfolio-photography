import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import Gallery from "./pages/Gallery.vue";
import CameraGear from "./pages/CameraGear.vue";

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/gallery', component: Gallery },
        { path: '/camera_gear', component: CameraGear},
    ],
})

app.use(router)
app.mount('#app')
