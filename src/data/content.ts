import type {
  StoryBeat,
  Photo,
  MemoryCard,
  OurForeverEntry,
  OpenWhenNote,
} from '../types';

/**
 * content.ts
 * All editable copy for the magazine lives here. Lines marked with
 * [[ ... ]] are placeholders for real, specific memories — replace them
 * with the actual details before this goes live. Everything downstream
 * reads from this file.
 */

export const coverContent = {
  eyebrow: 'A Keepsake Collector\u2019s Edition',
  title: 'The Anjani Edition',
  subtitle: 'A scrapbook of us, kept somewhere it can\u2019t get lost.',
  issueLine: 'Issue No. 01 \u2014 Printed With Love',
};

export const storyBeats: StoryBeat[] = [
  {
    heading: 'This Is Our Story',
    body:
      'Not a card, not a speech, just the truth written down: this is us, collected in one place, because some things deserve to be kept somewhere better than a phone gallery. Anjani, everything after this page actually happened \u2014 no exaggeration required.',
  },
  {
    heading: 'How It Started',
    body:
      '[[Write here: our first real conversation \u2014 where we were, what we were talking about, and the exact moment it stopped feeling like small talk.]]',
  },
  {
    heading: 'College \u2014 Waiting, Canteens, Inside Jokes',
    body:
      'Nobody warns you that the most ordinary parts of college \u2014 the ten minutes between classes, the wrong side of a crowded canteen table \u2014 are the ones you\u2019ll actually remember. [[Write here: a specific college memory \u2014 waiting for each other, a canteen order, an inside joke, a lecture neither of us paid attention to.]]',
  },
  {
    heading: '6 March',
    body:
      'Some days rearrange everything that comes after them, quietly, without asking permission. 6 March is one of mine. [[Write here: what actually happened that day \u2014 where we were, what led up to it, what you remember most clearly about that first kiss.]]',
  },
  {
    heading: 'Everywhere We\u2019ve Been',
    body:
      '[[Write here: our outings and adventures \u2014 a specific trip, an unplanned drive, getting caught in the rain, the food place we always end up at, the road we\u2019ve walked more times than we can count.]]',
  },
  {
    heading: 'Home, In Between',
    body:
      '[[Write here: the apartment, the complex, late evenings that turned into something worth remembering \u2014 the small, unremarkable-on-paper moments that quietly became home.]]',
  },
  {
    heading: 'The Days We Miss',
    body:
      'Not sad, just fond \u2014 the kind of missing that comes from good memories instead of bad ones. There are afternoons we didn\u2019t think twice about at the time that I\u2019d trade a lot to have back exactly as they were: unplanned, unhurried, no reason to check the clock. I catch myself replaying them sometimes, not because I need to, but because they\u2019re good company.',
  },
  {
    heading: 'The Hard Days',
    body:
      'I wasn\u2019t always easy to love, and there were days I made this harder than it needed to be. I\u2019m sorry for the ones where I let frustration talk before I did. What I know now is that the hard days didn\u2019t break anything \u2014 they just showed me, plainly, how much I didn\u2019t want to lose. Thank you for staying through the versions of me that were still figuring it out. I\u2019m still figuring it out. I just want to do it with you.',
  },
  {
    heading: 'Still Writing',
    body:
      'This page isn\u2019t finished, and it\u2019s not supposed to be \u2014 there\u2019s a lot of story left, and every bit of it, I want with you.',
  },
];

export const heartMemoryPhotos: Photo[] = [
  {
    id: 'hm-hero',
    file: 'hero.jpg',
    caption: 'My favourite photo of you, no contest',
    alt: 'A favourite photo of Anjani',
  },
  {
    id: 'hm-school-1',
    file: 'school-1.jpg',
    caption: 'Before I knew how much this would matter',
    alt: 'Anjani, an early memory',
  },
  {
    id: 'hm-school-2',
    file: 'school-2.jpg',
    caption: 'That exact smile \u2014 still gets me every time',
    alt: 'Anjani smiling',
  },
  {
    id: 'hm-motion-1',
    file: 'motion-1.jpg',
    caption: 'Mid-laugh, which is my favourite sound in the world',
    alt: 'Anjani laughing candidly',
  },
  {
    id: 'hm-motion-2',
    file: 'motion-2.jpg',
    caption: 'Always moving, always the best part of whatever day this was',
    alt: 'Anjani in a candid moment',
  },
];

