"use client"
import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  Phone,
  LinkedinIcon,
  GithubIcon,
  ExternalLink,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Settings2,
  Code,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PortfolioFloatingDock } from "@/components/portfolio-floating-dock"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion" // Import motion

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string[]
  link?: string
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Makunai Global, Noida",
    period: "March 2025 - April 2025",
    description: [
      "Developed responsive and user-friendly web interfaces Next.js.",
      "Collaboration work using git/github.",
    ],
  },
]

interface ProjectItem {
  name: string
  link: string
  description: string[]
  techStack: string[]
  logo?: string
  alt?: string
}

const projects: ProjectItem[] = [
  {
    name: "Platform for Save and Share Links - Carter",
    link: "https://carter.fun",
    description: [
      "AI-Powered Platform to Save and Share Links with Chrome Extension.",
      "Features include Folders, Links, Secret Keys, Trash, and Auto Folder Selection and Retrieval.",
    ],
    techStack: ["LangChain", "VectorDB", "Gemini", "Next.js", "Node.js"],
    logo: "/placeholder.svg?width=40&height=40&text=C",
    alt: "Carter Project Logo",
  },
  {
    name: "Prompt Generation AI - GOOG",
    link: "https://goog-sage.vercel.app",
    description: [
      "Created an AI tool to generate prompts based on user input with context from past conversations.",
      "Integrated deep search functionality using Tavily and Deep Think.",
    ],
    techStack: ["LangChain.js", "Next.js", "TypeScript", "Shadcn/ui", "Clerk", "Upstash Vector DB", "Gemini"],
    logo: "/placeholder.svg?width=40&height=40&text=G",
    alt: "GOOG Project Logo",
  },
  {
    name: "AI RAG Domain Generator using LangChain.js",
    link: "https://github.com/alkushpipania/ai-rag",
    description: [
      "Developed a tool to generate domain name suggestions based on detailed business prompts.",
      "Utilized RAG PDF for vector search to optimize domain name suggestions.",
    ],
    techStack: ["LangChain.js", "Node.js", "Gemini"],
    logo: "/placeholder.svg?width=40&height=40&text=AI",
    alt: "AI RAG Project Logo",
  },
  {
    name: "G1 Website Builder",
    link: "https://github.com/alkushpipania/G1",
    description: ["A Website to Make Other (nodejs/nextjs) website.", "Using Webcontainer technology."],
    techStack: ["Anthropic", "Node.js", "Next.js", "WebContainer"],
    logo: "/placeholder.svg?width=40&height=40&text=G1",
    alt: "G1 Website Builder Logo",
  },
]

