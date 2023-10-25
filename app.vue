<template>
  <div class="wrapper">
    <div class="todo">
      <h1 class="todo__title">Todo</h1>
      <Form class="todo__form" @add-item="store.addTodoItem($event)" />
      <div class="todo__listItems" v-if="!isLoading && todoList.length !== 0">
        <TodoItem
          v-for="todoItem in filteredList()"
          :key="todoItem.id"
          :item-data="todoItem"
          @check-done="store.updateItem($event)"
          @delete-item="store.deleteItem($event)"
        />
      </div>
      <p class="todo__notFound" v-else>Вы еще не создали ни одной заметки</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TTodoItem } from "./types/todoItem";

const store = useMainStore();

const { todoList, isLoading } = storeToRefs(store);

const filteredList = (): TTodoItem[] => {
  return todoList.value.sort((a) => (a.isDone ? 1 : -1));
};

onMounted(() => {
  store.fetchTodo();
});
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo {
  width: 310px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 24px;

  &__listItems {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 8px;
  }
}
</style>
