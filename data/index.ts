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
import type { Bi } from '@/app/_components/language-context';

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

export const projects: {
  title: string;
  description: Bi;
  tech: string[];
  github: string;
  live: string;
  image: string;
  image_dark: string;
}[] = [
  {
    title: 'Portfolio Website',
    description: {
      en: 'My personal portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS for a responsive design.',
      ne: 'मेरो व्यक्तिगत पोर्टफोलियो, जसले मेरा परियोजना, सीप, र अनुभव प्रस्तुत गर्छ। उत्तरदायी डिजाइनका लागि Next.js र Tailwind CSS प्रयोग गरी निर्माण गरिएको।',
    },
    tech: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
    github: 'https://github.com/nxxis/my-portfolio-website',
    live: 'https://sudipsharma013.com.np',
    image: '/placeholder.svg?height=200&width=400',
    image_dark: '/placeholder.dark.svg?height=200&width=400',
  },
  {
    title: 'Medico',
    description: {
      en: 'A medical app built with Flutter and Firebase. Designed a non-relational schema in Firestore and implemented NMC ID verification, authentication (Sign Up/Sign In), and auto-login if the number is already registered.',
      ne: 'Flutter र Firebase प्रयोग गरी बनाइएको मेडिकल एप। Firestore मा non-relational स्कीमा डिजाइन गरी NMC ID प्रमाणीकरण, authentication (साइन अप/साइन इन), र नम्बर पहिल्यै दर्ता भइसकेको भए auto-login लागू गरियो।',
    },
    tech: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Dart'],
    github: 'https://github.com/saugat-adh/medico',
    live: '#',
    image: '/placeholder.svg?height=200&width=400',
    image_dark: '/placeholder.dark.svg?height=200&width=400',
  },
  {
    title: 'DASS-42 Data Frame Analysis',
    description: {
      en: 'Data mining project: prepared the dataset, performed EDA, and compared multiple ML algorithms. Pipeline included preprocessing, visualization, and evaluation via classification report.',
      ne: 'डाटा माइनिङ परियोजना: डेटासेट तयार गरियो, EDA गरियो, र धेरै ML एल्गोरिदमहरू तुलना गरियो। Pipeline मा preprocessing, visualization, र classification report मार्फत मूल्याङ्कन समावेश थियो।',
    },
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    github: 'https://github.com/nxxis/DASS-42-DataFrame-Analysis',
    live: '#',
    image: '/placeholder.svg?height=200&width=400',
    image_dark: '/placeholder.dark.svg?height=200&width=400',
  },
];

