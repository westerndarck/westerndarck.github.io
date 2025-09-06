"use client";

import { useCart } from '@/hooks/use-cart';
import type { Product } from '@/lib/types';
import { Button, type ButtonProps } from '@/components/ui/button';

interface AddToCartButtonProps extends ButtonProps {
  product: Product;
  quantity?: number;
}

export function AddToCartButton({ product, quantity = 1, children, ...props }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Button onClick={handleAddToCart} {...props}>
      {children}
    </Button>
  );
}
