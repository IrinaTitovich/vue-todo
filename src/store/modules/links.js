export default {
    state: {
        links: [
            'Home',
            'See All',
            'Add Task',
        ]
    },
    getters: {
        headerLinks(state) {
            return state.links
        }
    }
}