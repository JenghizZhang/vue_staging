<template>
    <div>
        <ul>
            <li v-for="message in messageArr" :key="message.id">
                <router-link to="/home/message/detail">{{message.title}}</router-link>&nbsp;&nbsp;
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