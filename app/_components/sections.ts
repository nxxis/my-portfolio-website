import { User, Compass, Briefcase, GraduationCap, BookOpen, Folder, Mail } from 'lucide-react';
import type { Bi } from './language-context';

// Single source of truth for the site's sections — used by the top nav,
// the mobile bottom nav, the side rail, and to number each section heading.
export const SECTIONS: {
  id: string;
  number: string;
  label: Bi;
  icon: typeof User;
}[] = [
  { id: 'about', number: '01', label: { en: 'About', ne: 'परिचय' }, icon: User },
  { id: 'journey', number: '02', label: { en: 'Journey', ne: 'यात्रा' }, icon: Compass },
  { id: 'experience', number: '03', label: { en: 'Experience', ne: 'अनुभव' }, icon: Briefcase },
  { id: 'education', number: '04', label: { en: 'Education', ne: 'शिक्षा' }, icon: GraduationCap },
  { id: 'publications', number: '05', label: { en: 'Publications', ne: 'प्रकाशनहरू' }, icon: BookOpen },
  { id: 'projects', number: '06', label: { en: 'Projects', ne: 'परियोजनाहरू' }, icon: Folder },
  { id: 'contact', number: '07', label: { en: 'Contact', ne: 'सम्पर्क' }, icon: Mail },
] as const;

export const SECTION_IDS = SECTIONS.map((s) => s.id);
