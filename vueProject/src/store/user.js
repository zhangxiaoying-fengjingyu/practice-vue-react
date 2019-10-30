const state = {
    value:'值'
}
const mutations = {
    setValue(state,obj){
       state.value = obj
    }
}
export default {
    namespace:'true',
    state,
    mutations
}