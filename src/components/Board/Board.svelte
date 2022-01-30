<script>
  import Keyboard from "../Keyboard/Keyboard.svelte";

  let currentTry = 0
  let attempt = ['a']
  const CURRENT_WORD = 'ameno'
  const MAX_ROWS = new Array(6).fill(null)

  import Row from "./Row.svelte"

  /* Lógica do teclado */
  const onKeydown = (event) => {
    attempt = [event.detail]
  }

</script>

<div>
  {#each MAX_ROWS as rows, index}
    <Row inactive={index !== currentTry} word={CURRENT_WORD} attempt={attempt} />
  {/each}
  <Keyboard on:keydown={onKeydown} />
</div>

<style>
  h1 {
    color: red;
  }
</style>
