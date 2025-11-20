import { Zap, Shield, Globe, Users } from 'lucide-react';
import { Product, Testimonial, Feature } from './types';

export const BRAND_NAME = "NowDoer";
export const SOCIAL_LINKS = {
  instagram: "#",
  twitter: "#",
  tiktok: "#"
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Executioner Hoodie',
    category: 'Hoodies',
    price: 59.99,
    imageUrl: 'https://nyc.cloud.appwrite.io/v1/storage/buckets/691e68c00029dbd6e3fb/files/691e6975001ff99e8ea5/view?project=691e1a030018ba2b2568',
    hoverImageUrl: 'https://nyc.cloud.appwrite.io/v1/storage/buckets/691e68c00029dbd6e3fb/files/691e696e0036d9d31cb8/view?project=691e1a030018ba2b2568', 
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: 'Zero Excuse Tee',
    category: 'T-Shirts',
    price: 29.99,
    imageUrl: 'https://nyc.cloud.appwrite.io/v1/storage/buckets/691e68c00029dbd6e3fb/files/691e69850010bc9cc1fd/view?project=691e1a030018ba2b2568',
    hoverImageUrl: 'https://nyc.cloud.appwrite.io/v1/storage/buckets/691e68c00029dbd6e3fb/files/691e697c002dafd77bbc/view?project=691e1a030018ba2b2568',
    badge: 'New Arrival'
  },
  {
    id: 'p3',
    name: 'Momentum Oversized',
    category: 'Hoodies',
    price: 64.99,
    imageUrl: 'https://nyc.cloud.appwrite.io/v1/storage/buckets/691e68c00029dbd6e3fb/files/691e690800066e482d2a/view?project=691e1a030018ba2b2568',
    hoverImageUrl: 'https://nyc.cloud.appwrite.io/v1/storage/buckets/691e68c00029dbd6e3fb/files/691e68fa002e473761dc/view?project=691e1a030018ba2b2568'
  }
];

export const PHILOSOPHY_POINTS: Feature[] = [
  {
    id: 'f1',
    title: 'Bias for Action',
    description: 'Planning is a form of procrastination. We value the messy first step over the perfect blueprint.',
    icon: Zap
  },
  {
    id: 'f2',
    title: 'Uncompromising Quality',
    description: 'Apparel built to withstand the grind. High-performance fabrics for high-performance individuals.',
    icon: Shield
  },
  {
    id: 'f3',
    title: 'Global Mindset',
    description: 'A community of doers stretching across every continent. We are united by ambition.',
    icon: Globe
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alex K.',
    role: 'Software Engineer',
    content: 'The quality of the hoodie is insane. But the message on the back? That gets me out of bed at 5 AM.',
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Sarah J.',
    role: 'Founder',
    content: 'NowDoer isn’t just a clothing brand, it’s a reminder. I wear the "Zero Excuse" tee when I have a hard deadline.',
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't3',
    name: 'Marcus R.',
    role: 'Athlete',
    content: 'Minimalist, tough, and fits perfectly. Finally a brand that understands the aesthetics of hustle.',
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  }
];