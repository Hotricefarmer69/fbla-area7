"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { fadeUp, staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { EVENTS } from "@/lib/data"

export function Events() {
  return (
    <section
      id="events"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#001840" }}
    >
      {/* Subtle radial gradient accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,169,0,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <span className="gold-bar mx-auto mb-4" />
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3">
            Upcoming Events
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            Don't miss these important dates for Area 7
          </p>
        </motion.div>

        {/* Events */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-5 max-w-4xl mx-auto"
        >
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              variants={cardEntrance}
              className="glass-dark rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center
                         hover:bg-white/[0.07] transition-colors duration-300 group"
            >
              {/* Date badge */}
              <div className="flex-shrink-0 text-center min-w-[72px]">
                <div
                  className="text-gold text-2xl sm:text-3xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {event.dateShort.split(" ")[0]}
                </div>
                <div className="text-white/50 text-xs font-semibold tracking-wider mt-1 uppercase">
                  {event.dateShort.split(" ").slice(1).join(" ") || event.date.split(" ")[0]}
                </div>
                <div className="h-px w-8 bg-gold/30 mx-auto mt-2" />
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-white/10 flex-shrink-0" />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mb-3">
                  <span className="flex items-center gap-1.5 text-white/50 text-sm">
                    <Calendar size={13} className="text-gold/70" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/50 text-sm">
                    <MapPin size={13} className="text-gold/70" />
                    {event.location}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                  {event.description}
                </p>
              </div>

              {/* CTA */}
              {event.learnMoreUrl ? (
                <a
                  href={event.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 text-gold text-sm font-semibold
                             hover:text-gold-light transition-colors group-hover:gap-3 duration-200"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              ) : (
                <span className="flex-shrink-0 inline-flex items-center gap-2 text-white/30 text-sm font-semibold">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* External events link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-10"
        >
          <a
            href="https://www.fbla.org/high-school/competitive-events/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            View all FBLA competitive events <ArrowRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
