import { useQuery } from "@tanstack/react-query";
import { ProductService } from "..";

export const useProducts = () => {
  return useQuery({
    queryFn: async () => {
      const response = await ProductService.getAll();
      return response.data;
    },
    queryKey: ["products"],
  });
};
