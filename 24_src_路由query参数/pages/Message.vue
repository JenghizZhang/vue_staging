<template>
    <div>
        <ul>
            <li v-for="msg in messageArr" :key="msg.id">
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}/${msg.content}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
                <router-link :to="`/home/message/detail/?id=${msg.id}&title=${msg.title}&content=${msg.content}`">{{msg.title}}</router-link>&nbsp;&nbsp;
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
    }
</script>

<style scoped>
    
</style>