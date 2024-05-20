import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Store from '@/store/Store';
import Header from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bite Demo',
  description: 'Bite Demo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Store>
          <Header />

          <div className="container m-auto py-10 px-5 lg:px-0">{children}</div>
        </Store>
      </body>
    </html>
  );
}
