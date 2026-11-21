export const links = {
  github: 'https://github.com/andycodesbugs',
  x: 'https://x.com/andycodesbugs',
};

export const email: string | null = null; // e.g. 'hello@andycodes.dev'

export const stack = ['TypeScript', 'Go', 'Rust', 'Swift', 'React Native', 'Astro', 'PostgreSQL', 'Cloudflare Workers', 'Docker'];

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
  {
    name: 'WhyFi',
    type: 'iOS app',
    description: 'Tells you in plain words why your connection isn’t working, and what to try. The diagnosis runs on your iPhone.',
    color: 'amber',
    accent: 'coral',
  },
  {
    name: 'Flyaway',
    type: 'Self-hosted app',
    description: 'Live flights, airports and airlines, plus a personal flight log with stats.',
    color: 'lilac',
    accent: 'teal',
  },
  {
    name: 'HomeOwl',
    type: 'Android app',
    description: 'Turns a spare Android phone into a home camera that spots people and pets. No cloud needed.',
    color: 'teal',
    accent: 'amber',
  },
  {
    name: 'MemoryLane',
    type: 'Mobile app',
    description: 'Share photos, videos and voice notes privately with close friends and family, grouped into trips.',
    color: 'coral',
    accent: 'lilac',
  },
  {
    name: 'PromptHamster',
    type: 'AI tooling',
    description: 'One place for the prompts, models and AI usage behind the apps, with logs and spending limits.',
    color: 'amber',
    accent: 'teal',
  },
];
