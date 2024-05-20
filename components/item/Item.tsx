'use client';

import { Item as IItem } from '@/types/item';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/button/Button';
import { FaCartPlus } from 'react-icons/fa6';
import { useCart } from '@/store/cart';

export default function Item({
  alt = '',
  description,
  height = 500,
  id,
  imageUrl,
  name,
  price,
  showDescription = true,
  showPrice = true,
  width = 500,
}: IItem) {
  const {
    cartActions: { addToCart },
  } = useCart();

  return (
    <div className="text-center">
      <Link className="inline-block" href={`/items/${id}`}>
        <Image
          alt={alt}
          height={height}
          src={imageUrl}
          width={width}
          className="m-auto"
        />
        <h6 className="text-lg font-semibold my-3">{name}</h6>
      </Link>

      {showDescription && <p className="mb-5">{description}</p>}

      {showPrice && <div className="mb-5 text-lg">${price / 100}</div>}

      <Button
        onClick={() =>
          addToCart({
            description,
            id,
            imageUrl,
            name,
            price,
          })
        }
      >
        <FaCartPlus className="mr-1" />
        Add to Cart
      </Button>
    </div>
  );
}
