<template>
  <div class="form">
    <input
      class="form__field"
      type="text"
      placeholder="Add new task"
      v-model="text"
    />
    <button class="form__btn" @click="addItemInList">Add</button>
  </div>
</template>

<script setup lang="ts">
import type { TTodoItem } from "~/types/todoItem";

const text = ref<string>("");

const emits = defineEmits<{
  (e: "addItem", value: TTodoItem): void;
}>();

const addItemInList = () => {
  const item: TTodoItem = {
    id: `item${new Date().getTime()}`,
    text: text.value,
    isDone: false,
  };

  emits("addItem", item);

  text.value = "";
};
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;

  &__field {
    height: 32px;
    padding: 5px 12px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01px;
    flex-grow: 1;

    &::placeholder {
      color: #a8abb2;
    }
  }

  &__btn {
    padding: 5px 16px;
    border-radius: 4px;
    background-color: #409eff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.01px;
    text-align: center;
  }
}
</style>
