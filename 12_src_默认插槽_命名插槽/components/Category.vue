<template>
    <div class="cate">
        <h3 class="title">{{title}}分类</h3>
        <!-- 默认插槽 -->
        <!-- <slot /> -->
        <!-- 命名插槽 -->
        <slot name="game"/>
        <!-- 命名插槽 -->
        <slot name="food"/>
        <!-- 命名插槽 -->
        <slot name="movie"/>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:["title"]
    }
</script>

<style scoped>
    .cate {
        width: 240px;
        height: 300px;
        background-color: skyblue;
    }

    .title {
        text-align: center;
    }
</style>