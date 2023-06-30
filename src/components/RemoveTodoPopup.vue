<script setup lang="ts">
import MyPopup from './base/MyPopup.vue';
import { Todo } from '../types';
import MyButton from './base/MyButton.vue';

type RemoveTodoPopupProps = {
  todo: Todo;
}

defineProps<RemoveTodoPopupProps>();

defineEmits(['confirm', 'cancel']);
</script>

<template>
  <MyPopup class="remove-todo-popup" @close="$emit('cancel')">
    <div class="remove-todo-popup__container">
      <h1 class="remove-todo-popup__title">Are you sure you want to delete this todo?</h1>
      <p>{{ todo.title }}</p>
      <div class="remove-todo-popup__buttons">
        <MyButton class="btn btn-light popup-btn-left" @click="$emit('cancel')">
          Cancel
        </MyButton>
        <MyButton variant="danger" @click="$emit('confirm')">Delete</MyButton>
      </div>
    </div>
  </MyPopup>
</template>

<style scoped>
.remove-todo-popup__container {
  max-width: 500px;
}

.remove-todo-popup__title {
  margin: 0;
  margin-bottom: 16px;
  font-size: 24px;
}

.remove-todo-popup__buttons {
  display: flex;
  justify-content: flex-end;
  column-gap: 12px;
}
</style>../types