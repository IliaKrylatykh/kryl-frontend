"use client";

import { FC } from "react";
import { ProductCard } from "./product-card";
import { CreateProductForm } from "./create-product-form";
import { Product } from "@/entities/product";
import { useProducts } from "@/entities/product/lib/useProducts";

export const ProductList: FC = () => {
  const { data, isLoading } = useProducts();
  const products = data?.products;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CreateProductForm className="max-w-[300px] mb-10" />
      <div className="grid grid-cols-3 gap-4">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
