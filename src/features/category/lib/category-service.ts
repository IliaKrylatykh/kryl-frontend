import { instance } from "@/shared/api/interceptor";
import { Category } from "../../../entities/category/model/types";
import { CategoryExtended } from "../model/types";

const CATEGORIES = "categories";

export const CategoryService = {
  async getAll() {
    return instance<Category[]>({
      url: CATEGORIES,
      method: "GET",
    });
  },

  async getById(id: string | number) {
    return instance<Category>({
      url: `${CATEGORIES}/${id}`,
      method: "GET",
    });
  },

  async getBySlug(slug: string) {
    return instance<Category>({
      url: `${CATEGORIES}/by-slug/${slug}`,
      method: "GET",
    });
  },

  async create(data: Category) {
    return instance<CategoryExtended>({
      url: CATEGORIES,
      method: "POST",
      data,
    });
  },

  async update(id: string | number, data: Category) {
    return instance<CategoryExtended>({
      url: `${CATEGORIES}/${id}`,
      method: "PUT",
      data,
    });
  },

  async delete(id: string | number) {
    return instance<CategoryExtended>({
      url: `${CATEGORIES}/${id}`,
      method: "DELETE",
    });
  },
};
