<template>
  <div class="todoItem" :class="itemData.isDone ? 'todoItem--done' : ''">
    <div class="todoItem__text">
      <span>{{ itemData.text }}</span>
      <div class="icon" v-if="itemData.isDone">
        <nuxt-icon name="checkmark" class="check" />
      </div>
    </div>
    <MyButton
      class="todoItem__btnCheck"
      @click="emits('checkDone', itemData.id)"
      v-if="!itemData.isDone"
    >
      <nuxt-icon name="checkmark" class="check" />
    </MyButton>
    <MyButton
      class="todoItem__btnDelete"
      background-color="#F56C6C"
      v-if="!itemData.isDone"
      @click="emits('deleteItem', itemData.id)"
    >
      <nuxt-icon name="basketDel" class="basketBel" />
    </MyButton>
  </div>
</template>

<script setup lang="ts">
import { type TTodoItem } from "~/types/todoItem";

const props = defineProps<{
  itemData: TTodoItem;
}>();
const emits = defineEmits<{
  (e: "checkDone", value: string): void;
  (e: "deleteItem", value: string): void;
}>();
</script>

<style scoped lang="scss">
.todoItem {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &.todoItem--done {
    .todoItem__text {
      margin-right: 0;
      color: #3eba00;
      border: 1px solid #3eba00;

      .icon {
        color: #3eba00;
        font-size: 24px;
      }
    }
  }

  &__text {
    width: 200px;
    height: 64px;
    padding: 20px;
    border: 1px solid #e4e7ed;
    margin-right: 38px;
    flex-grow: 1;
    border-radius: 4px;
    color: #303133;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    cursor: default;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s all ease-in-out;
    z-index: 2;
    background-color: #ffffff;

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.5s all ease-in-out;
    }
  }

  &__btnCheck {
    min-width: 32px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: #67c23a;
    margin-right: 8px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
  }
  &__btnDelete {
    min-width: 32px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: #f56c6c;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
  }
}
</style>
