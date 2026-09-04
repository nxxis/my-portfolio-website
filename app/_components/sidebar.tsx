'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { SECTIONS, SECTION_IDS } from './sections';
import { useActiveSection } from '@/hooks/use-active-section';

export default function Sidebar() {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <aside className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:w-[340px] xl:w-[400px] flex-shrink-0 flex-col justify-between py-16 pr-8">
      <div className="space-y-8">
        <div className="space-y-5">
          <div
            className={cn(
              'size-16 rounded-xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden outline outline-offset-[3px] outline-border',
              isMounted && resolvedTheme === 'dark'
                ? 'from-zinc-600 to-zinc-900'
                : 'from-zinc-50 to-zinc-200'
            )}
          >
            <Image
              src="/avatar-p.png"
              alt="Profile photo of Sudip Sharma"
              height={64}
              width={64}
              className="absolute h-full w-full top-0 left-0 object-cover saturate-100"
              quality={100}
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
              Sudip Sharma
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Software Engineer &amp; Researcher
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            I build interpretable AI for healthcare and turn it into
            scalable, elegant products — from ML pipelines to production
            iOS and web apps.
          </p>
        </div>

        <nav aria-label="Section navigation">
          <ul className="space-y-3">
            {SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 py-1"
                  >
                    <span
                      className={cn(
                        'h-px transition-all duration-300',
                        isActive
                          ? 'w-8 bg-primary'
                          : 'w-4 bg-border group-hover:w-8 group-hover:bg-primary/60'
                      )}
                    />
                    <span
                      className={cn(
                        'text-xs font-medium tracking-widest uppercase transition-colors',
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      )}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="space-y-4">
        <Link
          href="/Sudip-Sharma--Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Sudip_Sharma_Resume.pdf"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Download Resume"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="https://github.com/nxxis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nxxis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:sudip.sharma013@gmail.com"
            aria-label="Send Email"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4" />
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}
