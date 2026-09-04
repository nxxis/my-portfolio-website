'use client';

import { useEffect, useState } from 'react';

const MIN_VISIBLE_MS = 500;
const FADE_MS = 500;
const FALLBACK_MS = 2500; // never wait forever if 'load' is slow to fire

// Covers the first paint with a brief branded screen so a refresh never
// flashes raw content before the page has settled — visible from the very
// first server-rendered frame, fades once the window has fully loaded.
export default function PageLoader() {
  const [phase, setPhase] = useState<'loading' | 'fading' | 'done'>(
    'loading'
  );

  useEffect(() => {
    const start = Date.now();

    const startFade = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
      setTimeout(() => setPhase('fading'), remaining);
    };

    if (document.readyState === 'complete') {
      startFade();
    } else {
      window.addEventListener('load', startFade);
    }
    const fallback = setTimeout(startFade, FALLBACK_MS);

    return () => {
      window.removeEventListener('load', startFade);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'fading') return;
    const t = setTimeout(() => setPhase('done'), FADE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity ease-out ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-primary" />
        </span>
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
          Sudip Sharma
        </span>
      </div>
    </div>
  );
}
