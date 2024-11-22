<template>
  <TodoHeader/>
  <TodoInput @addList="addLists"/>
  <TodoList :todoList="todoItems" @remove="removeTodoItem"/>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import useTodo from './composable/useTodo';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  setup () {
    const {todoItems, addLists, removeTodoItem} = useTodo();

    return{todoItems, addLists, removeTodoItem}
  }
}
</script>

<style lang="scss" scoped>

</style>