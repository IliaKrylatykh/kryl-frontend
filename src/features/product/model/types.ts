import { Category } from "@/entities/category";
import { Product } from "@/entities/product";
import { Review } from "@/entities/review";

export interface ProductExtended extends Product {
  id: number;
  category: Category;
  reviews: Review[];
}

export enum ProductsSort {
  HIGH_PRICE = "high-price",
  LOW_PRICE = "low-price",
  NEWEST = "newest",
  OLDEST = "oldest",
}

export interface ProductFilter {
  sort?: string;
  searchTerms?: string;
  page?: string | number;
  perPage?: string | number;
}
