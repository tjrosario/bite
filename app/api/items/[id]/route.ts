import items from '@/data/items';
import { Item } from '@/types/item';

export async function GET(req, { params }) {
  const { id } = params;
  const item = items.find((item: Item) => item.id == id);
  return Response.json({ data: item });
}
