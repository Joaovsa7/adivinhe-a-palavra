<script>
  import { getWord } from '../../config/getWord'
  import Keyboard from 'svelte-keyboard'
  import Row from "./Row.svelte"

  let gameOver = false
  let currentTry = 0

  let rows = [
    [],
    [],
    [],
    [],
    [],
    []
  ]

  const CURRENT_WORD = getWord()
  const MAX_ROWS = new Array(6).fill(null)
  const MAX_ATTEMPS = 6

  const handleGameOver = () => {
    rows = []
    currentTry = 0
    gameOver = true
  }

  const onKeydown = (event) => {
    if (event.detail === 'Backspace') {
        if (!rows[currentTry].length) {
          return null
        }

        rows[currentTry] = rows[currentTry].slice(0, rows[currentTry].length - 1)
        return null
    }

    if (event.detail === 'Enter') {
      // TODO: Validar a entrada de apenas letras, não pode digitar caraceters especiais.
      // TODO: Precisamos validar se o usuário venceu antes de finalizar o jogo
      if ((currentTry + 1) === MAX_ATTEMPS) {
        return handleGameOver()
      }
      
      if (rows[currentTry].length >= 5) {
        currentTry = currentTry + 1
        const lastRow = rows[currentTry - 1]
        return lastRow.join('') === CURRENT_WORD ? handleGameOver() : null
      }

      return null
    }

    rows[currentTry].push(event.detail)
    rows = rows
  }

</script>

<div>
  {#if gameOver === true}
  
    <h1>O jogo acabou</h1>

  {:else}
  {#each MAX_ROWS as row, index}
    <Row
      inactive={currentTry < index}
      word={currentTry > index ? CURRENT_WORD : null}
      attempt={rows[index]}
    />
  {/each}
  {/if}
  <Keyboard on:keydown={onKeydown}
    --height="5rem"
    --background="#efefef"
    --color="currentColor"
    --border="none"
    --border-radius="8px"
    --box-shadow="none"
    --flex="1"
    --font-family="inherit"
    --font-size="inherit"
    --font-weight="normal"
    --margin="0.8rem"
    --min-width="2rem"
    --opacity="1"
    --active-background="#cdcdcd"
  />
</div>

<style>
  h1 {
    color: red;
  }
</style>
