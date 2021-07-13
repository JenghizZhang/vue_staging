<template>
    <div>
        <ul>
            <li v-for="msg in messageArr" :key="msg.id">
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
                <!-- <router-link :to="`/home/message/detail/?id=${msg.id}&title=${msg.title}&content=${msg.content}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
                <router-link :to="{name:'xiangqing',params:{},query:{id:msg.id,title:msg.title,content:msg.content}}">{{msg.title}}</router-link>
                <button @click="pushShow(msg)">push查看</button>
                <button @click="replaceShow(msg)">replace查看</button>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageArr:[
                    {id:'001',title:'消息1',content:'我是消息1'},
                    {id:'002',title:'消息2',content:'我是消息2'},
                    {id:'003',title:'消息3',content:'我是消息3'},
                ]
            }
        },
        methods:{
            pushShow(msg){
                this.$router.push({name:'xiangqing',params:{},query:{id:msg.id,title:msg.title,content:msg.content}})
            },
            replaceShow(msg){
                this.$router.replace({name:'xiangqing',params:{},query:{id:msg.id,title:msg.title,content:msg.content}})
            },
        }
    }
</script>

<style scoped>
    
</style>