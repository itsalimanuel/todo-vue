const mutations = {
    ADD_TASK(state, task) {
        state.tasks.push(task)
    },
    EDIT_TASK(state, { index, task }) {
        state.tasks[index] = task
    },
    DELETE_TASK(state, index) {
        state.tasks.splice(index, 1)
    }
}

export default mutations