import React from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}