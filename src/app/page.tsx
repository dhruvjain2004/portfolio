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
  Download as DownloadIcon,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PortfolioFloatingDock } from "@/components/portfolio-floating-dock"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { motion, Variants } from "framer-motion"
import { useState, FormEvent, JSX } from "react"

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
    name: "NaukriVerse Job Portal App",
    link: "https://github.com/dhruvjain2004/NaukriVerse",
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

// Optionally, define some icons/colors for popular skills
const skillIcons: Record<string, JSX.Element> = {
  "Python": <span className="text-yellow-500">🐍</span>,
  "C": <span className="text-blue-500">💻</span>,
  "Java": <span className="text-orange-600">☕</span>,
  "HTML": <span className="text-orange-500">🔤</span>,
  "CSS": <span className="text-blue-400">🎨</span>,
  "JavaScript": <span className="text-yellow-400">🟨</span>,
  "Node.js": <span className="text-green-600">🌳</span>,
  "React.js": <span className="text-cyan-400">⚛️</span>,
  "Express.js": <span className="text-gray-700">🚂</span>,
  "Tailwind CSS": <span className="text-sky-400">🌬️</span>,
  "Bootstrap": <span className="text-purple-600">🅱️</span>,
  "MySQL": <span className="text-blue-700">🐬</span>,
  "MongoDB": <span className="text-green-700">🍃</span>,
  "JWT": <span className="text-pink-500">🔑</span>,
  "Bcrypt": <span className="text-gray-500">🔒</span>,
  "Git": <span className="text-orange-700">🔗</span>,
  "GitHub": <span className="text-black">🐙</span>,
  "VS Code": <span className="text-blue-500">📝</span>,
  "Intelli-J": <span className="text-pink-700">💡</span>,
  "Postman": <span className="text-orange-500">📮</span>,
  "Redux DevTools": <span className="text-purple-500">🛠️</span>,
  "Render": <span className="text-blue-400">🚀</span>,
  "Vercel": <span className="text-black">▲</span>,
  "RESTful APIs": <span className="text-green-500">🔗</span>,
  "DSA": <span className="text-indigo-500">📊</span>,
  "OOP": <span className="text-pink-400">🧩</span>,
  "DBMS": <span className="text-blue-600">🗄️</span>,
  "GenAI": <span className="text-fuchsia-500">🤖</span>,
}

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

// Testimonials data
const testimonials = [
  {
    name: "Amit Sharma",
    role: "Senior Developer, TechCorp",
    text: "Dhruv is a quick learner and a great team player. His contributions to our project were invaluable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Mentor, Learnflow",
    text: "Dhruv's dedication and problem-solving skills are impressive. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
]

// Blog posts data
const blogPosts = [
  {
    title: "How I Built My Portfolio with Next.js",
    date: "2024-06-01",
    summary: "A step-by-step guide to building a modern portfolio using Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Tips for Cracking Coding Interviews",
    date: "2024-05-15",
    summary: "My favorite resources and strategies for mastering DSA and landing your dream job.",
    link: "#",
  },
]

// Languages
const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
]

type LangType = "en" | "hi";

// Certifications data
const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2024",
    link: "#", // <-- Replace '#' with your actual certificate link
  },
  {
    name: "Meta Front-End Developer",
    issuer: "Coursera",
    date: "Jan 2024",
    link: "#", // <-- Replace '#' with your actual certificate link
  },
]

// Hobbies & Interests
const hobbies = [
  "Playing Chess",
  "Photography",
  "Traveling",
  "Blogging about Tech",
]

// FAQ
const faqs = [
  {
    q: "Are you open to freelance or remote work?",
    a: "Yes, I am open to both freelance and remote opportunities.",
  },
  {
    q: "What is your preferred tech stack?",
    a: "MERN stack for web, Python for scripting, and always open to learning new tech.",
  },
]

// Tech stack chart data (simple)
const techChart = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Python", level: 75 },
  { name: "Tailwind CSS", level: 70 },
]

// Add this awards array:
const awards = [
  {
    title: "Winner - College Hackathon",
    year: "2023",
    desc: "Built a smart attendance system using face recognition.",
  },
  {
    title: "Top 10 - CodeFest",
    year: "2022",
    desc: "Ranked among top 10 in a national coding competition.",
  },
]

