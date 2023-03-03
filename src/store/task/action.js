const actions = {
    addTask({ commit }, task) {
        commit('ADD_TASK', task)
    },
    editTask({ commit }, { index, task }) {
        commit('EDIT_TASK', { index, task })
    },
    deleteTask({ commit }, index) {
        commit('DELETE_TASK', index)
    }
}

export default actions