export const experience: {
  title: Bi;
  company: string;
  period: string;
  location: string;
  description: Bi;
  achievements: Bi[];
}[] = [
  {
    title: { en: 'Graduate Mentor, CEAMLS', ne: 'स्नातकोत्तर सल्लाहकार, CEAMLS' },
    company: 'Morgan State University',
    period: 'Summer 2025 & 2026',
    location: 'Baltimore, MD',
    description: {
      en: 'Led interdisciplinary undergraduate research teams building Python/TensorFlow healthcare AI systems for the Center for Equitable Artificial Intelligence and Machine Learning Systems (CEAMLS), providing technical direction on model design, experimentation, code quality, and research methodology.',
      ne: 'Center for Equitable Artificial Intelligence and Machine Learning Systems (CEAMLS) का लागि Python/TensorFlow प्रयोग गरी स्वास्थ्य AI प्रणाली निर्माण गर्ने अन्तरविषयक स्नातक अनुसन्धान टोलीहरूको नेतृत्व गरें, मोडेल डिजाइन, प्रयोग, कोड गुणस्तर, र अनुसन्धान विधिमा प्राविधिक दिशा प्रदान गर्दै।',
    },
    achievements: [
      {
        en: 'Built multimodal ECG classification pipelines using 1D-CNN, Transformer, and 2D-CNN architectures, achieving 90%+ accuracy',
        ne: '1D-CNN, Transformer, र 2D-CNN architecture प्रयोग गरी multimodal ECG classification pipeline निर्माण गरें, ९०%+ शुद्धता हासिल गर्दै',
      },
      {
        en: 'Improved ensemble performance by 14% through time-, frequency-, and time-frequency features',
        ne: 'समय-, फ्रिक्वेन्सी-, र समय-फ्रिक्वेन्सी फिचरहरू मार्फत ensemble प्रदर्शन १४% ले सुधार गरें',
      },
      {
        en: 'Automated preprocessing, training, and evaluation workflows with Python, NumPy, and TensorFlow, reducing GPU training time by 30%',
        ne: 'Python, NumPy, र TensorFlow प्रयोग गरी preprocessing, training, र evaluation workflow स्वचालित गरें, GPU training समय ३०% ले घटाउँदै',
      },
      {
        en: 'Implemented fairness, Grad-CAM, and robustness analyses for clinician-facing interpretability',
        ne: 'चिकित्सकहरूका लागि व्याख्यायोग्यताका लागि fairness, Grad-CAM, र robustness विश्लेषण लागू गरें',
      },
    ],
  },
  {
    title: { en: 'Software Engineer', ne: 'सफ्टवेयर इन्जिनियर' },
    company: 'EB Pearls',
    period: 'Jul 2023 – Aug 2024',
    location: 'Lalitpur, Nepal',
    description: {
      en: 'Designed, tested, deployed, and maintained secure authentication flows and GraphQL APIs across mobile and administrative applications.',
      ne: 'मोबाइल र प्रशासनिक एप्लिकेसनहरूमा सुरक्षित authentication flow र GraphQL API डिजाइन, परीक्षण, deploy, र मर्मत गरें।',
    },
    achievements: [
      {
        en: 'Designed secure login, OTP, and JWT auth flows in SwiftUI, improving login success by 40% and user satisfaction by 63%',
        ne: 'SwiftUI मा सुरक्षित login, OTP, र JWT auth flow डिजाइन गरें, login सफलता ४०% र प्रयोगकर्ता सन्तुष्टि ६३% ले सुधार गर्दै',
      },
      {
        en: 'Developed TypeScript/NestJS GraphQL APIs and optimized data queries, improving retrieval speed by 37%',
        ne: 'TypeScript/NestJS GraphQL API विकास गरें र डाटा क्वेरी अनुकूलन गरें, retrieval गति ३७% ले सुधार गर्दै',
      },
      {
        en: 'Integrated the Google Calendar API for 1K+ active users, improving scheduling efficiency and engagement',
        ne: '१हजार+ सक्रिय प्रयोगकर्ताका लागि Google Calendar API एकीकृत गरें, schedule दक्षता र engagement सुधार गर्दै',
      },
      {
        en: 'Collaborated with product and engineering on debugging, code reviews, and releases, reducing production bug reports by 25%',
        ne: 'debugging, code review, र release मा product र engineering टोलीसँग सहकार्य गरें, production bug रिपोर्ट २५% ले घटाउँदै',
      },
    ],
  },
  {
    title: {
      en: 'Software Engineering Intern',
      ne: 'सफ्टवेयर इन्जिनियरिङ इन्टर्न',
    },
    company: 'EB Pearls',
    period: 'Apr 2023 – Jul 2023',
    location: 'Lalitpur, Nepal',
    description: {
      en: 'Developed iOS applications in SwiftUI/UIKit and contributed Node.js/Express backend services while ramping up on modern engineering practices.',
      ne: 'SwiftUI/UIKit मा iOS एप्लिकेसन विकास गरें र आधुनिक इन्जिनियरिङ अभ्यासहरू सिक्दै Node.js/Express ब्याकइन्ड सेवामा योगदान गरें।',
    },
    achievements: [
      {
        en: 'Built iOS apps with SwiftUI, UIKit, and MVVM, increasing in-app session length by 18%',
        ne: 'SwiftUI, UIKit, र MVVM प्रयोग गरी iOS एप निर्माण गरें, in-app सेसन अवधि १८% ले बढाउँदै',
      },
      {
        en: 'Built and optimized REST/GraphQL backend services with Node.js and Express, improving API response time by 22%',
        ne: 'Node.js र Express प्रयोग गरी REST/GraphQL ब्याकइन्ड सेवा निर्माण र अनुकूलन गरें, API प्रतिक्रिया समय २२% ले सुधार गर्दै',
      },
      {
        en: 'Implemented real-time notification workflows with WebSockets, increasing engagement by 13%',
        ne: 'WebSockets प्रयोग गरी real-time सूचना workflow लागू गरें, engagement १३% ले बढाउँदै',
      },
    ],
  },
];

