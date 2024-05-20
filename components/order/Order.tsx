'use client';

import { fetchOrder } from '@/utils/order';
import { useEffect, useState } from 'react';
import { Order as IOrder } from '@/types/order';
import OrderItem from '@/components/order/OrderItem';
import OrderSummary from '@/components/order/OrderSummary';
import { Item } from '@/types/item';

export default function Order({ id }: { id: string }) {
  const [order, setOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    async function getOrder() {
      const resp = await fetchOrder(id);
      setOrder(resp);
    }

    getOrder();
  }, [id]);

  if (!order) {
    return null;
  }

  if (order.error) {
    return <p>{order.error}</p>;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="space-y-5">
        {order.items.map((item: Item) => (
          <OrderItem item={item} key={item.id} showActions={false} />
        ))}
      </div>
      <div className="lg:px-20">
        <h2 className="font-semibold text-2xl">Order Summary</h2>

        <div className="my-5">
          <OrderSummary summary={order} />
        </div>
      </div>
    </div>
  );
}
