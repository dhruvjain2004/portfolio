"use client"
import { cn } from "@/lib/utils"
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"
import { AnimatePresence, type MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import type React from "react"
import { useRef, useState, useEffect } from "react" // Added useEffect

// ... (FloatingDock component definition remains the same) ...
export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  // This component itself doesn't need "use client" if its children (Desktop/Mobile) are client components
  // However, since it's often used directly in pages that might be server components,
  // and its children *are* client components, it's fine.
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  "use client" // Explicitly mark as client component
  const [open, setOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme() // resolvedTheme can be useful for initial state

  // Optional: Close menu on outside click
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef])

  const handleItemClick = (itemHref: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (itemHref === "#theme-toggle") {
      e.preventDefault()
      // Use resolvedTheme to decide the next theme if system preference is involved
      const newTheme = (resolvedTheme || theme) === "dark" ? "light" : "dark"
      setTheme(newTheme)
    }
    setOpen(false)
  }

  return (
    <div className={cn("fixed bottom-4 right-4 z-50 block md:hidden", className)} ref={menuRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav-mobile"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col items-end gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleItemClick(item.href, e)}
                  target={item.href?.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 shadow-md"
                  aria-label={item.title} // Add aria-label for accessibility
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 shadow-lg"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
      </button>
    </div>
  )
}

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  "use client" // Explicitly mark as client component
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "fixed bottom-4 left-1/2 z-50 -translate-x-1/2",
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-100/80 backdrop-blur-md px-4 pb-3 md:flex dark:bg-neutral-900/80 shadow-lg",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue
  title: string
  icon: React.ReactNode
  href: string
}) {
  // This is already a client component as it uses hooks.
  const ref = useRef<HTMLDivElement>(null)
  const { theme, setTheme, resolvedTheme } = useTheme() // resolvedTheme

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-120, 0, 120], [40, 70, 40])
  const heightTransform = useTransform(distance, [-120, 0, 120], [40, 70, 40])
  const widthTransformIcon = useTransform(distance, [-120, 0, 120], [20, 30, 20])
  const heightTransformIcon = useTransform(distance, [-120, 0, 120], [20, 30, 20])

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 })
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 })
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 })
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 })

  const [hovered, setHovered] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#theme-toggle") {
      e.preventDefault()
      const newTheme = (resolvedTheme || theme) === "dark" ? "light" : "dark"
      setTheme(newTheme)
    }
  }

  return (
    <a href={href} onClick={handleClick} target={href?.startsWith("mailto:") || href?.startsWith("#home") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={title}>
      {" "}
      {/* Add aria-label */}
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200/70 dark:bg-neutral-800/70"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white shadow-sm"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-neutral-600 dark:text-neutral-300"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  )
}
