<script lang="ts">
  import MountWithFetch from "./components/MountWithFetch.svelte";
  import AfterUpdateMemo from "./components/AfterUpdateMemo.svelte";
  import WithoutAction from "./components/WithoutAction.svelte";
  import WithAction from "./components/WithAction.svelte";
</script>

<main>
  <h1>Lifecycleメソッドの使用例</h1>
  <MountWithFetch />
  <AfterUpdateMemo />
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
