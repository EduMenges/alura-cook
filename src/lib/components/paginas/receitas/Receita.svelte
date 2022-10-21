<script lang="ts">
	import Card from '../../compartilhados/Card.svelte';
</script>

<img src="\imagens\receitas\alho_assado.png" alt="alho assado" class="receita-img" />

<Card>
	<article class="receita-info">
		<h3 class="receita-nome">Alho assado</h3>
	</article>
</Card>

<style>
	.receita-img {
		width: 100%;
		height: 150px;
	}

	.receita-nome {
		font-size: 1.125rem;
	}

	.receita-info {
		padding: 0.75rem 0.875rem;
	}
</style>
