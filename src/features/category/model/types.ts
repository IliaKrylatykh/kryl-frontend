import { Category } from "@/entities/category";

export interface CategoryExtended extends Category {
  id: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
}
