import { endpoint } from "@/constants/url.ts";
import type {
  Pokemon,
  FetchPokemonsResponse,
  PokemonListItem,
} from "@/features/Pokemon/pokemonTypes.ts";

export const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${endpoint}/pokemon/${id}`);
  return response.json();
};

export const pikachu: Pokemon = await fetchPokemon(25);

export const fetchPokemons = async (
  next?: string
): Promise<FetchPokemonsResponse> => {
  const url = next ? next : `${endpoint}/pokemon/?limit=20`;
  const response = await fetch(url);
  const json = await response.json();

  const pokemonList: PokemonListItem[] = json.results.map((pokemon: any) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
    };
  });

  return {
    next: json.next,
    results: pokemonList,
  };
};
