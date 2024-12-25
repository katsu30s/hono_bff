import { pokemonTypeDefs } from "@/resolvers//Pokemon/pokemonScheme.ts";
import { pokemonResolvers } from "@/resolvers/Pokemon/pokemonResolver.ts";
import { machineTypeDefs } from "@/resolvers/machine/machineScheme.ts";
import { machineResolvers } from "@/resolvers/machine/machineResolver.ts";

export const typeDefs = [pokemonTypeDefs, machineTypeDefs];
export const resolvers = {
  Query: {
    ...pokemonResolvers,
    ...machineResolvers,
  },
};
