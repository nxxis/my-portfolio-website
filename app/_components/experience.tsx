'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { experience } from '@/data';
import Reveal from './reveal';
import { useLanguage } from './language-context';

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
            {lang === 'en' ? '03 — Career' : '०३ — करियर'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
            {lang === 'en' ? 'Work Experience' : 'कार्य अनुभव'}
          </h2>
          <p className="text-muted-foreground text-sm">
            {lang === 'en'
              ? 'My professional journey and achievements'
              : 'मेरो व्यावसायिक यात्रा र उपलब्धिहरू'}
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <Reveal key={index} delay={Math.min(index * 80, 240)}>
              <Card className="hover:bg-muted/60">
                <CardHeader>
                  <div className="flex justify-between flex-col sm:flex-row items-start gap-1">
                    <div>
                      <CardTitle className="text-lg font-medium">
                        {job.title[lang]}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="sm:text-right text-sm text-muted-foreground">
                      <div>{job.period}</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {job.description[lang]}
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">
                      {lang === 'en' ? 'Key Achievements:' : 'प्रमुख उपलब्धिहरू:'}
                    </h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {achievement[lang]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
