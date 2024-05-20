'use client';

import { useCart } from '@/store/cart';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const {
    cartState: { items },
  } = useCart();

  return (
    <header className="bg-white text-orange-400 border-b-2 border-orange-400">
      <div className="container m-auto flex items-center py-5 px-5 lg:px-0">
        <h1>
          <Link href={'/'}>
            <Image
              src={
                'https://getbite.com/wp-content/themes/bitewp/images/bite-logo.svg'
              }
              height={41}
              width={81}
              alt="Bite Logo"
            />
          </Link>
        </h1>

        <div className="ml-auto">
          <Link className="relative" href={'/cart'} title="View Cart">
            <FiShoppingCart size={30} />
            {items.length > 0 && (
              <div className="absolute -top-1 -right-2">
                <div className="rounded-full flex items-center justify-center text-white  text-xs font-semibold w-4 h-4 border border-orange-400 bg-orange-400">
                  {items.length}
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
