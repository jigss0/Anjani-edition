import { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sweetNotes } from '../../data/content';

/** Fisher–Yates shuffle, used to build a fresh non-repeating draw order. */
function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * A small hidden envelope icon, always available in the corner. Tapping it
 * peels the flap open and hands over a random, non-repeating sweet note.
 * Purely a delight layer — never blocks navigation or page content.
 */
export function SurpriseEnvelope() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const deck = useRef<string[]>(shuffled(sweetNotes));

  const drawNote = useCallback(() => {
    if (deck.current.length === 0) {
      deck.current = shuffled(sweetNotes);
    }
    const next = deck.current.pop() ?? sweetNotes[0];
    setNote(next);
  }, []);

  const handleToggle = useCallback(() => {
    if (!open) {
      drawNote();
    }
    setOpen((v) => !v);
  }, [open, drawNote]);

  return (
    <div className="fixed bottom-4 left-4 z-[80] flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && note && (
          <motion.div
            key={note}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="max-w-[220px] rounded-sm border border-gold/30 bg-paper-light px-4 py-3 shadow-paper"
          >
            <p className="font-hand text-lg leading-snug text-rose-dark">{note}</p>
            <button
              type="button"
              onClick={drawNote}
              className="mt-2 font-type text-[10px] uppercase tracking-widest text-plum/50 underline-offset-2 hover:text-plum hover:underline"
            >
              another note
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={handleToggle}
        aria-label={open ? 'Close the little envelope' : 'Open a little envelope'}
        aria-expanded={open}
        className="relative h-10 w-12 shrink-0"
        style={{ perspective: 300 }}
      >
        {/* envelope body */}
        <span className="absolute inset-0 rounded-sm border border-gold/50 bg-plum/80 shadow-md backdrop-blur" />
        {/* flap */}
        <motion.span
          animate={{ rotateX: open ? 165 : 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          style={{ transformOrigin: 'top', transformStyle: 'preserve-3d' }}
          className="absolute inset-x-0 top-0 h-1/2 origin-top"
        >
          <span
            className="absolute inset-0 bg-gold-dark/80"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          />
        </motion.span>
        {/* little heart seal, peeks out once opened */}
        <motion.span
          initial={false}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : 4 }}
          transition={{ duration: 0.3, delay: open ? 0.25 : 0 }}
          className="absolute inset-x-0 bottom-1 flex justify-center text-rose-light"
        >
          <svg viewBox="0 0 24 24" width={10} height={10} fill="currentColor">
            <path d="M12 21s-7.2-4.6-10-9.2C.4 8.6 2 5 5.6 5c2 0 3.4 1.1 4.4 2.6C11 6.1 12.4 5 14.4 5 18 5 19.6 8.6 22 11.8 19.2 16.4 12 21 12 21Z" />
          </svg>
        </motion.span>
      </button>
    </div>
  );
}
