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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import mailFormSchema from '@/lib/validation/mail-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { Spinner } from 'react-hot-spinner';
import { useForm } from 'react-hook-form';
import { FormData } from '@/types/mail-form';
import { toast } from 'sonner';
import ContactCard from './ContactCard';
import Reveal from './reveal';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(mailFormSchema),
  });

  // ✅ Static-friendly submit (no server). Opens the user's email client.
  const onSubmit = (formData: FormData) => {
    const { name, email, subject, message } = formData;

    const mailto = `mailto:sudip.sharma013@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;

    // Open default email client with prefilled content
    window.location.href = mailto;

    toast.success('Opening your email client…');
    reset();
  };

  return (
    <>
      <div className="space-y-6 mt-5 max-w-5xl gap-10 mx-auto grid grid-cols-1 md:grid-cols-[0.75fr_1fr]">
        <Reveal className="flex flex-col gap-10">
          <div className="text-left">
            <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
              07 — Get In Touch
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-2">
              Let&apos;s Connect
            </h2>
            <p className="text-muted-foreground">
              I&apos;m always interested in new opportunities and
              collaborations
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
                Send me a message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
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
                      Email
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
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
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
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
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
                  Send Message
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
