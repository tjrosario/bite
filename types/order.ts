import { Item } from '@/types/item';

export interface OrderTotals {
  shipping: number;
  subtotal: number;
  total: number;
}

export interface Order {
  error?: string;
  id: number;
  items: Item[];
  totals: OrderTotals;
}

export type OrderState = {
  orders: any[];
};
