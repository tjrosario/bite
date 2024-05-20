import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmation',
  description: 'Order Confirmation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="order-page">{children}</div>;
}
