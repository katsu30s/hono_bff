import { fetchMachine } from "@/resolvers/machine/machineService.ts";

export const machineResolvers = {
  fetchMachine: async (_: any, { id }: { id: number }) => {
    return await fetchMachine(id);
  },
};
