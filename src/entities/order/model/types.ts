export enum OrderStatus {
  PENDING = "PENDING",
  PAYED = "PAYED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
}

export interface Order {
  id: number;
  createdAt: string;
  // items: CartItem[]
  status: OrderStatus;
  // user: User
}
