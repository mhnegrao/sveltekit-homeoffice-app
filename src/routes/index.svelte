<script>
	import { goto } from '$app/navigation';
	import Counter from '$lib/Counter.svelte';
	import Page1 from '../lib/Page1.svelte';
	import Page2 from '../lib/Page2.svelte';
	import Profile from './profile/index1.svelte';
	// import { deepPurple } from 'svelte-materialify/src/utils/colors';
	// import colors from 'svelte-materialify/src/utils/colors';
	// let red = colors.red.base;
	// let lightRed = colors.red['lighten-1'];

	
	// let purple = deepPurple.base;

	const options = [
		{ name: 'Page 1', component: Page1 },
		{ name: 'Page 2', component: Page2 },
		{ name: 'Contador', component: Counter },
		{ name: 'Profile', component: Profile }
	];

	let page = [];
	function openPage(index) {
		page = index > 0 ? options[index] : [];
	}
</script>

<main>
	<h1>controle home office!</h1>

	<button
		on:click={() => {
			openPage(1);
		}}>Open Page</button
	>
	<button
		on:click={() => {
			openPage(2);
		}}>Contador</button
	>
	<button
		on:click={() => {
			goto('./profile/');
		}}>Painel de Controle</button
	>
	<button
		on:click={() => {
			openPage(-1);
		}}>Limpar</button
	>

	<svelte:component this={page.component} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #041149;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
