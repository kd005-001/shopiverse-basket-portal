
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { Product } from '@/utils/productData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image, rating, category } = product;
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Link to={`/product/${id}`} className="flex h-full flex-col">
        {/* Image container */}
        <div className={cn(
          "relative h-60 overflow-hidden bg-gray-100",
          !imageLoaded && "image-loading"
        )}>
          <img
            src={image}
            alt={name}
            className={cn(
              "h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Category tag */}
          <div className="absolute top-3 left-3">
            <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {category}
            </span>
          </div>
          
          {/* Quick add to cart button */}
          <div className="absolute right-3 bottom-3 overflow-hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="flex items-center justify-center rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm transition-transform hover:bg-white"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </motion.button>
          </div>
        </div>
        
        {/* Product details */}
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-center">
            <div className="flex items-center">
              <Star size={14} className="fill-current text-yellow-400 stroke-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <h3 className="flex-1 text-base font-medium text-gray-900 group-hover:text-gray-700">
            {name}
          </h3>
          
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-medium">${price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
