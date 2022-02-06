<script>
  export let letter = '';
  export let right = false
  export let wrongLetter = false
  export let hasLetter = false
</script>

<div
  class='block'
  class:green={right}
  class:yellow={hasLetter}
  class:gray={wrongLetter}
>
  <span>{letter}</span>
</div>

<style>
  div {
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    border-radius: 8px;
  }

  div > span {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }

  .green {
    background-color: green;
  }

  .yellow {
    background-color: yellow;
  }

  .gray {
    opacity: 0.7;
  }
</style>