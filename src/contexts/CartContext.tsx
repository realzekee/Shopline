"use client";

import type { Product, CartItem } from '@/lib/types';
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedCart = localStorage.getItem('shoplineCart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0 || localStorage.getItem('shoplineCart')) {
      localStorage.setItem('shoplineCart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
          toast({
            title: "Stock limit reached",
            description: `Cannot add more than ${product.stock} units of ${product.name}.`,
            variant: "destructive",
          });
          return prevItems.map(item =>
            item.product.id === product.id ? { ...item, quantity: product.stock } : item
          );
        }
        toast({ title: "Added to cart", description: `${product.name} quantity updated.` });
        return prevItems.map(item =>
          item.product.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }
      if (quantity > product.stock) {
        toast({
          title: "Stock limit reached",
          description: `Cannot add ${quantity} units of ${product.name}. Only ${product.stock} available.`,
          variant: "destructive",
        });
        return [...prevItems, { product, quantity: product.stock }];
      }
      toast({ title: "Added to cart", description: `${quantity} x ${product.name} added.` });
      return [...prevItems, { product, quantity }];
    });
  }, [toast]);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast({ title: "Item removed", description: "Product removed from cart." });
  }, [toast]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems(prevItems => {
      const itemToUpdate = prevItems.find(item => item.product.id === productId);
      if (itemToUpdate && quantity > itemToUpdate.product.stock) {
        toast({
          title: "Stock limit reached",
          description: `Cannot set quantity of ${itemToUpdate.product.name} to ${quantity}. Only ${itemToUpdate.product.stock} available.`,
          variant: "destructive",
        });
        return prevItems.map(item =>
          item.product.id === productId ? { ...item, quantity: itemToUpdate.product.stock } : item
        );
      }
      if (quantity <= 0) {
        return prevItems.filter(item => item.product.id !== productId);
      }
      return prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  }, [toast]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    toast({ title: "Cart cleared", description: "All items removed from cart." });
  }, [toast]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }, [cartItems]);

  const getItemCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
