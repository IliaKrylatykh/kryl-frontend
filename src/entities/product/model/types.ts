export interface Product {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  categoryId: number;
  userId: number;
  reviews: ProductReview[] | undefined;
  category: ProductCategory | undefined;
}

interface ProductReview {
  id: 1;
  name: string;
  slug: string;
  user: ReviewUser;
  createdAt: string;
  rating: 1;
  text: string;
}

interface ReviewUser {
  id: 1;
  email: string;
  name: string;
  avatarPath: string;
  phone: string;
}

interface ProductCategory {
  id: 1;
  name: string;
  slug: string;
}

export interface ProductFilter {
  sort?: string;
  searchTerms?: string;
  page?: string | number;
  perPage?: string | number;
}

export enum ProductsSort {
  HIGH_PRICE = "high-price",
  LOW_PRICE = "low-price",
  NEWEST = "newest",
  OLDEST = "oldest",
}

export interface EditProduct {
  name: string;
  price: number;
  description: string;
  images: string[];
  categoryId: number;
}
