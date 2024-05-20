import { Item } from '@/types/item';

export async function fetchItem(id: string): Promise<Item> {
  const resp = await fetch(`${process.env.URL}/api/items/${id}`);
  const { data } = await resp.json();
  return data;
}

export async function fetchItems(): Promise<Item[]> {
  const resp = await fetch(`${process.env.URL}/api/items`);
  const { data } = await resp.json();
  return data;
}
