import { booksTypeDefs, booksResolvers } from "@/resolvers/books.ts";
import { authorsTypeDefs, authorsResolvers } from "@/resolvers/authors.ts";

export const typeDefs = [booksTypeDefs, authorsTypeDefs];
export const resolvers = {
  Query: {
    ...booksResolvers,
    ...authorsResolvers,
  },
};
