import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import AllTasks from './components/all-tasks'
import Workspace from './components/tasks-workspace'
import Task from './components/task'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/home',
            component: Home,
            name: 'home'
        },
        {
            path: '/add-task',
            component: Workspace
        },
        {
            path: '/see-all',
            component: AllTasks
        },
        {
            path: '/task/:name',
            component: Task,
            name: 'task',
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem("auth")) {
                    next()
                } else {
                    next({ name: 'home' })
                }
            }
        },
        {
            path: '*',
            redirect: { name: 'home' }
        }

    ],

})