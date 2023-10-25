import type { TTodoItem } from "~/types/todoItem";
import { watch } from "vue";

export const useMainStore = defineStore("mainStore", () => {
  const todoList = ref<TTodoItem[]>([]);
  const isLoading = ref<boolean>(true);

  const fetchTodo = (): void => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          JSON.parse(localStorage.getItem("todoItems") as string) as TTodoItem[]
        );
      }, 1000);
    });
    promise
      .then(
        (result) => {
          console.log(result);
          todoList.value = result ? (result as TTodoItem[]) : [];
        },
        (error) => {
          // вторая функция - запустится при вызове reject
          console.log("Ошибка: " + error); // error - аргумент reject
        }
      )
      .finally(() => {
        isLoading.value = false;
      });
  };

  const addTodoItem = (todoItem: TTodoItem) => {
    todoList.value.push(todoItem);
    localStorage.setItem("todoItems", JSON.stringify(todoList.value));
    filteredList();
  };

  const updateItem = (itemId: string) => {
    todoList.value.map((item) => {
      if (item.id === itemId) {
        item.isDone = true;
      }
    });
    filteredList();
    localStorage.setItem("todoItems", JSON.stringify(todoList.value));
  };

  const deleteItem = (itemId: string) => {
    const index: number = todoList.value.findIndex((el) => el.id === itemId);
    if (index > -1) {
      todoList.value.splice(index, 1);
      localStorage.setItem("todoItems", JSON.stringify(todoList.value));
    }
  };

  const filteredList = (): TTodoItem[] => {
    console.log(todoList.value);
    return todoList.value.sort((a, b) => {
      if (a.isDone && !b.isDone) return 1;
      return -1;
    });
  };

  return {
    todoList,
    isLoading,
    fetchTodo,
    addTodoItem,
    updateItem,
    deleteItem,
  };
});
