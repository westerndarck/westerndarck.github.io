"use client";

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/lib/data';
import type { Product, Review as ReviewType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { notFound } from 'next/navigation';

function ProductReview({ review }: { review: ReviewType }) {
  return (
    <div className="border-t py-4">
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="ml-4 font-bold">{review.author}</p>
      </div>
      <p className="text-muted-foreground">{review.comment}</p>
      <p className="text-xs text-muted-foreground mt-2">{new Date(review.date).toLocaleDateString()}</p>
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product: Product | undefined = products.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [reviews, setReviews] = useState<ReviewType[]>(product.reviews);

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newReview: ReviewType = {
      id: String(Date.now()),
      author: formData.get('name') as string || 'Anonymous',
      rating: Number(formData.get('rating')),
      comment: formData.get('comment') as string,
      date: new Date().toISOString(),
    };
    setReviews([newReview, ...reviews]);
    e.currentTarget.reset();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={mainImage}
            alt={product.name}
            data-ai-hint={product.name.split(' ').slice(0,2).join(' ').toLowerCase()}
            width={800}
            height={800}
            className="w-full rounded-lg shadow-lg object-cover aspect-square"
          />
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.map((img, index) => (
                <button key={index} onClick={() => setMainImage(img)} className={`rounded-lg overflow-hidden border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}>
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    data-ai-hint={product.name.split(' ').slice(0,2).join(' ').toLowerCase()}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-4">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="ml-2 text-muted-foreground">{reviews.length} reviews</p>
          </div>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          <div className="mt-8">
            <AddToCartButton product={product} size="lg">Add to Cart</AddToCartButton>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-headline font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
                {reviews.length > 0 ? (
                    reviews.map(review => <ProductReview key={review.id} review={review} />)
                ) : (
                    <p className="text-muted-foreground">No reviews yet. Be the first to write one!</p>
                )}
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Write a Review</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div>
                            <Label>Rating</Label>
                            <div className="flex items-center" id="rating" >
                                {/* Basic rating input */}
                                <select name="rating" defaultValue="5" className="p-2 border rounded-md bg-background">
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="2">2 Stars</option>
                                    <option value="1">1 Star</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="comment">Comment</Label>
                            <Textarea id="comment" name="comment" placeholder="Share your thoughts..." required />
                        </div>
                        <Button type="submit">Submit Review</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
