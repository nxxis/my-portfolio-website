'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { SECTIONS, SECTION_IDS } from './sections';
import { useActiveSection } from '@/hooks/use-active-section';
import { useLanguage } from './language-context';

const GLIMPSE_MS = 1400;

// A faint position indicator on the left edge — a tick per section. The
// current section's name glimpses into view right as you arrive, then
// collapses back to just the highlighted tick. Hovering expands the rest
// into a quick-jump nav.
export default function SideRail() {
  const active = useActiveSection(SECTION_IDS);
  const { lang } = useLanguage();
  const [glimpseId, setGlimpseId] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => {
    setGlimpseId(active);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setGlimpseId(null), GLIMPSE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active]);

  return (
    <div className="hidden xl:flex group fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-3 py-4">
      {SECTIONS.map((section) => {
        const isActive = active === section.id;
        const showGlimpse = isActive && glimpseId === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex items-center gap-3"
            aria-label={`Go to ${section.label.en} section`}
          >
            <span
              className={cn(
                'h-px shrink-0 transition-all duration-300',
                isActive
                  ? 'w-6 bg-primary'
                  : 'w-3 bg-border group-hover:w-4 group-hover:bg-muted-foreground'
              )}
            />
            <span
              className={cn(
                'overflow-hidden whitespace-nowrap rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300',
                'bg-background border border-border shadow-sm',
                showGlimpse
                  ? 'max-w-[9rem] opacity-100 px-3 py-1'
                  : 'max-w-0 opacity-0 group-hover:max-w-[9rem] group-hover:opacity-100 group-hover:px-3 group-hover:py-1',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {section.label[lang]}
            </span>
          </a>
        );
      })}
    </div>
  );
}
