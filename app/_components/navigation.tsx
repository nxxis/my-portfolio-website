'use client';

import { cn } from '@/lib/utils';
import { SECTIONS, SECTION_IDS } from './sections';
import { useActiveSection } from '@/hooks/use-active-section';
import { useLanguage } from './language-context';

export function MobileNav() {
  const active = useActiveSection(SECTION_IDS);
  const { lang } = useLanguage();

  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 w-full bg-card border-t border-border shadow-lg z-40"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex overflow-x-auto justify-start">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'py-3 px-3 text-[10px] font-medium border-b-2 transition-colors flex flex-col gap-1 items-center justify-center flex-1 min-w-[64px] shrink-0 whitespace-nowrap',
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
              aria-label={`Go to ${section.label.en} section`}
            >
              <Icon size={16} />
              <span>{section.label[lang]}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
