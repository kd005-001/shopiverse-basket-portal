
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/utils/productData';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <section className="py-12">
      {title && (
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-medium">{title}</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-gray-200"></div>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