export const publications: {
  title: string;
  venue: string;
  status: Bi;
  year: string;
  link: string;
}[] = [
  {
    title: 'Trust and Transparency: Making AI Explainable in Healthcare',
    venue: 'Springer Nature Switzerland (International)',
    status: { en: 'Accepted', ne: 'स्वीकृत' },
    year: '2026',
    link: '#',
  },
  {
    title:
      'Interpretable Time-Series Deep Learning for Monitoring Disease Progression in Chest Radiography',
    venue: 'IEEE eIT 2026',
    status: { en: 'Accepted', ne: 'स्वीकृत' },
    year: '2026',
    link: '#',
  },
  {
    title:
      'Cross-Domain Generalization and Fairness in Skin Lesion Classification: An Empirical Study of Architectural Robustness under Human-Centric Constraints',
    venue: 'IEEE SMC 2026',
    status: { en: 'Accepted', ne: 'स्वीकृत' },
    year: '2026',
    link: '#',
  },
  {
    title:
      'Predictive Stability Versus Fairness Instability in Multi-Label ECG Classification: A Multi-Seed, Cross-Institutional Analysis',
    venue: 'IEEE JBHI 2026',
    status: { en: 'In Progress', ne: 'जारी छ' },
    year: '2026',
    link: '#',
  },
  {
    title:
      'CITE-ODE: Continuous-Time Evidential Modeling for Selective Prediction under Structured Missingness in ICU Time Series',
    venue: 'IEEE JBHI 2026',
    status: { en: 'In Progress', ne: 'जारी छ' },
    year: '2026',
    link: '#',
  },
];

export const education: {
  degree: Bi;
  institution: string;
  period: string;
  location: string;
  description: Bi;
  highlights: Bi[];
}[] = [
  {
    degree: {
      en: 'Doctor of Philosophy (Ph.D.) in Advanced Computing',
      ne: 'एडभान्स्ड कम्प्युटिङमा विद्यावारिधि (Ph.D.)',
    },
    institution: 'Morgan State University',
    period: 'Expected May 2029',
    location: 'Baltimore, MD, USA',
    description: {
      en: 'Continuing research in equitable AI and machine learning systems for healthcare applications.',
      ne: 'स्वास्थ्य एप्लिकेसनका लागि equitable AI र मेसिन लर्निङ प्रणालीमा अनुसन्धान जारी।',
    },
    highlights: [],
  },
  {
    degree: {
      en: 'Master of Science in Advanced Computing',
      ne: 'एडभान्स्ड कम्प्युटिङमा स्नातकोत्तर (M.S.)',
    },
    institution: 'Morgan State University',
    period: 'Aug 2024 – May 2026',
    location: 'Baltimore, MD, USA',
    description: {
      en: 'Focusing on AI, deep learning, and medical image analysis.',
      ne: 'AI, डीप लर्निङ, र मेडिकल इमेज विश्लेषणमा केन्द्रित।',
    },
    highlights: [
      {
        en: 'Relevant Coursework: Design and Analysis of Algorithms, Software Engineering, Cloud Computing',
        ne: 'सम्बन्धित पाठ्यक्रम: Design and Analysis of Algorithms, Software Engineering, Cloud Computing',
      },
      {
        en: 'Research Assistant under CEAMLS (Center for Equitable Artificial Intelligence and Machine Learning Systems)',
        ne: 'CEAMLS (Center for Equitable Artificial Intelligence and Machine Learning Systems) अन्तर्गत अनुसन्धान सहायक',
      },
      {
        en: 'Presented at the National Symposium on Equitable AI (2025)',
        ne: 'National Symposium on Equitable AI (२०२५) मा प्रस्तुति',
      },
    ],
  },
  {
    degree: {
      en: 'Bachelor of Science in Computer Science',
      ne: 'कम्प्युटर विज्ञानमा स्नातक (B.S.)',
    },
    institution: 'Kathmandu University',
    period: '2018 – 2023',
    location: 'Dhulikhel, Nepal',
    description: {
      en: 'Emphasis on software engineering and data science.',
      ne: 'सफ्टवेयर इन्जिनियरिङ र डाटा साइन्समा जोड।',
    },
    highlights: [
      {
        en: 'Led non-technical events for IT-MEET 2022',
        ne: 'IT-MEET २०२२ का गैर-प्राविधिक कार्यक्रमहरूको नेतृत्व गरें',
      },
      {
        en: 'Member of Kathmandu University Computer Club (KUCC)',
        ne: 'काठमाडौं विश्वविद्यालय कम्प्युटर क्लब (KUCC) को सदस्य',
      },
    ],
  },
];

