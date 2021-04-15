<script>
	// import any components you want
	import { Button } from 'svelte-mui/src';
	import {Checkbox} from 'svelte-mui/src';
	let checked = true;
</script>

<h1>Hello Control Panel!</h1>
<Checkbox bind:checked>Checkbox</Checkbox>

<p>Checkbox is {checked ? 'checked' : 'unchecked'}</p>

<Button
	outlined
	shaped
	color="Red"
	on:click={() => {
		checked = !checked;
	}}
>
	Inverse
</Button>
