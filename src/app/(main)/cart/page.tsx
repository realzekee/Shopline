"use client";

import { Suspense } from 'react';
import nextDynamic from 'next/dynamic'; // Renamed import

export const dynamic = 'force-dynamic'; // This is a Next.js specific export

const CartClient = nextDynamic(() => import('./CartClient'), { // Use the new name
  ssr: false,
});

export default function CartPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartClient />
    </Suspense>
  );
}
