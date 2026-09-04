'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from './language-context';

const contactItems = [
  {
    icon: <Mail className="size-7 text-muted-foreground" />,
    title: { en: 'Email', ne: 'इमेल' },
    value: 'sudip.sharma013@gmail.com',
    link: 'mailto:sudip.sharma013@gmail.com',
  },
  {
    icon: <Linkedin className="size-7 text-muted-foreground" />,
    title: { en: 'LinkedIn', ne: 'LinkedIn' },
    value: '@nxxis',
    link: 'https://www.linkedin.com/in/nxxis/',
  },
  {
    icon: <Github className="size-7 text-muted-foreground" />,
    title: { en: 'GitHub', ne: 'GitHub' },
    value: '@nxxis',
    link: 'https://github.com/nxxis',
  },
];

export default function ContactCard() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-8">
        {contactItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            aria-label={`${item.title.en} links`}
          >
            <Card className="w-full md:max-w-xs hover:bg-muted/60 transition-all duration-300">
              <CardContent className="flex items-center gap-3 p-2">
                <div className="h-16 w-16 rounded-md border border-border bg-background flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium">{item.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
