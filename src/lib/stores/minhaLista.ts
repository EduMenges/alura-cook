import { writable } from 'svelte/store';

const { set, subscribe, update } = writable<string[]>([]);

export const minhaLista = {
	subscribe,
	update,
	adicionarIngrediente(ingrediente: string) {
		update((listaAtual) => [...listaAtual, ingrediente]);
	},
	removerIngrediente(ingrediente: string) {
		update((listaAtual) => listaAtual.filter((item) => item !== ingrediente));
	}
};
