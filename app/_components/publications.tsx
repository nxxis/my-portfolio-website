import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink } from 'lucide-react';
import { publications } from '@/data';
import Link from 'next/link';
import Reveal from './reveal';

export default function Publications() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
          05 — Research
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
          Publications
        </h2>
        <p className="text-muted-foreground text-sm">
          Peer-reviewed research and work in progress
        </p>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Reveal key={index} delay={Math.min(index * 80, 240)}>
            <Card className="hover:bg-muted/60 transition-colors duration-300">
              <CardHeader>
                <div className="flex justify-between flex-col sm:flex-row items-start gap-3">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg font-medium leading-snug">
                        {pub.link && pub.link !== '#' ? (
                          <Link
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-start gap-1 hover:underline"
                            aria-label={`Read publication: ${pub.title}`}
                          >
                            {pub.title}
                            <ExternalLink className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                          </Link>
                        ) : (
                          pub.title
                        )}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-primary mt-1">
                        {pub.venue}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                    <Badge
                      variant={pub.status === 'Accepted' ? 'default' : 'outline'}
                    >
                      {pub.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {pub.year}
                    </span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
