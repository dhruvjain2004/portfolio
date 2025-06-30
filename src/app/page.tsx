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
  Send,
  Building2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PortfolioFloatingDock } from "@/components/portfolio-floating-dock"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { motion, Variants } from "framer-motion"
import { useState, FormEvent } from "react"

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string[]
  link?: string
}

const experiences: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "Learnflow",
    period: "Aug 2024 - Sept 2024",
    description: [
      "Participated in an extended virtual internship program centered on front-end web development.",
      "Designed and developed responsive web pages using HTML, CSS, and Javascript.",
      "Improved performance, layout consistency, and UI responsiveness across multiple assigned projects.",
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
    name: "StockTradeX Trading App",
    link: "https://github.com/dhruvjain2004",
    description: [
      "Developed a full-stack Zerodha Clone using MERN stack with JWT authentication, MongoDB Atlas, and RESTful APIs for secure trading simulation.",
      "Designed a fully responsive UI using React.js, Material UI, Tailwind CSS, and integrated Font Awesome for enhanced user experience.",
    ],
    techStack: ["MERN", "Tailwind CSS", "JWT", "Bcrypt", "MongoDB Atlas", "RESTful APIs"],
    logo: "📈", // Stock chart emoji
    alt: "StockTradeX Project Logo",
  },
  {
    name: "Crypto-Place Web App",
    link: "https://github.com/dhruvjain2004",
    description: [
      "Developed CryptaPlace, a responsive ReactJS web app that fetches real-time crypto data via CoinGecko API.",
      "Features dynamic search, market analytics and user-friendly UI for global cryptocurrency tracking.",
    ],
    techStack: ["React.js", "Tailwind CSS", "CoinGecko-API"],
    logo: "₿", // Bitcoin symbol
    alt: "Crypto-Place Project Logo",
  },
  {
    name: "Chatting Application",
    link: "https://github.com/dhruvjain2004",
    description: [
      "Built a real-time Chat App using React.js, Node.js and Socket.io enabling instant bi-directional messaging.",
      "Features responsive UI for seamless communication experience.",
    ],
    techStack: ["React.js", "Node.js", "Socket.io"],
    logo: "💬", // Chat bubble emoji
    alt: "Chat App Project Logo",
  },
  {
    name: "Real Time Weather App",
    link: "https://github.com/dhruvjain2004",
    description: [
      "Developed a responsive Weather App using React.js and Tailwind CSS that fetches live weather data from public APIs.",
      "Provides real-time weather information with user-friendly interface.",
    ],
    techStack: ["React.js", "Tailwind CSS", "WeatherAPI"],
    logo: "🌤️", // Weather emoji
    alt: "Weather App Project Logo",
  },
]

const allSkills: string[] = [
  "Python",
  "C",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "React.js",
  "Express.js",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "MongoDB",
  "JWT",
  "Bcrypt",
  "Git",
  "GitHub",
  "VS Code",
  "Intelli-J",
  "Postman",
  "Redux DevTools",
  "Render",
  "Vercel",
  "RESTful APIs",
  "DSA",
  "OOP",
  "DBMS",
  "GenAI",
]

// Animation Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const heroImageVariants: Variants = {
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

const badgeContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
}

export default function PortfolioPage() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, you'd integrate with a service like Mailchimp or ConvertKit
    console.log("Newsletter subscription for:", email)
    alert("Thank you for subscribing! Please check your inbox.")
    setEmail("")
  }

  const pageSections = [
    {
      id: "about",
      title: "About Me",
      icon: <Lightbulb size={24} />,
      content: (
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <motion.p variants={itemVariants}>
            Aspiring software developer with hands-on experience in full-stack development, strong DSA foundation and a
            track record of building real-world projects that solve practical problems with internship experience.
          </motion.p>
          <motion.p variants={itemVariants}>
            Seeking a role to build scalable solutions and grow with a forward-thinking tech team. Skilled in MERN stack,
            React.js, Node.js, and various modern web technologies.
          </motion.p>
        </div>
      ),
    },
    {
      id: "experience",
      title: "Experience",
      icon: <Briefcase size={24} />,
      content: (
        <div className="space-y-8 mt-4 sm:mt-2">
          {experiences.map((exp, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-full">
                    <Building2 size={20} className="text-primary" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary/20 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mt-1">
                {project.logo ? (
                  project.logo.startsWith("http") ? (
                    <Image
                      src={project.logo}
                      alt={project.alt || project.name}
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  ) : (
                    <span className="text-2xl">{project.logo}</span>
                  )
                ) : (
                  <Settings2 size={20} className="text-primary" />
                )}
              </div>
              <div className="flex-1">
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <h3 className="font-semibold text-foreground inline-flex items-center gap-1.5 hover:text-primary transition-colors">
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
                      <Badge variant="secondary" className="text-xs hover:bg-primary/10 transition-colors">
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
      id: "education",
      title: "Education",
      icon: <GraduationCap size={24} />,
      content: (
        <motion.div className="flex items-start gap-4" variants={itemVariants}>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-1">
            <GraduationCap size={20} className="text-muted-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">Raj Kumar Goel Institute of Technology, AKTU</h3>
            <p className="text-sm text-muted-foreground">B.Tech in Computer Science Engineering specialization in (AI/ML)</p>
            <p className="text-xs text-muted-foreground">Sept 2022 - June 2026</p>
            <p className="text-xs text-muted-foreground mt-1">GPA: 8.05</p>
          </div>
        </motion.div>
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
      id: "newsletter",
      title: "Stay Updated",
      icon: <Send size={24} />, // Added Send icon for newsletter
      content: (
        <>
          <motion.p className="mb-6 text-muted-foreground" variants={itemVariants}>
            Subscribe to my email list. I do not spam, ever.
          </motion.p>
          <motion.form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3" variants={itemVariants}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <motion.main
        className="container mx-auto max-w-3xl px-4 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-20 md:space-y-24"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Hero Section */}
        <motion.section
          id="home"
          className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12"
          variants={sectionVariants}
        >
          <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
              custom={0}
              variants={heroTextVariants}
            >
              Hi, Dhruv here
            </motion.h1>
            <motion.p className="mt-3 text-lg sm:text-xl text-muted-foreground" custom={1} variants={heroTextVariants}>
              20 year old aspiring software developer
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
            >
              {[
                {
                  href: "mailto:dhruvjain527@gmail.com",
                  icon: <Mail size={16} />,
                  text: "dhruvjain527@gmail.com",
                },
                {
                  href: "tel:+918860048684",
                  icon: <Phone size={16} />,
                  text: "+91 8860048684",
                },
                {
                  href: "https://linkedin.com/in/dhruv-jain-877543223",
                  icon: <LinkedinIcon size={16} />,
                  text: "dhruv-jain-877543223",
                },
                { href: "https://github.com/dhruvjain2004", icon: <GithubIcon size={16} />, text: "dhruvjain2004" },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <a
                    href={item.href}
                    target={item.href?.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-foreground"
                  >
                    {item.icon} {item.text}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={heroImageVariants}>
            <Image
              src="/profile-mandalorian.png"
              alt="Dhruv Jain's profile picture"
              width={100}
              height={100}
              className="rounded-full object-cover w-24 h-24 sm:w-28 sm:h-28 shrink-0 mt-4 sm:mt-0"
              priority
            />
          </motion.div>
        </motion.section>

        {/* Render sections based on the pageSections array order */}
        {pageSections.map((section) => (
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
            &copy; {new Date().getFullYear()} Dhruv Jain. All rights reserved.
          </motion.p>
        </motion.footer>
      </motion.main>
      <PortfolioFloatingDock />
    </div>
  )
}
