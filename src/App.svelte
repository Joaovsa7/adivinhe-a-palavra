<script>
  import { MetaTags } from 'svelte-meta-tags'

	import './styles/reset.css'

	import Board from './components/Board/Board.svelte'
	import Header from './components/Header/Header.svelte'
</script>

<MetaTags
	title="Adivinhe a Palavra"
	description="Jogue agora o jogo de adivinhar a palavra"
	keyword='jogo, term.ooo, wordle, palavras, adivinhar, jogo de adivinhar as palavras'
/>

<main>
	<div class="container">
		<Header />
		<Board />
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