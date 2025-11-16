
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import { products } from './data/products';
import { TikTokIcon } from './components/icons';

const App: React.FC = () => {
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  useEffect(() => {
    const getProductIdFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      return hash || null;
    };

    const handleHashChange = () => {
      setCurrentProductId(getProductIdFromHash());
    };

    // Set initial product ID
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const product = products.find(p => p.id === currentProductId);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <header className="p-4 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2 text-xl font-bold text-white">
                <TikTokIcon />
                <span>Affiliate Bridge</span>
            </a>
            <p className="text-sm text-gray-400">Featured Products</p>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-6">
        {product ? <ProductPage product={product} /> : <HomePage />}
      </main>
    </div>
  );
};

export default App;
