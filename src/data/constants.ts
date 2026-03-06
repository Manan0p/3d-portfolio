// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  PYTHON = "python",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  NLP = "nlp",
  POSTGRES = "postgres",
  FLASK = "flask",
  GIT = "git",
  GITHUB = "github",
  OPENCV = "opencv",
  NPM = "npm",
  NUMPY = "numpy",
  STREAMLIT = "streamlit",
  CLERK = "clerk",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  FASTAPI = "fastapi",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 6,
    name: "python",
    label: "Python",
    shortDescription:
      "clean syntax, big brain energy, doing everything fr 🐍💯",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.NLP]: {
    id: 10,
    name: "nlp",
    label: "NLP",
    shortDescription: "teaching computers to understand human yapping 🧠💬",
    color: "#fff",  
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nlp/nlp-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 12,
    name: "flask",
    label: "Flask",
    shortDescription: "tiny python server but it cooks fr 🍶🔥",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.OPENCV]: {
    id: 15,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "teaching machines to see, kinda creepy but cool 👀🤖",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.NUMPY]: {
    id: 17,
    name: "numpy",
    label: "NumPy",
    shortDescription:
      "arrays go brrrr, math nerds approved 📊⚡",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.STREAMLIT]: {
    id: 18,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "turn python scripts into slick apps, no frontend tears 📈✨",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  },
  [SkillNames.CLERK]: {
    id: 19,
    name: "clerk",
    label: "Clerk",
    shortDescription: "auth handled, users secured, dev stress = gone 🔐😌",
    color: "#fff",
    icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/clerk-uvna1mxd54k50cohb8o2i.png/clerk-nzr7956knokwjx841f6yye.png?_a=DATAiZAAZAA0",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 25,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 21,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 22,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "python backend on caffeine, zooming APIs ⚡🚀",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Sept 2025",
    endDate: "Jan 2026",
    title: "Python Developer Intern",
    company: "Infosys Springboard",
    description: [
      "Designed and implemented NLP pipelines for analyzing unstructured text data.",
      "Performed data preprocessing, feature extraction, and ML model evaluation.",
      "Improved classification reliability and reduced false positives.",
      "Integrated ML logic with backend workflows, focusing on clean code and performance.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.NLP,
      SkillNames.NUMPY,
      SkillNames.FLASK,
      SkillNames.POSTGRES,
      SkillNames.CSS,
      SkillNames.DOCKER,
      SkillNames.HTML,
    ],
  },
  {
    id: 2,
    startDate: "Apr 2022",
    endDate: "Dec 2024",
    title: "Freelance Full Stack Developer",
    company: "Self-employed",
    description: [
      "Transformed chaotic Excel sheets into polished internal tools for various clients.",
      "Shipped dashboards and custom CMS platforms tailored to each client's workflow.",
      "Automated repetitive processes, improving efficiency and reducing human error.",
      "Focused on clean, maintainable code and interfaces that users actually enjoy.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.VUE,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.POSTGRES,
      SkillNames.TAILWIND,
      SkillNames.WORDPRESS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

