import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters:{
        doubleCounter: state => {
            return state.counter *2;
        },
        counterString: state => {
            return state.counter +'clicks';
        },
        getValue(state){
            return state.value;
        }
    },
    mutations:{
        addCounter: (state) => {
            state.counter++
        },
        minusCounter: (state) => {
            state.counter--
        },
        addHunCouter(state , payload){
            state.counter+=payload
        },
        minusHunCouter(state , payload){
            state.counter-=payload
        },
        UPDATEBALUE(state,value){
            state.value = value
        }
    },
    actions:{
        addCounter({commit}){
            commit('addCounter')
        },
        minusCounter({commit}){
            commit('minusCounter')
        },
        addNotto({commit},payload){
            setTimeout(()=>{
               commit('addHunCouter',payload.by)
            },payload.delay)
        },
        minusNotto({commit},payload){
            setTimeout(()=>{
               commit('minusHunCouter',payload.by)
            },payload.delay)
        },
        updateValue({commit},value){
            commit('UPDATEBALUE',value)
        }
    }
})
