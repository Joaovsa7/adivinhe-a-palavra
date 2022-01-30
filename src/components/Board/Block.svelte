<script>
  export let letter = '';
</script>

<div class='block'>
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
</style>