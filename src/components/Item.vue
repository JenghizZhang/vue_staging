<template>
    <li
        @mouseenter="isEnter=true"
        @mouseleave="isEnter=false"
		:class="{'high-light':isEnter}"
    >
        <label>
            <input type="checkbox" v-model="checked" @change="update"/>
            <span>{{todo.name}}</span>
        </label>
        <button class="btn btn-danger" :style="{display:isEnter? 'block':'none'}">删除</button>
    </li>

</template>

<script>
    export default {
        name:'Item',
        // 要写引号
        props: ["todo","updateTodo","updateTodoIndex","index"],
        data(){
            return {
                isEnter:false, // 标识鼠标是否移入
				checked:this.todo.done
            }
        },
		methods: {
			update(){
				//通知App去更新todos——用id去更新
				// this.updateTodo(this.todo.id,this.checked)
				//通知App去更新todos——用index去更新
				this.updateTodoIndex(this.index,this.checked)
			}
		},
    }
</script>

<style scoped>
    /*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	.high-light {
		background-color: lightgray;
	}
</style>