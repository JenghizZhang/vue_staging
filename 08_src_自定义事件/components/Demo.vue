<template>
    <div class="demo">
        <h2>我是Demo组件</h2>
        <button @click="sendDate">点我给App传递数据</button>
        <button @click="a">点我测试this</button>
    </div>
</template>

<script>
    export default {
        name:'Demo',
        methods:{
            sendDate(){
                this.$emit('haha',"asd")
            }
        },
        props: ["a"]
    }
</script>

<style scoped>
    .demo{
        background-color : aqua;
        padding : 5px
    }
</style>