export default function PortfolioPage() {
  const [email, setEmail] = useState("")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [lang, setLang] = useState<LangType>("en")

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, you'd integrate with a service like Mailchimp or ConvertKit
    console.log("Newsletter subscription for:", email)
    alert("Thank you for subscribing! Please check your inbox.")
    setEmail("")
  }

  // Filtered projects
  const filteredProjects = selectedTech
    ? projects.filter((p) => p.techStack.includes(selectedTech))
    : projects

  // Language dictionary (simple demo)
  const dict: Record<LangType, {
    about: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    newsletter: string;
    testimonials: string;
    blog: string;
    filterBy: string;
    all: string;
    subscribe: string;
    viewResume: string;
  }> = {
    en: {
      about: "About Me",
      experience: "Experience",
      projects: "Cool Projects I Worked On",
      education: "Education",
      skills: "Skills",
      newsletter: "Stay Updated",
      testimonials: "Testimonials",
      blog: "Blog",
      filterBy: "Filter by Tech:",
      all: "All",
      subscribe: "Subscribe",
      viewResume: "View Resume",
    },
    hi: {
      about: "मेरे बारे में",
      experience: "अनुभव",
      projects: "मेरे प्रोजेक्ट्स",
      education: "शिक्षा",
      skills: "कौशल",
      newsletter: "अपडेट रहें",
      testimonials: "प्रशंसापत्र",
      blog: "ब्लॉग",
      filterBy: "टेक्नोलॉजी द्वारा छाँटें:",
      all: "सभी",
      subscribe: "सब्सक्राइब करें",
      viewResume: "रिज़्यूमे देखें",
    },
  }

  const pageSections = [
    {
      id: "about",
      title: dict[lang].about,
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
      title: dict[lang].experience,
      icon: <Briefcase size={24} />,
      content: (
        <div className="relative pl-6 border-l-2 border-primary/20 space-y-8 mt-4 sm:mt-2">
          {experiences.map((exp, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="absolute -left-6 top-2 w-4 h-4 bg-primary/20 border-2 border-primary rounded-full"></div>
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
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      id: "projects",
      title: dict[lang].projects,
      icon: <Settings2 size={24} />,
      content: (
        <div>
          {/* Project Filtering */}
          <div className="mb-4 flex flex-wrap gap-2 items-center">
            <span className="font-medium">{dict[lang].filterBy}</span>
            <button
              className={`px-2 py-1 rounded text-xs ${selectedTech === null ? "bg-primary text-white" : "bg-muted"}`}
              onClick={() => setSelectedTech(null)}
            >
              {dict[lang].all}
            </button>
            {[...new Set(projects.flatMap((p) => p.techStack))].map((tech) => (
              <button
                key={tech}
                className={`px-2 py-1 rounded text-xs ${
                  selectedTech === tech ? "bg-primary text-white" : "bg-muted"
                }`}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
          <div className="space-y-10">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                className="flex flex-col sm:flex-row items-start gap-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mt-1">
                  {project.logo ? (
                    project.logo.startsWith("http") ? (
                      <Image
                        src="https://cdn.dribbble.com/userupload/14658105/file/original-e1593a134e08140730988768d74d553d.jpg?resize=1200x"
                        alt={project.alt || project.name}
                        width={32}
                        height={32}
                        className="rounded"
                        unoptimized
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
        </div>
      ),
    },
    {
      id: "blog",
      title: dict[lang].blog,
      icon: <Lightbulb size={24} />,
      content: (
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.title} className="border border-border rounded-lg p-4 bg-card">
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <p className="text-sm text-muted-foreground">{post.summary}</p>
              <a href={post.link} className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                Read more
              </a>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "education",
      title: dict[lang].education,
      icon: <GraduationCap size={24} />,
      content: (
        <motion.div className="relative pl-6 border-l-2 border-primary/20" variants={itemVariants}>
          <div className="absolute -left-6 top-2 w-4 h-4 bg-primary/20 border-2 border-primary rounded-full"></div>
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
      title: dict[lang].skills,
      icon: <Code size={24} />,
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allSkills.map((skill) => (
            <div
              key={skill}
              className="flex flex-col items-center justify-center bg-muted rounded-lg p-4 shadow hover:shadow-lg transition group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {skillIcons[skill] ?? <span className="text-gray-400">🔹</span>}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-center group-hover:text-primary transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "newsletter",
      title: dict[lang].newsletter,
      icon: <Send size={24} />,
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
              {dict[lang].subscribe}
            </Button>
          </motion.form>
        </>
      ),
    },
    {
      id: "certifications",
      title: "Certifications",
      icon: <Badge className="inline-block" />,
      content: (
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li key={c.name} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold">{c.name}</span>
              <span className="text-xs text-muted-foreground">({c.issuer}, {c.date})</span>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">
                View
              </a>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "awards",
      title: "Awards & Achievements",
      icon: <Lightbulb size={24} />,
      content: (
        <ul className="space-y-3">
          {awards.map((a) => (
            <li key={a.title} className="flex flex-col">
              <span className="font-semibold">{a.title} <span className="text-xs text-muted-foreground">({a.year})</span></span>
              <span className="text-sm text-muted-foreground">{a.desc}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "hobbies",
      title: "Hobbies & Interests",
      icon: <Lightbulb size={24} />,
      content: (
        <ul className="flex flex-wrap gap-3">
          {hobbies.map((h) => (
            <li key={h} className="bg-muted px-3 py-1 rounded text-sm">{h}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "faq",
      title: "FAQ",
      icon: <Lightbulb size={24} />,
      content: (
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <div className="font-semibold">{f.q}</div>
              <div className="text-sm text-muted-foreground">{f.a}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "download",
      title: "Download Portfolio",
      icon: <DownloadIcon size={24} />,
      content: (
        <div>
          <a
            href="/Dhruv Jain Portfolio.pdf" // <-- Place your actual PDF in the public folder and use the correct filename here
            download
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
          >
            Download as PDF
          </a>
        </div>
      ),
    },
    {
      id: "techchart",
      title: "Tech Stack Chart",
      icon: <Code size={24} />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {techChart.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center bg-muted rounded-lg p-4 shadow hover:shadow-lg transition group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {skillIcons[t.name] ?? <span className="text-gray-400">🔹</span>}
              </div>
              <span className="font-semibold text-center mb-2 group-hover:text-primary transition-colors">
                {t.name}
              </span>
              <div className="w-full bg-border rounded h-3 relative overflow-hidden mb-1">
                <div
                  className="bg-primary h-3 rounded transition-all"
                  style={{ width: `${t.level}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{t.level}% proficiency</span>
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background text-foreground transition-colors duration-300">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as LangType)}
          className="border border-border rounded px-2 py-1 bg-background text-foreground shadow-md focus:ring-2 focus:ring-primary"
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
      <motion.main
        className="container mx-auto max-w-3xl px-4 py-16 sm:py-24 lg:py-32 space-y-16 sm:space-y-20 md:space-y-24"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Hero Section */}
        <motion.section
          id="home"
          className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 bg-card/80 rounded-xl shadow-lg p-8 border border-border"
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
              20 year old Aspiring Software Developer
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
              <motion.div variants={itemVariants}>
                <a
                  href="/Dhruv Jain Resume CV Latest.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground font-semibold"
                >
                  {dict[lang].viewResume}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={heroImageVariants}>
            <Image
              src="https://cdn.dribbble.com/userupload/14658105/file/original-e1593a134e08140730988768d74d553d.jpg?resize=752x&vertical=center"
              alt="Dhruv Jain's profile picture"
              width={100}
              height={100}
              className="rounded-full object-cover w-24 h-25 sm:w-28 sm:h-28 shrink-0 mt-4 sm:mt-0"
              priority
              unoptimized
            />
          </motion.div>
        </motion.section>

        {/* Render sections based on the pageSections array order */}
        {pageSections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            variants={sectionVariants}
            className="mb-8"
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              variants={itemVariants}
            >
              <div className="w-1.5 h-8 bg-primary rounded-r-lg mr-2" />
              <h2 className="section-title text-2xl font-bold tracking-tight inline-flex items-center gap-2 text-primary">
                {section.icon} {section.title}
              </h2>
            </motion.div>
            <div className="bg-card/80 border border-border rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              {section.content}
            </div>
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