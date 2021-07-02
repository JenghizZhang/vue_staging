<template>
    <div class="demo2">
        <h2>我是Demo2组件</h2>
        <button @click="$bus.$emit('nice',123)">点我给Demo1传数据</button>
        <h2 v-show="name">收到的name是{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Demo2',
        mounted() {
            this.$bus.$on('asd',this.handle)
        },
        data() {
            return {
                name:''
            }
        },
        methods: {
            handle(x){
                this.name=x
            }
        },
    }
</script>

<style scoped>
    .demo2{
        background-color: skyblue;
        padding: 10px;
    }
</style>