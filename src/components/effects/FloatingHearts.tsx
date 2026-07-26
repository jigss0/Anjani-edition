import * as React from 'react';
import { useMemo, useRef, useState, useCallback } from 'react';

interface DriftingHeart {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

const HEART_COUNT = 7;
let sparkleIdSeq = 0;

/**
 * Global ambient effect: a handful of soft hearts drift gently across the
 * whole experience. Tapping one throws a tiny sparkle burst from that spot.
 * Fixed + pointer-events-none at the container level, with pointer-events
 * re-enabled only on the individual hearts, so it never blocks page taps.
 */
export function FloatingHearts() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const timers = useRef<number[]>([]);

  const hearts = useMemo<DriftingHeart[]>(
    () =>
      Array.from({ length: HEART_COUNT }).map((_, i) => ({
        id: i,
        top: 8 + Math.round(Math.random() * 78),
        left: 4 + Math.round(Math.random() * 90),
        delay: Math.round(Math.random() * 5 * 10) / 10,
        duration: 5 + Math.round(Math.random() * 4),
        size: 14 + Math.round(Math.random() * 10),
      })),
    [],
  );

  const popHeart = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const id = sparkleIdSeq++;

    setSparkles((prev) => [...prev, { id, x, y }]);

    const life = prefersReduced ? 1 : 900;
    const t = window.setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, life);
    timers.current.push(t);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[55] overflow-hidden">
      {hearts.map((h) => (
        <button
          key={h.id}
          type="button"
          tabIndex={-1}
          onClick={popHeart}
          className="pointer-events-auto absolute animate-float text-rose/50 opacity-70 transition hover:opacity-100 hover:text-rose active:scale-90"
          style={{
            top: `${h.top}%`,
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
          aria-label="A little heart"
        >
          <svg viewBox="0 0 24 24" width={h.size} height={h.size} fill="currentColor">
            <path d="M12 21s-7.2-4.6-10-9.2C.4 8.6 2 5 5.6 5c2 0 3.4 1.1 4.4 2.6C11 6.1 12.4 5 14.4 5 18 5 19.6 8.6 22 11.8 19.2 16.4 12 21 12 21Z" />
          </svg>
        </button>
      ))}

      {sparkles.map((s) => (
        <SparkleBurst key={s.id} x={s.x} y={s.y} />
      ))}
    </div>
  );
}

function SparkleBurst({ x, y }: { x: number; y: number }) {
  const bits = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.4;
        const dist = 22 + Math.random() * 18;
        return {
          id: i,
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist,
        };
      }),
    [],
  );

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {bits.map((b) => (
        <span
          key={b.id}
          className="sparkle-bit absolute h-1.5 w-1.5 rounded-full bg-gold-light"
          style={
            {
              '--sx': `${b.dx}px`,
              '--sy': `${b.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
