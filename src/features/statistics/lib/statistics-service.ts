import { instance } from "@/shared/api/interceptor";
import { Statistics } from "@/entities/statistics";

const STATISTICS = "statistics";

export const StatisticsService = {
  async getMain() {
    return instance<Statistics[]>({
      url: `${STATISTICS}/main`,
      method: "GET",
    });
  },
};
