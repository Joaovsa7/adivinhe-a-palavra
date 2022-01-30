<script>
  import Keyboard from "svelte-keyboard";

  const onKeydown = (event) => {
    console.log(event.detail);
  }
</script>

<div class="keyboard">
  <Keyboard on:keydown="{onKeydown}" 
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
</style>