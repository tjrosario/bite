import Cart from '@/components/cart/Cart';

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>

      <div className="mt-10">
        <Cart />
      </div>
    </main>
  );
}
