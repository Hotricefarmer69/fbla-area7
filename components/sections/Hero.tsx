"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { GradientMesh } from "@/components/shared/GradientMesh"
import { heroTextContainer, heroLine } from "@/lib/motion"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#001840" }}
    >
      <GradientMesh />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl text-center">
        <motion.div
          variants={heroTextContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Pre-headline */}
          <motion.div variants={heroLine} className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
              FBLA Area 7 · North Texas
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={heroLine}
            className="text-white font-bold leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)" }}
          >
            Shaping Tomorrow's{" "}
            <span className="text-gold">Business</span>{" "}
            Leaders
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            variants={heroLine}
            className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed font-lato"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Connecting 11 chapters across North Texas and celebrating the achievements
            of students who represent the future of business and leadership.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={heroLine} className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="#schools"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("schools")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-navy-deep font-bold text-sm tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-200"
            >
              Explore Area 7
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white/85 font-semibold text-sm rounded-sm hover:bg-white/8 hover:border-white/40 transition-all duration-200"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={heroLine}
            className="flex items-center gap-8 sm:gap-12 mt-6 pt-6 border-t border-white/10"
          >
            {[
              { value: "11", label: "Member Schools" },
              { value: "400+", label: "Students" },
              { value: "3", label: "Upcoming Events" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-white/50 text-xs sm:text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
