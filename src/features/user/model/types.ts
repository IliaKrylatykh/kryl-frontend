import { User } from "@/entities/user/model/types";

interface UserProduct {
  id: 1;
  name: string;
  price: 55551;
  images: string[];
  slug: string;
}

export interface UserExtended extends User {
  id: 1;
  createdAt: string;
  updatedAt: string;
  favorites: UserProduct[];
}
