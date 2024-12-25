import {
  fetchPokemon,
  fetchPokemons,
  pikachu,
} from "@/features/Pokemon/pokemonService.ts";

export const pokemonResolvers = {
  pikachu: () => pikachu,
  fetchPokemon: async (_: any, { id }: { id: number }) => {
    return await fetchPokemon(id);
  },
  fetchPokemons: async (_: any, { next }: { next: string }) => {
    return next ? await fetchPokemons(next) : await fetchPokemons();
  },
};
