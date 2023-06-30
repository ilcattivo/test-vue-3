<script setup lang="ts">
defineEmits(['close']);
</script>

<template>
  <div class="my-popup">
    <div class="my-popup__overlay">
      <div class="my-popup__content">
        <div class="my-popup__header">
          <div class="my-popup__close-icon" @click="$emit('close')">
            x
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.my-popup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.my-popup__header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
}

.my-popup__close-icon {
  cursor: pointer;
  font-size: 40px;
  transform: scaleY(0.7);
  line-height: 1;
}

.my-popup__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  padding: 24px;
}
</style>