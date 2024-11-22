import { onMounted, ref } from "vue";

function useTodo(){
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

export default useTodo;