import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false //关闭生产提示
Vue.use(VueResource)
new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    el:'#app',
    render:h => h(App),
})