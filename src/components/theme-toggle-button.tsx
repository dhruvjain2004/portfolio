"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeAwareIcon({ className }: { className?: string }) {
  const { theme } = useTheme() // useTheme hook will trigger re-render on theme change
  const iconClassName = className || "h-5 w-5"

  if (theme === "light") {
    // Condition changed to show Sun when theme is light
    return <Moon className={iconClassName} />
  }
  return <Sun className={iconClassName} />
}

// Standalone ThemeToggleButton (can be kept for other uses)
export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
