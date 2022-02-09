<script>
  import { getWord } from '../../config/getWord'
  import Keyboard from 'svelte-keyboard'
  import Row from "./Row.svelte"
  
  let isWinner = false
  let gameOver = false
  let attempt = 0

  const generateRows = () => {
    return Array(MAX_ATTEMPS).fill([]).map((arr) => arr.concat([]))
  }
  
  let rows = generateRows()

  let word = getWord()
  const MAX_ROWS = new Array(6).fill(null)
  const MAX_ATTEMPS = 6


  const playAgain = () => {
    attempt = 0
    isWinner = false
    gameOver = false
    word = getWord()
    rows = generateRows()
  }

  const handleGameOver = () => {
    rows = []
    attempt = 0
    gameOver = true
  }

  const onKeydown = (event) => {
    if (event.detail === 'Backspace') {
        if (!rows[attempt].length) {
          return null
        }

        rows[attempt] = rows[attempt].slice(0, rows[attempt].length - 1)
        return null
    }

    if (event.detail === 'Enter') {
      // TODO: Validar a entrada de apenas letras, não pode digitar caraceters especiais.
      if ((attempt + 1) === MAX_ATTEMPS) {0
        return handleGameOver()
      }
      
      if (rows[attempt].length >= 5) {
        attempt = attempt + 1
        const lastRow = rows[attempt - 1]
        return lastRow.join('') === word ? (isWinner = true) : null
      }

      return null
    }

    rows[attempt].push(event.detail)
    rows = rows
  }

</script>

<div>
  {#if gameOver === true}
    <h1>O jogo acabou, você perdeu :/</h1>
    <button on:click={() => playAgain()}>Jogar novamente</button>
  {:else if isWinner === true}
    <h1>Parabéns! você ganhou, a palavra era: {word}</h1>
    <button on:click={() => playAgain()}>Jogar novamente</button>
  {:else}
  {#each MAX_ROWS as row, index}
    <Row
      inactive={attempt < index}
      word={attempt > index ? word : null}
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
