'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, BarChart3 } from 'lucide-react';
import { portfolioConfig } from '@/app/config';

const About = () => {
  const config = portfolioConfig.sections.about;

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Bug: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
          <path d="M12 21a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
          <path d="M12 3v2"></path>
          <path d="M16 4l-2 2"></path>
          <path d="M8 4l2 2"></path>
          <path d="M21 9h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
          <path d="M3 9h2a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2h-2a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2z"></path>
          <path d="M3 9h2a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2h-2a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      Code: <Code size={24} />,
      Compass: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      BarChart3: <BarChart3 size={24} />,
    };

    return icons[iconName] || <Rocket size={24} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Removed itemVariants to fix the type error. Animation is now applied directly below.

  return (
    <div className="bg-background">
      <section id="about" className="py-24 relative" aria-labelledby="about-title">
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute -left-20 top-40 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title with animation */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground">{config.title} </span>
              <span className="text-primary">{config.subtitle}</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Main content area - 50/50 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* About me text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 shadow-xl h-full relative overflow-hidden">
                <h3 className="text-2xl font-semibold text-foreground mb-6 relative">My Journey</h3>

                {/* Bio paragraphs */}
                <div className="space-y-4 relative">
                  {config.bio.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Location and experience pills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {config.details.map((detail, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted/50 text-muted-foreground border border-border"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent mr-2" />
                      {detail.value}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* My qualities grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="h-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {config.qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-card/40 backdrop-blur-sm rounded-2xl border border-border shadow-xl overflow-hidden relative h-full group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-6 relative">
                      {/* Gradient circle behind icon */}
                      <div
                        className={`absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-transparent opacity-10 blur-lg`}
                      />

                      {/* Icon with gradient background */}
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground mb-4`}
                      >
                        {getIconComponent(quality.icon)}
                      </div>

                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {quality.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{quality.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { About };
