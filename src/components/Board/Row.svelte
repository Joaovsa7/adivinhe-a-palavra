<script>
  import Block from "./Block.svelte"
  export let attempt = []
  export let inactive = false
  export let word = null

  const splittedWord = word?.split('') ?? []
  const MAX_BLOCKS = new Array(5).fill(null)
</script>

<div class="row" class:inactive={inactive}>
  {#each MAX_BLOCKS as block, index}
    {#if word !== null && word?.[index] === attempt[index]}
      <Block
        letter={attempt[index] || ''}
        right
      />
      {:else if word !== null && word?.indexOf(attempt[index]) !== -1}
        <Block
          letter={attempt[index] || ''}
          hasLetter
        />
      {:else}
      <Block letter={attempt[index] || ''} wrongLetter={word !== null && word.indexOf(attempt[index]) === -1}  />
    {/if}
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