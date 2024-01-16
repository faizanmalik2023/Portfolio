import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  cplus,
  dart,
  python,
  mongodb,
  flutter,
  raydiex,
  curemd,
  edu
  
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'SEM Management',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'React',
    icon: reactjs,
  },
  
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Dart',
    icon: dart,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'HTML5',
    icon: html,
  },

  {
    name: 'C++',
    icon: cplus,
  },
  {
    name: 'Python',
    icon: python,
  },

];


const experiences = [
  {
    title: 'Game Developer Intern',
    company_name: 'Raydiex',
    icon: raydiex,
    iconBg: '#333333',
    date: 'July 2021 - Aug 2021',
  },
  {
    title: 'Electronic Health Records Intern',
    company_name: 'CureMD',
    icon: curemd,
    iconBg: '#333333',
    date: 'June 2022 - Aug 2022',
  },
  {
    title: 'Technical Content Intern',
    company_name: 'Educative',
    icon: edu,
    iconBg: '#333333',
    date: 'June 2023 - Aug 2023',
  },
  {
    title: 'SEM technician',
    company_name: 'Player.me',
    icon: dcc,
    iconBg: '#333333',
    date: ' Aug 2021 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'WineDine',
    description: 'A Food delivery application made in Flutter',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/faizanmalik2023/WineDine',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'FlashChat',
    description:
      'A Chatroom made with Firebase and Flutter with customizable themes',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/faizanmalik2023/Flashchat',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Clima Flutter',
    description: 'A weather app inspored by iOS weather app working with WeatherAPI',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/faizanmalik2023/Clima-',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'FederatedVessel',
    description: `A Federated Learning framework for Retinal Vessel Segmentation`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/faizanmalik2023/FYP',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Potatos',
    description:
      'A chilled out version of twitter and facebook where users can follow, like and comment each other',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
