import { instance } from "@/shared/api/interceptor";
import { Review } from "../../../entities/review/model/types";
import { Order } from "@/entities/order";

const ORDERS = "orders";

export const ReviewService = {
  async getAll() {
    return instance<Order>({
      url: ORDERS,
      method: "GET",
    });
  },
};
