'use client';
import type React from 'react';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getMailFormSchema } from '@/lib/validation/mail-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { Spinner } from 'react-hot-spinner';
import { useForm } from 'react-hook-form';
import { FormData } from '@/types/mail-form';
import { toast } from 'sonner';
import ContactCard from './ContactCard';
import Reveal from './reveal';
import { useLanguage } from './language-context';

export default function Contact() {
  const { lang } = useLanguage();
  const schema = useMemo(() => getMailFormSchema(lang), [lang]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // ✅ Static-friendly submit (no server). Opens the user's email client.
  const onSubmit = (formData: FormData) => {
    const { name, email, subject, message } = formData;

    const mailto = `mailto:sudip.sharma013@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;

    // Open default email client with prefilled content
    window.location.href = mailto;

    toast.success(
      lang === 'en'
        ? 'Opening your email client…'
        : 'तपाईंको इमेल क्लाइन्ट खुलिरहेको छ…'
    );
    reset();
  };

  return (
    <>
      <div className="space-y-6 mt-5 gap-10 grid grid-cols-1 md:grid-cols-[0.75fr_1fr]">
        <Reveal className="flex flex-col gap-10">
          <div className="text-left">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
              {lang === 'en' ? '07 — Get In Touch' : '०७ — सम्पर्क गर्नुहोस्'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
              {lang === 'en' ? "Let's Connect" : 'जोडिनुहोस्'}
            </h2>
            <p className="text-muted-foreground">
              {lang === 'en'
                ? "I'm always interested in new opportunities and collaborations"
                : 'म सधैं नयाँ अवसर र सहकार्यमा रुचि राख्छु'}
            </p>
          </div>
          {/* left side */}
          <ContactCard />
        </Reveal>

        {isSubmitting ? (
          <Card>
            <CardContent className="flex min-h-80 flex-col items-center justify-center h-full">
              <Spinner size={25} />
            </CardContent>
            <CardHeader></CardHeader>
          </Card>
        ) : (
          <Reveal delay={100}>
          <Card>
            <CardHeader>
              <CardTitle className="font-medium text-xl">
                {lang === 'en' ? 'Send me a message' : 'मलाई सन्देश पठाउनुहोस्'}
              </CardTitle>
              <CardDescription>
                {lang === 'en'
                  ? "Fill out the form below and I'll get back to you as soon as possible"
                  : 'तलको फारम भर्नुहोस्, म चाँडोभन्दा चाँडो जवाफ दिनेछु'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground">
                      {lang === 'en' ? 'Name' : 'नाम'}
                    </Label>
                    <Input
                      id="name"
                      placeholder={lang === 'en' ? 'Your name' : 'तपाईंको नाम'}
                      {...register('name')}
                      aria-label="Your name"
                    />
                    {errors.name && (
                      <span className="text-xs sm:text-sm text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground">
                      {lang === 'en' ? 'Email' : 'इमेल'}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email')}
                      aria-label="Your email address"
                    />
                    {errors.email && (
                      <span className="text-xs sm:text-sm text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-muted-foreground">
                    {lang === 'en' ? 'Subject' : 'विषय'}
                  </Label>
                  <Input
                    id="subject"
                    placeholder={
                      lang === 'en' ? "What's this about?" : 'यो केको बारेमा हो?'
                    }
                    {...register('subject')}
                    aria-label="Subject of your message"
                  />
                  {errors.subject && (
                    <span className="text-xs sm:text-sm text-red-600">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">
                    {lang === 'en' ? 'Message' : 'सन्देश'}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={
                      lang === 'en' ? 'Your message...' : 'तपाईंको सन्देश...'
                    }
                    rows={5}
                    {...register('message')}
                    aria-label="Your message"
                  />
                  {errors.message && (
                    <span className="text-sm text-red-600">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {lang === 'en' ? 'Send Message' : 'सन्देश पठाउनुहोस्'}
                </Button>
              </form>
            </CardContent>
          </Card>
          </Reveal>
        )}
      </div>
    </>
  );
}
