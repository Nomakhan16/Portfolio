import React from 'react';
import { portfolioConfig } from '@/app/config';

const Footer: React.FC = () => {
  const { copyright, tagline } = portfolioConfig.footer;

  return (
    <footer className="py-8 px-4 border-t border-border bg-background text-foreground">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">{copyright}</p>
        <p className="text-muted-foreground text-xs mt-2">{tagline}</p>
      </div>
    </footer>
  );
};

export { Footer };
