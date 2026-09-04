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

export default function Experience() {
  return (
    <>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
            03 — Career
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-sm">
            My professional journey and achievements
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
                        {job.title}
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
                  <p className="text-muted-foreground">{job.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {achievement}
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
