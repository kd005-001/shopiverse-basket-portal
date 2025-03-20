
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/utils/productData';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  // Filter products by category
  const filteredProducts = activeCategory && activeCategory !== 'All'
    ? products.filter(p => p.category === activeCategory)
    : products;
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-medium mb-4">All Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our complete collection of thoughtfully designed products.
          </p>
        </motion.div>
        
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                (category === 'All' && activeCategory === null) || category === activeCategory
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Products */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;
