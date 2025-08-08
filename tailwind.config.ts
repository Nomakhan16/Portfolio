import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Black, White, and Gold Color Palette
        background: 'hsl(240, 10%, 4%)', // A rich black
        foreground: 'hsl(0, 0%, 95%)', // An off-white
        card: {
          DEFAULT: 'hsl(240, 6%, 10%)', // A slightly lighter black
          foreground: 'hsl(0, 0%, 95%)',
        },
        primary: {
          DEFAULT: 'hsl(40, 80%, 55%)', // Deeper, more saturated gold
          foreground: 'hsl(0, 0%, 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(258, 90%, 66%)', // Original purple, kept for contrast
          foreground: 'hsl(0, 0%, 100%)',
        },
        muted: {
          DEFAULT: 'hsl(240, 5%, 16%)',
          foreground: 'hsl(0, 0%, 65%)',
        },
        accent: {
          DEFAULT: 'hsl(40, 95%, 45%)', // Brighter, but still deep gold
          foreground: 'hsl(240, 10%, 4%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84%, 60%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        border: 'hsl(240, 6%, 20%)',
        input: 'hsl(240, 6%, 12%)',
        ring: 'hsl(40, 80%, 55%)',
        popover: {
          DEFAULT: 'hsl(240, 6%, 12%)',
          foreground: 'hsl(0, 0%, 95%)',
        },
      },
      borderRadius: {
        lg: '1rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      boxShadow: {
        glow: '0 0 15px hsla(40, 80%, 55%, 0.3)',
        card: '0 4px 20px hsla(0, 0%, 0%, 0.15)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      spacing: {
        section: '5rem',
      },
    },
  },
  plugins: [typography, animate],
} satisfies Config;
