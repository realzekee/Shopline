
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';
import React, { Suspense } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Suspense fallback={<div className="h-16 border-b">Loading header...</div>}>
          <Header />
        </Suspense>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
