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
import { education } from '@/data';

export default function Education() {
  return (
    <div className="space-y-6">
      {/* Section heading */}
      <div>
        <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
          Academics
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
          Education
        </h2>
        <p className="text-muted-foreground text-sm">
          My academic background and qualifications
        </p>
      </div>

      {/* Education cards */}
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="hover:bg-muted/60">
            <CardHeader>
              <div className="flex justify-between flex-col sm:flex-row items-start gap-1">
                <div>
                  <CardTitle className="text-lg font-medium">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {edu.institution}
                  </CardDescription>
                </div>
                <div className="sm:text-right text-sm text-muted-foreground">
                  <div>{edu.period}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {edu.description && (
                <p className="text-muted-foreground">{edu.description}</p>
              )}
              {edu.highlights && edu.highlights.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
