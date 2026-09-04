'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { interests, timeline } from '@/data';
import Reveal from './reveal';
import MomentsCarousel from './moments-carousel';
import { useLanguage } from './language-context';

export default function Journey() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-14">
      {/* Intro */}
      <Reveal className="space-y-5 max-w-2xl">
        <p className="text-xs font-medium tracking-widest text-primary uppercase">
          {lang === 'en' ? '02 — My Story' : '०२ — मेरो कथा'}
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          {lang === 'en' ? 'Journey' : 'यात्रा'}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {lang === 'en'
            ? "From Nepal to Baltimore: I chase problems worth solving by day, and mountains, songs, and good light everywhere else. Here's the short version of how I got here — and what keeps me going outside of work."
            : 'नेपालदेखि ब्याल्टिमोरसम्म: दिनभर म समाधान गर्न लायक समस्याहरू पछ्याउँछु, र बाँकी समयमा पहाड, गीत, र राम्रो उज्यालोको खोजी गर्छु। यहाँ म कसरी यहाँसम्म आइपुगें भन्ने छोटो कथा छ — र काम बाहिर मलाई के ले अगाडि बढाइरहेको छ।'}
        </p>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.label.en}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {interest.label[lang]}
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative pl-10 sm:pl-12">
        <div className="absolute left-[15px] sm:left-[17px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title.en} className="relative">
                <div
                  className={`absolute -left-10 sm:-left-12 top-0 flex items-center justify-center size-8 sm:size-9 rounded-full border-2 ${
                    item.kind === 'milestone'
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'bg-background border-primary/40 text-primary'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {item.year[lang]}
                  </span>
                  {'current' in item && item.current && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                      </span>
                      <Badge variant="secondary" className="text-[10px]">
                        {lang === 'en' ? 'Now' : 'अहिले'}
                      </Badge>
                    </span>
                  )}
                </div>
                <h3 className="font-medium leading-snug">
                  {item.title[lang]}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-xl">
                  {item.description[lang]}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Moments */}
      <Reveal className="space-y-5">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
            {lang === 'en' ? 'In Pictures' : 'तस्बिरहरूमा'}
          </p>
          <h3 className="text-xl font-medium">
            {lang === 'en' ? 'Moments' : 'क्षणहरू'}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {lang === 'en'
              ? 'The story so far, in photos.'
              : 'अहिलेसम्मको कथा, तस्बिरहरूमा।'}
          </p>
        </div>
        <MomentsCarousel />
      </Reveal>
    </div>
  );
}
