import Vuex from 'vuex';
import Vue from 'vue'
//Vuex是插件库，先执行import，需要new Vuex.Store()之前应用插件，所以需要再store里use
Vue.use(Vuex)

//初始化总状态，对象形式，管理多个组件的状态,key-value
const state = {
    sum:0,
}

//创建actions对象，包含：多个响应组件“动作”的函数
const actions = {
    // 参数1：context即mini$store，要用context.commit去通知mutations加工状态
    // 参数2：传递的params参数
    /* increment(context,value){
        context.commit('INCREMENT',value)
    }, */
    decrement(context,value){
        context.commit('DECREMENT',value)
    },
    incrementOdd({commit,state},value){
        if(state.sum%2){
            commit('INCREMENT',value)
        }
    },
    incrementAsync(context,value){
        setTimeout(() => {
            context.commit('INCREMENT',value)
        }, 1000);
    }
}

//创建mutations对象，包含：多个真正用于加工“状态”的函数，一般key都大写
const mutations = {
    // 参数1：state对象
    // 参数2：传递的params参数
    INCREMENT(state,value){
        state.sum += value;
    },
    DECREMENT(state,value){
        state.sum -= value
    }
}

//getters中配置的是经过加工后的属性，值来自state中的属性
const getters = {
    computedNumber(state){
        return state.sum*100
    }
}

//创建store实例，用于管理state对象、mutations对象、actions对象
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
});

export default store