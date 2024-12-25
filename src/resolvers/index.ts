import { booksTypeDefs, booksResolvers } from "@/resolvers/books.js";
import { authorsTypeDefs, authorsResolvers } from "@/resolvers/authors.js";

export const typeDefs = [booksTypeDefs, authorsTypeDefs];
export const resolvers = {
  Query: {
    ...booksResolvers,
    ...authorsResolvers,
  },
};
