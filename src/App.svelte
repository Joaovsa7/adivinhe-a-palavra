<script>
	import './styles/reset.css'

	import Board from './components/Board/Board.svelte'
	import Header from './components/Header/Header.svelte'
	import Keyboard from './components/Keyboard/Keyboard.svelte'
</script>

<main>
	<div class="container">
		<Header />
		<Board name='oi' />
	</div>
</main>

<style>
	.container {
		max-width: calc(800px + (24px * 2));
		margin-left: auto;
		margin-right: auto;
		padding-left: 24px;
		padding-right: 24px;
	}
</style>