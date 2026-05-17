"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { fadeLeft, fadeRight, staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"

const STATS = [
  { value: 11, suffix: "", label: "Member Schools" },
  { value: 400, suffix: "+", label: "Area 7 Students" },
  { value: 3, suffix: "", label: "Annual Events" },
  { value: 1942, suffix: "", label: "FBLA Founded" },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Mission text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="space-y-3">
              <span className="gold-bar" />
              <h2 className="text-navy-deep text-3xl sm:text-4xl font-bold">
                Who We Are
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              FBLA Area 7 represents a dynamic network of high schools across North Texas,
              united in developing the next generation of business leaders. We foster
              entrepreneurship, leadership skills, and academic excellence through
              competitive events, networking, and community service.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              Our area encompasses eleven diverse schools and communities, each contributing
              unique perspectives and talents to strengthen our collective mission — preparing
              students for success in business and in life.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://fblatx.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-mid transition-colors"
              >
                <img
                  src="/images/design-mode/download(2).png"
                  alt="Texas FBLA"
                  className="h-8 w-auto object-contain"
                />
                <span>Texas FBLA ↗</span>
              </a>
              <span className="h-4 w-px bg-slate-200" />
              <a
                href="https://fbla.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-navy hover:text-navy-mid transition-colors"
              >
                FBLA National ↗
              </a>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardEntrance}
                className="glass-light rounded-xl p-6 text-center shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className="text-4xl sm:text-5xl font-bold text-gold mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-navy-deep text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
