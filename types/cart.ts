import { Item } from '@/types/item';
import { Order } from '@/types/order';

export type CartState = {
  items: Item[];
  orders: Order[];
};
