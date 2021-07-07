<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
        <h2>当前求和为：{{computedNumber}}</h2>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> &nbsp;
        <button @click="increment(number)">+</button> &nbsp;
        <button @click="decrement(number)">-</button> &nbsp;
        <button @click="incrementOdd(number)">奇数+</button> &nbsp;
        <button @click="incrementAsync(number)">异步+</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                // sum:0,
                number:1, // 用户选择的数字
            }
        },
        methods: {
            ...mapMutations({
                increment:'INCREMENT',
                decrement:'DECREMENT',
            }),
            ...mapActions(["incrementOdd",'incrementAsync']),
        },
        computed:{
            ...mapState(["sum"]),
            ...mapGetters(['computedNumber']),
        }
    }
</script>

<style scoped>
    
</style>