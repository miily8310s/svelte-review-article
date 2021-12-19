<script lang="ts">
  import { focusMount } from "../hooks/focusMount";
  let name = "Hello World!!";
  let isEditing = false;

  const handleClick = () => {
    isEditing = !isEditing;
  };
</script>

<h2>Actionsを使う例</h2>
{#if isEditing}
  <span>
    Name <input type="text" use:focusMount bind:value={name} />
  </span>
{/if}
<button on:click={handleClick}>{isEditing ? "編集を終える" : "編集する"}</button
>

<style>
  span {
    margin-right: 1rem;
  }
</style>
