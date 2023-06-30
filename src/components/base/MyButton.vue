<script setup lang="ts">
import { computed } from 'vue';

interface MyButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  class?: string;
}

const props = withDefaults(defineProps<MyButtonProps>(), {
  variant: 'primary',
  class: '',
});

const variantClasses = {
  primary: 'my-button--primary',
  secondary: 'my-button--secondary',
  danger: 'my-button--danger',
};

const classes = computed(() => [
  'my-button',
  variantClasses[props.variant],
  props.class,
]);
</script>

<template>
  <button class="my-button" v-bind="$attrs" v-bind:class="classes">
    <slot />
  </button>
</template>

<style scoped>
.my-button {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.my-button--primary {
  background-color: #007bff;
  color: #fff;
}

.my-button--secondary {
  background-color: #6c757d;
  color: #fff;
}

.my-button--danger {
  background-color: #dc3545;
  color: #fff;
}
</style>