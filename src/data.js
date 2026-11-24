import smartstockImage from './image/smartstock.png'
import travelVibesImage from './image/travel-vibes.png'

export const profile = {
  name: 'Ikhmal Fahmi',
  firstName: 'Ikhmal',
  role: 'Software Engineering Student & Web Developer',
  location: 'Melaka, MY',
  email: 'mhd1ikhmal@gmail.com',
  phone: '016-7071730',
  availability: 'Looking for my first internship · Open to opportunities',
  intro:
    "I'm a software engineering student building web apps and looking for my first internship — a place where I can learn from a real team and contribute what I already know.",
  bio: [
    "I'm Ikhmal, a software engineering student at GULL in Melaka. I'm at the beginning of my career and actively looking for my first internship, where I can turn what I've been learning into real, useful software.",
    "So far I've built SmartStock, a full-stack inventory and sales system with C#, ASP.NET Core, React and PostgreSQL. I've also built responsive websites with HTML, CSS, JavaScript and Bootstrap. I care about clean layouts, organised code and getting the small details right.",
    "I'm responsible, orderly and comfortable working in both Bahasa Melayu and English. Outside of coding, I'm usually refining a project, learning a new tool, or finding a good cup of coffee in Melaka.",
  ],
  stats: [
    { value: '2', label: 'Projects built' },
    { value: '3', label: 'Programs studied' },
    { value: '2', label: 'Languages spoken' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/ikhmal0811' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}

export const skills = [
  'C#',
  'ASP.NET Core Web API',
  'PostgreSQL',
  'Entity Framework Core',
  'React',
  'JavaScript',
  'HTML5 / CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'RESTful APIs',
  'JWT Authentication',
  'Git / GitHub',
  'Vite',
  'xUnit',
]

export const projects = [
  {
    id: 'smartstock',
    number: '01',
    title: 'SmartStock',
    category: 'Full-stack',
    kind: 'fullstack',
    year: '2026',
    description:
      'An inventory and sales management system with secure APIs, automated stock tracking and transactional sales processing.',
    tags: [
      'C#',
      'ASP.NET Core Web API',
      'React',
      'Vite',
      'Tailwind CSS',
      'PostgreSQL',
      'Entity Framework Core',
      'JWT Auth',
      'xUnit',
    ],
    gradient: 'linear-gradient(135deg, #ff4f6d 0%, #ff8a3d 45%, #ffd23f 100%)',
    shape: 'cards',
    image: smartstockImage,
    role: 'Sole developer',
    detail:
      'SmartStock is a full-stack inventory and sales system built with a layered .NET architecture. It handles categories, products, suppliers, stock in and out, sales transactions, automatic stock deductions, gross profit calculations and role-based JWT authentication. I built the React + Tailwind interface, the ASP.NET Core APIs, the PostgreSQL schema and xUnit integration tests.',
    link: 'https://github.com/Ikhmal0811/SmartStock',
    linkLabel: 'GITHUB',
    linkText: 'View code ↗',
  },
  {
    id: 'travelvibes',
    number: '02',
    title: 'TravelVibes Landing Page',
    category: 'Web',
    kind: 'web',
    year: '2026',
    description:
      'A responsive travel landing page that showcases destinations and trip ideas with a clean, modern layout.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    gradient: 'linear-gradient(135deg, #4ad9ff 0%, #4c8dff 55%, #6c4cff 100%)',
    shape: 'postcard',
    image: travelVibesImage,
    imageAlt: 'TravelVibes landing page preview',
    role: 'Frontend developer',
    detail:
      'TravelVibes is a responsive landing page for a travel brand, built to make destinations feel inviting on any screen size. I created the layout with HTML, CSS and Bootstrap, then added client-side JavaScript for navigation and interactive elements.',
    link: 'https://travel-vibes2.netlify.app/',
  },
]

export const filters = [
  { id: 'all', label: 'All work' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'web', label: 'Web' },
]

export const experience = [
  {
    period: '2025 — Now',
    role: 'Diploma in Software Engineering',
    company: 'Global University for Lifelong Learning (GULL)',
    description:
      'Studying full-stack development, databases and software design. Building personal projects like SmartStock while looking for my first internship.',
  },
  {
    period: '2022 — 2023',
    role: 'Diploma in Accounting',
    company: 'Multimedia University (MMU)',
    description:
      'Built a foundation in business, numbers and structured thinking before moving fully into software engineering.',
  },
  {
    period: '2017 — 2018',
    role: 'Foundation in Physical Science',
    company: 'University of Malaya',
    description:
      'Developed early analytical and problem-solving skills through science and mathematics.',
  },
]

export const collaboration = [
  {
    title: 'Responsible & orderly',
    text: "I keep tasks organised, follow through on details and take ownership of the work I'm given.",
  },
  {
    title: 'Quick to learn',
    text: "I'm a student by trade — I ask questions, take feedback well and pick up new tools fast.",
  },
  {
    title: 'Clear communication',
    text: 'Comfortable in both Bahasa Melayu and English, so I can work smoothly with local and international teammates.',
  },
]
