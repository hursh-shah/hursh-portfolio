import type { ReactNode } from 'react';

export interface Piece {
  slug: string;
  title: string;
  date: string;
  paragraphs: ReactNode[];
}

// to publish something, add it to this array — newest first.
// paragraphs accept JSX, so links and emphasis work inline:
//
// {
//   slug: 'on-buildings',
//   title: 'on buildings',
//   date: 'aug 2026',
//   paragraphs: [
//     'first paragraph.',
//     <>a paragraph with <a href="https://example.com" className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">a link</a>.</>,
//   ],
// },

export const writing: Piece[] = [
  {
    slug: 'games',
    title: 'games',
    date: 'august 2026',
    paragraphs: [
      'how you play games tells you a lot about yourself. i once heard this, and immediately began analyzing my playstyle from back when i was young:',
      '1. i go fast and hard. when i get into something i really get into it.',
      "2. when i get into something, i get into it to become the best. i always optimize for the meta from the very start, even if it's single player.",
      "3. competition makes the cycle 10x faster. if it's multiplayer, i'm constantly in an arms race with other players, even if the game is meant to be cooperative. as long as there's something to compete on, i like to compete.",
      "4. i'm never concerned about the idea of taking it slow and having fun, because it seems to me that fun comes from obsession and success.",
      "these are useful traits, but also highlight possible flaws in my thinking. sometimes, slowing down is the best way to not burn out, and i've attempted to take that lesson to heart.",
      "perhaps a good way to better understand how one functions when stakes aren't high (nature?).",
    ],
  },
];