// What I'm about outside of work — shown as a chip strip on the Journey tab.
export const interests: { label: Bi; icon: typeof Mountain }[] = [
  { label: { en: 'Hiking', ne: 'हाइकिङ' }, icon: Mountain },
  { label: { en: 'Trekking', ne: 'ट्रेकिङ' }, icon: Footprints },
  { label: { en: 'Nature', ne: 'प्रकृति' }, icon: TreePine },
  { label: { en: 'Singing', ne: 'गायन' }, icon: Mic2 },
  { label: { en: 'Guitar', ne: 'गितार' }, icon: Guitar },
  { label: { en: 'Photography', ne: 'फोटोग्राफी' }, icon: Camera },
];

// The story, told chronologically — milestones and achievements woven together.
export const timeline: {
  year: Bi;
  title: Bi;
  description: Bi;
  icon: typeof Mountain;
  kind: 'milestone' | 'achievement';
  current?: boolean;
}[] = [
  {
    year: { en: '2018', ne: '२०१८' },
    title: { en: 'The journey begins', ne: 'यात्राको सुरुवात' },
    description: {
      en: 'Started a B.S. in Computer Science at Kathmandu University in Dhulikhel, Nepal.',
      ne: 'नेपालको धुलिखेलस्थित काठमाडौं विश्वविद्यालयमा कम्प्युटर विज्ञानमा स्नातक (B.S.) सुरु गरें।',
    },
    icon: GraduationCap,
    kind: 'milestone',
  },
  {
    year: { en: '2022', ne: '२०२२' },
    title: { en: 'IT MEET 2022', ne: 'IT MEET २०२२' },
    description: {
      en: 'Led non-technical events as part of the organizing team, coordinating 5+ university events and growing student participation by 21%.',
      ne: 'आयोजक टोलीको हिस्साको रूपमा गैर-प्राविधिक कार्यक्रमहरूको नेतृत्व गरें, ५+ विश्वविद्यालय कार्यक्रम समन्वय गर्दै र विद्यार्थी सहभागिता २१% ले बढाउँदै।',
    },
    icon: Users,
    kind: 'achievement',
  },
  {
    year: { en: '2023', ne: '२०२३' },
    title: {
      en: 'Graduated — Kathmandu University',
      ne: 'स्नातक — काठमाडौं विश्वविद्यालय',
    },
    description: {
      en: 'Earned my B.S. in Computer Science, with an emphasis on software engineering and data science.',
      ne: 'सफ्टवेयर इन्जिनियरिङ र डाटा साइन्समा जोड दिई कम्प्युटर विज्ञानमा स्नातक हासिल गरें।',
    },
    icon: Award,
    kind: 'milestone',
  },
  {
    year: { en: '2024', ne: '२०२४' },
    title: { en: 'Moved to the U.S.', ne: 'अमेरिका सरें' },
    description: {
      en: "Packed my bags for Baltimore to start a Master's in Advanced Computing at Morgan State University — new city, new chapter.",
      ne: 'Morgan State University मा एडभान्स्ड कम्प्युटिङमा स्नातकोत्तर सुरु गर्न ब्याल्टिमोरका लागि झोला बोकें — नयाँ सहर, नयाँ अध्याय।',
    },
    icon: PlaneTakeoff,
    kind: 'milestone',
  },
  {
    year: { en: 'Grad school', ne: 'स्नातकोत्तर अवधि' },
    title: {
      en: 'AUC Data Science Initiative — 3rd Place',
      ne: 'AUC Data Science Initiative — तेस्रो स्थान',
    },
    description: {
      en: 'Placed 3rd with the Mastercard Center for Inclusive Growth, building models to analyze financial inclusion disparities across demographic groups.',
      ne: 'Mastercard Center for Inclusive Growth सँग तेस्रो स्थानमा रहें, जनसांख्यिकीय समूहहरूमा वित्तीय समावेशीता असमानता विश्लेषण गर्न मोडेल निर्माण गर्दै।',
    },
    icon: Trophy,
    kind: 'achievement',
  },
  {
    year: { en: 'Grad school', ne: 'स्नातकोत्तर अवधि' },
    title: {
      en: 'Best Spotlight Video Award',
      ne: 'उत्कृष्ट स्पटलाइट भिडियो पुरस्कार',
    },
    description: {
      en: 'Recognized with the CEAMLS research team for the best spotlight video presenting our healthcare AI project.',
      ne: 'हाम्रो स्वास्थ्य AI परियोजना प्रस्तुत गर्ने उत्कृष्ट स्पटलाइट भिडियोका लागि CEAMLS अनुसन्धान टोलीसँग सम्मानित भएँ।',
    },
    icon: Video,
    kind: 'achievement',
  },
  {
    year: { en: '2025', ne: '२०२५' },
    title: {
      en: "People's Choice Award, NSEA",
      ne: 'जनताको छनोट पुरस्कार, NSEA',
    },
    description: {
      en: "Won the People's Choice Award at the National Symposium on Equitable AI for research presented under CEAMLS.",
      ne: 'CEAMLS अन्तर्गत प्रस्तुत गरिएको अनुसन्धानका लागि National Symposium on Equitable AI मा जनताको छनोट पुरस्कार जितें।',
    },
    icon: Presentation,
    kind: 'achievement',
  },
  {
    year: { en: '2025', ne: '२०२५' },
    title: {
      en: 'NSEA Hackathon Winner',
      ne: 'NSEA ह्याकाथन विजेता',
    },
    description: {
      en: 'Built ReadAloud with my team: an offline AI tool that turns a short reading sample into a full literacy report for teachers, with every AI call overridable by the teacher. Took first place at the NSEA hackathon.',
      ne: 'मेरो टोलीसँग ReadAloud निर्माण गरें: एउटा अफलाइन AI उपकरण जसले छोटो पढाइ नमूनालाई शिक्षकहरूका लागि पूर्ण साक्षरता रिपोर्टमा बदल्छ, जहाँ हरेक AI निर्णय शिक्षकले नै अन्तिम रूपमा तय गर्न सक्छन्। NSEA ह्याकाथनमा प्रथम स्थान हासिल गरें।',
    },
    icon: Rocket,
    kind: 'achievement',
  },
  {
    year: { en: 'Feb 2026', ne: 'फेब्रुअरी २०२६' },
    title: {
      en: 'Presidential Medal for Service and Excellence',
      ne: 'सेवा र उत्कृष्टताको लागि राष्ट्रपति पदक',
    },
    description: {
      en: 'Recognized by the STAR Scholars Network for sustained leadership and organizational impact as Media Specialist.',
      ne: 'मिडिया विशेषज्ञको रूपमा निरन्तर नेतृत्व र संगठनात्मक प्रभावका लागि STAR Scholars Network द्वारा सम्मानित भएँ।',
    },
    icon: Medal,
    kind: 'achievement',
  },
  {
    year: { en: 'May 2026', ne: 'मे २०२६' },
    title: {
      en: 'Graduated — Morgan State University',
      ne: 'स्नातकोत्तर — Morgan State University',
    },
    description: {
      en: "Completed my Master's in Advanced Computing, focused on AI, deep learning, and medical image analysis.",
      ne: 'AI, डीप लर्निङ, र मेडिकल इमेज विश्लेषणमा केन्द्रित एडभान्स्ड कम्प्युटिङमा स्नातकोत्तर पूरा गरें।',
    },
    icon: GraduationCap,
    kind: 'milestone',
  },
  {
    year: { en: '2026 – Present', ne: '२०२६ – हालसम्म' },
    title: {
      en: 'Now: Ph.D. in Advanced Computing',
      ne: 'अहिले: एडभान्स्ड कम्प्युटिङमा विद्यावारिधि',
    },
    description: {
      en: 'Continuing research in equitable AI and machine learning systems for healthcare, at Morgan State University.',
      ne: 'Morgan State University मा स्वास्थ्यका लागि equitable AI र मेसिन लर्निङ प्रणालीमा अनुसन्धान जारी।',
    },
    icon: Sparkles,
    kind: 'milestone',
    current: true,
  },
];

