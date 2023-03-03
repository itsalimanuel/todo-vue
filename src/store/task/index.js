import state from "./state";
import actions from "./action";
import mutations from "./mutations";
import getters from './getter'

const taskModule = {
    state: () => state,
    actions: actions,
    mutations: mutations,
    getters: getters
}
console.log('state');
export default taskModule