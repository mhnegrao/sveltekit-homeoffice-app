<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	
</svelte:head>
<h1>Dashboard</h1>
<button
	on:click={() => {
		goto('/');
	}}>Sair</button
>
