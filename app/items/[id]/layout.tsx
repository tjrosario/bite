import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Item Page',
  description: 'Item Description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="item-page">{children}</div>;
}
