import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Ensure this path is correct
import Head from "next/head"

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
          <Head>
            <title>Dhruv Jain Portfolio</title>
            <meta name="description" content="Dhruv Jain - Aspiring Software Developer Portfolio" />
            <meta property="og:title" content="Dhruv Jain Portfolio" />
            <meta property="og:description" content="Aspiring Software Developer Portfolio" />
            <meta property="og:image" content="https://cdn.dribbble.com/userupload/14658105/file/original-e1593a134e08140730988768d74d553d.jpg?resize=752x&vertical=center" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}