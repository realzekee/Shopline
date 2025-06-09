"use client";

import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import CartItemCard from './CartItemCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';
import { Suspense } from 'react'; // Import Suspense

export default function CartDisplay() {
  const { cartItems, getCartTotal, clearCart, getItemCount } = useCart();

  if (getItemCount() === 0) {
    return (
      <div className="text-center py-10">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
        <h2 className="font-headline text-2xl font-semibold mb-2 text-primary">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Shopping Cart ({getItemCount()} items)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Wrap CartItemCard with Suspense */}
          <Suspense fallback={<div>Loading item...</div>}>
            {cartItems.map(item => (
              <CartItemCard key={item.product.id} item={item} />
            ))}
          </Suspense>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-muted/50 rounded-b-lg">
        <div className="text-xl font-bold">
          Total: <span className="text-primary">${getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          <Link href="/checkout">
            <Button size="lg">Proceed to Checkout</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
