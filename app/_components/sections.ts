import { User, Compass, Briefcase, GraduationCap, BookOpen, Folder, Mail } from 'lucide-react';

// Single source of truth for the site's sections — used by the desktop
// sidebar nav, the mobile bottom nav, and to number each section heading.
export const SECTIONS = [
  { id: 'about', number: '01', label: 'About', icon: User },
  { id: 'journey', number: '02', label: 'Journey', icon: Compass },
  { id: 'experience', number: '03', label: 'Experience', icon: Briefcase },
  { id: 'education', number: '04', label: 'Education', icon: GraduationCap },
  { id: 'publications', number: '05', label: 'Publications', icon: BookOpen },
  { id: 'projects', number: '06', label: 'Projects', icon: Folder },
  { id: 'contact', number: '07', label: 'Contact', icon: Mail },
] as const;

export const SECTION_IDS = SECTIONS.map((s) => s.id);
