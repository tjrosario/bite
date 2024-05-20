import { Order } from '@/types/order';
import { STORAGE_ID } from '@/store/cart';

export function fetchOrder(id: string): Promise<Order | any> {
  return new Promise((resolve, reject) => {
    try {
      const cartStorage: any = localStorage.getItem(STORAGE_ID);

      if (cartStorage) {
        const cart = JSON.parse(cartStorage);

        if (cart && cart.orders) {
          const order = cart.orders[id];
          if (order) {
            resolve(order);
          } else {
            resolve({ error: 'Order not found' });
          }
        } else {
          resolve({ error: 'Order not found' });
        }
      }
    } catch (error) {
      reject({ error });
    }
  });
}
