<script>
	import { goto } from '$app/navigation';
	import Tarefas from '$lib/Tarefas.svelte';
	import Financas from '$lib/Financas.svelte';
	import Servicos from '$lib/Servicos.svelte'

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

<svelte:head>
	<title>Painel de Controle</title>
</svelte:head>
<MaterialApp>
	<Container fluid="true">
		<Row>
			<header>
				<h4>Painel de Controle</h4>
			</header>
		</Row>
		<Row>
			<Col>
				<div >
					<NavigationDrawer style="height:410px" class="orange darken-4
					theme--dark">
						<List>
							<ListItem
								on:click={() => {
									openPage(1);
								}}
							>
								<span slot="prepend">
									<Icon path={mdiViewDashboard} />
								</span>
								Tarefas
							</ListItem>
							<ListItem on:click={() => {
								openPage(3);
							}}>
								<span slot="prepend">
									<Icon path={mdiAccountBox} />
								</span>
								Finanças
							</ListItem>
							<ListItem on:click={() => {
								openPage(2);
							}}>
								<span slot="prepend">
									<Icon path={mdiGavel} />
								</span>
								Serviços
							</ListItem>
						</List>
						<span slot="append" class="pa-2">
							<Button class="red white-text"
								block="true"
								on:click={() => {
									goto('/');
								}}>Sair</Button
							>
						</span>
					</NavigationDrawer>
				</div>
			</Col>
			<Col class="d-flex justify-left">
				<section>
					<svelte:component this={page.component} />
				</section>
			</Col>
		</Row>
	</Container>
</MaterialApp>

<style>
	
</style>
