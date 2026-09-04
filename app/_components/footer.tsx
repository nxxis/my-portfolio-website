import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8 lg:px-20 xl:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {year} Sudip Sharma. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/nxxis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/nxxis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:sudip.sharma013@gmail.com"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
