import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { OpenWhenNote } from '../../types';
import { openWhenNotes } from '../../data/content';
import { MagazinePage } from '../ui/MagazinePage';
import { StageNav } from '../ui/StageNav';

interface WishJarPageProps {
  onNext: () => void;
  onPrev: () => void;
}

function shuffled(arr: OpenWhenNote[]) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function WishJarPage({ onNext, onPrev }: WishJarPageProps) {
  const order = useMemo(() => shuffled(openWhenNotes), []);
  const [drawnCount, setDrawnCount] = useState(0);
  const [current, setCurrent] = useState<OpenWhenNote | null>(null);

  const remaining = order.length - drawnCount;
  const isEmpty = remaining <= 0;

  const drawNote = () => {
    if (isEmpty) return;
    setCurrent(order[drawnCount]);
    setDrawnCount((c) => c + 1);
  };

  return (
    <MagazinePage folio="09 &middot; Open When&hellip;">
      <h2 className="text-center font-display text-2xl font-bold text-plum sm:text-3xl">
        Open When&hellip;
      </h2>
      <p className="mt-1.5 text-center font-body text-sm text-ink-light">
        {isEmpty
          ? 'That\u2019s every note. Come back to any of them, any time.'
          : 'Open one whenever you need me.'}
      </p>

      <div className="mt-8 flex flex-col items-center">
        <motion.button
          type="button"
          onClick={drawNote}
          disabled={isEmpty}
          whileTap={{ scale: 0.95 }}
          whileHover={!isEmpty ? { y: -3 } : undefined}
          className="relative flex h-36 w-28 items-end justify-center overflow-hidden rounded-b-3xl rounded-t-lg border-2 border-gold/40 bg-gradient-to-b from-white/10 to-rose/10 shadow-md disabled:opacity-50"
        >
          <div className="absolute inset-x-2 bottom-2 top-8 rounded-2xl bg-rose/15" />
          <span className="relative z-10 mb-3 font-hand text-sm text-plum">
            {isEmpty ? 'all opened' : 'open one'}
          </span>
        </motion.button>

        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current.trigger}
              initial={{ opacity: 0, y: 14, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="mt-6 w-full rounded-sm border border-gold/30 bg-paper-light px-5 py-4 shadow-inner"
            >
              <p className="text-center font-type text-[10px] uppercase tracking-[0.3em] text-gold-dark">
                {current.trigger}
              </p>
              <p className="mt-2 text-center font-hand text-lg leading-snug text-ink">
                {current.message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <StageNav onNext={onNext} onPrev={onPrev} nextLabel="Read again" />
    </MagazinePage>
  );
}
