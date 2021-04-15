<script>
	import { goto } from '$app/navigation';
	import Tarefas from '$lib/Tarefas.svelte';
	import Financas from '$lib/Financas.svelte';
	import AsideBar from '$lib/AsideBar.svelte';
	import Servicos from '$lib/Servicos.svelte';

	import {
		NavigationDrawer,
		Row,
		Col,
		Container,
		List,
		ListItem,
		Button,
		Icon,
		MaterialApp
	} from 'svelte-materialify';
	import { mdiViewDashboard, mdiAccountBox, mdiGavel } from '@mdi/js';

	const options = [
		{ name: 'Root', component: '.' },
		{ name: 'Tarefas', component: Tarefas },
		{ name: 'Serviços', component: Servicos },
		{ name: 'Financas', component: Financas }
	];
	let page = [];

	function openPage(index) {
		page = index > 0 ? options[index] : [];
	}
</script>

<section id="main">
	<header class="mainHeader"><h4>Painel de Controle</h4></header>
	<!-- <nav class="mainNav">Nav</nav> -->
	<article class="mainArticle"><svelte:component this={page.component} /></article>
	<aside class="mainAside">
		<ul>
			<li
				on:click={() => {
					openPage(1);
				}}
			>
				Tarefas
			</li>
		</ul>
		<ul>
			<li
				on:click={() => {
					openPage(2);
				}}
			>
				Serviços
			</li>
		</ul>
		<ul>
			<li
				on:click={() => {
					openPage(3);
				}}
			>
				Finanças
			</li>
		</ul>
		<ul>
			<li id="logout"
				
				on:click={() => {
					goto('/');
				}}>Sair</li
			>
		</ul>
	</aside>
	<footer class="mainFooter">Footer</footer>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	li {
		padding-top: 5px;
		padding-bottom: 5px;
		padding-left: 15px;

	}
	li:hover {
		cursor: pointer;
		background-color: indigo;
	}
	button {
		padding-top: 30px;
		display: block;
	}
	/**utilizando css grid layout*/
	#main {
		display: grid;
		grid-template-areas: 'header header' 'aside content' 'footer footer';
		grid-template-rows: 15vh 80vh 5vh;
		grid-template-columns: 15%;
	}
	#logout{
		margin-top: 30px;
		padding-top:5px;
		padding-bottom: 5px;
		background-color: tomato;
	}
	.mainHeader {
		grid-area: header;
		background: rgb(29, 29, 53);
		color: white;
		padding-top: 5px;
	}
	.mainNav {
		grid-area: nav;
		background: rgb(5, 5, 22);
		color: white;
	}
	.mainAside {
		padding-top:20px;
		grid-area: aside;
		background: rgb(22, 22, 26);
		color: white;
		padding-left: 10px;
	}
	.mainArticle {
		grid-area: content;
		margin-top:5px;
	}
	.mainFooter {
		grid-area: footer;
		background: rgb(2, 2, 10);
		color: white;
	}

	/**breakpoints*/
	@media screen and (max-width: 768px) {
		body {
			background: #cdcdcd;
		}
		#main {
			grid-template-areas: 'header' 'content' 'aside' 'footer';
		}
		.mainNav {
			grid-area: header;
			margin-top: 30px;
		}
	}
</style>
