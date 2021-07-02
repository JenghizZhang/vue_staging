<template>
	<div class="app">
		<h2>我是App组件</h2>
		<!-- 
			如下代码是给Demo的组件实例对象定义了一个”haha“事件，
			只要Demo组件实例对象触发haha事件，就会调用test函数
		-->
		<Demo @haha="test" :a="a"/>
	</div>
</template>

<script>
	import Demo from './components/Demo.vue'
	export default {
		name:'App',
		components:{Demo},
		methods:{
			test(x){
				console.log("App收到了Demo传递的："+x)
			},
			a(){
				console.log(this)
			}
		}
	}
</script>

<style scoped>
	.app{
		background-color: antiquewhite;
		padding: 10px;
	}
</style>