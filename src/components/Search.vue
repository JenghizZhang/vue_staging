<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input @keyup.enter='search' type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;<button @click="search">Search</button>
            </div>
        </section>
    </div>
</template>

<script>
    // import axios from 'axios'
    import Pubsub from 'pubsub-js'

    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods:{
            async search() {
                // 请求之前通知list更新他的data
                // this.$bus.$emit('get-list-data',{isFirst:false,isLoading:true})
                Pubsub.publish('get-list-data',{isFirst:false,isLoading:true})
                try {
                    // 发送请求
                    const result = await this.$http.get("https://api.github.com/search/users",{params:{q:this.keyWord}})
                    const {data:{items}}=result
                    // 请求成功后通知List传递user信息
                    // this.$bus.$emit('get-list-data',{userList:items,isLoading:false})
                    Pubsub.publish('get-list-data',{userList:items,isLoading:false})

                } catch (error) {
                    // 请求失败后通知List
                    // this.$bus.$emit('get-list-data',{errMsg:error.message,isLoading:false,userList:[]})
                    Pubsub.publish('get-list-data',{errMsg:error.message,isLoading:false,userList:[]})
                }
            }
        }
    }
</script>
