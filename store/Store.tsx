'use client';

import { CartProvider } from '@/store/cart';
import { ItemsProvider } from '@/store/items';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

export default function Store({ children }: { children: ReactNode }) {
  return (
    <>
      <CartProvider>
        <ItemsProvider>{children}</ItemsProvider>
      </CartProvider>
      <ToastContainer />
    </>
  );
}
