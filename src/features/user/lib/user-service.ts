import { User } from "@/entities/user/model/types";
import { instance } from "@/shared/api/interceptor";
import { UserExtended } from "../model/types";

const USERS = "users";

export const UserService = {
  async getProfile() {
    return instance<User[]>({
      url: `${USERS}/profile`,
      method: "GET",
    });
  },

  async update(data: User) {
    return instance<UserExtended>({
      url: `${USERS}/profile`,
      method: "PUT",
      data,
    });
  },

  async toggleFavorite(productId: string | number) {
    return instance<{ message: string }>({
      url: `${USERS}/profile/favorites/${productId}`,
      method: "PATCH",
    });
  },
};
