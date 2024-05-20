import { GET_ITEMS, UPDATE_ITEMS } from '@/store/items';

export const initialState: any = { items: [] };

export const itemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ITEMS:
      return state.items;

    case UPDATE_ITEMS:
      return {
        ...state,
        items: action.items,
      };

    default:
      return state;
  }
};
