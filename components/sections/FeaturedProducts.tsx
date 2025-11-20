import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PRODUCTS } from '../../constants';
import { Button } from '../ui/Button';

export const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="font-display font-black text-4xl md:text-6xl text-white mb-2"
            >
              ESSENTIAL GEAR
            </motion.h2>
            <p className="text-gray-400">Tools for your daily grind.</p>
          </div>
          <Button variant="secondary" className="hidden md:flex">View All Products</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden bg-brand-gray rounded-sm mb-4 relative">
                 {product.badge && (
                  <span className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 z-10 uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
                
                {/* Image Logic: Swap if hoverImageUrl exists, otherwise simple zoom */}
                <div className="w-full h-full relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 
                      ${product.hoverImageUrl 
                        ? 'group-hover:opacity-0 absolute inset-0' 
                        : 'group-hover:scale-110 opacity-80 group-hover:opacity-100'
                      }`}
                  />
                  
                  {product.hoverImageUrl && (
                    <img 
                      src={product.hoverImageUrl} 
                      alt={`${product.name} Back view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  )}
                </div>
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <Button variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.category}</p>
                </div>
                <span className="text-brand-red font-display font-bold text-lg">
                  ${product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <Button variant="secondary" className="w-full">View All Products</Button>
        </div>
      </div>
    </section>
  );
};