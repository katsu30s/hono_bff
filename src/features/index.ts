import { pokemonTypeDefs } from "@/features/Pokemon/pokemonScheme.ts";
import { pokemonResolvers } from "@/features/Pokemon/pokemonResolver.ts";
import { machineTypeDefs } from "@/features/machine/machineScheme.ts";
import { machineResolvers } from "@/features/machine/machineResolver.ts";

export const typeDefs = [pokemonTypeDefs, machineTypeDefs];
export const resolvers = {
  Query: {
    ...pokemonResolvers,
    ...machineResolvers,
  },
};
