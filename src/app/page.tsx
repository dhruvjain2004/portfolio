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
  Award,
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
    role: "Software Engineering Intern",
    company: "Magnifier Solutions",
    period: "Aug 2025 - Oct 2025",
    description: [
      "Developed and maintained responsive web applications using modern front-end technologies, ensuring cross-browser compatibility.",
      "Optimized performance while collaborating with back-end developers to integrate RESTful APIs.",
      "Gained hands-on experience in debugging and testing.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Global Next Consulting India Private Limited (GNCIPL)",
    period: "July 2025 - Aug 2025",
    description: [
      "Completed a Full Stack Web Development Internship, building five mini projects and a major AI-powered design tool.",
      "Enhanced skills in the MERN stack, authentication, API integration, UI/UX design and version control.",
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
    name: "JobMate AI - A Job Portal ",
    link: "https://github.com/dhruvjain2004",
    description: [
      "◦ Developing a full-stack job portal where recruiters post jobs and users apply, manage profiles, and track applications.",
      "◦ Implemented JWT-based authentication with role-based access control for recruiters and job seekers.",
      "◦ Integrated Cloudinary for secure upload and management of resumes, company logos, and media assets.",
      "◦ Designed a responsive UI using ShadCN UI and Tailwind CSS; backend built with scalable REST APIs and MongoDB.",
    ],
    techStack: ["MERN", "Tailwind CSS", "JWT", "Bcrypt", "MongoDB Atlas", "RESTful APIs", "ShadCN-UI", "Cloudinary"],
    // logo and alt can be added if desired
    logo: "💼", // Briefcase emoji
    alt: "NaukriVerse Project Logo",
  },
  {
    name: "LangifyAI – AI Translation Platform",
    link: "https://github.com/dhruvjain2004", // GitHub / Live Link
    description: [
      "Built LangifyAI, a multilingual AI-powered translation platform supporting Spanish, Hindi, and French with scalability for additional languages.",
      "Implemented a resilient server-side translation pipeline using multiple public APIs with Generative AI fallback to ensure fast and reliable translations.",
      "Integrated Clerk authentication for secure user login and registration.",
      "Designed a responsive UI using Next.js and Tailwind CSS featuring voice input, dark mode, and optimized Hindi (Devanagari) font rendering.",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Generative AI",
      "Web Speech API",
      "Clerk Auth",
    ],
    logo: "🌐",
    alt: "LangifyAI Translation Platform",
  },
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
]

const allSkills: string[] = [
  // Languages
  "Java",
  "JavaScript",
  "Python",
  "SQL",
  "C",

  // Frontend
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",

  // Backend
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "JWT",
  "Bcrypt",

  // Databases & Cloud
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Neon (PostgreSQL)",

  // Developer Tools
  "Git",
  "GitHub",
  "VS Code",
  "IntelliJ IDEA",
  "Postman",
  "Redux DevTools",

  // Deployment & Platforms
  "Vercel",
  "Render",
  "Deployment",

  // Core CS Concepts
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Operating Systems",
  "AIML",

  // AI & GenAI Tools
  "Generative AI",
  "OpenAI API",
  "GitHub Copilot",
  "Cursor AI",
  "ChatGPT",
  "Gemini",
  "Replit",
  "Windsurf",
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
            Aspiring software developer with practical experience in full-stack development and a good understanding of
Data Structures and Algorithms. Gained hands-on exposure through internships and projects focused on building
efficient and user-friendly applications. Eager to contribute technical skills to a dynamic tech team while
continuing to learn, innovate and grow in a collaborative environment.
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
                      //src={project.logo}
                      src="https://cdn.dribbble.com/userupload/14658105/file/original-e1593a134e08140730988768d74d553d.jpg?resize=752x&vertical=center"
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
            <h3 className="font-semibold text-foreground">Dr. APJ Abdul Kalam Technical University (AKTU), Lucknow</h3>
            <p className="text-sm text-muted-foreground">Raj Kumar Goel Institute Of Technology Ghaziabad, India</p>
            <p className="text-sm text-muted-foreground">B.Tech in Computer Science Engineering specialization in (AIML)</p>
            <p className="text-xs text-muted-foreground">Sept 2022 - June 2026</p>
            <p className="text-xs text-muted-foreground mt-1">GPA: 8.5</p>
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
      id: "certifications",
      title: "Certifications & Achievements",
      icon: <Award size={24} />,
      content: (
        <div className="space-y-6">
          <motion.div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" variants={itemVariants}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 flex items-center justify-center mt-1">
                <Award size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Google Cloud Arcade Program Cohort 1</h3>
                <p className="text-sm text-muted-foreground mb-2">Completed 65 badges - Google Cloud</p>
                <Badge variant="secondary" className="text-xs">Google Cloud</Badge>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" variants={itemVariants}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 flex items-center justify-center mt-1">
                <Award size={20} className="text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Oracle Fusion Cloud Applications HCM Foundations Associate</h3>
                <p className="text-sm text-muted-foreground mb-2">Oracle</p>
                <Badge variant="secondary" className="text-xs">Oracle</Badge>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" variants={itemVariants}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 flex items-center justify-center mt-1">
                <Award size={20} className="text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Introduction to Generative AI</h3>
                <p className="text-sm text-muted-foreground mb-2">Google Cloud Skills</p>
                <Badge variant="secondary" className="text-xs">Google Cloud Skills</Badge>
              </div>
            </div>
          </motion.div>
        </div>
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
              21 years old Aspiring Software Developer | Full-Stack Developer | MERN Stack | AI & Cloud Enthusiast | Building Scalable, User-Centric Web Solutions
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
            >
            {/* Social Links */}
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
              { 
                href: "https://github.com/dhruvjain2004", 
                icon: <GithubIcon size={16} />, 
                text: "dhruvjain2004" 
              }
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
            <motion.div variants={itemVariants}>
              <a
                href="/Dhruv Jain Resume CV Latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground font-semibold"
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>
          </motion.div>
          <motion.div variants={heroImageVariants}>
            <Image
              src="/dhruvpic.jpg"
              alt="Dhruv Jain Profile"
              width={500}
              height={500}
              className="rounded-full border-4 border-primary/30 shadow-lg"
              unoptimized
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

        {/* Footer */}
        <motion.footer
  className="text-center pt-12 pb-20 sm:pb-24 md:pb-28"
  variants={sectionVariants}
>
  <motion.div
    className="w-8 h-1 bg-[var(--brand-light-footer-pill)] dark:bg-[var(--brand-dark-footer-pill)] rounded-full mx-auto mb-3"
    variants={itemVariants}
  />

  <motion.p
    className="text-sm text-muted-foreground text-center leading-relaxed"
    variants={itemVariants}
  >
    &copy; {new Date().getFullYear()} Dhruv Jain. All rights reserved.
    <br />
    Designed, built, and maintained with ❤️ using Next.js, React, Tailwind CSS, and modern web technologies.
  </motion.p>
</motion.footer>
      </motion.main>
      <PortfolioFloatingDock />
    </div>
  )
}