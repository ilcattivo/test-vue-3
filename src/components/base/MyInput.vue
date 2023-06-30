<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  modelValue: String,
});

const modelValue = ref(props.modelValue);
</script>

<template>
  <input class="my-input" v-bind="$attrs" v-model="modelValue" />
</template>

<style scoped>
.my-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
}
</style>
