import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { ShoppingCart } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Products</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of authentic Ceylon cinnamon products, from premium sticks to fine powders.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product: Product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  data-ai-hint={product.name.split(' ').slice(0,2).join(' ').toLowerCase()}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </Link>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-lg flex-grow">
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </CardTitle>
              <p className="text-muted-foreground mt-2 text-sm">{product.shortDescription}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold text-primary">
                  ${product.price.toFixed(2)}
                </p>
                <AddToCartButton product={product} size="sm">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add
                </AddToCartButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
