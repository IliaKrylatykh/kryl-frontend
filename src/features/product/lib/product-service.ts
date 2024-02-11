import { instance } from "@/shared/api/interceptor";
import { ProductExtended, ProductFilter } from "../model/types";
import { Product } from "@/entities/product";

const PRODUCTS = "products";

export const ProductService = {
  async getAll(queryData?: ProductFilter) {
    return instance<Product[]>({
      url: PRODUCTS,
      method: "GET",
      params: queryData,
    });
  },

  async getSimilar(id: string | number) {
    return instance<Product[]>({
      url: `${PRODUCTS}/similar/${id}`,
      method: "GET",
    });
  },

  async getById(id: string | number) {
    return instance<Product>({
      url: `${PRODUCTS}/${id}`,
      method: "GET",
    });
  },

  async getBySlug(slug: string) {
    return instance<Product>({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: "GET",
    });
  },

  async getCategory(categorySlug: string) {
    return instance<Product[]>({
      url: `${PRODUCTS}/by-category/${categorySlug}`,
      method: "GET",
    });
  },

  async create(data: Product) {
    return instance<ProductExtended>({
      url: PRODUCTS,
      method: "POST",
      data,
    });
  },

  async update(id: string | number, data: Product) {
    return instance<ProductExtended>({
      url: `${PRODUCTS}/${id}`,
      method: "PUT",
      data,
    });
  },

  async delete(id: string | number) {
    return instance<ProductExtended>({
      url: `${PRODUCTS}/${id}`,
      method: "DELETE",
    });
  },
};
