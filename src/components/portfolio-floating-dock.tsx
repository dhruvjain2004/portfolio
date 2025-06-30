"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { ThemeAwareIcon } from "@/components/theme-toggle-button"
import { Home, FileText, Github, Linkedin, Mail, XIcon } from "lucide-react"

export function PortfolioFloatingDock() {
  const iconProps = {
    // className: "text-neutral-600 dark:text-neutral-300",
    // size: 20,
  }

  const items = [
    {
      title: "Home",
      href: "#home",
      icon: <Home {...iconProps} />,
    },
    {
      title: "Resume",
      href: "https://drive.google.com/file/d/12Ozh_Nj7iy9kKCi4UVlWeZRD-BgoRIeN/view?usp=drive_link",
      icon: <FileText {...iconProps} />,
    },
    {
      title: "GitHub",
      href: "https://github.com/dhruvjain2004",
      icon: <Github {...iconProps} />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/dhruv-jain-877543223/",
      icon: <Linkedin {...iconProps} />,
    },
    {
      title: "X / Twitter",
      href: "https://x.com/dhruvjain527",
      icon: <XIcon {...iconProps} />,
    },
    {
      title: "Email",
      href: "mailto:dhruvjain527@gmail.com",
      icon: <Mail {...iconProps} />,
    },
    {
      title: "Toggle Theme",
      href: "#theme-toggle",
      icon: <ThemeAwareIcon />,
    },
  ]

  return (
    <FloatingDock
      items={items}
    />
  )
}
