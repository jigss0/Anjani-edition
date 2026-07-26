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
  eyebrow: 'A Keepsake Collector’s Edition',
  title: 'The Anjani Edition',
  subtitle: 'A scrapbook of us, kept somewhere it can’t get lost.',
  issueLine: 'Issue No. 01 — Printed With Love',
};

export const storyBeats: StoryBeat[] = [
  {
    heading: 'This Is Our Story',
    body: `Not every love story needs a perfect beginning or a dramatic ending. Some simply grow through ordinary conversations, shared laughter, unexpected arguments, silent support, and countless little moments that nobody else notices. That's what this is. Not a birthday card, not a fancy website, but a small place where our memories can live forever. Every page after this belongs to us, and every word is written because loving you has become my favourite part of life. ❤️`,
  },
  {
    heading: 'How It Started',
    body: `Sometimes I wonder if we would have ever guessed where our first conversation would lead us. At that moment, we were just two people talking, without knowing we were slowly becoming each other's comfort. Every message made me smile a little more, every conversation lasted a little longer, and before I even realized it, talking to you had quietly become the best part of my day. Looking back now, I don't remember every sentence we exchanged—but I'll never forget how you made me feel from the very beginning. 🌸`,
  },
  {
    heading: 'College — Waiting, Canteens, Inside Jokes',
    body: `College gave us classrooms, assignments and lectures, but none of those are the memories that stayed with me. I remember waiting outside your class, sharing snacks that somehow tasted better because you were there, laughing over jokes that nobody else understood, and finding excuses to spend just five more minutes together before going home. Those ordinary college days slowly became the most extraordinary memories of my life. Whenever I think of college, I don't remember the buildings—I remember you. 🫶`,
  },
  {
    heading: '6 March',
    body: `There are dates people celebrate because everyone tells them to. Then there are dates that quietly become unforgettable because your heart decides they matter. 6 March is that day for me. 💙 I still remember the nervousness, the excitement, and the way the whole world seemed to disappear for a few seconds. Our first kiss wasn't just a beautiful memory—it became the moment I realized I wanted every tomorrow to somehow include you. No matter how many years pass, that day will always make me smile the same way it did the first time. 💋✨`,
  },
  {
    heading: 'Everywhere We’ve Been',
    body: `It's funny how places become special because of the people you're with. We've visited cafés, roads, parks, and places that probably don't mean much to anyone else. But every one of them reminds me of us. Every drive, every walk, every random plan that somehow turned into an unforgettable day became another page of our story. I don't think my favourite place has ever been a location—it has always been wherever you're standing beside me. 🚗🌅❤️`,
  },
  {
    heading: 'Home, In Between',
    body: `Some of my favourite memories don't come from birthdays or celebrations. They come from ordinary evenings—walking around the apartment or the complex, talking about absolutely nothing, sitting together in comfortable silence, or simply existing beside each other after a long day. Those moments looked ordinary from the outside, but they quietly became my definition of home. You made simple moments feel extraordinary, and somehow every place with you feels safe. 🏡🤍`,
  },
  {
    heading: 'The Days We Miss',
    body: `Sometimes I miss days that didn't even feel important while we were living them. Random afternoons, long conversations, silly arguments that ended with laughter, waiting for each other without checking the time... I never knew those little moments would become the ones I'd replay the most. They remind me that happiness doesn't always come from big events. Sometimes it simply comes from spending another ordinary day with the person you love. 🥹❤️`,
  },
  {
    heading: 'The Hard Days',
    body: `We haven't always gotten everything right, and maybe that's what makes our story real. There were moments when I misunderstood you, moments when my frustration spoke louder than my heart, and moments I wish I could do differently. I'm sorry for every time I made things harder than they needed to be. Thank you for choosing to stay, for believing in us even when things weren't easy. Every difficult day taught me that losing an argument is nothing compared to losing you. I'll always keep trying to become someone who loves you better than yesterday. 🫂💙`,
  },
  {
    heading: 'Still Writing',
    body: `This isn't the end of our story. It's only the end of this page. There are still so many memories waiting for us—more road trips, more random late-night conversations, more adventures, more photographs, more dreams, and countless ordinary days that will quietly become extraordinary because we're living them together. If life keeps writing new chapters, I hope every single one still has your name beside mine. 📖❤️✨`,
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
    file: 'school-1.JPG',
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
    file: 'motion-2.JPG',
    caption: 'Always moving, always the best part of whatever day this was',
    alt: 'Anjani in a candid moment',
  },
];

