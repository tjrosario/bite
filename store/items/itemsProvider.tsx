import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { initialState, itemsReducer } from '@/store/items/itemsReducer';
import { GET_ITEMS, UPDATE_ITEMS } from '@/store/items/itemsActionTypes';

import { Item } from '@/types/item';

const Items = createContext(initialState);
Items.displayName = 'Items';

export const useItems = () => useContext(Items);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [itemsState, dispatch] = useReducer(itemsReducer, initialState);

  const itemsActions = {
    getItems: () =>
      dispatch({
        type: GET_ITEMS,
      }),
    updateItems: (items: Item[]) =>
      dispatch({
        items,
        type: UPDATE_ITEMS,
      }),
  };

  // Fetch items when app loads for demo purposes
  useEffect(() => {
    async function fetchItems() {
      const resp = await fetch('/api/items');
      const { data } = await resp.json();
      itemsActions.updateItems(data);
    }
    fetchItems();
  }, []);

  const value: any = {
    itemsActions,
    itemsState,
  };

  return <Items.Provider value={value}>{children}</Items.Provider>;
};
