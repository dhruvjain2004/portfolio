import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Ensure this path is correct

export const metadata: Metadata = {
  title: "Dhruv Jain - Portfolio",
  description:
    "Dhruv Jain's personal portfolio showcasing projects and skills in full-stack development and software engineering.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/original-e1593a134e08140730988768d74d553d.webp" /> {/* Change to /logo.png if you want */}
      </head>
      <body
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}