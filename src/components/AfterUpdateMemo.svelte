<script lang="ts">
  import { afterUpdate } from "svelte";
  let count = 0;
  let value;
  afterUpdate(() => {
    count++;
  });
</script>

<h2>afterUpdateの例</h2>
<input type="text" bind:value />
<div>テキストを更新した回数: {count - 1}</div>

<style>
  div {
    padding: 1rem 2rem;
  }
  input {
    margin: 0 1rem;
  }
</style>
