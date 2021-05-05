import resp from '../../data'


const loadData = (time=300) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resp)
        }, time)
    })
}


export default {
    state: {
        tasks: [],
        searchName: ''
    },
    getters: {
        allTasks(state) {
            return state.tasks
        },
        taskByName(state) {
            return state.tasks.find(t => t.name.toLowerCase() === state.searchName.toLowerCase())
        },
        indexOfTheTaskByName(state){
            return state.tasks.findIndex(t=>t.name.toLowerCase() === state.searchName.toLowerCase())
        }
    },
    mutations: {
        SET_TASKS(state, payload) {
            state.tasks = payload
        },
        SET_SEARCH_NAME(state, searchName) {
            state.searchName = searchName
        },
        ADD_TASK(state, newTask) {
            state.tasks.push(newTask)
        },
        REMOVE_TASK(state, taskName) {
            state.tasks = state.tasks.filter(t => t.name.toLowerCase() !== taskName.toLowerCase())

        },
        EDIT_TASK_IN_STATE(state,payload){
            console.log(payload)
            state.tasks.splice(payload.index,1,payload.task)
        }

    },
    actions: {
        async loadData({ commit }, payload) {
            const tasks = await loadData(payload)
            commit('SET_TASKS', tasks)
        }
    }
}