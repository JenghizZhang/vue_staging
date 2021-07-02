<template>
    <div class="demo1">
        <h2>我是Demo1组件</h2>
        <button @click="sendData">点我给Demo2传递数据</button>
    </div>
</template>

<script>
    export default {
        name:'Demo1',
        mounted() {
			this.$bus.$on('nice',function (params) {
                console.log("Demo1收到了"+params);
            })		
		},
        methods: {
            sendData(){
                this.$bus.$emit('asd','老刘')
            }
        },
    }
</script>

<style scoped>
    .demo1 {
        background-color: gray;
        padding: 10px;
    }
</style>