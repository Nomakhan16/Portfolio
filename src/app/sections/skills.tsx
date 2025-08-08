'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skills } from '@/app/config/skills';
import { isMinimal } from '@/app/utils';

const CategoryIcons = {
  Programming: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-primary"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor"></rect>
      <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor"></line>
    </svg>
  ),
  'Web Development': () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-primary"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="currentColor"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="currentColor"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor"></line>
      <line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor"></line>
    </svg>
  ),
  'Databases/Tools': () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-primary"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor"></path>
    </svg>
  ),
  'Data Science': () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-primary">
      <line
        x1="16.5"
        y1="9.4"
        x2="7.5"
        y2="4.21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(9.6,9.6) scale(0.6)">
        <circle cx="4" cy="4" r="1.5" fill="currentColor" />
        <path
          d="M4 0v1M4 7v1M7 4h1M0 4h1M6.12 1.88l.7.7M1.88 6.12l.7.7M6.12 6.12l-.7.7M1.88 1.88l-.7.7"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  ),
  Default: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-primary"
    >
      <path
        d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
        stroke="currentColor"
      ></path>
    </svg>
  ),
};

const Skills: React.FC = () => {
  const sectionVariants = isMinimal
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  const getCategoryIcon = (category: string) => {
    const Icon = CategoryIcons[category as keyof typeof CategoryIcons] || CategoryIcons.Default;
    return <Icon />;
  };

  return (
    <div className="bg-background text-foreground">
      <section id="skills" className="py-24 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={isMinimal ? {} : { opacity: 0, y: 20 }}
            whileInView={isMinimal ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Skills
              </span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              I&apos;ve gained proficiency in various technologies throughout my career. Here are
              the key tools and frameworks I use to build exceptional products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={sectionVariants.initial}
                whileInView={sectionVariants.animate}
                transition={isMinimal ? {} : { duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-card/40 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md flex items-center justify-center">
                    {getCategoryIcon(skillGroup.category)}
                  </span>
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="group relative duration-300">
                      <div className="flex items-center gap-2 px-3 py-2 bg-card/70 rounded-full border border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-primary/10">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={16}
                          height={16}
                          className="w-4 h-4"
                          style={{ filter: 'brightness(1.2)' }}
                        />
                        <span className="text-sm text-muted-foreground">{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { Skills };
