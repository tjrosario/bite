export default function OrderSummary({ summary }: { summary: any }) {
  return (
    <div>
      <div>Subtotal: ${summary.totals.subtotal / 100}</div>
      <div>Shipping &amp; Handling: ${summary.totals.shipping / 100}</div>
      <div className="text-xl font-semibold mt-3">
        Total: ${summary.totals.total / 100}
      </div>
    </div>
  );
}
