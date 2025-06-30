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
            Software Developer & Full Stack Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleContact}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/dhruv-jain-877543223/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/dhruvjain2004" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
                <p>📧 dhruvjain527@gmail.com</p>
                <p>📱 +91 98765 43210</p>
                <p>📍 Delhi, India</p>
                <p>🌐 dhruvjain2004.github.io</p>
              </div>
            </div>

            {/* Summary */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Professional Summary</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate Full Stack Developer with expertise in modern web technologies including React, Next.js, 
                Node.js, and TypeScript. Experienced in building scalable applications with a focus on user experience 
                and performance. Strong problem-solving skills and ability to work in collaborative environments.
              </p>
            </div>

            {/* Skills */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• React.js & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• HTML5 & CSS3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Node.js</li>
                    <li>• Express.js</li>
                    <li>• MongoDB</li>
                    <li>• PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Tools & Others</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Git & GitHub</li>
                    <li>• Docker</li>
                    <li>• AWS</li>
                    <li>• Vercel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Full Stack Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400">Tech Company • 2023 - Present</p>
                  <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>• Developed and maintained web applications using React and Node.js</li>
                    <li>• Collaborated with cross-functional teams to deliver high-quality products</li>
                    <li>• Implemented responsive design and optimized application performance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Frontend Developer Intern</h3>
                  <p className="text-blue-600 dark:text-blue-400">Startup • 2022 - 2023</p>
                  <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>• Built user interfaces using React and modern CSS frameworks</li>
                    <li>• Worked on bug fixes and feature implementations</li>
                    <li>• Participated in code reviews and team meetings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Education</h2>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400">University Name • 2019 - 2023</p>
                <p className="text-gray-600 dark:text-gray-400">GPA: 8.5/10</p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Key Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">E-Commerce Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built a full-stack e-commerce application using Next.js, Node.js, and MongoDB. 
                    Features include user authentication, product management, and payment integration.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Portfolio Website</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Developed a modern portfolio website using Next.js, TypeScript, and Tailwind CSS. 
                    Includes dark mode, responsive design, and smooth animations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm always open to discussing new opportunities and exciting projects.
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