import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './modules/tasks'
import auth from './modules/auth'
import links from './modules/links'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { tasks, auth, links }
})