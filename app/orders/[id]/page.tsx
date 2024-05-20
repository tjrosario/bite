import { Metadata } from 'next';
import { Order as IOrder } from '@/types/order';
import Order from '@/components/order/Order';

export default async function Page({ params }) {
  const { id } = params;

  return (
    <main>
      <h1 className="text-3xl font-semibold">Order Details</h1>

      <div className="mt-10">
        <Order id={id} />
      </div>
    </main>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { id } = params;

  return {
    description: `Order Details`,
    title: `Order Details`,
  };
}
