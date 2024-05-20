import { Item } from '@/types/item';

export const isProduction = process.env.NODE_ENV === 'production';
const URL = isProduction
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.URL;

export async function fetchItem(id: string): Promise<Item> {
  const resp = await fetch(`${URL}/api/items/${id}`);
  const { data } = await resp.json();
  return data;
}

export async function fetchItems(): Promise<Item[]> {
  const resp = await fetch(`${URL}/api/items`);
  const { data } = await resp.json();
  return data;
}
