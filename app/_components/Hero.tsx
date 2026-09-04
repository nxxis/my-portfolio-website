'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Skeleton fallback for hydration-safe UI
    return (
      <div className="border-b border-border pb-8 px-2 py-4 mb-6">
        <div className="flex items-center justify-between gap-1 pt-5 animate-pulse">
          <div className="flex space-x-4 gap-4 flex-col">
            <div className="size-20 sm:size-28 rounded-lg bg-muted/40" />
            <div>
              <div className="h-5 sm:h-8 w-32 sm:w-48 bg-muted/40 rounded mb-2" />
              <div className="h-4 w-52 bg-muted/40 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-32 bg-muted/40 rounded-full" />
              <div className="h-8 w-24 bg-muted/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-border pb-8 px-2 py-4 mb-6">
      <div className="flex items-center justify-between gap-1 pt-5">
        <div className="flex space-x-4 gap-4 flex-col">
          <div className="relative">
            <div
              className={cn(
                'size-20 sm:size-28 rounded-lg bg-gradient-to-br flex items-center justify-center relative outline outline-offset-[3px] outline-border',
                resolvedTheme === 'dark'
                  ? 'from-zinc-600 to-zinc-900'
                  : 'from-zinc-50 to-zinc-200'
              )}
            >
              <Image
                src="/avatar-p.png"
                alt="Profile photo"
                height={112}
                width={112}
                className="absolute h-full w-full top-0 left-0 rounded-lg object-cover saturate-100"
                aria-label="Profile photo of Sudip Sharma"
                quality={100}
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
              Sudip Sharma
              <div className="size-1.5 sm:size-2.5 animate-pulse relative after:content-[''] after:absolute flex items-center justify-center after:h-full after:w-full after:bg-green-400 after:rounded-full after:animate-ping rounded-full bg-primary"></div>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-lg mt-1">
              Software Engineer &amp; Researcher
            </p>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
            I build interpretable AI for healthcare and turn it into
            scalable, elegant products — from ML pipelines to production iOS
            and web apps.
          </p>

          <div className="flex justify-start gap-2 items-center">
            <a
              href="/Sudip-Sharma--Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume"
            >
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-primary hover:bg-primary/70"
              >
                Download Resume
              </Button>
            </a>
            <a href="#contact" aria-label="Contact Me">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-muted-foreground"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