export const hiddenMemoryCards: MemoryCard[] = [
  {
    id: 'mem-early-1',
    file: 'early-1.JPG',
    title: 'Before We Had A Name For It',
    note: `Sometimes I look at this picture and smile because nobody else would ever understand why it means so much to me. It wasn't about doing something extraordinary—it was simply another moment with you. Looking back now, I realize these ordinary little memories slowly became the strongest parts of our story. 📸❤️`,
    alt: 'Anjani, an early memory together',
  },
  {
    id: 'mem-early-2',
    file: 'early-2.JPG',
    title: 'Us, Before We Said It Out Loud',
    note: `Even before we admitted anything, I think my heart had already decided. Every time I saw you, every conversation, every smile... something inside me quietly whispered that you were becoming much more than just another person in my life. 🌸`,
    alt: 'Anjani, another early moment',
  },
  {
    id: 'mem-1',
    file: 'memory-1.JPG',
    title: 'No Occasion Needed',
    note: `One of my favourite things about us is that we never needed birthdays or celebrations to make memories. Some of my happiest days with you happened for absolutely no reason at all, and somehow those are the ones I treasure the most. 🤍`,
    alt: 'A candid memory',
  },
  {
    id: 'mem-2',
    file: 'memory-2.JPG',
    title: 'The Quiet Ones',
    note: `There is something beautiful about the moments where nothing exciting was happening. Just sitting beside you, talking about random things, or simply enjoying each other's company somehow became enough. Those peaceful moments still feel like home to me. 🏡`,
    alt: 'A candid memory',
  },
  {
    id: 'mem-3',
    file: 'memory-3.jpg',
    title: 'Off-Script',
    note: `Nobody plans to fall in love. It just happens somewhere between conversations, laughter, shared memories and countless little moments. Meeting you will always be my favourite beautiful accident. ❤️`,
    alt: 'A candid memory',
  },
  {
    id: 'mem-4',
    file: 'memory-4.JPG',
    title: 'Golden Hour, Golden You',
    note: `The sunset looked beautiful that day, but somehow you still managed to outshine it. Every time I look at this picture, I don't just remember how you looked—I remember how unbelievably lucky I felt standing beside you. 🌅`,
    alt: 'A candid memory',
  },
  {
    id: 'mem-5',
    file: 'memory-5.JPG',
    title: 'To Be Continued',
    note: `This isn't my favourite picture because it's perfect. It's my favourite because it reminds me that our best memories still haven't happened yet. I can't wait to fill the rest of our album together. 📖🩵`,
    alt: 'A candid memory',
  },
];

export const letterContent = {
  heading: 'A Letter, Folded Twice',
  paragraphs: [
    `Dear Anjani,`,
    `If there is one thing I hope you never forget, it's how deeply you are loved. You have become such an important part of my life that it's difficult to imagine my days without you in them. Thank you for every smile you've given me, every late-night conversation, every hug, every little act of love that you probably didn't even realize meant so much to me.`,
    `I know we won't always have perfect days. We'll disagree, we'll make mistakes, and life will challenge us sometimes. But if there's one promise I want you to believe, it's this: no difficult day will ever make me stop choosing you. Loving you has never been about perfection—it's about choosing the same person again and again, even on the hard days.`,
    `I hope years from now we look back at this little website and laugh at how young we were, while creating even more memories together. Until then, thank you for being my safest place, my biggest comfort, and my favourite person. I love you more than words could ever explain. ❤️`,
  ],
  signature: 'Forever your Bandar 🐒🩵',
};

export const ourForeverEntries: OurForeverEntry[] = [
  {
    label: 'OUR TRAVELS',
    title: 'Every Destination, Together',
    body: `I don't really have a dream destination anymore. Every place becomes my favourite as long as you're standing next to me. I hope we collect passport stamps, random café receipts, blurry selfies and unforgettable sunsets together for the rest of our lives. ✈️❤️`,
  },
  {
    label: 'OUR FUTURE',
    title: 'Growing Together',
    body: `Life is going to change us. We'll grow older, busier and hopefully wiser. But no matter what changes around us, I hope we never stop making time for each other, laughing together, and reminding ourselves why we fell in love in the first place. 🌱🩵`,
  },
  {
    label: 'OUR HOME',
    title: 'The Little Things',
    body: `I dream about the ordinary things more than the extraordinary ones. Lazy Sundays, grocery shopping together, cooking dinner, watching movies, decorating our home, arguing over what to eat and laughing five minutes later. Those simple moments are the future I want most. 🏡`,
  },
  {
    label: 'FOREVER',
    title: 'Choosing You',
    body: `If life gave me another chance to start over, I'd still choose the same conversations, the same memories, the same first kiss, the same laughter, and the same person. Out of every version of my future I can imagine, my favourite one is still the one that has you in it. ❤️`,
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
  body: `If you've reached this page, then you've just walked through our little scrapbook. Every photo, every paragraph and every memory here exists because you became one of the most beautiful parts of my life. Thank you for every laugh we've shared, every difficult day we've survived together, every hug, every adventure and every ordinary moment that quietly became unforgettable.

I don't know exactly what the future has planned for us, but I do know one thing with complete certainty—I want you beside me while we discover it.

No matter how many pages life gives us after this one, I'll keep choosing you, celebrating you, supporting you and loving you with my whole heart.

This website may have an ending...

But our story never will. ❤️✨`,
  signature: 'Forever your Bandar 🐒🩵',
};
