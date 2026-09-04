'use client';
import type React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Reveal from './reveal';
import { useLanguage } from './language-context';

export default function Projects() {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  return (
    <>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
            {lang === 'en' ? '06 — Work' : '०६ — काम'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
            {lang === 'en' ? 'Featured Projects' : 'प्रमुख परियोजनाहरू'}
          </h2>
          <p className="text-muted-foreground text-sm">
            {lang === 'en'
              ? 'Some of my recent work and side projects'
              : 'मेरा केही हालैका काम र साइड परियोजनाहरू'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={Math.min(index * 80, 240)}>
              <Card
                className="overflow-hidden hover:bg-muted/60 transition-all duration-300 min-h-min flex flex-col sm:flex-row group p-2"
                aria-label={`Project: ${project.title}, Description: ${
                  project.description[lang]
                }, Technologies: ${project.tech.join(', ')}`}
              >
                {/* <div className="sm:h-full  min-h-40 min-w-full sm:min-w-40 bg-muted rounded-sm max-w-min ">
                <img
                  src={
                    theme === 'dark'
                      ? project.image_dark || project.image
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.03]"
                  aria-label={`Project image for ${project.title}`}
                />
              </div> */}
                <div className="flex flex-col  ">
                  <CardHeader className="space-y-0 px-2 sm:px-4 py-2">
                    <CardTitle className="flex text-base font-medium sm:text-lg items-center justify-between">
                      {project.title}
                      <div className="flex group-hover:opacity-100 sm:opacity-0 transition duration-300">
                        <Button
                          variant="ghost"
                          className="rounded-full"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View project: ${project.title} on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="rounded-full"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit project: ${project.title} live`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="line-clamp-4">
                      {project.description[lang]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-2 sm:px-4 py-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[10px] text-muted-foreground hover:text-foreground font-medium"
                          aria-label={`Technology used: ${tech}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