// Fun, off-the-resume moments. Each `images` entry points at a real file in
// public/journey/. To swap a photo, drop the new file in public/journey/
// and update its path here (keep the extension in sync with the file).
export const momentGroups: { title: Bi; icon: typeof Mountain; images: string[] }[] = [
  {
    title: { en: 'Graduation Day, Morgan State', ne: 'स्नातक दिवस, Morgan State' },
    icon: GraduationCap,
    images: [
      '/journey/graduation-morgan-1.jpg',
      '/journey/graduation-morgan-2.jpg',
    ],
  },
  {
    title: { en: 'Presidential Medal', ne: 'राष्ट्रपति पदक' },
    icon: Medal,
    images: [
      '/journey/presidential-medal-1.jpg',
      '/journey/presidential-medal-2.jpg',
      '/journey/presidential-medal-3.jpg',
    ],
  },
  {
    title: { en: 'CEAMLS Summer 2025 Team', ne: 'CEAMLS ग्रीष्म २०२५ टोली' },
    icon: Users,
    // ceamls-summer-2025-1.jpg is missing — was lost to a filesystem mixup
    // and needs to be re-added, then added back to this array.
    images: ['/journey/ceamls-summer-2025-2.jpg'],
  },
  {
    title: { en: 'CEAMLS Summer 2026 Team', ne: 'CEAMLS ग्रीष्म २०२६ टोली' },
    icon: Users,
    images: [
      '/journey/ceamls-summer-2026-1.jpg',
      '/journey/ceamls-summer-2026-2.jpg',
    ],
  },
  {
    title: { en: 'NSEA Hackathon Winner', ne: 'NSEA ह्याकाथन विजेता' },
    icon: Trophy,
    images: [
      '/journey/nsea-hackathon-winner-1.jpg',
      '/journey/nsea-hackathon-winner-2.jpg',
    ],
  },
  {
    title: {
      en: 'Hackathons Along the Way',
      ne: 'बाटोभरिका ह्याकाथनहरू',
    },
    icon: Rocket,
    images: [
      '/journey/hackathon-participant-1.jpg',
      '/journey/hackathon-participant-2.jpg',
      '/journey/hackathon-participant-3.jpg',
    ],
  },
  {
    title: { en: 'Hiking & Friends', ne: 'हाइकिङ र साथीहरू' },
    icon: Mountain,
    images: [
      '/journey/hiking-friends-1.jpg',
      '/journey/hiking-friends-2.jpg',
      '/journey/hiking-friends-3.jpg',
      '/journey/hiking-friends-4.jpg',
      '/journey/hiking-friends-5.jpg',
    ],
  },
  {
    title: { en: 'Guitar Nights', ne: 'गितार साँझहरू' },
    icon: Guitar,
    images: ['/journey/guitar-night.jpg'],
  },
];
