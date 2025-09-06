import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/data';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { AddToCartButton } from '@/components/add-to-cart-button';
import type { Product } from '@/lib/types';

const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1601379760622-0d2e7ad24c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbnxlbnwwfHx8fDE3NTcxMzY2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cinnamon rolls"
          data-ai-hint="cinnamon rolls"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
            The Best Cinnamon Rolls
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Freshly baked, gooey, and absolutely irresistible. Made with real Ceylon cinnamon.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/products">Shop Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Our Bestseller</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-xl mx-auto">
            Experience the product our customers love the most.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredProducts.map((product: Product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
                <CardHeader className="p-0">
                  <Link href={`/products/${product.slug}`}>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      data-ai-hint={product.name.split(' ').slice(0,2).join(' ').toLowerCase()}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </CardTitle>
                  <p className="text-muted-foreground mt-2 text-sm">{product.shortDescription}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-semibold text-primary">
                      {product.price.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}
                    </p>
                    <AddToCartButton product={product}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </AddToCartButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Our Cinnamon Rolls?</h2>
            <p className="mt-4 text-muted-foreground">
              We use only "true" Ceylon cinnamon (Cinnamomum verum), a culinary treasure prized for its delicate, sweet flavor and complex aroma. This makes our cinnamon rolls uniquely delicious and aromatic.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Subtle & Sweet Flavor</h4>
                  <p className="text-muted-foreground text-sm">Perfectly balanced sweetness that lets the true cinnamon flavor shine through.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Always Fresh</h4>
                  <p className="text-muted-foreground text-sm">Baked fresh daily to ensure the best quality and taste.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1636972955024-3b01f2236b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHwlMjBjaW5uYW1vbiUyMHxlbnwwfHx8fDE3NTcxMzgxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hands holding cinnamon roll"
              data-ai-hint="cinnamon hands"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
      
    </div>
  );
}
