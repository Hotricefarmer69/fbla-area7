"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { EVENTS } from "@/lib/data"
import type { Variants } from "framer-motion"

const rowEntrance: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Events() {
  return (
    <section
      id="events"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#001840" }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,169,0,0.5) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="gold-bar mb-4" />
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3">
            Upcoming Events
          </h2>
          <p className="text-white/55 text-lg" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            Don't miss these important dates for Area 7
          </p>
        </motion.div>

        {/* Timeline rows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-t border-white/10"
        >
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              variants={rowEntrance}
              className="border-b border-white/10 py-10
                         grid grid-cols-[44px_1fr] sm:grid-cols-[52px_1fr_auto] gap-5 sm:gap-8 items-start"
            >
              {/* Number circle */}
              <div className="w-10 h-10 rounded-full border border-gold/45 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gold text-xs font-bold tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3
                  className="text-white text-2xl sm:text-3xl font-bold mb-3 leading-tight"
                >
                  {event.title}
                </h3>

                <div className="flex flex-wrap gap-x-6 gap-y-1.5 mb-3">
                  <span className="flex items-center gap-2 text-white/60 text-sm">
                    <Calendar size={13} className="text-gold/70 flex-shrink-0" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2 text-white/60 text-sm">
                    <MapPin size={13} className="text-gold/70 flex-shrink-0" />
                    {event.location}
                  </span>
                </div>

                <p
                  className="text-white/50 text-sm leading-relaxed max-w-2xl"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {event.description}
                </p>

                {/* Mobile CTA — shows below description on small screens */}
                <div className="mt-4 sm:hidden">
                  {event.learnMoreUrl ? (
                    <a
                      href={event.learnMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                    >
                      Learn More <ArrowRight size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex text-gold/50 text-xs border border-gold/20 rounded-full px-3 py-1.5">
                      Details TBD
                    </span>
                  )}
                </div>
              </div>

              {/* Desktop CTA — right column */}
              <div className="hidden sm:flex items-start pt-1.5">
                {event.learnMoreUrl ? (
                  <a
                    href={event.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 text-white/75 text-sm font-medium
                               px-4 py-2.5 rounded-lg hover:border-gold hover:text-gold transition-all duration-200 whitespace-nowrap"
                  >
                    Learn More <ArrowRight size={13} />
                  </a>
                ) : (
                  <span className="inline-flex text-gold/55 text-xs border border-gold/20 rounded-full px-3 py-1.5 whitespace-nowrap">
                    Details TBD
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* External link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10"
        >
          <a
            href="https://www.fbla.org/high-school/competitive-events/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm font-medium transition-colors"
          >
            View all FBLA competitive events <ArrowRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
