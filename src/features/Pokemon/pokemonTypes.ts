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

export type FetchPokemonsResponse = {
  next: string;
  results: PokemonListItem[];
};
