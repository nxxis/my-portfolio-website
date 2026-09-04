import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, Download, MapPin } from 'lucide-react';
import { skills } from '@/data';
import Link from 'next/link';
import Hero from './Hero';
import Reveal from './reveal';

export default function About() {
  return (
    <>
      <Hero />

      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
            01 — About
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
            Bio
          </h2>
        </div>

        <div className="space-y-8">
          <Reveal>
            <Card>
              <CardContent className="p-4 sm:p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Passionate ML + full-stack developer with 1.5+ years of iOS
                  front-end experience (SwiftUI, UIKit) and backend expertise
                  in Node.js (NestJS). I build interpretable, fair, and
                  reliable AI for time-series and medical imaging, and turn
                  it into scalable web and mobile products. My toolkit
                  includes Python (TensorFlow, PyTorch, scikit-learn),
                  MongoDB, GraphQL, and cloud technologies, with a strong
                  focus on UX and performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I’m not coding, I mentor students, organise tech and
                  community events, write practical tech pieces, and explore
                  the latest web technologies. Offline, you’ll find me
                  hiking or trekking, out in nature with a camera, or
                  playing guitar and singing.
                </p>
                <div className="flex gap-3 sm:gap-0 sm:items-center flex-col sm:flex-row sm:space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Baltimore, MD
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Available for hire
                  </div>
                </div>

                <div>
                  <Link
                    href="/Sudip-Sharma--Resume.pdf"
                    target="_blank"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                    aria-label="Download Resume"
                    download="Sudip_Sharma_Resume.pdf"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Skills & Technologies
                </CardTitle>
                <CardDescription>
                  Technologies I work with regularly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </>
  );
}
