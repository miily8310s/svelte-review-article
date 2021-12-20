import { onMount } from "svelte";
import { todos } from "../store";

export const fetchTodos = () => {
  onMount(async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    todos.set(await res.json());
  });
};
