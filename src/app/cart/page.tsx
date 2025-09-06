"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [shippingCost, setShippingCost] = useState<number | null>(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + (shippingCost || 0);

  const handleShippingCalculation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder logic
    setShippingCost(10.50);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-headline font-bold">Your Cart is Empty</h1>
        <p className="text-muted-foreground mt-2">Looks like you haven't added any spices yet.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map(item => (
              <Card key={item.id} className="flex items-center p-4">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  data-ai-hint={item.name.split(' ').slice(0,2).join(' ').toLowerCase()}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="h-8 w-14 text-center"
                  />
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="ml-4 font-semibold w-24 text-right">
                  {(item.price * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}
                </div>
                <Button variant="ghost" size="icon" className="ml-2" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost ? `${shippingCost.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}` : 'Calculated at next step'}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{total.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</span>
              </div>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Separator className="my-4" />
              <form onSubmit={handleShippingCalculation} className="space-y-2">
                <p className="font-medium">Estimate Shipping</p>
                <Input placeholder="Country" />
                <Input placeholder="ZIP / Postal Code" />
                <Button variant="secondary" className="w-full">Calculate Shipping</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
