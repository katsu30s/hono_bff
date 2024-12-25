import type { Machine } from "@/resolvers/machine/machineTypes.ts";

const endpoint = "https://pokeapi.co/api/v2";

export const fetchMachine = async (id: number): Promise<Machine> => {
  const response = await fetch(`${endpoint}/machine/${id}`);
  const json = await response.json();

  return {
    id: json.id,
    name: json.move.name,
  };
};
