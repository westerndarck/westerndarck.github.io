"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { CinnamonStickIcon } from './icons';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { cart } = useCart();
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <CinnamonStickIcon className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Ceylon Spice Route</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {isClient && isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mb-8 flex items-center space-x-2">
                 <CinnamonStickIcon className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">Ceylon Spice Route</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {isClient && !isMobile && <div className="w-full flex-1 md:w-auto md:flex-none" />}
          {isClient && isMobile && (
            <Link href="/" className="flex items-center space-x-2">
              <CinnamonStickIcon className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-base">Ceylon Spice Route</span>
            </Link>
          )}

          <nav className="flex items-center">
            <Button asChild variant="ghost" size="icon">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {cartItemCount}
                  </span>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
