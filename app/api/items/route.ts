import items from '@/data/items';

export function GET() {
  return Response.json({ data: items });
}
