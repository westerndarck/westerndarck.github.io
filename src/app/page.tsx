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
          src="https://picsum.photos/1920/1080"
          alt="Cinnamon sticks and powder on a wooden table"
          data-ai-hint="cinnamon spices"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
            The True Taste of Ceylon
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Discover the world's finest, single-origin cinnamon, direct from the lush highlands of Sri Lanka.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/products">Shop Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Our Bestsellers</h2>
          <p className="mt-2 text-center text-muted-foreground max-w-xl mx-auto">
            Experience the products our customers love the most.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product: Product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                      ${product.price.toFixed(2)}
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Ceylon Cinnamon?</h2>
            <p className="mt-4 text-muted-foreground">
              Often called "true cinnamon," Ceylon cinnamon (Cinnamomum verum) is a culinary treasure prized for its delicate, sweet flavor and complex aroma. Unlike the more common Cassia cinnamon, it has ultra-low levels of coumarin, making it safer for regular consumption.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Subtle & Sweet Flavor</h4>
                  <p className="text-muted-foreground text-sm">Perfect for delicate desserts, beverages, and savory dishes where you want a nuanced spice note.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Health Benefits</h4>
                  <p className="text-muted-foreground text-sm">Rich in antioxidants and associated with numerous wellness advantages.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://picsum.photos/600/500"
              alt="Hands holding cinnamon sticks"
              data-ai-hint="cinnamon hands"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Unlock Culinary Creativity</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Not sure what to make? Get recipe suggestions based on the cinnamon you have.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/recipes">Find a Recipe <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
