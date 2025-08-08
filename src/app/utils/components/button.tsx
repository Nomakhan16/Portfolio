'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
  rel?: string;
  iconType?: 'arrow' | 'default';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  label,
  icon,
  variant = 'primary',
  onClick,
  target,
  rel,
  iconType = 'default',
  className = '',
}) => {
  // Base classes for all buttons
  const baseClasses =
    'group relative px-6 py-3 rounded-full font-medium flex items-center justify-center transition-all duration-300';

  // The primary variant now uses a gradient from primary to accent.
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:shadow-primary/40',
    secondary:
      'bg-card/60 text-foreground backdrop-blur-sm border border-border hover:bg-card hover:border-accent shadow-lg hover:shadow-accent/10 hover:translate-y-[-3px]',
    outline: 'text-foreground border border-border hover:border-primary/50',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      download={true} // Fixed: This will now enable the download
      className={`${baseClasses} ${variantClasses[variant]} ${className} inline-flex transition-transform duration-300`}
    >
      <span className="flex items-center">
        <span>{label}</span>

        {iconType === 'arrow' ? (
          <motion.div
            className="ml-2 inline-flex"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        ) : (
          <motion.div
            className="ml-2 inline-flex"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
      </span>
    </a>
  );
};