export const hiddenMemoryCards: MemoryCard[] = [
  {
    id: 'mem-early-1',
    file: 'early-1.jpg',
    title: 'Before We Had A Name For It',
    note: '[[Write here: what this photo is from \u2014 a specific memory only the two of us would recognise.]]',
    alt: 'Anjani, an early memory together',
  },
  {
    id: 'mem-early-2',
    file: 'early-2.jpg',
    title: 'Us, Before We Said It Out Loud',
    note: 'Looking back, I think I already knew. I just hadn\u2019t said it yet.',
    alt: 'Anjani, another early moment',
  },
  {
    id: 'mem-1',
    file: 'memory-1.jpg',
    title: 'No Occasion Needed',
    note: 'A day that didn\u2019t need a reason to end up being one of the good ones.',
    alt: 'A candid memory',
  },
  {
    id: 'mem-2',
    file: 'memory-2.jpg',
    title: 'The Quiet Ones',
    note: 'You have a way of making the in-between minutes feel worth keeping.',
    alt: 'A candid memory',
  },
  {
    id: 'mem-3',
    file: 'memory-3.jpg',
    title: 'Off-Script',
    note: 'Nobody planned this. Falling for you is still the best unplanned thing that\u2019s happened to me.',
    alt: 'A candid memory',
  },
  {
    id: 'mem-4',
    file: 'memory-4.jpg',
    title: 'Golden Hour, Golden You',
    note: 'The light was good that day. You were better.',
    alt: 'A candid memory',
  },
  {
    id: 'mem-5',
    file: 'memory-5.jpg',
    title: 'To Be Continued',
    note: 'Left unfinished on purpose \u2014 I want a lot more of these with you.',
    alt: 'A candid memory',
  },
];

export const letterContent = {
  heading: 'A Letter, Folded Twice',
  paragraphs: [
    'Dear Anjani,',
    'I don\u2019t say this enough, so I\u2019m putting it somewhere it can\u2019t get lost in a busy day: I am endlessly, quietly grateful for you \u2014 for the jokes that only land because of how you tell them, the calls that run too late, and the way you show up without needing to be asked twice.',
    'This isn\u2019t attached to a date on a calendar. It\u2019s just true, on an ordinary day, the way it\u2019s true on all the others.',
    'Here\u2019s to more of this \u2014 the comfort, the chaos, and everything soft and sure in between.',
  ],
  signature: '\u2014 \ud83d\udc12🩵',
};

export const ourForeverEntries: OurForeverEntry[] = [
  {
    label: 'TRAVEL',
    title: 'Somewhere We Haven\u2019t Been Yet',
    body: 'A list of places we keep saying \u201csomeday\u201d about \u2014 I\u2019d like to start crossing them off with you, not just talking about them.',
  },
  {
    label: 'GROWING UP, TOGETHER',
    title: 'Figuring It Out As We Go',
    body: 'Neither of us has this fully worked out, and I don\u2019t think we\u2019re supposed to. I just want to keep figuring it out with the same person.',
  },
  {
    label: 'THE ORDINARY YEARS',
    title: 'Getting To Be Boring Together',
    body: 'Not every chapter needs to be an adventure. Some of my favourite ones with you have just been quiet Tuesdays, and I want a few thousand more of those too.',
  },
  {
    label: 'CHOOSING YOU',
    title: 'Every Day, On Purpose',
    body: 'Not because I have to. Because out of every version of my life I can imagine, the ones with you in them are the only ones I actually want.',
  },
];

/**
 * Short, random sweet notes for the hidden surprise envelope. Shown one at a
 * time, shuffled, with no repeats until every note has been seen once.
 */
export const sweetNotes: string[] = [
  'You\u2019re, hands down, my favourite thought of the day.',
  'If missing you were a hobby, I\u2019d be extremely accomplished by now.',
  'Every love song makes a little more sense since you.',
  'You have the kind of smile that ruins my concentration in the best way.',
  'I still get a small happy flicker when your name shows up on my screen.',
  'Home stopped being a place and started being you.',
  'You make ordinary days feel worth writing down.',
  'I fall for you a little more every time you laugh at your own joke.',
  'Just a note to say: I\u2019m really glad it\u2019s you.',
  'My favourite \u201cgood morning\u201d and my favourite \u201cgoodnight\u201d, both from you.',
  'I didn\u2019t know I could feel this lucky until I met you.',
  'P.S. \u2014 I love you. That\u2019s the whole secret.',
];

