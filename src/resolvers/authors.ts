export const authorsTypeDefs = `#graphql
  type Author {
    id: Float
    name: String
  }

  type Query {
    authors: [Author]
  }
`;

type Author = {
  id: number;
  name: string;
};

const authors: Author[] = [
  {
    id: 1,
    name: "Kate Chopin",
  },
  {
    id: 2,
    name: "Paul Auster",
  },
];

export const authorsResolvers = {
  authors: () => authors,
};
