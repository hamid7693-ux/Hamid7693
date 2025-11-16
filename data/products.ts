
import { Product } from '../types';

/*
  NOTE: This is a mock data source.
  In a real application, you would replace this with a fetch call to a dynamic data source
  that is updated by your automation pipeline (e.g., Zapier, Make.com).

  Example:
  export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://your-api.com/products.json');
    const data = await response.json();
    return data;
  };
*/

export const products: Product[] = [
  {
    id: 'P001',
    name: 'Galaxy Projector Lamp',
    description: 'Transform your room into a breathtaking galaxy with this amazing star and nebula projector. Perfect for setting a cosmic vibe for gaming, relaxing, or parties.',
    imageUrl: 'https://picsum.photos/seed/galaxy/800/800',
    affiliateUrl: 'https://www.aliexpress.com/',
    price: '$24.99'
  },
  {
    id: 'P002',
    name: 'Portable Mini Blender',
    description: 'Make fresh smoothies and juices on the go! This USB-rechargeable mini blender is powerful, compact, and easy to clean. Your perfect health companion.',
    imageUrl: 'https://picsum.photos/seed/blender/800/800',
    affiliateUrl: 'https://www.aliexpress.com/',
    price: '$19.50'
  },
  {
    id: 'P003',
    name: 'LED Ring Light with Tripod',
    description: 'Step up your content creation game. This 10-inch ring light provides perfect, even lighting for your TikTok videos, selfies, and live streams. Multiple brightness and color modes included.',
    imageUrl: 'https://picsum.photos/seed/ringlight/800/800',
    affiliateUrl: 'https://www.aliexpress.com/',
    price: '$29.99'
  },
  {
    id: 'P004',
    name: 'Magnetic Levitation Moon Lamp',
    description: 'A stunning piece of decor that will mesmerize your guests. This 3D-printed moon lamp floats and spins magically above its wooden base, creating a peaceful and futuristic ambiance.',
    imageUrl: 'https://picsum.photos/seed/moonlamp/800/800',
    affiliateUrl: 'https://www.aliexpress.com/',
    price: '$89.00'
  },
];
