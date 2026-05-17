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
      {/* Top gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,169,0,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="gold-bar mx-auto mb-4" />
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3">
            Upcoming Events
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            Don't miss these important dates for Area 7
          </p>
        </motion.div>

        {/* Event cards — white on dark for max readability */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          {EVENTS.map((event) => (
            <motion.div
              key={event.id}
              variants={cardEntrance}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center
                         shadow-[0_4px_32px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)]
                         transition-all duration-300 group"
            >
              {/* Date badge */}
              <div className="flex-shrink-0 flex sm:flex-col items-center sm:text-center gap-3 sm:gap-1 min-w-[80px]">
                <div className="bg-gold rounded-xl px-3 py-2 text-center">
                  <div
                    className="text-navy-deep text-xl sm:text-2xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {event.dateShort.split(" ")[0]}
                  </div>
                  <div className="text-navy-deep/70 text-[11px] font-bold tracking-wider uppercase mt-0.5">
                    {event.dateShort.includes("–")
                      ? event.date.split(" ")[0]
                      : event.dateShort.split(" ")[1] ?? event.date.split(" ")[0]}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-14 bg-slate-200 flex-shrink-0" />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-navy-deep font-bold text-xl mb-2">{event.title}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mb-2.5">
                  <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <Calendar size={13} className="text-gold" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <MapPin size={13} className="text-gold" />
                    {event.location}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                  {event.description}
                </p>
              </div>

              {/* CTA */}
              {event.learnMoreUrl ? (
                <a
                  href={event.learnMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold
                             px-4 py-2.5 rounded-lg hover:bg-navy-mid transition-colors duration-200 whitespace-nowrap"
                >
                  Learn More <ArrowRight size={13} />
                </a>
              ) : (
                <span className="flex-shrink-0 text-slate-400 text-sm font-medium whitespace-nowrap">
                  Details TBD
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* External link */}
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
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors"
          >
            View all FBLA competitive events <ArrowRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
