<script lang="ts">
  import { fetchTodos } from "../hooks/fetchTodos";
  import { todos } from "../store";

  fetchTodos();
</script>

<!-- TODO: スタイル整える -->
<main>
  {#each $todos as todo}
    <div>
      {todo.id}
      {todo.title}
      {todo.userId}
      {todo.completed}
    </div>
  {:else}
    <div>Loding...</div>
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
</style>
