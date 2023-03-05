const mutations = {
    ADD_TASK(state, task) {
        state.tasks.push(task)
    },
    EDIT_TASK(state, { index, task }) {
        state.tasks[index] = task
    },
    DELETE_TASK(state, id) {
        const index = state.tasks.findIndex(task => task.id === id)
        if (index !== -1) {
            state.tasks.splice(index, 1)
        }
    },
    GET_TASK_BYID(state, task) {
        state.currentTask = task
    },
}

export default mutations