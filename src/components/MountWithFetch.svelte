<script lang="ts">
  import { fetchTodos } from "../hooks/fetchTodos";
  import { todos } from "../store";

  fetchTodos();
</script>

<h2>onMountの例</h2>
<ul>
  <div>
    {#each $todos as todo}
      <li>
        {todo.id}
        {todo.title}
        <input type="checkbox" checked={todo.completed} />
      </li>
    {:else}
      <div>Loading...</div>
    {/each}
  </div>
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
  li {
    text-align: left;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 2rem;
  }
  li:nth-child(2n + 1) {
    background-color: #6998ab;
  }
  li:nth-child(2n) {
    background-color: #406882;
  }
  input {
    margin: 0 1rem;
  }
</style>
