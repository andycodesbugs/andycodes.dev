// Everything in [brackets] is a placeholder to replace with real content.

export const links = {
  github: 'https://github.com/andycodesbugs',
  x: 'https://x.com/andycodesbugs',
};

export const email: string | null = null; // e.g. 'hello@andycodes.dev'

export const stack = ['[Language]', '[Framework]', '[Database]', '[Tool]'];

type Color = 'coral' | 'amber' | 'teal' | 'lilac';

export interface Project {
  name: string;
  type: string;
  description: string;
  color: Color;
  accent: Color;
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: 'byteclub',
    type: 'Studio',
    description: 'Small Swiss software studio: websites, web and mobile apps, internal tools and careful AI features.',
    color: 'coral',
    accent: 'amber',
    liveUrl: 'https://byteclub.ch',
  },
  {
    name: 'Interlock',
    type: 'Release security',
    description: 'Release gate by byteclub: every build must agree, and nothing is signed or deployed until it is approved on a phone.',
    color: 'teal',
    accent: 'lilac',
  },
];
