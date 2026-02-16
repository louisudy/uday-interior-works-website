
// Add missing React import to resolve React.ReactNode namespace error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface NewsItem {
  title: string;
  summary: string;
  url: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
