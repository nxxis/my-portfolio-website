import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
  Award,
  Presentation,
  Video,
  Rocket,
  Trophy,
  GraduationCap,
  Users,
  PlaneTakeoff,
  Medal,
  Sparkles,
  Mountain,
  Footprints,
  TreePine,
  Mic2,
  Guitar,
  Camera,
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

// What I'm about outside of work — shown as a chip strip on the Journey tab.
export const interests = [
  { label: 'Hiking', icon: Mountain },
  { label: 'Trekking', icon: Footprints },
  { label: 'Nature', icon: TreePine },
  { label: 'Singing', icon: Mic2 },
  { label: 'Guitar', icon: Guitar },
  { label: 'Photography', icon: Camera },
];

// The story, told chronologically — milestones and achievements woven together.
export const timeline = [
  {
    year: '2018',
    title: 'The journey begins',
    description:
      'Started a B.S. in Computer Science at Kathmandu University in Dhulikhel, Nepal.',
    icon: GraduationCap,
    kind: 'milestone',
  },
  {
    year: '2022',
    title: 'IT MEET 2022',
    description:
      'Led non-technical events as part of the organizing team, coordinating 5+ university events and growing student participation by 21%.',
    icon: Users,
    kind: 'achievement',
  },
  {
    year: '2023',
    title: 'Graduated — Kathmandu University',
    description:
      'Earned my B.S. in Computer Science, with an emphasis on software engineering and data science.',
    icon: Award,
    kind: 'milestone',
  },
  {
    year: '2024',
    title: 'Moved to the U.S.',
    description:
      "Packed my bags for Baltimore to start a Master's in Advanced Computing at Morgan State University — new city, new chapter.",
    icon: PlaneTakeoff,
    kind: 'milestone',
  },
  {
    year: 'Grad school',
    title: 'AUC Data Science Initiative — 3rd Place',
    description:
      'Placed 3rd with the Mastercard Center for Inclusive Growth, building models to analyze financial inclusion disparities across demographic groups.',
    icon: Trophy,
    kind: 'achievement',
  },
  {
    year: 'Grad school',
    title: 'Best Spotlight Video Award',
    description:
      'Recognized with the CEAMLS research team for the best spotlight video presenting our healthcare AI project.',
    icon: Video,
    kind: 'achievement',
  },
  {
    year: '2025',
    title: "People's Choice Award, NSEA",
    description:
      "Won the People's Choice Award at the National Symposium on Equitable AI for research presented under CEAMLS.",
    icon: Presentation,
    kind: 'achievement',
  },
  {
    year: '2025',
    title: 'ReadAloud — Hackathon Win, NSEA',
    description:
      'Built ReadAloud with my team: an offline AI tool that turns a short reading sample into a full literacy report for teachers, with every AI call overridable by the teacher. Took first place at the NSEA hackathon.',
    icon: Rocket,
    kind: 'achievement',
  },
  {
    year: 'Feb 2026',
    title: 'Presidential Medal for Service and Excellence',
    description:
      'Recognized by the STAR Scholars Network for sustained leadership and organizational impact as Media Specialist.',
    icon: Medal,
    kind: 'achievement',
  },
  {
    year: 'May 2026',
    title: 'Graduated — Morgan State University',
    description:
      "Completed my Master's in Advanced Computing, focused on AI, deep learning, and medical image analysis.",
    icon: GraduationCap,
    kind: 'milestone',
  },
  {
    year: '2026 – Present',
    title: 'Now: Ph.D. in Advanced Computing',
    description:
      'Continuing research in equitable AI and machine learning systems for healthcare, at Morgan State University.',
    icon: Sparkles,
    kind: 'milestone',
    current: true,
  },
] as const;

// Fun, off-the-resume moments. Each `images` entry points at a real file in
// public/journey/. To swap a photo, drop the new file in public/journey/
// and update its path here (keep the extension in sync with the file).
export const momentGroups = [
  {
    title: 'Graduation Day, Morgan State',
    icon: GraduationCap,
    images: ['/journey/graduation-morgan-1.jpg', '/journey/graduation-morgan-2.jpg'],
  },
  {
    title: 'Presidential Medal',
    icon: Medal,
    images: ['/journey/presidential-medal-1.jpg', '/journey/presidential-medal-2.jpg'],
  },
  {
    title: 'CEAMLS Summer 2026 Team',
    icon: Users,
    images: ['/journey/ceamls-summer-2026-1.jpg', '/journey/ceamls-summer-2026-2.jpg'],
  },
  {
    title: 'ReadAloud — Hackathon Win',
    icon: Trophy,
    images: ['/journey/readaloud-hackathon-win.jpg'],
  },
  {
    title: 'Hackathons Along the Way',
    icon: Rocket,
    images: [
      '/journey/hackathon-participant-1.jpg',
      '/journey/hackathon-participant-2.jpg',
      '/journey/hackathon-participant-3.jpg',
    ],
  },
  {
    title: 'Hiking & Friends',
    icon: Mountain,
    images: ['/journey/hiking-friends.jpg'],
  },
  {
    title: 'Guitar Nights',
    icon: Guitar,
    images: ['/journey/guitar-night.jpg'],
  },
];
