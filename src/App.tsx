
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { AnimatePresence } from "framer-motion";

// Import Components
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";

// Import Pages
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import Featured from "@/pages/Featured";
import About from "@/pages/About";
import ProductDetail from "@/pages/ProductDetail";
import NotFound from "@/pages/NotFound";

// Initialize QueryClient
const queryClient = new QueryClient();

// Add framer-motion
import { MotionConfig } from "framer-motion";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Cart />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/featured" element={<Featured />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </CartProvider>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
