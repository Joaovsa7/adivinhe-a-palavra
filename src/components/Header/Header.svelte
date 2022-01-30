<script>
	// export let name;
</script>

<header class="main-header">
  <h1 class="logo">Adivinhe a Palavra</h1>
  <button type="button" class="button-help">
    <svg style="enable-background:new 0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/><path d="M259.6 146c-43.2 0-67.3 20.3-67.6 62.2h18.8c-.6-30.4 15.5-46.5 47.9-46.5 23.2 0 42.6 16.2 42.6 39.8 0 15.3-8.3 27.7-19.4 38.1-22.6 20.8-29 36-30.1 64.5h19c1.1-25.8.5-30.7 23.3-53.3 15.2-14.2 25.9-28.3 25.9-50.2 0-34.2-27.4-54.6-60.4-54.6zM260.3 332.3c-9.4 0-17 7.5-17 16.8s7.6 16.9 17 16.9 17-7.5 17-16.9c0-9.3-7.6-16.8-17-16.8z"/></svg>
  </button>
</header>

<style>
	.main-header {
    width: 100%;
    padding: 2.4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }

  .logo {
    font-family: 'Mochiy Pop P One', sans-serif;
    text-transform: uppercase;
    color: white;
    font-size: 4rem;
  }

  .button-help {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 6.4rem;
    margin: 0;
    color: white;
    cursor: pointer;
  }

  .button-help svg {
    color: inherit;
  }
</style>