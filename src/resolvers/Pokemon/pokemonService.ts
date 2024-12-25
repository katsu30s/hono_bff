import type {
  Pokemon,
  PokemonListItem,
} from "@/resolvers/Pokemon/pokemonTypes.ts";

const endpoint = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${endpoint}/pokemon/${id}`);
  return response.json();
};

export const fetchPokemons = async (): Promise<PokemonListItem> => {
  const response = await fetch(`${endpoint}/pokemon/?limit=20`);
  const json = await response.json();

  const pokemonList: PokemonListItem = json.results.map((pokemon: any) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
    };
  });
  return pokemonList;
};

export const pikachu: Pokemon = await fetchPokemon(25);
