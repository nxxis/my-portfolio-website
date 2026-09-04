'use client';

import { useEffect, useState } from 'react';

// Tracks which section is currently in the "reading zone" of the viewport,
// so nav links can highlight in sync with scroll position.
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
