import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Ensure this path is correct

export const metadata: Metadata = {
  title: "Alkush Pipania - Portfolio", // Updated title
  description:
    "Alkush Pipania's personal portfolio showcasing projects and skills in Generative AI and full stack development.", // Updated description
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
       suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true} // Can be true or false, ensure consistency
          disableTransitionOnChange={false} // Usually false is fine
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}