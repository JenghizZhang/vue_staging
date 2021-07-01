<template>
    <div>
        <h1 class="welcome">欢迎学习前端最火的框架</h1>
        <HelloWorld />
    </div>
</template>

<script>
    // 引入HelloWorld组件
    import HelloWorld from './components/HelloWorld.vue'
    export default {
        components:{
            HelloWorld
        }
    }
</script>

<style>
    .welcome{
        background-color: gray;
    }
</style>