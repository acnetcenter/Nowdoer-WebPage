import React from 'react';
import { BRAND_NAME } from '../../constants';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-display font-black tracking-tighter text-white italic mb-6 block">
              {BRAND_NAME}<span className="text-brand-red">.</span>
            </a>
            <p className="text-gray-500 max-w-sm mb-6">
              We exist to eliminate the gap between intention and action. Stop planning your life away. Start building it.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Hoodies</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">T-Shirts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};