
import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-100 group smooth-transition">
      <div className={cn(
        "w-20 h-20 rounded-md overflow-hidden mr-4 relative",
        !imageLoaded && "image-loading"
      )}>
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">${price.toFixed(2)}</p>
        
        <div className="flex items-center mt-2">
          <button 
            onClick={() => handleQuantityChange(quantity - 1)}
            className="w-6 h-6 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="mx-2 min-w-8 text-center text-sm">{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(quantity + 1)}
            className="w-6 h-6 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      
      <div className="text-right">
        <p className="font-medium">${(price * quantity).toFixed(2)}</p>
        <button
          onClick={() => removeFromCart(id)}
          className="mt-2 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Remove item"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
