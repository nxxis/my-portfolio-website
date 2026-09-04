'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'ne';

export interface Bi {
  en: string;
  ne: string;
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'ne') setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem('lang', next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}

// Pull the current language out of a bilingual string pair.
export function pick(field: Bi, lang: Lang): string {
  return field[lang];
}
