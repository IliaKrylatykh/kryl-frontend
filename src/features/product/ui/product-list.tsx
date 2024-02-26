"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./product-card";
import { CreateProductForm } from "./create-product-form";
import { Product } from "@/entities/product";
import { ProductService } from "@/entities/product";

export const ProductList: FC = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await ProductService.getAll();
      return response.data;
    },
  });
  const products = query.data?.products;

  return (
    <div>
      <CreateProductForm />
      {products?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
