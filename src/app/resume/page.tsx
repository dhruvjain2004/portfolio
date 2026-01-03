"use client"

import { Button } from "@/components/ui/button"
import { FileText, Mail, Linkedin, Github } from "lucide-react"

export default function ResumePage() {
  const handleContact = () => {
    window.location.href = "mailto:dhruvjain527@gmail.com"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dhruv Jain
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Aspiring Software Developer | Full Stack Developer | MERN Stack | AIML
          </p>

          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:dhruvjain527@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/dhruv-jain-877543223/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/dhruvjain2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6 space-y-6">

          {/* Contact Info */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
              <p>📧 dhruvjain527@gmail.com</p>
              <p>📱 +91 8860048684</p>
              <p>📍 Delhi, India</p>
              <p>🌐 GitHub • LinkedIn • LeetCode</p>
            </div>
          </div>

          {/* Summary */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Professional Summary
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Aspiring software developer with experience in full-stack development and strong
              knowledge of Data Structures and Algorithms. Gained hands-on exposure through
              internships and real-world projects focused on building efficient, scalable, and
              user-friendly applications. Eager to contribute to a dynamic tech team while
              continuously learning and growing.
            </p>
          </div>

          {/* Skills */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Languages</h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Java</li>
                  <li>• JavaScript</li>
                  <li>• Python</li>
                  <li>• SQL</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Frameworks & Backend
                </h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• React.js, Next.js</li>
                  <li>• Node.js, Express.js</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Tools & Databases
                </h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Git, GitHub, Postman</li>
                  <li>• MongoDB, MySQL, PostgreSQL (Neon)</li>
                  <li>• VS Code, IntelliJ IDEA</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Experience
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Software Engineering Intern – Magnifier Solutions
                </h3>
                <p className="text-blue-600 dark:text-blue-400">
                  Aug 2025 – Oct 2025 | Remote
                </p>
                <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Developed responsive web applications using modern front-end technologies.</li>
                  <li>• Ensured cross-browser compatibility and optimized performance.</li>
                  <li>• Integrated RESTful APIs and performed debugging.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Full Stack Developer Intern – Global Next Consulting India Pvt. Ltd.
                </h3>
                <p className="text-blue-600 dark:text-blue-400">
                  July 2025 – Aug 2025 | Remote
                </p>
                <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Built five mini projects and a major AI-powered design tool.</li>
                  <li>• Worked extensively with MERN stack and authentication systems.</li>
                  <li>• Improved skills in API integration, UI/UX, and version control.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Projects
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  NaukriVerse – Full-Stack Job Portal
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MERN-based job portal with role-based authentication (User, Recruiter, Admin),
                  JWT auth, Google OAuth, Email OTP, Cloudinary integration, and Sentry monitoring.
                  Designed a scalable backend enabling future AI-driven features like ATS analysis
                  and NLP-based job search.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  LangifyAI – AI Translation Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Multilingual AI translation platform built using Next.js, Tailwind CSS, and
                  Generative AI. Implemented resilient server-side translation with AI fallback,
                  Clerk authentication, voice input, dark mode, and optimized Hindi rendering.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Chatty – Real-Time Chat & Video Calling App
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Real-time chat and video calling app using MERN Stack, Socket.io, and WebRTC
                  with JWT authentication, presence tracking, and Cloudinary-based media sharing.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Education
            </h2>
            <p className="font-medium text-gray-900 dark:text-white">
              B.Tech in Computer Science Engineering (AIML)
            </p>
            <p className="text-blue-600 dark:text-blue-400">
              Dr. APJ Abdul Kalam Technical University (AKTU), Lucknow
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Raj Kumar Goel Institute of Technology, Ghaziabad • 2022 – 2026
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              GPA: 8.5
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Achievements & Certifications
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Google Cloud Arcade Program Cohort 1 – 65 Badges</li>
              <li>• Oracle Fusion Cloud Applications HCM Foundations Associate</li>
              <li>• Introduction to Generative AI – Google Cloud Skills</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I’m open to discussing new opportunities and exciting projects.
            </p>
            <Button onClick={handleContact} className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
