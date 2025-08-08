'use client';

import './globals.css';
import { motion } from 'framer-motion';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${GeistSans.variable} ${GeistMono.variable}`} />
      </html>
    );
  }

  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased overflow-x-hidden w-screen min-h-screen relative bg-background text-foreground`}
      >
        {/* Background div added here */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          {/* Gradient background with mesh pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(74, 222, 128, 0.1) 0%, transparent 8%)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-40 dark:opacity-20"
            animate={{
              x: [0, 10, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-40 dark:opacity-20"
            animate={{
              x: [0, -10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
