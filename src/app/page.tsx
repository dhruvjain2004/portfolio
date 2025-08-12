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

// Open Source Contributions
const contributions = [
  {
    project: "OpenAI GPT-3 Playground",
    desc: "Contributed bug fixes and documentation improvements.",
    link: "https://github.com/openai/openai-quickstart-node", // <-- Replace with your actual PR or repo link if needed
  },
  {
    project: "React Awesome Components",
    desc: "Added new UI components and improved accessibility.",
    link: "#", // <-- Replace '#' with your actual contribution link
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

export default function PortfolioPage() {
  const [email, setEmail] = useState("")
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [lang, setLang] = useState("en")

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
  const dict = {
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
        <motion.div className="space-y-4" variants={badgeContainerVariants}>
          {allSkills.map((skill, idx) => (
            <motion.div key={skill} variants={badgeVariants} className="flex items-center gap-3">
              <span className="w-28 text-xs sm:text-sm font-medium">{skill}</span>
              <div className="flex-1 bg-muted rounded h-3 relative overflow-hidden">
                <motion.div
                  className="bg-primary h-3 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: `${60 + (idx % 5) * 8}%` }}
                  transition={{ duration: 0.7, delay: idx * 0.03 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      ),
    },
    {
      id: "testimonials",
      title: dict[lang].testimonials,
      icon: <Lightbulb size={24} />,
      content: (
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-border rounded-lg p-4 bg-card flex flex-col items-center text-center">
              <Image src={t.avatar} alt={t.name} width={48} height={48} className="rounded-full mb-2" unoptimized />
              <p className="text-sm text-muted-foreground mb-2">"{t.text}"</p>
              <span className="font-semibold">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.role}</span>
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
      id: "video",
      title: "Video Introduction",
      icon: <Lightbulb size={24} />,
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video max-w-xl rounded-lg overflow-hidden border border-border mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Dhruv Jain Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-muted-foreground text-center">A short video about me and my journey.</p>
        </div>
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
      id: "opensource",
      title: "Open Source Contributions",
      icon: <GithubIcon size={24} />,
      content: (
        <ul className="space-y-3">
          {contributions.map((c) => (
            <li key={c.project}>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                {c.project}
              </a>
              <span className="block text-sm text-muted-foreground">{c.desc}</span>
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
      id: "map",
      title: "Interactive Map",
      icon: <Lightbulb size={24} />,
      content: (
        <div className="w-full h-64 bg-muted flex items-center justify-center rounded">
          <span className="text-muted-foreground">[Map Placeholder: Add Google Maps or similar here]</span>
          {/* <-- Replace this span with an actual map embed if desired */}
        </div>
      ),
    },
    {
      id: "techchart",
      title: "Tech Stack Chart",
      icon: <Code size={24} />,
      content: (
        <div className="space-y-3">
          {techChart.map((t) => (
            <div key={t.name}>
              <div className="flex justify-between text-xs">
                <span>{t.name}</span>
                <span>{t.level}%</span>
              </div>
              <div className="w-full bg-muted rounded h-3 relative overflow-hidden">
                <div
                  className="bg-primary h-3 rounded"
                  style={{ width: `${t.level}%`, transition: "width 1s" }}
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "contactquick",
      title: "Quick Contact",
      icon: <Send size={24} />,
      content: (
        <div className="flex gap-4">
          <a
            href="https://wa.me/918860048684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32"><path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.74 6.38l-1.84 6.74 6.92-1.81c1.85 1.01 3.94 1.55 6.08 1.55h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm6.97 19.77c-.29.82-1.7 1.61-2.34 1.71-.6.09-1.36.13-2.19-.14-.51-.16-1.17-.38-2.02-.75-3.56-1.54-5.89-5.34-6.07-5.6-.18-.26-1.45-1.93-1.45-3.68 0-1.75.92-2.61 1.25-2.97.33-.36.72-.45.96-.45.24 0 .48.01.69.01.22 0 .52-.08.82.62.29.7.99 2.41 1.08 2.59.09.18.15.4.03.65-.12.25-.18.4-.36.62-.18.22-.38.49-.54.66-.18.18-.37.38-.16.74.22.36.97 1.6 2.09 2.59 1.44 1.29 2.65 1.7 3.01 1.89.36.19.57.16.78-.1.21-.26.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.33.12 2.09.99 2.45 1.17.36.18.6.27.69.42.09.15.09.86-.2 1.68z"/></svg>
            WhatsApp
          </a>
          <a
            href="https://t.me/yourtelegramusername" // <-- Replace 'yourtelegramusername' with your actual Telegram username
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 32 32"><path d="M29.92 6.62c-.34-.28-.82-.34-1.22-.16l-25.6 10.67c-.42.18-.7.6-.7 1.06.01.46.31.86.74 1.01l6.7 2.23 2.6 7.8c.15.45.57.76 1.04.76.02 0 .04 0 .06-.01.48-.03.89-.37 1-0.84l2.13-8.44 7.17 6.54c.2.18.46.28.72.28.13 0 .26-.03.38-.09.37-.17.6-.56.54-.97l-2.13-15.2c-.06-.41-.37-.74-.78-.84zm-3.7 13.13l-6.13-5.6c-.22-.2-.54-.23-.78-.07-.24.16-.34.47-.24.74l2.13 8.44-1.7-5.1c-.09-.27-.34-.45-.62-.45-.09 0-.18.02-.26.06l-7.17 3.01 21.77-9.07-2.13 15.2z"/></svg>
            Telegram
          </a>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border border-border rounded px-2 py-1 bg-background text-foreground"
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