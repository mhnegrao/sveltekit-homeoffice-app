<script>
	import { onMount } from 'svelte';
	import { Container, Button, Col, Row, Input ,Label} from 'sveltestrap';
	// import {
	// 	MaterialApp,
	// 	Container,
	// 	Row,
	// 	Col,
	// 	Alert,
	// 	TextField,
	// 	Checkbox,
	// 	Button,
	// 	Icon
	// } from 'svelte-materialify';
	import { obterElemento } from '$lib/utils/utilities';
	import { mdiHome, mdiAlert, mdiPen, mdiCloud, mdiPlus } from '@mdi/js';
	let descricao = '';
	let agendada = undefined;
	let dataAgendada = '';
	let tarefas = [];
	let descrField = undefined;

	const isTruthy = (value) => Boolean(value);

	const falsyValues = [false, 0, '', null, undefined, NaN];
	const truthyValues = [true, '0', () => {}, {}, [], -1, 'false'];
	onMount(() => {
		descrField = obterElemento('#descricao');
	});
	function adicionarTarefa() {
		tarefas = [
			...tarefas,
			{
				descricao: descricao,
				agendada: agendada,
				data: new Date(),
				dataAgendada: new Date(dataAgendada),
				finalizada: false
			}
		];
		console.log(new Date(dataAgendada));
		descricao = '';
		agendada = undefined;
		dataAgendada = '';
		console.log(tarefas);
		descrField.focus();
	}
	function removeFromList(index) {
		tarefas.splice(index, 1);
		tarefas = tarefas;
	}
</script>

<Container>
	<Row>
		<div >
			<Label for="exampleEmail">Plain Text (Static)</Label>
			<Input plaintext value="Some plain text/ static value" />
		</div>
	</Row>
</Container>

<!-- <Alert class="indigo white-text" border="left"><h5>Tarefas</h5></Alert>
<div class="container">
<div class="form-floating mb-10">
	<input
		type="text"
		class="form-control"
		id="floatingInput"
		placeholder="Descreva a sua tarefa..."
	/>
	<label for="floatingInput">Descreva a sua tarefa</label>
</div>
</div>
<MaterialApp>
	<Container style="margin-top:5px">
		<Row>
			<Col>
				
			</Col>
		</Row>

		<Row>
			<Col>
				
			</Col>
			<Col><input type="checkbox" bind:checked={agendada} />Agendar?</Col>
			{#if isTruthy(agendada)}
				<TextField type="date" filled bind:value={dataAgendada}>Data</TextField>
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
			{#if tarefas.length >= 1}
				<table class="table table-hover table-striped">
					<thead>
						<tr>
							<td>Tarefa</td>
							<td>Agendada</td>
							<td>Agendada para</td>
							<td>Finalizada</td>
							<td>X</td>
						</tr>
					</thead>
					<tbody>
						{#each tarefas as tarefa, index}
							<tr>
								<td>{tarefa.descricao}</td>
								<td><input bind:checked={tarefa.agendada} type="checkbox" /></td>
								<td>{new Date(tarefa.dataAgendada).toLocaleDateString()}</td>
								<td><input bind:checked={tarefa.finalizada} type="checkbox" /></td>
								<td class="remove"
									><span on:click={() => removeFromList(index)}
										><button type="button" class="btn-close" aria-label="Close" /></span
									></td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</Row>
	</Container>
</MaterialApp> -->
<style>
	.checked {
		text-decoration: line-through;
	}
	thead tr {
		background-color: rgb(39, 38, 38);
		color: white;
	}
	.remove {
		background-color: rgb(226, 6, 6);
		color: white;
		font-weight: bold;
	}
	.remove:hover {
		cursor: pointer;
	}
</style>
