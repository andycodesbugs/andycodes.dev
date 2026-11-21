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
  { name: '[Project name]', type: 'Web app', description: '[One line on what it does.]', color: 'coral', accent: 'amber', repoUrl: links.github },
  { name: '[Project name]', type: 'CLI tool', description: '[One line on what it does.]', color: 'teal', accent: 'lilac', repoUrl: links.github },
  { name: '[Project name]', type: 'API', description: '[One line on what it does.]', color: 'amber', accent: 'coral', repoUrl: links.github },
  { name: '[Project name]', type: 'Game', description: '[One line on what it does.]', color: 'lilac', accent: 'teal', repoUrl: links.github },
  { name: '[Project name]', type: 'Library', description: '[One line on what it does.]', color: 'teal', accent: 'amber', repoUrl: links.github },
  { name: '[Project name]', type: 'Bot', description: '[One line on what it does.]', color: 'coral', accent: 'lilac', repoUrl: links.github },
];
