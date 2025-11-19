import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BRAND_NAME } from '../../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-display font-black tracking-tighter text-white italic">
          {BRAND_NAME}<span className="text-brand-red">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium text-gray-300">
          <a href="#philosophy" className="hover:text-brand-red transition-colors">Philosophy</a>
          <a href="#products" className="hover:text-brand-red transition-colors">Shop</a>
          <a href="#testimonials" className="hover:text-brand-red transition-colors">Reviews</a>
        </div>

        {/* CTA / Cart */}
        <div className="hidden md:flex items-center gap-6">
           <button className="relative text-white hover:text-brand-red transition-colors">
            <ShoppingBag size={24} />
            <span className="absolute -top-1 -right-1 bg-brand-red text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
           </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black/95 border-b border-white/10 backdrop-blur-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300">Philosophy</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300">Shop</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-gray-300">Reviews</a>
            <div className="h-px bg-white/10 w-full my-2" />
            <button className="flex items-center gap-2 text-brand-red font-bold">
              <ShoppingBag size={20} /> View Cart
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};