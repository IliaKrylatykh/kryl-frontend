import { instance } from "@/shared/api/interceptor";
import { Review } from "../../../entities/review/model/types";
import { ReviewExtended } from "../model/types";

const REVIEWS = "reviews";

export const ReviewService = {
  async getAll() {
    return instance<Review[]>({
      url: REVIEWS,
      method: "GET",
    });
  },

  async create(productId: string | number, data: Review) {
    return instance<ReviewExtended>({
      url: `${REVIEWS}/leave/${productId}`,
      method: "POST",
      data,
    });
  },
};
