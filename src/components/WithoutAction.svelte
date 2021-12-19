<script lang="ts">
  import { tick } from "svelte";

  let inputNode: HTMLInputElement;
  let name = "Hello World!!";
  let isEditing = false;

  const handleClick = () => {
    isEditing = !isEditing;
    if (isEditing) {
      tick().then(() => inputNode.focus());
    }
  };
</script>

<h2>Actionsを使わない例</h2>
{#if isEditing}
  <span>
    Name <input type="text" bind:this={inputNode} bind:value={name} />
  </span>
{/if}
<button on:click={handleClick}>{isEditing ? "編集を終える" : "編集する"}</button
>

<style>
  span {
    margin-right: 1rem;
  }
</style>
