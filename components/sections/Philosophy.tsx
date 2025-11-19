import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY_POINTS } from '../../constants';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl md:text-6xl text-white mb-4"
          >
            THE CODE
          </motion.h2>
          <div className="h-1 w-20 bg-brand-red" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PHILOSOPHY_POINTS.map((point, index) => (
            <motion.div 
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group"
            >
              <div className="w-14 h-14 bg-brand-gray rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
                <point.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-brand-red transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};