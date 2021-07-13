/* 该文件是Vue中的路由器文件，路由器管理着所有路由的映射关系 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
// import Home2 from '../pages/Home2'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

Vue.use(VueRouter)

// 创建路由器，管理所有的路由映射关系
const router = new VueRouter({
    routes: [ // routes是路由的数组，放映射关系的对象
        { // 一个对象就是一个路由配置
            path:'/home',
            component:Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            // path:'detail/:id/:title/:content',
                            path:'detail',
                            component: Detail,
                            name:'xiangqing'
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        }, 
        {
            path:'/about',
            component: About
        }
    ]
})

// 暴露路由器
export default router