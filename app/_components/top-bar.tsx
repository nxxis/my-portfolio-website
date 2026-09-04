'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from './language-toggle';
import { cn } from '@/lib/utils';
import { SECTIONS, SECTION_IDS } from './sections';
import { useActiveSection } from '@/hooks/use-active-section';
import { useLanguage } from './language-context';

export default function TopBar() {
  const active = useActiveSection(SECTION_IDS);
  const { lang } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastY.current;
      setHidden(scrollingDown && y > 120);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'sticky top-0 z-40 bg-background border-b border-border transition-transform duration-300',
        hidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="container mx-auto px-3 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between gap-4 py-3 sm:py-0">
          <div className="flex gap-6 sm:gap-8 overflow-x-auto">
            {SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={cn(
                    'hidden sm:inline-flex py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                    isActive
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  )}
                >
                  {section.label[lang]}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href="https://github.com/nxxis"
              aria-label="View GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 sm:mr-1" />
                <span className="hidden sm:inline">
                  {lang === 'en' ? 'View GitHub' : 'GitHub हेर्नुहोस्'}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
