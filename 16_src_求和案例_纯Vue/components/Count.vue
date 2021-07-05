<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> &nbsp;
        <button @click="increment">+</button> &nbsp;
        <button @click="decrement">-</button> &nbsp;
        <button @click="incrementOdd">奇数+</button> &nbsp;
        <button @click="incrementAsync">异步+</button>
    </div>
</template>

<script>
    export default {
        name:'Count',
        data() {
            return {
                sum:0,
                number:1, // 用户选择的数字
            }
        },
        methods: {
            increment(){
                this.sum += this.number
            },
            decrement(){
                this.sum -= this.number
            },
            incrementOdd(){
                if(this.sum % 2){
                    this.sum += this.number
                }
            },
            incrementAsync(){
                setTimeout(() => {
                    this.sum += this.number
                }, 1000);
            },
        },
    }
</script>

<style scoped>
    
</style>