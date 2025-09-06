import { posts } from '@/lib/data';
import type { Post } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: Post | undefined = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-headline font-bold text-center">{post.title}</h1>
      <p className="text-center text-muted-foreground mt-4">
        By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <Image
        src={post.imageUrl}
        alt={post.title}
        data-ai-hint="cinnamon blog article"
        width={1200}
        height={675}
        className="w-full h-auto rounded-lg shadow-lg my-8"
        priority
      />
      <div
        className="prose dark:prose-invert max-w-none prose-p:text-foreground/80 prose-headings:text-foreground prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