/** 20 handwritten-style notes, revealed one at a time without repetition. */
export const openWhenNotes: OpenWhenNote[] = [
  {
    trigger: 'Open when you miss me',
    message: 'Come find this note. I\u2019m thinking about you right now too \u2014 that part\u2019s always true.',
  },
  {
    trigger: 'Open when you\u2019re angry with me',
    message: 'I\u2019m sorry, whatever it was. Tell me straight and I\u2019ll actually listen \u2014 no excuses, just fixing it.',
  },
  {
    trigger: 'Open when you\u2019re overthinking',
    message: 'Whatever the spiral is telling you, it\u2019s louder than the truth. The truth is simpler: I\u2019m not going anywhere.',
  },
  {
    trigger: 'Open when college feels exhausting',
    message: 'You\u2019re allowed to be tired. You\u2019re still doing better than the version of you that would have given up already.',
  },
  {
    trigger: 'Open when you need a hug',
    message: 'Consider this the placeholder until I can give you the real one. Full refund on delay, I promise.',
  },
  {
    trigger: 'Open when you forget how beautiful you are',
    message: 'That happens more than it should. For the record: you\u2019re not remembering it wrong when I tell you.',
  },
  {
    trigger: 'Open when we\u2019ve had a fight',
    message: 'I\u2019d rather have a hard conversation with you than an easy one with anyone else. Come back when you\u2019re ready \u2014 I\u2019ll be here.',
  },
  {
    trigger: 'Open when you can\u2019t sleep',
    message: 'Put the phone down after this one. Whatever it is will still be there tomorrow, and you\u2019ll be better rested to deal with it.',
  },
  {
    trigger: 'Open when you\u2019re smiling and thinking of us',
    message: 'Good. Keep that one. I\u2019m collecting the same kind of moments on my end.',
  },
  {
    trigger: 'Open when life feels difficult',
    message: 'You don\u2019t have to carry it alone just because you\u2019re used to. Hand me some of it.',
  },
  {
    trigger: 'Open when you need a laugh',
    message: 'Ask me about the most embarrassing thing I\u2019ve done this month. I have a running list, and it\u2019s not short.',
  },
  {
    trigger: 'Open when you\u2019re proud of yourself',
    message: 'Good \u2014 stay there for a second. I\u2019m proud of you too, more often than I probably say.',
  },
  {
    trigger: 'Open when you doubt us',
    message: 'That happens sometimes, and it doesn\u2019t scare me. I\u2019m still choosing this, still choosing you, on the doubting days too.',
  },
  {
    trigger: 'Open when you\u2019re homesick for how things used to be',
    message: 'Me too, sometimes. But I like where we\u2019re headed more than I miss where we started.',
  },
  {
    trigger: 'Open when you need reassurance',
    message: 'You\u2019re not too much. You\u2019re not asking for too much either. Ask again whenever you need to \u2014 I won\u2019t get tired of answering.',
  },
  {
    trigger: 'Open when you\u2019re stressed about the future',
    message: 'One thing that isn\u2019t uncertain: I plan on being in it.',
  },
  {
    trigger: 'Open when you want to be told the truth',
    message: 'The truth is I\u2019m not perfect at this, but I\u2019m trying, and I\u2019m trying because of you.',
  },
  {
    trigger: 'Open when you need a promise',
    message: 'I\u2019ll keep choosing honest over easy, even when honest is harder to say out loud.',
  },
  {
    trigger: 'Open when you\u2019re missing me and won\u2019t admit it',
    message: 'Caught you. Call me anyway.',
  },
  {
    trigger: 'Open just because',
    message: 'No reason needed. I love you \u2014 that\u2019s the whole note.',
  },
];

export const backCoverContent = {
  heading: 'One Last Page',
  body:
    'This isn\u2019t the end of our story \u2014 it\u2019s only the last page of this website. Everything we\u2019ve actually lived, the good days and the hard ones, has made me love you more, not less. Thank you for choosing me. Thank you for staying. I\u2019ll keep choosing you, on purpose, every single day \u2014 and out of every chapter life hands us, my favourite one will always be the one we\u2019re in right now.',
  signature: '\u2014 \ud83d\udc12🩵',
};
