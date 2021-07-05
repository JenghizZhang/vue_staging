<template>
    <div class="app">
        <Category title="游戏">
            <template slot="game">
                <ul>
                    <li v-for="game in gameArr" :key="game.id">
                        {{game.name}}---{{game.id}}
                    </li>
                </ul>
            </template>
        </Category>
        <Category title="美食">
            <template slot="food">
                <img :src="foodUrl" alt="">
            </template>
        </Category>
        <Category title="视频">
            <template>
                <div slot="movie">
                    <video controls :src="videoUrl" alt="" />
                </div>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category},
        data() {
            return {
                gameArr: [
                    {id:"001",name:'王者荣耀',price:100},
                    {id:"002",name:'绝地求生',price:200},
                    {id:"003",name:'使命召唤',price:300},
                    {id:"004",name:'穿越火线',price:400},
                ],
                foodUrl:"http://s3.ax1x.com/2021/01/16/srJlq0.jpg",
                videoUrl:"https://v-cdn.zjol.com.cn/276984.mp4"
            }
        },
    }
</script>

<style scoped>
    .app {
        display: flex;
        justify-content: space-around
    }
    img {
        width: 100%;
    }
    video {
        width: 100%;
    }
</style>