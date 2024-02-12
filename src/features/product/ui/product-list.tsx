"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductCard } from "./product-card";
import { Product } from "@/entities/product";
import { CreateProductForm } from "./create-product-form";

const ProductList: FC = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get("https://api.kryl.shop/api/products"),
  });

  return (
    <div>
      <CreateProductForm />
      {query.data?.data?.products.map((item: Product) => (
        <ProductCard
          key={1}
          name={item.name}
          description={item.description}
          price={item.price}
          images={item.images}
          categoryId={item.categoryId}
        />
      ))}
    </div>
  );
};

export default ProductList;
