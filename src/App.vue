<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "./types";
import MyButton from "./components/base/MyButton.vue";
import MyInput from "./components/base/MyInput.vue";
import TodoItem from "./components/TodoItem.vue";
import RemoveTodoPopup from "./components/RemoveTodoPopup.vue";
console.log("here");
const todos = ref<Todo[]>([
  { id: 1, title: "Todo 1", userId: 1, completed: false },
  { id: 2, title: "Todo 2", userId: 1, completed: true },
  { id: 3, title: "Todo 3", userId: 1, completed: false },
  { id: 4, title: "Todo 4", userId: 1, completed: false },
]);

const removingTodo = ref<Todo | null>(null);

const removeTodo = () => {
  if (!removingTodo.value) return;

  todos.value = todos.value.filter(
    (todo) => todo.id !== removingTodo.value!.id
  );
  removingTodo.value = null;
};
</script>

<template>
  <div class="app">
    <div class="container">
      <h1 class="title">Awesome Todo App</h1>

      <div class="header">
        <MyInput type="text" placeholder="What needs to be done?" />
        <MyButton>Add</MyButton>
      </div>

      <ul class="todo-list">
        <li v-for="todo of todos" :key="todo.id">
          <TodoItem :todo="todo" @on-delete="() => (removingTodo = todo)" />
        </li>
      </ul>
    </div>
  </div>
  <RemoveTodoPopup
    v-if="removingTodo"
    :todo="removingTodo"
    @cancel="removingTodo = null"
    @confirm="removeTodo"
  />
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}

.container {
  width: 400px;
}

.title {
  text-align: center;
  text-transform: uppercase;
  padding: 24px;
  font-size: 24px;
  border-bottom: 1px solid #ccc;
}

.header {
  display: flex;
  column-gap: 12px;
  justify-content: center;
  margin-top: 16px;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 16px;
}

.todo-list > li {
  margin-bottom: 12px;
}
</style>
./types
