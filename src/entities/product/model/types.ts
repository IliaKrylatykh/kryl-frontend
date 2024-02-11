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
}
