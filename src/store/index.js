import { createApp } from 'vue'
import App from '../App.vue'
import Vuex from 'vuex'
import TASK from './task/index'
import persistedState from 'vuex-persistedstate'

const app = createApp(App)
app.use(Vuex)


export default new Vuex.Store({
    modules: {
        tasks: TASK
    },
    plugins: [persistedState(
        {
            storage: window.sessionStorage,
            paths: ['tasks']
        }
    )]
})