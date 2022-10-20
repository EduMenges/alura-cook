<script lang="ts">
	import Tag from './Tag.svelte';
	import { minhaLista } from '$lib/stores/minhaLista';

	export let ingrediente: string;

	let selecionado = false;

	function aoClicar() {
		selecionado = !selecionado;

		if (selecionado) {
			adicionarIngrediente();
		} else {
			removerIngrediente();
		}
	}

	function adicionarIngrediente() {
		$minhaLista = [...$minhaLista, ingrediente];
	}

	function removerIngrediente() {
		$minhaLista = $minhaLista.filter((item) => item !== ingrediente);
	}
</script>

<button on:click={aoClicar}>
	<Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
	button {
		cursor: pointer;
	}
</style>
