'use client';

import { useItems } from '@/store/items';
import ItemList from '@/components/item/ItemList';

export default function Home() {
  const {
    itemsState: { items },
  } = useItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ItemList items={items} />
    </main>
  );
}
