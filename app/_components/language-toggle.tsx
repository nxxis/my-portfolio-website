'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from './language-context';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-md border border-input p-0.5 h-9">
      <button
        type="button"
        onClick={() => setLang('en')}
        className={cn(
          'px-2 h-full rounded text-xs font-medium transition-colors',
          lang === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to English"
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ne')}
        className={cn(
          'px-2 h-full rounded text-xs font-medium transition-colors',
          lang === 'ne'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="नेपालीमा बदल्नुहोस्"
        aria-pressed={lang === 'ne'}
      >
        ने
      </button>
    </div>
  );
}
