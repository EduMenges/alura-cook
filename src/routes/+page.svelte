<script lang="ts">	
	import {minhaLista} from "$lib/stores/minhaLista"
	import Titulo from '$components/compartilhados/Titulo.svelte';

	import categorias from '$lib/json/categorias.json';
	import Categoria from '$components/paginas/index/Categoria.svelte';
	import Tag from '$components/compartilhados/Tag.svelte';
	import { beforeNavigate } from '$app/navigation';
	import TagLink from '$components/compartilhados/TagLink.svelte';
	
	beforeNavigate((navigation) => {
		if ($minhaLista.length === 0) {
			navigation.cancel();
		}
	})
</script>

<svelte:head>
	<title>Alura Cook</title>
</svelte:head>

<main>
	<Titulo tag="h1">Ingredientes</Titulo>

	<div class="info">
		<p>Selecione abaixo os ingredientes que você deseja usar nesta refeição:</p>
		<p>*Atenção: consideramos que você tenha em casa sal, pimenta e água.</p>
	</div>

	<ul class="categorias">
		{#each categorias as categoria (categoria.nome)}
			<li>
				<Categoria
					{categoria}
				/>
			</li>
		{/each}
	</ul>

	<div class="buscar-receitas">
		<TagLink href="/receitas" desabilitada={$minhaLista.length == 0}>Buscar receitas</TagLink>
	</div>
</main>

<style>
	.info {
		margin-bottom: 3.375rem;
	}

	.info > p {
		line-height: 2rem;
	}

	.categorias {
		margin-bottom: 4.6875rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.buscar-receitas {
		display: flex;
		justify-content: center;
	}
</style>
