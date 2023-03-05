const actions = {
    addTask({ commit }, task) {
        commit('ADD_TASK', task)
    },
    editTask({ commit }, { index, task }) {
        commit('EDIT_TASK', { index, task })
    },
    deleteTask({ commit }, id) {
        commit('DELETE_TASK', id)
    },
    getTaskById({ state, commit }, id) {
        const task = state.tasks.find(task => task.id === id)
        commit('GET_TASK_BYID', task)
    },

}

export default actions