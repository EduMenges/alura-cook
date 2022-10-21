<script lang="ts">
	import Receita from '$components/paginas/receitas/Receita.svelte';
	import Titulo from '$components/compartilhados/Titulo.svelte';
	import _receitas from '$lib/json/receitas.json';
	import type IReceita from '$lib/interfaces/IReceita';
	import { minhaLista } from '$lib/stores/minhaLista';

	let receitasFiltradas: IReceita[];
	$: receitasFiltradas = _receitas
		.filter((receita) =>
			receita.ingredientes.every((ingrediente) => $minhaLista.includes(ingrediente))
		)
		.sort();

	$: semReceitas = receitasFiltradas.length == 0;
</script>

<svelte:head>
	<title>Alura Cook | Receitas</title>
</svelte:head>

<main>
	<Titulo tag="h1">Receitas</Titulo>

	<div class="info">
		<p class="verde">Resultados encontrados: {receitasFiltradas.length}</p>
		{#if semReceitas}
			<p>Não encontramos receitas para os seus ingredientes :(</p>
		{:else}
			<p>Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
		{/if}
	</div>

	<ul class="receitas">
		{#each receitasFiltradas as receita (receita.nome)}
			<li><Receita {receita} /></li>
		{/each}
	</ul>
</main>

<style>
	.info {
		margin-bottom: 3.375rem;
	}

	.info > p {
		line-height: 2rem;
	}

	.info > p.verde {
		color: var(--verde);
	}

	.receitas {
		text-align: start;
		margin-bottom: 3.75rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}
</style>
