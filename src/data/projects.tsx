import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiSanity,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

let DESCRIPTIONS: Record<string, string> = {};
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  DESCRIPTIONS = require("./project-descriptions.json");
} catch (e) {
  DESCRIPTIONS = {};
}

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS: Record<string, Skill> = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "Shadcn UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const placeholder = `${BASE_PATH}/portfolio/landing.png`;

const cleanDescription = (text?: string, fallback?: string) => {
  if (!text) return fallback ?? "";
  // Remove simple markdown emphasis to keep modal copy clean.
  const normalized = text.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
  return normalized || (fallback ?? "");
};

const projects: Project[] = [
  {
    id: "uniwell",
    category: "Health",
    title: "UniWell",
    src: encodeURI(`${BASE_PATH}/uniwell/Screenshot (143).png`),
    screenshots: [
      encodeURI(`${BASE_PATH}/uniwell/Screenshot (143).png`),
      encodeURI(`${BASE_PATH}/uniwell/Screenshot (144).png`),
      encodeURI(`${BASE_PATH}/uniwell/Screenshot (145).png`),
      encodeURI(`${BASE_PATH}/uniwell/Screenshot (146).png`),
      encodeURI(`${BASE_PATH}/uniwell/Screenshot (147).png`),
    ],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.next, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    live: "#",
    github: "https://github.com/Manan0p/uniwell",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">{cleanDescription(DESCRIPTIONS[this.id], "UniWell is a student wellbeing platform that centralizes mental health resources and support workflows.")}</TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "sensai",
    category: "AI Assistant",
    title: "Sensai",
    src: encodeURI(`${BASE_PATH}/sensai/Landing Page.png`),
    screenshots: [
      encodeURI(`${BASE_PATH}/sensai/Landing Page.png`),
      encodeURI(`${BASE_PATH}/sensai/Resume Builder.png`),
      encodeURI(`${BASE_PATH}/sensai/Cover Letter.png`),
      encodeURI(`${BASE_PATH}/sensai/Interview Prep.png`),
      encodeURI(`${BASE_PATH}/sensai/Industry Insights.png`),
    ],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.next, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.prisma, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    live: "#",
    github: "https://github.com/Manan0p/Sensai",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">{cleanDescription(DESCRIPTIONS[this.id], "Sensai is an LLM-backed assistant for domain-specific workflows.")}</TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "splitr",
    category: "Productivity",
    title: "Splitr",
    src: encodeURI(`${BASE_PATH}/splitr/Landing Page.png`),
    screenshots: [
      encodeURI(`${BASE_PATH}/splitr/Landing Page.png`),
      encodeURI(`${BASE_PATH}/splitr/Dashboard.png`),
      encodeURI(`${BASE_PATH}/splitr/Group Expenses.png`),
      encodeURI(`${BASE_PATH}/splitr/Individual Expenses.png`),
      encodeURI(`${BASE_PATH}/splitr/Settlements.png`),
    ],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
    },
    live: "#",
    github: "https://github.com/Manan0p/Splitr",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">{cleanDescription(DESCRIPTIONS[this.id], "Splitr helps teams split tasks and coordinate work with a lightweight UI.")}</TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "jobguard-ai",
    category: "Hiring",
    title: "JobGuard AI",
    src: encodeURI(`${BASE_PATH}/jobguard-ai/landing page.png`),
    screenshots: [
      encodeURI(`${BASE_PATH}/jobguard-ai/landing page.png`),
      encodeURI(`${BASE_PATH}/jobguard-ai/predictions.png`),
      encodeURI(`${BASE_PATH}/jobguard-ai/history.png`),
      encodeURI(`${BASE_PATH}/jobguard-ai/admin dashboard.png`),
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    live: "#",
    github: "https://github.com/Manan0p/JobGuard-AI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">{cleanDescription(DESCRIPTIONS[this.id], "JobGuard AI automates candidate screening using ML models and structured scoring.")}</TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "linkedin-post-gen",
    category: "Content tooling",
    title: "LinkedIn Post Gen",
    src: encodeURI(`${BASE_PATH}/linkedin-post-gen/Post Generator.png`),
    screenshots: [
      encodeURI(`${BASE_PATH}/linkedin-post-gen/Post Generator.png`),
    ],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python],
    },
    live: "#",
    github: "https://github.com/Manan0p/LinkedIn-Post-Gen",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">{cleanDescription(DESCRIPTIONS[this.id], "A simple tool to generate polished LinkedIn posts using prompt templates and LLMs.")}</TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "dealdrop",
    category: "E-commerce",
    title: "DealDrop",
    src: encodeURI(`${BASE_PATH}/dealdrop/Preview.png`),
    screenshots: [
      encodeURI(`${BASE_PATH}/dealdrop/Preview.png`),
      encodeURI(`${BASE_PATH}/dealdrop/Showcase.png`),
    ],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo],
    },
    live: "#",
    github: "https://github.com/Manan0p/dealdrop",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">{cleanDescription(DESCRIPTIONS[this.id], "DealDrop aggregates coupons and provides quick-deal discovery UX.")}</TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;
