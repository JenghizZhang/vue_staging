import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button } from 'element-ui'
Vue.config.productionTip = false //关闭生产提示

// Vue.use(ElementUI);
Vue.component(Button.name, Button);

new Vue({
    el:'#app',
    render:h => h(App),
})