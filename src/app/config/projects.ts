import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'FlavorVerse',
    description:
      'One-tap search for any cuisine - a mobile friendly recipe finder that delivers cooking inspiration in seconds.',
    tags: ['Responsive Design', 'API Integration'],
    githubLink: 'https://github.com/Nomakhan16/FlavorVerse---Recipe-App.git',
    liveLink: 'https://flavorverse-ten.vercel.app/',
    type: 'Web App',
    thumbnail: '/images/flavorverse-home.png',
    carouselImages: [
      '/images/flavorverse-home.png',
      '/images/flavorverse-categories.png',
      '/images/flavorverse-recipe.png',
      '/images/flavorverse-results.png',
    ],
    carouselConfig: {
      interval: 3000,
      infinite: true,
    },
  },
  // ... keep your existing projects (Catalyst, MovieDB) below
  {
    id: 2,
    title: 'DiaPredict : DHCP',
    description:
      ' AI-powered web application that helps predict and manage diabetes risk through intelligent analysis and personalized insights.',
    tags: ['GenAI', 'Preventive Healthcare'],
    githubLink: 'https://github.com/Nomakhan16/GenAi-Diabetes.git',
    liveLink: 'https://genai-diabetes-1.onrender.com/',
    type: 'AI Diagnostic Assistant',
    thumbnail: '/images/diabetes-home.png',
    carouselImages: [
      '/images/diabetes-home.png',
      '/images/diabetes-navigation.png',
      '/images/diabetes-patientvalues.png',
      '/images/diabetes-drcapsule.png',
      '/images/diabetes-report.png',
    ],
  },
  {
    id: 3,
    title: 'Tic-Tac-Toe',
    description:
      'A responsive multiplayer Tic-Tac-Toe game with real-time turn tracking and win detection, built with modern web technologies.',
    tags: ['Game Development', 'Real Time'],
    githubLink: 'https://github.com/Nomakhan16/tic-tac-toe.git',
    liveLink: 'https://tic-tac-toe-2-orvk.onrender.com/',
    type: 'Web Game',
    thumbnail: '/images/tictactoe-home.png',
    carouselImages: [
      '/images/tictactoe-home.png',
      '/images/tictactoe-name.png',
      '/images/tictactoe-game.png',
      '/images/tictactoe-winner.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 4,
    title: 'Productivity Tracker',
    description:
      'Boost your efficiency with automated time tracking, smart habit formation, and AI-driven performance analytics.',
    tags: ['Productivity', 'Task Automation'],
    githubLink: 'https://github.com/Nomakhan16/productivity-tracker.git',
    liveLink: 'https://productivity-tracker-5aqr.onrender.com',
    type: 'Time Manager',
    thumbnail: '/images/pt-home.png',
    carouselImages: [
      '/images/pt-home.png',
      '/images/pt-todo.png',
      '/images/pt-timer.png',
      '/images/pt-about.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 5,
    title: 'House Price Predictor',
    description:
      'ML-powered tool that accurately forecasts real estate prices using location, amenities, and market trends with 94% precision.',
    tags: ['Property Analytics', 'Machine Learning'],
    githubLink: 'https://github.com/Nomakhan16/ml2.git',
    liveLink: 'https://ml2-4-xr24.onrender.com',
    type: 'Price Predictor',
    thumbnail: '/images/ml-1.png',
    carouselImages: [
      '/images/ml-1.png',
      '/images/ml-2.png',
      '/images/ml-3.png',
      '/images/ml-4.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
