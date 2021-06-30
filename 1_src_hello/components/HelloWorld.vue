<template>
	<div>
		<h2 class="title">Hello,{{name}}</h2>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name:'尚硅谷'
			}
		}
	}
</script>

<style>
	.title{
		background-color: orange;
	}
</style>