<template>
    <div>
        <h2 v-show="listInfo.isFirst">欢迎使用</h2>
        <h2 v-show="listInfo.isLoading">加载中</h2>
        <h2 v-show="listInfo.errMsg">{{listInfo.errMsg}}</h2>
        <div class="row" v-for="userObj in listInfo.userList" :key="userObj.login">
            <div class="card">
                <a :href="userObj.html_url">
                    <img :src="userObj.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{userObj.login}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Pubsub from 'pubsub-js'
    export default {
        name:'List',
        mounted() {
            // this.$bus.$on('get-list-data',this.saveData)
            Pubsub.subscribe('get-list-data',this.saveData)
        },
        beforeDestroy() {
            // this.$bus.$off('get-list-data')
            PubSub.clearAllSubscriptions()
        },
        data() {
            return {
                listInfo:{
                    userList:[],
                    isFirst:true,
                    isLoading:false,
                    errMsg:''
                }
            }
        },
        methods: {
            saveData(_,data){
                this.listInfo={...this.listInfo,...data}
            }
        }
    }
</script>

<style>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>