import { Category } from "@/entities/category";
import { Product } from "@/entities/product";
import { Review } from "@/entities/review";

export interface ProductExtended extends Product {
  category: Category;
  reviews: Review[];
}
