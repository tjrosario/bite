import items from '@/data/items';

export async function GET() {
  return Response.json({ data: items });
}
