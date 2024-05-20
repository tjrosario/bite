'use client';

import { getCartSummary, useCart } from '@/store/cart';
import Button from '@/components/button/Button';
import OrderItem from '@/components/order/OrderItem';
import OrderSummary from '@/components/order/OrderSummary';
import { useRouter } from 'next/navigation';
import { Item } from '@/types/item';

export default function Cart() {
  const {
    cartActions: { clearCart, placeOrder },
    cartState,
  } = useCart();

  const { items } = cartState;
  const router = useRouter();

  if (!items.length) {
    return <p>Your cart is currently empty.</p>;
  }

  const summary = getCartSummary(cartState);

  const handlePlaceOrder = () => {
    placeOrder(summary);
    router.push(`/orders/${summary.orderId}`);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="space-y-5">
        {items.map((item: Item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </div>
      <div className="lg:px-20">
        <h2 className="font-semibold text-2xl">Order Summary</h2>

        <div className="my-5">
          <OrderSummary summary={summary} />
        </div>

        <Button
          className="text-center block w-full justify-center"
          onClick={handlePlaceOrder}
        >
          Place Your Order
        </Button>
      </div>
    </div>
  );
}
