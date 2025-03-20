
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();
  
  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        isScrolled || !isHomePage
          ? "bg-white/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-medium text-xl">
            Minima
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-sm hover:text-gray-900 transition-colors",
                location.pathname === '/' ? "text-gray-900" : "text-gray-600"
              )}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={cn(
                "text-sm hover:text-gray-900 transition-colors",
                location.pathname === '/products' ? "text-gray-900" : "text-gray-600"
              )}
            >
              Products
            </Link>
            <Link 
              to="/featured" 
              className={cn(
                "text-sm hover:text-gray-900 transition-colors",
                location.pathname === '/featured' ? "text-gray-900" : "text-gray-600"
              )}
            >
              Featured
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-sm hover:text-gray-900 transition-colors",
                location.pathname === '/about' ? "text-gray-900" : "text-gray-600"
              )}
            >
              About
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center">
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button
              className="p-2 ml-2 text-gray-600 hover:text-gray-900 transition-colors relative"
              onClick={handleCartClick}
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu toggle */}
            <button
              className="ml-2 p-2 text-gray-600 hover:text-gray-900 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={cn(
                    "py-2 text-sm hover:text-gray-900 transition-colors",
                    location.pathname === '/' ? "text-gray-900" : "text-gray-600"
                  )}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className={cn(
                    "py-2 text-sm hover:text-gray-900 transition-colors",
                    location.pathname === '/products' ? "text-gray-900" : "text-gray-600"
                  )}
                >
                  Products
                </Link>
                <Link 
                  to="/featured" 
                  className={cn(
                    "py-2 text-sm hover:text-gray-900 transition-colors",
                    location.pathname === '/featured' ? "text-gray-900" : "text-gray-600"
                  )}
                >
                  Featured
                </Link>
                <Link 
                  to="/about" 
                  className={cn(
                    "py-2 text-sm hover:text-gray-900 transition-colors",
                    location.pathname === '/about' ? "text-gray-900" : "text-gray-600"
                  )}
                >
                  About
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
