import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-brand-red/50 rounded-full text-brand-red text-xs font-bold uppercase tracking-widest mb-6 bg-brand-red/10">
            New Collection Drop 001
          </span>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter text-white mb-6 leading-[0.9]">
            STOP PLANNING.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">START DOING.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans font-light">
            Premium streetwear for those who execute. 
            <br className="hidden md:block" /> Join the 1% who move while others wait.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="primary" onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})}>
              Shop Collection <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline">
              Our Philosophy
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};