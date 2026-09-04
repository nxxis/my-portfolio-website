'use client';

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
import { useLanguage } from './language-context';

export default function About() {
  const { lang } = useLanguage();

  return (
    <>
      <Hero />

      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
            {lang === 'en' ? '01 — About' : '०१ — परिचय'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
            {lang === 'en' ? 'Bio' : 'जीवनी'}
          </h2>
        </div>

        <div className="space-y-8">
          <Reveal>
            <Card>
              <CardContent className="p-4 sm:p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {lang === 'en'
                    ? 'Passionate ML + full-stack developer with 1.5+ years of iOS front-end experience (SwiftUI, UIKit) and backend expertise in Node.js (NestJS). I build interpretable, fair, and reliable AI for time-series and medical imaging, and turn it into scalable web and mobile products. My toolkit includes Python (TensorFlow, PyTorch, scikit-learn), MongoDB, GraphQL, and cloud technologies, with a strong focus on UX and performance.'
                    : 'म ML र full-stack विकासमा उत्साही छु, १.५+ वर्षको iOS फ्रन्ट-इन्ड अनुभव (SwiftUI, UIKit) र Node.js (NestJS) मा ब्याकइन्ड विशेषज्ञतासहित। म समय-श्रृंखला र मेडिकल इमेजिङका लागि व्याख्यायोग्य, निष्पक्ष, र भरपर्दो AI निर्माण गर्छु, र यसलाई स्केलेबल वेब र मोबाइल उत्पादनमा बदल्छु। मेरो टूलकिटमा Python (TensorFlow, PyTorch, scikit-learn), MongoDB, GraphQL, र क्लाउड टेक्नोलोजी समावेश छन्, UX र प्रदर्शनमा बलियो जोडका साथ।'}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {lang === 'en'
                    ? "When I'm not coding, I mentor students, organise tech and community events, write practical tech pieces, and explore the latest web technologies. Offline, you'll find me hiking or trekking, out in nature with a camera, or playing guitar and singing."
                    : 'जब म कोडिङ गर्दिन, म विद्यार्थीहरूलाई मार्गदर्शन गर्छु, टेक र सामुदायिक कार्यक्रमहरू आयोजना गर्छु, व्यावहारिक टेक लेखहरू लेख्छु, र नयाँ वेब टेक्नोलोजीहरू अन्वेषण गर्छु। अफलाइन, तपाईंले मलाई हाइकिङ वा ट्रेकिङ गर्दै, क्यामेरा लिएर प्रकृतिमा, वा गितार बजाउँदै र गाउँदै भेट्टाउनुहुनेछ।'}
                </p>
                <div className="flex gap-3 sm:gap-0 sm:items-center flex-col sm:flex-row sm:space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Baltimore, MD
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {lang === 'en' ? 'Available for hire' : 'काम गर्न उपलब्ध'}
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
                    {lang === 'en' ? 'Download Resume' : 'रिज्युमे डाउनलोड गर्नुहोस्'}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  {lang === 'en' ? 'Skills & Technologies' : 'सीप र प्रविधिहरू'}
                </CardTitle>
                <CardDescription>
                  {lang === 'en'
                    ? 'Technologies I work with regularly'
                    : 'मैले नियमित प्रयोग गर्ने प्रविधिहरू'}
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
