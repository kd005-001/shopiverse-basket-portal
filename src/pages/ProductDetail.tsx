
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/utils/productData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const productId = parseInt(id || '0');
  const product = getProductById(productId);
  
  useEffect(() => {
    if (!product) {
      toast({
        title: "Product not found",
        description: "The product you're looking for could not be found.",
        variant: "destructive",
        duration: 3000,
      });
      navigate('/products');
    }
    // Reset scroll position
    window.scrollTo(0, 0);
  }, [product, navigate, toast]);
  
  if (!product) {
    return null;
  }
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-8">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="mb-8 flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-lg bg-gray-100"
          >
            <div className={`aspect-square w-full ${!imageLoaded ? 'image-loading' : ''}`}>
              <img
                src={product.image}
                alt={product.name}
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            
            {/* Category tag */}
            <div className="absolute top-4 left-4">
              <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                {product.category}
              </span>
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-2 flex items-center">
              <div className="flex items-center">
                <Star size={16} className="fill-current text-yellow-400 stroke-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-medium text-gray-900 mb-4">{product.name}</h1>
            
            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
            
            <div className="border-t border-b py-6 mb-6">
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Availability</h3>
              <p className={`text-sm ${
                product.inventory > 10 ? 'text-green-600' : 'text-orange-600'
              }`}>
                {product.inventory > 10 
                  ? 'In Stock' 
                  : product.inventory > 0 
                    ? `Low Stock (${product.inventory} left)` 
                    : 'Out of Stock'}
              </p>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-6"
              disabled={product.inventory === 0}
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </Button>
            
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Category</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <p className="text-gray-500">ID</p>
                  <p className="font-medium">#{product.id.toString().padStart(6, '0')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
