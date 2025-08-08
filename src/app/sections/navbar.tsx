'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/app/config';
import { Logo } from '@/app/utils/components/logo';

interface NavBarProps {
  activeSection: string;
  onSectionNav: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onSectionNav }) => {
  const { links } = portfolioConfig.navigation;

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-card/30 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a
              onClick={e => onSectionNav(e, 'home')}
              className="font-medium text-xl tracking-wider text-foreground"
            >
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={e => onSectionNav(e, link.href)}
                  initial={linkVariants.initial}
                  animate={linkVariants.animate}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                  }}
                  className={`
                    transition-all 
                    duration-300 
                    hover:text-accent 
                    ${activeSection === link.href ? 'text-accent' : 'text-muted-foreground'}
                  `}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