const allSkills: string[] = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "C++",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Hono",
  "Express",
  "MemoryVectorStore",
  "Vite",
  "NextAuth",
  "LangChain.js",
  "Hugging Face",
  "Gemini",
  "Anthropic", // Added Gemini, Anthropic from project tech stacks
  "Prisma",
  "Drizzle",
  "VectorDB",
  "Upstash Vector DB", // Added VectorDB, Upstash Vector DB
  "WebSockets",
  "WebRTC",
  "Docker",
  "Turbo-Repo",
  "Git",
  "GitHub", // Added Git, GitHub
  "Shadcn/ui",
  "Clerk",
  "WebContainer", // Added from project tech stacks
  // "and many more" can be omitted or kept if desired
]
// You can add "Shitposting" back if you like, or any other specific skills.

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren", // Ensure parent animates before children if staggerChildren is used
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const heroTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    // Custom prop 'i' for delay
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <motion.main
        className="container mx-auto max-w-3xl px-4 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-20 md:space-y-24"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Stagger sections
      >
        {/* Hero Section */}
        <motion.section
          id="home"
          className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12"
          variants={sectionVariants} // Use sectionVariants for overall section animation
        >
          <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            {" "}
            {/* Stagger children of this div */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
              custom={0}
              variants={heroTextVariants}
            >
              Hi, Alkush here
            </motion.h1>
            <motion.p className="mt-3 text-lg sm:text-xl text-muted-foreground" custom={1} variants={heroTextVariants}>
              19 year old something guy
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
            >
              {[
                {
                  href: "mailto:workofalkushpipania@gmail.com",
                  icon: <Mail size={16} />,
                  text: "workofalkushpipania@gmail.com",
                },
                { icon: <Phone size={16} />, text: "6396469110", isLink: false },
                {
                  href: "https://linkedin.com/in/alkushpipania",
                  icon: <LinkedinIcon size={16} />,
                  text: "alkushpipania",
                },
                { href: "https://github.com/alkushpipania", icon: <GithubIcon size={16} />, text: "alkushpipania" },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  {item.isLink === false ? (
                    <span className="inline-flex items-center gap-1.5">
                      {item.icon} {item.text}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href?.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-foreground"
                    >
                      {item.icon} {item.text}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={heroImageVariants}>
            <Image
              src="/profile-mandalorian.png"
              alt="Alkush Pipania's profile picture - Mandalorian helmet"
              width={100}
              height={100}
              className="rounded-full object-cover w-24 h-24 sm:w-28 sm:h-28 shrink-0 mt-4 sm:mt-0"
              priority
            />
          </motion.div>
        </motion.section>

        {/* Sections with common animation */}
        {[
          {
            id: "about",
            title: "About Me",
            icon: <Lightbulb size={24} />,
            content: (
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <motion.p variants={itemVariants}>
                  Passionate third-year B.Tech Computer Science student with a strong foundation in Generative AI and
                  full stack development. Skilled in building scalable, user-focused web applications using Langchain,
                  vector db, graph db, RAG, TypeScript, Next.js, and Node.js.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Dedicated to solving complex problems and continuously learning to deliver innovative, efficient
                  solutions.
                </motion.p>
              </div>
            ),
          },
          {
            id: "experience",
            title: "Experience",
            icon: <Briefcase size={24} />,
            content: (
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-1">
                      <Briefcase size={20} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-foreground">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            ),
          },
          {
            id: "projects",
            title: "Cool Projects I Worked On",
            icon: <Settings2 size={24} />,
            content: (
              <div className="space-y-10">
                {projects.map((project) => (
                  <motion.div
                    key={project.name}
                    className="flex flex-col sm:flex-row items-start gap-4"
                    variants={itemVariants}
                  >
                    {project.logo && (
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={project.alt || project.name}
                        width={48}
                        height={48}
                        className="rounded-lg shrink-0 mt-1 w-12 h-12"
                      />
                    )}
                    {!project.logo && (
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center mt-1">
                        <Settings2 size={24} className="text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <h3 className="font-semibold text-foreground inline-flex items-center gap-1.5">
                          {project.name}
                          <ExternalLink size={14} className="text-muted-foreground" />
                        </h3>
                      </Link>
                      <div className="mt-1 space-y-1">
                        {project.description.map((desc, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {desc}
                          </p>
                        ))}
                      </div>
                      <motion.div className="mt-3 flex flex-wrap gap-2" variants={badgeContainerVariants}>
                        {project.techStack.map((tech) => (
                          <motion.div key={tech} variants={badgeVariants}>
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ),
          },
          {
            id: "skills",
            title: "Skills",
            icon: <Code size={24} />,
            content: (
              <motion.div className="flex flex-wrap gap-2 sm:gap-3" variants={badgeContainerVariants}>
                {allSkills.map((skill) => (
                  <motion.div key={skill} variants={badgeVariants}>
                    <Badge variant="secondary" className="text-xs sm:text-sm font-medium">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            ),
          },
          {
            id: "education",
            title: "Education",
            icon: <GraduationCap size={24} />,
            content: (
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-1">
                  <GraduationCap size={20} className="text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">Raj Kumar Goel Institute of Technology</h3>
                  <p className="text-sm text-muted-foreground">B.Tech in Computer Science</p>
                  <p className="text-xs text-muted-foreground">Sept 2022 - Oct 2026 (Currently in 6th Semester)</p>
                  <p className="text-xs text-muted-foreground mt-1">CGPA: 7+</p>
                </div>
              </motion.div>
            ),
          },
          {
            id: "newsletter",
            title: "Stay Updated",
            icon: null,
            content: // No icon for newsletter title
              (
                <>
                  <motion.p className="mb-6 text-muted-foreground" variants={itemVariants}>
                    Subscribe to my email list. I do not spam, ever.
                  </motion.p>
                  <motion.form className="flex flex-col sm:flex-row gap-3" variants={itemVariants}>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className={cn(
                        "custom-input flex-grow",
                        "placeholder:text-[var(--brand-light-input-placeholder-text)] dark:placeholder:text-[var(--brand-dark-input-placeholder-text)]",
                      )}
                      aria-label="Email for newsletter"
                    />
                    <Button type="submit" className="shrink-0">
                      Subscribe
                    </Button>
                  </motion.form>
                </>
              ),
          },
        ].map((section) => (
          <motion.section key={section.id} id={section.id} variants={sectionVariants}>
            <motion.h2 className="section-title inline-flex items-center gap-2" variants={itemVariants}>
              {section.icon} {section.title}
            </motion.h2>
            {section.content}
          </motion.section>
        ))}

        <motion.footer className="text-center pt-12 pb-20 sm:pb-24 md:pb-28" variants={sectionVariants}>
          <motion.div
            className="w-8 h-1 bg-[var(--brand-light-footer-pill)] dark:bg-[var(--brand-dark-footer-pill)] rounded-full mx-auto mb-3"
            variants={itemVariants}
          ></motion.div>
          <motion.p className="text-sm text-muted-foreground" variants={itemVariants}>
            &copy; {new Date().getFullYear()} Alkush Pipania. All rights reserved.
          </motion.p>
        </motion.footer>
      </motion.main>
      <PortfolioFloatingDock />
    </div>
  )
}
