
"use client";

import Image from 'next/image';
import type { CartItem } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItemCardProps {
  item: CartItem;
}

export default function CartItemCard({ item }: CartItemCardProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0 && newQuantity <= item.product.stock) {
      updateQuantity(item.product.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 border-b bg-card rounded-lg shadow-sm mb-4">
      <div className="relative w-20 h-20 rounded-md overflow-hidden">
        <Image
          src={item.product.imageUrl}
          alt={item.product.name}
          layout="fill"
          objectFit="cover"
          sizes="5rem" // 80px is 5rem
          data-ai-hint={item.product.dataAiHint}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-headline text-lg font-semibold text-primary">{item.product.name}</h3>
        <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val)) handleQuantityChange(val);
          }}
          min="1"
          max={item.product.stock}
          className="w-16 text-center h-9"
        />
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)} disabled={item.quantity >= item.product.stock}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <p className="font-semibold w-24 text-right">${(item.product.price * item.quantity).toFixed(2)}</p>
      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)} className="text-destructive hover:text-destructive/80">
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
