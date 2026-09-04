'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { momentGroups } from '@/data';

const photos = momentGroups.flatMap((group) =>
  group.images.map((src, i) => ({
    src,
    icon: group.icon,
    caption:
      group.images.length > 1
        ? `${group.title} (${i + 1}/${group.images.length})`
        : group.title,
  }))
);

export default function MomentsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
  const [count, setCount] = React.useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(false);

  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    setAutoplayEnabled(
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={autoplayEnabled ? [autoplay.current] : []}
        className="w-full"
      >
        <CarouselContent>
          {photos.map((photo) => (
            <CarouselItem key={photo.src}>
              <div className="relative w-full h-[300px] sm:h-[440px] rounded-lg overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <photo.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">
                  {photo.caption}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 border-none bg-background/90 backdrop-blur hover:bg-background" />
        <CarouselNext className="right-2 border-none bg-background/90 backdrop-blur hover:bg-background" />
      </Carousel>
      <p className="text-center text-xs text-muted-foreground mt-3">
        {current} / {count}
      </p>
    </div>
  );
}
