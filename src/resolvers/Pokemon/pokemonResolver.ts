import {
  fetchPokemon,
  fetchPokemons,
  pikachu,
} from "@/resolvers/Pokemon/pokemonService.ts";

export const pokemonResolvers = {
  pikachu: () => pikachu,
  fetchPokemon: async (_: any, { id }: { id: number }) => {
    return await fetchPokemon(id);
  },
  fetchPokemons: async () => {
    return await fetchPokemons();
  },
};
