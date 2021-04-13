<script>
	import {
		MaterialApp,
		Container,
		Row,
		Col,
		Alert,
		TextField,
		Checkbox,
		Button,
		Icon
	} from 'svelte-materialify';
	import { mdiHome, mdiAlert, mdiPen, mdiCloud, mdiPlus } from '@mdi/js';
	let estaTarefa = '';
	let agendar = false;
	let dataAgendada = '';
	let tarefas = [
		{
			nome: '',
			data: '',
			agendada: false,
			dataAgenda: ''
		}
	];
	function adicionarTarefa() {
		tarefas = [
			...tarefas,
			{
				nome: estaTarefa,
				agendada: agendar,
				data: new Date(),
				dataAgenda: dataAgendada,
				finalizada: false
			}
		];
	}
	function removeFromList(index) {
		tarefas.splice(index, 1);
		tarefas = tarefas;
	}
</script>

<MaterialApp>
	<Container style="margin-top:5px">
		<Row>
			<Col>
				<Alert class="indigo white-text" border="left"><h5>Tarefas</h5></Alert>
			</Col>
		</Row>

		<Row>
			<Col>
				<TextField filled bind-value={estaTarefa}>Descreva a tarefa</TextField>
			</Col>
			<Col><Checkbox color="blue" bind-value={agendar}>Agendar</Checkbox></Col>
			{#if { agendar }}
				<TextField type="date" filled bind-value={dataAgendada}>Data</TextField>
			{/if}
			<Col>
				<Button on:click={adicionarTarefa} fab size="small" class="green white-text">
					<Icon path={mdiPlus} />
				</Button>
			</Col>
		</Row>
		<Row>
			<h6>Relação de Tarefas</h6>
		</Row>
		<Row>
			{#if tarefas.length > 1}
				<table>
					<thead>
						<td>Tarefa</td>
						<td>Finalizada</td>
						<td>Excluir</td>
					</thead>
					{#each tarefas as tarefa, index}
						<tr>
							<td>{tarefa.nome}</td>
							<td><input bind:checked={tarefa.finalizada} type="checkbox" /></td>
							<td><span on:click={() => removeFromList(index)} /></td>
						</tr>
					{/each}
				</table>
				<!-- <Row>
					<Col class="col col-sm-1">
						<input bind:checked={tarefa.finalizada} type="checkbox" />
						{tarefa.nome}
					</Col>
					<Col class="col col-sm-7">
						{tarefa.data}
					</Col>
					<Col class="col col-sm-1">
						{tarefa.agendada}
					</Col>
					<Col class="col col-sm-2">
						{tarefa.dataAgenda}
					</Col>
					<Col class="col col-sm-1"><Checkbox color="green">Finalizar</Checkbox></Col>
					<span on:click={() => removeFromList(index)}></span>
				</Row> -->
			{/if}
		</Row>
	</Container>
</MaterialApp>

<style>
	.checked {
		text-decoration: line-through;
	}
</style>
