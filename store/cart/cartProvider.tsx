'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  initializer,
  initialState,
  cartReducer,
} from '@/store/cart/cartReducer';
import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  CLEAR_CART,
  PLACE_ORDER,
} from '@/store/cart/cartActionTypes';
import { Item } from '@/types/item';
import { toast } from 'react-toastify';

const Cart = createContext(initialState);
Cart.displayName = 'Cart';

export const useCart = () => useContext(Cart);

export const STORAGE_ID = 'biteLocalCart';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
    initializer
  );

  const cartActions = {
    getCart: () =>
      dispatch({
        type: GET_CART,
      }),
    addToCart: async (item: Item) => {
      toast.success(`${item.name} added to cart!`, {
        position: 'bottom-right',
      });

      return dispatch({
        type: ADD_TO_CART,
        item,
      });
    },
    removeFromCart: (item: Item) => {
      toast.success(`${item.name} removed to cart!`, {
        position: 'bottom-right',
      });

      return dispatch({
        type: REMOVE_FROM_CART,
        item,
      });
    },
    updateItemQuantity: (item: Item, quantity: number) => {
      toast.info(`${item.name} quantity updated to ${quantity}!`, {
        position: 'bottom-right',
      });

      return dispatch({
        type: UPDATE_ITEM_QUANTITY,
        item,
        quantity,
      });
    },
    clearCart: () =>
      dispatch({
        type: CLEAR_CART,
      }),
    placeOrder: ({
      items,
      orderId,
      totals,
    }: {
      items: Item[];
      orderId: number;
      totals: any;
    }) => {
      toast.success('Order has been placed!', {
        position: 'bottom-right',
      });

      return dispatch({
        type: PLACE_ORDER,
        orderId,
        items,
        totals,
      });
    },
  };

  const value: any = {
    cartActions,
    cartState,
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ID, JSON.stringify(cartState));
    } catch (err) {
      console.error(err);
    }
  }, [cartState]);

  return <Cart.Provider value={value}>{children}</Cart.Provider>;
};
