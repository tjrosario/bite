import Item from '@/components/item/Item';
import { Item as IITem } from '@/types/item';

export default function ItemList({
  items = [],
  showDescription = false,
}: {
  items: IITem[];
  showDescription?: boolean;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {items.map((item: IITem) => (
        <div
          className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 pb-5"
          key={item.id}
        >
          <Item
            {...item}
            height={400}
            showDescription={showDescription}
            width={400}
          />
        </div>
      ))}
    </div>
  );
}
