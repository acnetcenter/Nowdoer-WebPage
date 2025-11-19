import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-display font-bold tracking-wide text-sm uppercase transition-colors duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-600 border border-transparent shadow-[0_0_15px_rgba(255,46,46,0.3)] hover:shadow-[0_0_25px_rgba(255,46,46,0.6)]",
    secondary: "bg-white text-brand-black hover:bg-gray-200 border border-transparent",
    outline: "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};