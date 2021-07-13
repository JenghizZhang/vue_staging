<template>
    <div>
        <Header />
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- Vue使用router-link实现路径改变 -->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- <About />
                        <Home /> -->
                        <router-view></router-view>
                        <router-view name="Home"></router-view>
                        <router-view name="Home2"></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    // import About from './pages/About'
    // import Home from './pages/Home'

    export default {
        name:'App',
        components:{Header,},
        // components:{Header,About,Home},
        mounted() {
            console.log('vc',this)
        },
    }
</script>