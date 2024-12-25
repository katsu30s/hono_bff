export const machineTypeDefs = `#graphql
  type Machine {
    id: Int
    name: String
  }

  type Query {
    fetchMachine(id: Int!): Machine
  }
`;

export type Machine = {
  id: number;
  name: string;
};
