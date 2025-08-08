import { Github, Linkedin, Mail } from 'lucide-react';
import { Social } from '../types/types';

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/Nomakhan16',
    color: '#d8d2a8ff',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/noma-khan-81453a291/',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto: nomakhanofficial@gmail.com',
    color: '#d2afc8ff',
  },
];
