import Order from '@/components/order/Order';

export default function Page({ params }: { params: any }) {
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
