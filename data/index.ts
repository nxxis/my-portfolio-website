import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from 'lucide-react';

export const skills = [
  { name: 'JavaScript', icon: Code, level: 80 },
  { name: 'TypeScript', icon: Code, level: 80 },
  { name: 'SwiftUI', icon: Code, level: 85 },
  { name: 'Node.js', icon: Server, level: 85 },
  { name: 'Python', icon: Code, level: 80 },
  { name: 'MongoDB', icon: Database, level: 80 },
  { name: 'AWS', icon: Server, level: 75 },
  { name: 'Mobile Dev', icon: Smartphone, level: 75 },
];

export const projects = [
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.',
    tech: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    github: 'https://github.com/nxxis/my-portfolio-website',
    live: 'https://sudipsharma013.com.np',
    image: '/placeholder.svg?height=200&width=400',
    image_dark: '/placeholder.dark.svg?height=200&width=400',
  },
  {
    title: 'Medico',
    description:
      'A medical app built with Flutter and Firebase. Designed a non-relational schema in Firestore and implemented NMC ID verification, authentication (Sign Up/Sign In), and auto-login if the number is already registered.',
    tech: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Dart'],
    github: 'https://github.com/saugat-adh/medico',
    live: '#',
    image: '/placeholder.svg?height=200&width=400',
    image_dark: '/placeholder.dark.svg?height=200&width=400',
  },
  {
    title: 'DASS-42 Data Frame Analysis',
    description:
      'Data mining project: prepared the dataset, performed EDA, and compared multiple ML algorithms. Pipeline included preprocessing, visualization, and evaluation via classification report.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
    ],
    github: 'https://github.com/nxxis/DASS-42-DataFrame-Analysis',
    live: '#',
    image: '/placeholder.svg?height=200&width=400',
    image_dark: '/placeholder.dark.svg?height=200&width=400',
  },
];

export const experience = [
  {
    title: 'Graduate Mentor (CEAMLS)',
    company: 'Morgan State University',
    period: 'May 2025 – Aug 2025',
    location: 'Baltimore, MD',
    description:
      'Led a multimodal ECG classification project and guided undergraduates on feature extraction and model fusion, focusing on performance and interpretability.',
    achievements: [
      'Achieved 90%+ model accuracy across 1D-CNN, Transformer, and 2D-CNN',
      'Improved ensemble performance and interpretability',
      'Presented Grad-CAM outputs and optimized preprocessing for fairness',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'Morgan State University',
    period: 'Sep 2024 – May 2025',
    location: 'Baltimore, MD',
    description:
      'Built interpretable time-series predictors on NIH Chest X-rays using a CNN–Transformer pipeline with SHAP/Grad-CAM.',
    achievements: [
      'AUC 0.89 and PR-AUC 0.31 on temporal forecasting',
      'Designed CNN–Transformer pipeline for multi-label findings',
      'Delivered clinician-facing explanations via SHAP/Grad-CAM',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'EB Pearls',
    period: 'Jul 2023 – Aug 2024',
    location: 'Lalitpur, Nepal',
    description:
      'Developed iOS features in SwiftUI/UIKit and backend GraphQL APIs with NestJS to improve UX, security, and performance.',
    achievements: [
      'Integrated OTP/token auth and UX alerts/navigation',
      'Google Calendar integration increased user experience by 63%',
      'GraphQL APIs improved data performance by 37%',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'EB Pearls',
    period: 'Apr 2023 – Jul 2023',
    location: 'Lalitpur, Nepal',
    description:
      'Built iOS UIs with SwiftUI/UIKit and contributed Node.js/Express backend features while ramping up on modern dev practices.',
    achievements: [
      'Shipped SwiftUI/UIKit interfaces for production apps',
      'Implemented backend features in Node.js/Express',
      'Recognised by manager for fast learning and research',
    ],
  },
];
export const education = [
  {
    degree: 'Master of Science in Advanced Computing',
    institution: 'Morgan State University',
    period: '2024 – 2026 (Expected)',
    location: 'Baltimore, MD, USA',
    description: 'Focusing on AI, deep learning, and medical image analysis.',
    highlights: [
      'Research Assistant under CEAMLS (Center for Equitable Artificial Intelligence and Machine Learning Systems)',
      'Presented at the National Symposium on Equitable AI (2025)',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Kathmandu University',
    period: '2018 – 2023',
    location: 'Dhulikhel, Nepal',
    description: 'Emphasis on software engineering and data science.',
    highlights: [
      'Led non-technical events for IT-MEET 2022',
      'Member of Kathmandu University Computer Club (KUCC)',
    ],
  },
];
