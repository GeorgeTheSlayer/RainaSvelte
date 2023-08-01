<script lang="ts">
  let filterList = [
    {
      name: "All",
      selected: true,
    },
    {
      name: "Producer",
      selected: false,
    },
    {
      name: "Songwriter",
      selected: false,
    },
    {
      name: "Engineer",
      selected: false,
    },
  ];
</script>

<div class="flex mx-auto text-xl gap-2 overflow-hidden">
  {#each filterList as value}
    <button class={value.selected ? "" : "opacity-25"}>{value.name}</button>
  {/each}
</div>
