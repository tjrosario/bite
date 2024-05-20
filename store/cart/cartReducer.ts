import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  STORAGE_ID,
  PLACE_ORDER,
  CLEAR_CART,
} from '@/store/cart';
import { CartState } from '@/types/cart';
import { getRandomInt } from '@/utils/random';

export const initialState: CartState = { items: [], orders: [] };

export const initializer = (initialValue = initialState) => {
  if (typeof localStorage === 'undefined') {
    return initialValue;
  }

  const localCart = localStorage.getItem(STORAGE_ID);

  if (localCart) {
    return JSON.parse(localCart);
  }

  return initialValue;
};

export const getCartSummary = (state = initialState) => {
  const shipping = 599;

  const subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const orderId = getRandomInt(0, 999);

  return {
    ...state,
    orderId,
    totals: {
      shipping,
      subtotal,
      total: shipping + subtotal,
    },
  };
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CART:
      return state;

    case ADD_TO_CART:
      return state.items.find((item) => item.id === action.item.id)
        ? {
            ...state,
            items: state.items.map((item) =>
              item.id === action.item.id
                ? {
                    ...item,
                    quantity: item.quantity ? item.quantity + 1 : 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            items: [...state.items, { ...action.item, quantity: 1 }],
          };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id),
      };

    case UPDATE_ITEM_QUANTITY:
      return state.items.find((item) => item.id === action.item.id)
        ? {
            ...state,
            items: state.items.map((item) =>
              item.id === action.item.id
                ? {
                    ...item,
                    quantity: action.quantity,
                  }
                : item
            ),
          }
        : state;

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    case PLACE_ORDER:
      const orderId = action.orderId;

      return {
        ...state,
        orders: {
          ...state.orders,
          [orderId]: {
            id: orderId,
            items: action.items,
            totals: action.totals,
          },
        },
      };

    default:
      return state;
  }
};
