
import React from 'react';
import { Hammer, Paintbrush, Sparkles, Sofa, Layout, Ruler } from 'lucide-react';
import { Service, Testimonial } from './types';

export const PHONE_NUMBER = "9611405445";
export const BUSINESS_NAME = "Uday Interior Works";
export const WEBSITE_URL = "https://udayinteriorworks.com";

export const SERVICES: Service[] = [
  {
    id: 'modular',
    title: 'Modular Solutions',
    description: 'Space-saving smart modular kitchens and wardrobes with premium hardware.',
    longDescription: 'Modern Bangalore living requires smart space management. Our modular solutions combine factory-precision hardware with bespoke craftsmanship. We use high-end fittings from brands like Hafele and Hettich, paired with moisture-resistant materials, to ensure your kitchen and wardrobes are as durable as they are beautiful.',
    features: ['Soft-close hydraulic hinges', 'Pull-out pantry units', 'Corner space optimizers', 'Hidden lighting integration', 'Moisture and termite-resistant boards'],
    icon: <Layout className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'polishing',
    title: 'Furniture Polishing',
    description: 'Expert PU, Melamine, and French polishing to bring back the life of your wood.',
    longDescription: 'Wood is a living material that deserves to shine. Our polishing experts specialize in various finishes that protect and enhance the natural grain of your furniture. From the classic elegance of French polishing to the modern durability of PU (Polyurethane) coating, we ensure your furniture looks brand new and stays protected from the elements.',
    features: ['High-gloss PU finishes', 'Matte and satin Melamine coating', 'Traditional French shellac polishing', 'Teak wood oiling and maintenance', 'Furniture staining and color matching'],
    icon: <Paintbrush className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1517646331032-9e8563c520a1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'restoration',
    title: 'Antique Restoration',
    description: 'Preserving history with delicate craftsmanship. We restore heritage pieces to glory.',
    longDescription: 'Antique furniture carries stories and heritage. We approach every restoration project with the utmost respect for the original craftsman\'s work. Our process involves careful cleaning, structural reinforcement using period-accurate joinery, and finishing that preserves the historical integrity of the piece while ensuring it can be used for generations to come.',
    features: ['Structural repair and stabilization', 'Period-accurate hardware sourcing', 'Veneer and inlay repair', 'Gentle cleaning and conservation', 'Heritage Teak and Rosewood expertise'],
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'carpentry',
    title: 'Custom Carpentry',
    description: 'Bespoke woodwork for homes and offices. From modular kitchens to designer wardrobes.',
    longDescription: 'Our custom carpentry services are the backbone of Uday Interior Works. We specialize in creating high-quality, durable wooden structures that are both functional and aesthetically pleasing. Whether you need a unique bookshelf that fits an awkward corner or a complete modular kitchen overhaul, our craftsmen use traditional techniques combined with modern tools to deliver perfection.',
    features: ['Custom modular kitchens', 'Designer wardrobes', 'TV units and entertainment centers', 'Study tables and home office setups', 'High-quality Plywood and Teak options'],
    icon: <Hammer className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'upholstery',
    title: 'Custom Furniture',
    description: 'Unique furniture pieces designed and crafted exactly to your specifications.',
    longDescription: 'Why settle for mass-produced furniture when you can have a piece designed specifically for your space and comfort? We craft everything from dining tables to sofa frames from scratch. Our team works with you to select the right wood, dimensions, and ergonomic features to create a centerpiece for your home.',
    features: ['Solid wood dining sets', 'Handcrafted bed frames', 'Bespoke sofa frames and chairs', 'Custom storage chests and consoles', 'Live-edge table specialists'],
    icon: <Sofa className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'design',
    title: 'Interior Planning',
    description: 'End-to-end interior consultation and execution for a seamless experience.',
    longDescription: 'Navigating an interior renovation can be overwhelming. We provide a structured approach from initial site measurement to final handover. Our team acts as a single point of contact, coordinating all carpentry, electrical, and painting works to ensure a cohesive design language throughout your home.',
    features: ['Site measurements and layouts', 'Material selection assistance', 'Project management and timelines', 'Coordinated electrical and plumbing', 'End-to-end site supervision'],
    icon: <Ruler className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  }
];

export const SERVICE_GALLERIES: Record<string, string[]> = {
  'modular': [
    'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565182999561-18d7dc63c391?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599690925058-90e1a0b46354?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  ],
  'polishing': [
    'https://images.unsplash.com/photo-1622398925373-3f91b13f99ca?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f5012a?auto=format&fit=crop&w=800&q=80'
  ],
  'restoration': [
    'https://images.unsplash.com/photo-1533090415927-39b12079093b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517646331032-9e8563c520a1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dcea4d4d9?auto=format&fit=crop&w=800&q=80'
  ],
  'carpentry': [
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590674867551-240555fe3e2e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1530124560677-bdaea02c9a59?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&w=800&q=80'
  ],
  'upholstery': [
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f5012a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1550226129-c8783c56b717?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80'
  ],
  'design': [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Reddy",
    role: "Homeowner, HSR Layout",
    content: "The quality of work Uday provided for my modular kitchen was exceptional. Highly professional and timely.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Office Manager",
    content: "We needed antique desk restoration for our heritage office. The results were mind-blowing. Truly craftsmen.",
    rating: 5
  },
  {
    id: 3,
    name: "Suresh Babu",
    role: "Architect",
    content: "As an architect, I'm very picky about finishes. Uday's polishing work is the best I've seen in Bangalore.",
    rating: 5
  }
];
