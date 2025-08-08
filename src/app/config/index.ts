import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

export const portfolioConfig: PortfolioConfig = {
  // Personal information
  siteMetadata: {
    title: 'Noma Khan',
    description: 'Portfolio Website by Noma',
    author: 'Noma Khan',
  },

  // Navigation
  navigation: {
    logo: {
      text: 'NK',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'academics', label: 'Academics' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },
  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Noma Khan',
      typingTexts: [
        'Transforming ideas into interfaces',
        'Optimizing developer experiences',
        'Creating user-focused apps',
      ],
      description:
        'Driven by curiosity, I actively seek out emerging technologies and innovative design approaches, always learning how to harness them for meaningful digital solutions.',
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "Hi, I'm a final year B.Tech student and aspiring software developer based in Lucknow. With a deep passion for web development, I love transforming concepts into functional digital experiences.",
        "My journey in tech revolves around building clean, efficient solutions while mastering modern web technologies. I'm particularly fascinated by how intuitive interfaces can create meaningful user connections.",
        'Beyond coding, I enjoy expressing my thoughts through writing - using words to articulate complex ideas and share knowledge.',
      ],
      details: [{ label: 'Location', value: 'Based in Lucknow' }],
      qualities: [
        {
          icon: 'Bug',
          title: 'Solution Architect',
          description:
            'Diagnose system pain points and engineer resilient fixes that prevent recurring issues',
          gradient: '',
        },
        {
          icon: 'Code',
          title: 'Clean Enthusiast',
          description:
            'I value maintainable, well-structured code that follows best practices and industry standards.',
          gradient: '',
        },
        {
          icon: 'Compass',
          title: 'Tech Explorer',
          description: 'I pioneer emerging tools and frameworks to build future-proof solutions.',
          gradient: '',
        },
        {
          icon: 'BarChart3',
          title: 'User-Focused',
          description:
            'I prioritize creating intuitive, accessible experiences that meet real user needs.',
          gradient: '',
        },
      ],
    },

    academics: {
      title: 'Academic Journey',
      subtitle: 'My Education',
      description: 'My formal education and academic achievements',
      education: [
        {
          degree: 'Bachelor of Technology (B.Tech)',
          institution: 'Shri Ramswaroop Memorial College of Engineering and Management',
          specialization: 'Computer Science & Engineering',
          period: '2022 - Present',
          location: 'Lucknow, Uttar Pradesh',
          details: ['✨ CGPA: 8.64 (Till 5th sem)'],
        },
        {
          degree: 'Intermediate',
          institution: 'City Montessori School',
          specialization: 'Science Stream (PCM + CS)',
          period: '2019 - 2021',
          location: 'Lucknow, Uttar Pradesh',
          details: ['✨ Percentage: 92.5%'],
        },
        {
          degree: 'High School',
          institution: 'High St. Fidelis College',
          specialization: 'ICSE Curriculum',
          period: '2006 - 2019',
          location: 'Lucknow, Uttar Pradesh',
          details: ['✨ Percentage: 89.4%'],
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/Nomakhan16',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        'Continuously expanding my technical toolkit to build innovative and efficient solutions.',
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Noma Khan. All rights reserved.`,
    tagline: 'Designed with ❤️',
  },
};

export default portfolioConfig;
