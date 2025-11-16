
import React from 'react';
import { products } from '../data/products';
import { Product } from '../types';
import { ArrowRightIcon } from './icons';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <a href={`#${product.id}`} className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 block">
        <div className="relative">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute bottom-2 left-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">{product.price}</span>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-bold truncate text-white">{product.name}</h3>
            <p className="text-sm text-gray-400 mt-1 h-10 overflow-hidden">{product.description}</p>
        </div>
    </a>
);


const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
        <div className="text-center mb-8 p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Welcome!</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
                You've landed on my special product page! The product from the TikTok video you just watched should be loaded. If not, browse my other cool finds below.
            </p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-white">All Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default HomePage;
