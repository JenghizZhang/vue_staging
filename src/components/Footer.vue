<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{doneCount}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
    </div>

</template>

<script>
    export default {
        name:'Footer',
		props:['todos',"updateAll","clearAll"],
		computed:{
			doneCount(){
				return this.todos.reduce((count,todo)=>count+Number(todo.done),0)
			},
			total(){
				return this.todos.length
			},
			isAll:{
				set(flag){
					this.updateAll(flag)
				},
				get(){
					return (this.doneCount===this.total)&&(this.total!==0)
				}
			}
		},
		methods:{
			clearAllDone(){
				if(confirm("确定删除所有完成了的todo吗？")){
					this.clearAll()
				}
			},
		}
    }
</script>

<style scoped>
    /*footer*/
	.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
	}

	.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
	}

	.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
	}

	.todo-footer button {
	float: right;
	margin-top: 5px;
	}
</style>