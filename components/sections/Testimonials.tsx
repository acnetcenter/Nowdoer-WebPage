import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Abstract bg */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-red blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4">THE DOERS</h2>
          <p className="text-gray-400">Join thousands focusing on output.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-brand-black border border-white/5 p-8 rounded-sm relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-red/20 w-8 h-8" />
              
              <p className="text-gray-300 italic mb-8 relative z-10">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatarUrl} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-red object-cover"
                />
                <div>
                  <h4 className="text-white font-bold font-display">{item.name}</h4>
                  <span className="text-brand-red text-xs uppercase tracking-wide font-bold">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};