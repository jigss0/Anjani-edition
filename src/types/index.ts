export type Stage =
  | 'countdown'
  | 'cover'
  | 'story'
  | 'heart-memories'
  | 'hidden-memories'
  | 'letter'
  | 'video'
  | 'future'
  | 'back-cover'
  | 'wish-jar'
  | 'read-again';

export const STAGE_ORDER: Stage[] = [
  'countdown',
  'cover',
  'story',
  'heart-memories',
  'hidden-memories',
  'letter',
  'video',
  'future',
  'back-cover',
  'wish-jar',
  'read-again',
];

export interface Photo {
  id: string;
  file: string;
  caption: string;
  alt: string;
}

export interface StoryBeat {
  heading: string;
  body: string;
}

export interface MemoryCard {
  id: string;
  file: string;
  title: string;
  note: string;
  alt: string;
}

export interface OurForeverEntry {
  label: string;
  title: string;
  body: string;
}

export interface OpenWhenNote {
  trigger: string;
  message: string;
}
