<!-- eslint-disable no-unused-vars -->
<template>
    <div>
        <input type="text" v-model="todoInput">
        <button @click="addTodo">추가</button>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        setup(_, context){
            const todoInput = ref('')
            function addTodo(){
                if(todoInput.value === ''){
                    return alert('할일을 추가해주세요');
                }
                let todo = todoInput.value;
                context.emit('addList', todo);
                clearTodo();
            }
            function clearTodo(){
                todoInput.value = ''
            }
            return {todoInput, addTodo}
        }
    }
</script>

<style lang="scss" scoped>

</style>