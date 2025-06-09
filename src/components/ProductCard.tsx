
"use client";

import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl h-full">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={product.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-xl mb-1 text-primary">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-2 h-12 overflow-hidden">
          {product.description.length > 100 ? `${product.description.substring(0, 97)}...` : product.description}
        </CardDescription>
        <p className="font-semibold text-lg text-foreground">
          ${product.price.toFixed(2)}
        </p>
        {product.stock <= 0 ? (
          <p className="text-sm text-destructive mt-1">Out of stock</p>
        ) : product.stock < 10 ? (
           <p className="text-sm text-yellow-600 mt-1">Only {product.stock} left!</p>
        ) : null}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full transition-colors"
          disabled={product.stock <= 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}
