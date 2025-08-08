import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  type?: string; // Added missing property
  thumbnail: string;
  gifUrl?: string; // Added missing property
  carouselImages?: string[]; // Added missing property
  carouselConfig?: {
    // Added missing property
    interval?: number;
    infinite?: boolean;
  };
}

export interface Skill {
  category: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Social {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export interface Quality {
  icon: string;
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  specialization?: string;
  period: string;
  location: string;
  details: string[];
}

export interface PortfolioConfig {
  siteMetadata: {
    title: string;
    description: string;
  };
  navigation: {
    links: { label: string; href: string }[];
    logo: {
      text: string;
    };
  };
  sections: {
    home: {
      greeting: string;
      name: string;
      typingTexts: string[];
      description: string;
      scrollIndicatorText: string;
    };
    about: {
      title: string;
      subtitle: string;
      bio: string[];
      details: { label: string; value: string; icon: string }[];
      qualities: Quality[];
    };
    academics: {
      title: string;
      subtitle: string;
      education: Education[];
    };
    projects: {
      title: string;
      subtitle: string;
      description: string;
      projects: Project[];
    };
    skills: {
      title: string;
      subtitle: string;
      description: string;
      categories: Skill[];
    };
    connect: {
      title: string;
      subtitle: string;
      description: string;
      socials: Social[];
    };
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}
