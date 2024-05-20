import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'My Shopping Cart',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="cart-page">{children}</div>;
}
