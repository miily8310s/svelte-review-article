<script lang="ts">
  import WithoutAction from "./components/WithoutAction.svelte";
  import WithAction from "./components/WithAction.svelte";
</script>

<main>
  <h1>Svelte Actionsの使用例</h1>
  <WithoutAction />
  <WithAction />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
