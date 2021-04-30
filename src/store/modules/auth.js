export default {
    state: {
        auth: false
    },
    getters: {
        currentAuth(state) {
            return state.auth
        }
    },
    mutations: {
        CHANGE_AUTH(state) {
            state.auth = !state.auth
        }
    },
    actions: {

    }
}