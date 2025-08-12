import type React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/next';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Sudip Sharma - Portfolio',
    template: '%s | Sudip Sharma',
  },
  description:
    'Full Stack Developer & Researcher Portfolio of Sudip — building scalable, elegant apps with Node.js, Swift',
  keywords: [
    'Full Stack Developer',
    'iOS Developer',
    'Node.js',
    'Portfolio',
    'Sudip Sharma',
    'Mobile Developer',
    'Researcher',
  ],
  authors: [{ name: 'Sudip Sharma', url: 'https://github.com/nxxis' }],
  creator: 'Sudip Sharma',
  metadataBase: new URL('https://sudipsharma013.com.np'),
  openGraph: {
    type: 'website',
    url: 'https://sudipsharma013.com.np',
    title: 'Sudip Sharma - Portfolio',
    description:
      'Explore the portfolio of Sudip, a full stack developer focused on performance, scalability, and clean UI/UX.',
    siteName: 'Sudip Sharma Portfolio',
    images: [
      {
        url: '/og_bannerr.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sudip Sharma Portfolio',
      },
    ],
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
