// import { Getters, Mutations, Actions,Module } from "vuex-smart-module"

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

// class AuthState{
//     auth:Boolean = false
// }

// class AuthGetters extends Getters<AuthState>{
//     get currentAuth():Boolean{
//         return this.state.auth
//     }
// }
// class AuthMutations extends Mutations<AuthState>{
//     CHANGE_AUTH():void {
//         this.state.auth = !this.state.auth
//     }
// }
// class AuthActions extends Actions<AuthState,AuthGetters,AuthMutations,AuthActions>{
    
// }

// export const auth = new Module({
//     state:AuthState,
//     getters:AuthGetters,
//     mutations:AuthMutations,
//     actions:AuthActions
// })