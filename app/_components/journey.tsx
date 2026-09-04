import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { interests, timeline, momentGroups } from '@/data';

export default function Journey() {
  return (
    <div className="space-y-14">
      {/* Intro */}
      <div className="space-y-5 max-w-2xl">
        <p className="text-xs font-medium tracking-widest text-primary uppercase">
          My Story
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          Journey
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          From Nepal to Baltimore: I chase problems worth solving by day, and
          mountains, songs, and good light everywhere else. Here&apos;s the
          short version of how I got here — and what keeps me going outside
          of work.
        </p>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {interest.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-10 sm:pl-12">
        <div className="absolute left-[15px] sm:left-[17px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative opacity-0 animate-[fade-slide-up_0.45s_ease-out_both]"
                style={{ animationDelay: `${Math.min(index * 50, 350)}ms` }}
              >
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
                    {item.year}
                  </span>
                  {'current' in item && item.current && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                      </span>
                      <Badge variant="secondary" className="text-[10px]">
                        Now
                      </Badge>
                    </span>
                  )}
                </div>
                <h3 className="font-medium leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Moments */}
      <div className="space-y-5">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
            In Pictures
          </p>
          <h3 className="text-xl font-medium">Moments</h3>
          <p className="text-muted-foreground text-sm mt-1">
            The story so far, in photos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {momentGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card
                key={group.title}
                className="overflow-hidden hover:bg-muted/60 transition-colors duration-300"
              >
                <CardContent className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <h4 className="font-medium text-sm">{group.title}</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {group.images.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt={`${group.title} ${i + 1}`}
                        className="aspect-square rounded-md object-cover w-full h-full"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
