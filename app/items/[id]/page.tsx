import { Metadata } from 'next';
import { fetchItem } from '@/utils/item';
import { Item as IItem } from '@/types/item';
import Item from '@/components/item/Item';

export default async function Page({ params }) {
  const { id } = params;
  const item = await fetchItem(id);

  return (
    <main>
      <Item {...item} />
    </main>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { id } = params;
  const item: IItem = await fetchItem(id);

  return {
    description: item.description,
    title: item.name,
  };
}
