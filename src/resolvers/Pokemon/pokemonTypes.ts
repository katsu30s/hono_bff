export const pokemonTypeDefs = `#graphql
  type Pokemon {
    id: Int
    name: String
    base_experience: Int
    height: Int
    is_default: Boolean
    order: Int
    weight: Int
  }

  type PokemonListItem {
    name: String
    url: String
  }

  type Query {
    pikachu: Pokemon
    fetchPokemon(id: Int!): Pokemon
    fetchPokemons: [PokemonListItem]
  }
`;

export type Pokemon = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
};

export type PokemonListItem = {
  name: string;
  url: string;
};
