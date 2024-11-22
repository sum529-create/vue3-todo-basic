<template>
    <ul>
        <li v-for="(list, i) in todoList" :key="i">
            <span>{{ list }}</span>
            <button @click="removeTodo(list, i)">삭제</button>
        </li>
    </ul>
</template>

<script>


    export default {
        props:['todoList'],
        // reactivity 속성으로 props는 distructing 문법사용 x, context는 가능함
        setup(_, {emit}){
            // methods
            function removeTodo(item, index){
                emit('remove', item, index)
            }

            
            return {removeTodo}
        },
    }
</script>

<style lang="scss" scoped>

</style>