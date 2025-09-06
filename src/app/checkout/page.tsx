"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from '@/hooks/use-cart';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  address: z.string().min(10, "Address must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [orderSummary, setOrderSummary] = useState<string | null>(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", address: "" },
  });

  function onSubmit(values: FormData) {
    const summary = `
      **New Order Details**

      Please send the following details to ytmgteam@gmail.com to finalize your order for local pickup.

      -----------------------------------------

      **Customer Details:**
      Name: ${values.name}
      Address: ${values.address}

      **Order Summary:**
      ${cart.map(item => `- ${item.name} (x${item.quantity})`).join('\n')}

      **Total: ${subtotal.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}**

      -----------------------------------------

      Thank you for your order!
    `;
    setOrderSummary(summary.trim().replace(/^ +/gm, ''));
    clearCart();
  }

  if (orderSummary) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Order Submitted!</AlertTitle>
          <AlertDescription>
            Please copy the details below and email them to complete your order.
          </AlertDescription>
        </Alert>
        <Card className="mt-8 text-left">
          <CardHeader>
            <CardTitle>Your Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md whitespace-pre-wrap font-sans text-sm">{orderSummary}</pre>
          </CardContent>
        </Card>
        <Button asChild className="mt-8">
            <Link href="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  if (cart.length === 0 && !orderSummary) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-headline font-bold">Your Cart is Empty</h1>
        <p className="text-muted-foreground mt-2">Start by adding some products to your cart.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Shop Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Checkout</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Address for Local Pickup</FormLabel>
                      <FormControl>
                        <Textarea placeholder="123 Main St, Colombo, Sri Lanka" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Place Order ({subtotal.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })})
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
