"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Schools", href: "#schools" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()
  const background = useTransform(
    scrollY,
    [0, 90],
    ["rgba(0,24,64,0)", "rgba(0,24,64,0.90)"]
  )
  const borderColor = useTransform(
    scrollY,
    [0, 90],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.10)"]
  )

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background,
          borderBottom: useTransform(borderColor, (v) => `1px solid ${v}`),
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
            className="flex items-center gap-2.5"
          >
            <img
              src="/images/design-mode/9ddded_5d2048108c854878bb2e5c309855a189~mv2(2).png"
              alt="FBLA Logo"
              className="h-9 w-9 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-[15px] tracking-wide">FBLA</span>
              <span className="text-[10px] text-gold font-bold tracking-[0.14em] uppercase">Area 7</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "")
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                    isActive ? "text-gold" : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-px left-0 right-0 h-[2px] bg-gold rounded-full"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Mobile button */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-2 -mr-2 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col pt-[88px] pb-8 px-5"
              style={{ background: "#001840" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
            >
              <button
                className="absolute top-5 right-4 text-white/60 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <X size={20} />
              </button>
              <nav className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-white/75 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-[15px] font-medium transition-colors"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.08 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto pt-5 border-t border-white/10">
                <a href="mailto:area7@fblatx.org" className="text-gold text-sm font-medium">
                  area7@fblatx.org
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
