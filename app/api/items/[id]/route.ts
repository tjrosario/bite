import items from '@/data/items';
import { Item } from '@/types/item';

export function GET(req: any, { params }: { params: any }) {
  const { id } = params;
  const item = items.find((item: Item) => item.id == id);
  return Response.json({ data: item });
}
