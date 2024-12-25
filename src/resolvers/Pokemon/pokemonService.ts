import type { Pokemon } from "@/resolvers/Pokemon/pokemonTypes.ts";

const endpoint = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${endpoint}/pokemon/${id}`);
  return response.json();
};

export const pikachu: Pokemon = await fetchPokemon(25);
