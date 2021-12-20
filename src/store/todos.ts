import { writable } from "svelte/store";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todos = writable<Todo[]>([]);
