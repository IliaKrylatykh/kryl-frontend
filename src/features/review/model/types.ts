import { Review } from "@/entities/review";

export interface ReviewExtended extends Review {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  productId: number;
}
