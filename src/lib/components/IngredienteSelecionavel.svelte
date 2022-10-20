<script lang="ts">
	import type IIngrediente from "$lib/types/IIgrediente";
	import { createEventDispatcher } from "svelte";
    import Tag from "./Tag.svelte";
    export let ingrediente: string;

    let selecionado = false;
    const dispatch = createEventDispatcher<IIngrediente>();

	function aoClicar() {
		selecionado = !selecionado;

        if (selecionado) {
            dispatch("adicionarIngrediente", ingrediente);
        }
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