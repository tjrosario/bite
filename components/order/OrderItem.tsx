import { Item } from '@/types/item';
import { getCartSummary, useCart } from '@/store/cart';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderItem({
  item,
  showActions = true,
}: {
  item: Item;
  showActions: boolean;
}) {
  const {
    cartActions: { removeFromCart, updateItemQuantity },
  } = useCart();

  return (
    <div
      className="lg:flex items-center gap-10 text-center lg:text-left"
      key={item.id}
    >
      <div className="bg-white border border-gray-200 rounded-lg inline-block">
        <div className="lg:w-52">
          <Link href={`/items/${item.id}`}>
            <Image
              src={item.imageUrl}
              alt={item.name}
              height={250}
              width={250}
            />
          </Link>
        </div>
      </div>
      <div>
        <h6 className="font-semibold text-xl">
          <Link href={`/items/${item.id}`}>{item.name}</Link>
        </h6>
        <p className="text-gray-500">{item.description}</p>

        {showActions && (
          <div className="flex items-center mt-3 justify-center lg:justify-start">
            <label>Qty:</label>
            <select
              className="border border-gray-300 rounded w-auto ml-1"
              value={item.quantity}
              onChange={(e) =>
                updateItemQuantity(item, parseInt(e.target.value, 10))
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <div
              className="text-xs text-blue-400 flex items-center hover:underline cursor-pointer ml-3"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </div>
          </div>
        )}
      </div>
      <div className="ml-auto mt-3 lg:mt-0">${item.price / 100}</div>
    </div>
  );
}
