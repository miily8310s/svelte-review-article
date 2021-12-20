<script lang="ts">
  import { fetchTodos } from "../hooks/fetchTodos";
  import { todos } from "../store";

  fetchTodos();
</script>

<!-- TODO: スタイル整える -->
<ul>
  {#each $todos as todo}
    <li>
      {todo.id}
      {todo.title}
      {todo.userId}
      {todo.completed}
    </li>
  {:else}
    <div>Loding...</div>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    /* text-align: center; */
  }
  li {
    list-style: none;
    flex-wrap: wrap;
  }
</style>
