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
    title: 'Graduate Mentor, CEAMLS',
    company: 'Morgan State University',
    period: 'Summer 2025 & 2026',
    location: 'Baltimore, MD',
    description:
      'Led interdisciplinary undergraduate research teams building Python/TensorFlow healthcare AI systems for the Center for Equitable Artificial Intelligence and Machine Learning Systems (CEAMLS), providing technical direction on model design, experimentation, code quality, and research methodology.',
    achievements: [
      'Built multimodal ECG classification pipelines using 1D-CNN, Transformer, and 2D-CNN architectures, achieving 90%+ accuracy',
      'Improved ensemble performance by 14% through time-, frequency-, and time-frequency features',
      'Automated preprocessing, training, and evaluation workflows with Python, NumPy, and TensorFlow, reducing GPU training time by 30%',
      'Implemented fairness, Grad-CAM, and robustness analyses for clinician-facing interpretability',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'EB Pearls',
    period: 'Jul 2023 – Aug 2024',
    location: 'Lalitpur, Nepal',
    description:
      'Designed, tested, deployed, and maintained secure authentication flows and GraphQL APIs across mobile and administrative applications.',
    achievements: [
      'Designed secure login, OTP, and JWT auth flows in SwiftUI, improving login success by 40% and user satisfaction by 63%',
      'Developed TypeScript/NestJS GraphQL APIs and optimized data queries, improving retrieval speed by 37%',
      'Integrated the Google Calendar API for 1K+ active users, improving scheduling efficiency and engagement',
      'Collaborated with product and engineering on debugging, code reviews, and releases, reducing production bug reports by 25%',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'EB Pearls',
    period: 'Apr 2023 – Jul 2023',
    location: 'Lalitpur, Nepal',
    description:
      'Developed iOS applications in SwiftUI/UIKit and contributed Node.js/Express backend services while ramping up on modern engineering practices.',
    achievements: [
      'Built iOS apps with SwiftUI, UIKit, and MVVM, increasing in-app session length by 18%',
      'Built and optimized REST/GraphQL backend services with Node.js and Express, improving API response time by 22%',
      'Implemented real-time notification workflows with WebSockets, increasing engagement by 13%',
    ],
  },
];

export const publications = [
  {
    title: 'Trust and Transparency: Making AI Explainable in Healthcare',
    venue: 'Springer Nature Switzerland (International)',
    status: 'Accepted',
    year: '2026',
    link: '#',
  },
  {
    title:
      'Interpretable Time-Series Deep Learning for Monitoring Disease Progression in Chest Radiography',
    venue: 'IEEE eIT 2026',
    status: 'Accepted',
    year: '2026',
    link: '#',
  },
  {
    title:
      'Cross-Domain Generalization and Fairness in Skin Lesion Classification: An Empirical Study of Architectural Robustness under Human-Centric Constraints',
    venue: 'IEEE SMC 2026',
    status: 'Accepted',
    year: '2026',
    link: '#',
  },
  {
    title:
      'Predictive Stability Versus Fairness Instability in Multi-Label ECG Classification: A Multi-Seed, Cross-Institutional Analysis',
    venue: 'IEEE JBHI 2026',
    status: 'In Progress',
    year: '2026',
    link: '#',
  },
  {
    title:
      'CITE-ODE: Continuous-Time Evidential Modeling for Selective Prediction under Structured Missingness in ICU Time Series',
    venue: 'IEEE JBHI 2026',
    status: 'In Progress',
    year: '2026',
    link: '#',
  },
];
export const education = [
  {
    degree: 'Doctor of Philosophy (Ph.D.) in Advanced Computing',
    institution: 'Morgan State University',
    period: 'Expected May 2029',
    location: 'Baltimore, MD, USA',
    description:
      'Continuing research in equitable AI and machine learning systems for healthcare applications.',
    highlights: [] as string[],
  },
  {
    degree: 'Master of Science in Advanced Computing',
    institution: 'Morgan State University',
    period: 'Aug 2024 – May 2026',
    location: 'Baltimore, MD, USA',
    description: 'Focusing on AI, deep learning, and medical image analysis.',
    highlights: [
      'Relevant Coursework: Design and Analysis of Algorithms, Software Engineering, Cloud Computing',
      'Research Assistant under CEAMLS (Center for Equitable Artificial Intelligence and Machine Learning Systems)',
      'Presented at the National Symposium on Equitable AI (2025)',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
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
