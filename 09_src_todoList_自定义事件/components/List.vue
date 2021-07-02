<template>
    <div>
        <ul class="todo-main">
            <!-- 用v-for来遍历todos -->
            <Item 
                v-for="(todoObj,index) in todos" 
                :key="todoObj.id" 
                :todo='todoObj'
                :index="index"
                :updateTodo="updateTodo"
                :updateTodoIndex="updateTodoIndex"
                :deleteTodo="deleteTodo"
            />
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name:'List',
        components:{Item},
        props:{ //声明接收props，声明后可以在vc上收到
            todos:{
                type:Array,
                isRequired:true,
            },
            updateTodo: Function,
            updateTodoIndex: Function,
            deleteTodo: Function
        },

    }
</script>

<style scoped>
    /*main*/
	.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0px;
	}

	.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding-left: 5px;
	margin-top: 10px;
	}
</style>