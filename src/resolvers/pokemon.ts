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

  type Query {
    pikachu: Pokemon
    fetchPokemon(id: Int!): Pokemon
  }
`;

type Pokemon = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
};

const endpoint = "https://pokeapi.co/api/v2";

const fetchPokemon = async (id: number) => {
  const response = await fetch(`${endpoint}/pokemon/${id}`);
  return response.json();
};

const pikachu: Pokemon = await fetchPokemon(25);

export const pokemonResolvers = {
  pikachu: () => pikachu,
  fetchPokemon: async (_: any, { id }: { id: number }) => {
    return await fetchPokemon(id);
  },
};
