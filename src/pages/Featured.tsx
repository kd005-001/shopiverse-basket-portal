
import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/utils/productData';

const Featured = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-medium mb-4">Featured Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products.
          </p>
        </motion.div>
        
        {/* Featured Products */}
        <ProductGrid products={featuredProducts} />
        
        {/* Promotional Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 rounded-xl overflow-hidden relative"
        >
          <div className="h-80 relative">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Limited edition collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 max-w-md">
                Special Edition Collection
              </h2>
              <p className="mb-6 max-w-md">
                Discover our exclusive limited edition items while supplies last.
              </p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
