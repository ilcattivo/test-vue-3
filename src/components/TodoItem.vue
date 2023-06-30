<script setup lang="ts">
import { Todo } from '../types';
import MyButton from './base/MyButton.vue';

type TodoItemProps = {
  todo: Todo;
}

defineProps<TodoItemProps>();

defineEmits(['on-delete']);
</script>

<template>
  <div class="todo-item">
    <p class="todo-item__title">{{ todo.title }}</p>

    <div class="todo-container">
      <MyButton variant="danger" @click="$emit('on-delete')">Remove</MyButton>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f3fff6;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.todo-item__title {
  margin: 0;
}
</style>../types