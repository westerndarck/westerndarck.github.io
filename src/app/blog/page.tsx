import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/data';
import type { Post } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Cinnamon Chronicles</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Insights, stories, and culinary inspiration from the world of Ceylon cinnamon.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  data-ai-hint="cinnamon blog"
                  width={600}
                  height={338}
                  className="w-full h-56 object-cover"
                />
              </Link>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <CardTitle className="font-headline text-xl mt-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <p className="text-muted-foreground mt-2 text-sm">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
