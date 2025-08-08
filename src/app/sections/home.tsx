import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { portfolioConfig } from '@/app/config';
import { Button } from '@/app/utils/components/button';
import Image from 'next/image';
import { isMinimal } from '@/app/utils';

interface HomeProps {
  onConnectClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Home: React.FC<HomeProps> = ({ onConnectClick }) => {
  const config = portfolioConfig.sections.home;
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    if (isMinimal) return;
    if (index < config.typingTexts[currentPhrase].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + config.typingTexts[currentPhrase][index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIndex(0);
        setText('');
        setCurrentPhrase(prev => (prev + 1) % config.typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, currentPhrase, config.typingTexts]);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center relative pt-24 md:pt-24 lg:pt-16 pb-16 md:pb-12 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(var(--accent), 0.1) 0%, transparent 8%)`,
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          className="absolute top-1/3 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-40"
          animate={{ x: [0, 10, 0], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-40"
          animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full">
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-foreground">{config.greeting} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {config.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-12 mb-8 overflow-hidden"
            >
              <div className="relative h-full flex items-center justify-center lg:justify-start">
                {isMinimal ? (
                  <span className="text-xl sm:text-2xl text-muted-foreground flex justify-center flex-wrap">
                    <span className="mr-2">I&apos;m passionate about</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      {config.typingTexts[0]}
                    </span>
                  </span>
                ) : (
                  <span className="text-xl sm:text-2xl text-muted-foreground flex flex-wrap">
                    <span className="mr-2">I&apos;m passionate about</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      {text}
                    </span>
                    <span className="animate-blink ml-1 h-6 w-0.5 bg-accent self-center"></span>
                  </span>
                )}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {config.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <Button
                href="/Noma%20-%20Resume.pdf"
                label="Download Resume"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                }
                variant="primary"
                iconType="default"
              />

              <Button
                href="#connect"
                label="Connect With Me"
                icon={<ArrowRight size={18} />}
                variant="outline"
                onClick={onConnectClick}
                iconType="arrow"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative mt-2 sm:mt-0 mb-16 sm:mb-16 flex justify-center items-center translate-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Your Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-muted-foreground text-sm mb-2">{config.scrollIndicatorText}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="text-accent" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Home };
