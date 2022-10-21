<script lang="ts">
    import Tag from "./Tag.svelte";
    import { minhaLista } from "$lib/stores/minhaLista";

    export let href: string;
    export let desabilitada = false;
</script>

<a {href}>
    <Tag ativa={true} tamanho="lg" {desabilitada}><slot /></Tag>
</a>