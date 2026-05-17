"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { OFFICERS } from "@/lib/data"

function getInitials(name: string) {
  if (name === "TBD") return "?"
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
}

export function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <span className="gold-bar mx-auto mb-4" />
          <h2 className="text-navy-deep text-3xl sm:text-4xl font-bold mb-3">
            Area 7 Leadership
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            The officer team dedicated to serving Area 7 and its member schools
          </p>
        </motion.div>

        {/* Officers grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {OFFICERS.map((officer, i) => (
            <motion.div
              key={i}
              variants={cardEntrance}
              className="glass-light rounded-xl p-5 flex flex-col items-center text-center gap-3
                         shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-navy-deep flex items-center justify-center flex-shrink-0">
                {officer.photo ? (
                  <img
                    src={officer.photo}
                    alt={officer.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gold font-bold text-lg">
                    {getInitials(officer.name)}
                  </span>
                )}
              </div>

              {/* Info */}
              <div>
                <div className="font-bold text-navy-deep text-sm leading-tight">
                  {officer.name === "TBD" ? (
                    <span className="text-slate-400 italic">TBD</span>
                  ) : (
                    officer.name
                  )}
                </div>
                <div className="text-gold text-xs font-semibold mt-1 uppercase tracking-wide leading-tight">
                  {officer.title.replace("Area 7 ", "")}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
