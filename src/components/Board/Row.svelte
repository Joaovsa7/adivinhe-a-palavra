<script>
  export let attempt = []
  export let inactive = false
  export let word = ''
  const splittedWord = word.split('')
  const MAX_BLOCKS = new Array(5).fill(null)

  import Block from "./Block.svelte"
  console.log(attempt)
</script>

<div class="row" class:inactive={inactive}>
  {#each MAX_BLOCKS as block, index}
    <Block
      letter={attempt[index]}
    />
  {/each}
</div>

<style>
  .row {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .row.inactive {
    opacity: .3;
  }
</style>