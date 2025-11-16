
import React, { useState } from 'react';
import { Product } from '../types';
import { generateProductPitch } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';
import { AliExpressIcon, SparklesIcon, ArrowRightIcon } from './icons';

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [aiPitch, setAiPitch] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGeneratePitch = async () => {
    setIsGenerating(true);
    setAiPitch('');
    const pitch = await generateProductPitch(product);
    setAiPitch(pitch);
    setIsGenerating(false);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            {product.name}
          </h1>
          <p className="text-gray-300 mb-4 flex-grow">{product.description}</p>
          
          <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">AI-Generated Pitch</h3>
                <button
                    onClick={handleGeneratePitch}
                    disabled={isGenerating}
                    className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed text-white font-bold py-2 px-3 rounded-full text-sm transition-all duration-300"
                >
                    <SparklesIcon />
                    <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
                </button>
            </div>
            {isGenerating && <div className="flex justify-center py-4"><LoadingSpinner /></div>}
            {aiPitch && (
              <p className="text-purple-300 mt-3 text-center italic bg-gray-900/50 p-3 rounded-md">"{aiPitch}"</p>
            )}
          </div>
          
          <div className="mt-auto">
             <div className="text-3xl font-bold text-cyan-400 mb-6 text-center md:text-left">{product.price}</div>
          </div>
        </div>
      </div>
      
       {/* Sticky CTA for Mobile */}
       <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-4 border-t border-gray-700 z-10">
         <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-6 rounded-lg text-lg shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1 transition-all duration-300"
        >
            <AliExpressIcon />
            <span>Buy on AliExpress</span>
            <ArrowRightIcon />
        </a>
       </div>
       <div className="h-24"></div> {/* Spacer for sticky footer */}

       <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default ProductPage;
