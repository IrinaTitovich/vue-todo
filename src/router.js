import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import AllTasks from './components/all-tasks'
import Workspace from './components/tasks-workspace'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/home',
            component: Home
        },
        {
            path: '/add-task',
            component: Workspace
        },
        {
            path: '/see-all',
            component: AllTasks
        }


    ],

})