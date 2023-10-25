<template>
  <button
    class="iconBtn"
    :class="classNames"
    :style="`background-color: ${backgroundColor}; color: ${color}`"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    classNames?: string | string[];
    backgroundColor?: string;
    color?: string;
  }>(),
  {
    classNames: "",
    backgroundColor: "#67C23A",
    color: "#ffffff",
  }
);
</script>

<style scoped lang="scss">
.iconBtn {
  font-size: 16px;
}
</style>
