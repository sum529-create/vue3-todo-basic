<template>
  <TodoHeader/>
  <TodoInput @addList="addLists"/>
  <TodoList :todoList="todoItems" @remove="removeTodoItem"/>
</template>

<script>
import { onMounted, ref } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  setup () {
    const todoItems = ref([])
    function fetchList(){
      const result = [];
      for(let i =0; i<localStorage.length; i++){
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }
      todoItems.value = result
    }
    function addLists(todo){
      localStorage.setItem(todo, todo) // key, value
      todoItems.value.push(todo);
    }

    function removeTodoItem(item, index){
      
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item);
    }

    onMounted(() => {
      fetchList();
    })

    return {addLists, todoItems, fetchList, removeTodoItem}
  }
}
</script>

<style lang="scss" scoped>

</style>