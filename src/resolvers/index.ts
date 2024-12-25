import { booksTypeDefs, booksResolvers } from "@/resolvers/books.ts";
import { authorsTypeDefs, authorsResolvers } from "@/resolvers/authors.ts";
import { pokemonResolvers, pokemonTypeDefs } from "@/resolvers/pokemon.ts";

export const typeDefs = [booksTypeDefs, authorsTypeDefs, pokemonTypeDefs];
export const resolvers = {
  Query: {
    ...booksResolvers,
    ...authorsResolvers,
    ...pokemonResolvers,
  },
};
