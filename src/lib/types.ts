export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  images: string[];
  stock: number;
  reviews: Review[];
  category: 'Sticks' | 'Powder' | 'Extracts' | 'Specialty';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}
