"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { SCHOOLS } from "@/lib/data"

export function Schools() {
  return (
    <section id="schools" className="py-24 sm:py-32 bg-slate-50">
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
            Our Member Schools
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
            Proud to represent {SCHOOLS.length} exceptional schools across Area 7
          </p>
        </motion.div>

        {/* Schools grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5"
        >
          {SCHOOLS.map((school) => (
            <motion.div
              key={school.id}
              variants={cardEntrance}
              className="glass-light rounded-xl p-5 flex flex-col items-center text-center gap-3
                         shadow-[var(--shadow-card)] hover:-translate-y-1.5 hover:shadow-lg
                         transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 relative flex items-center justify-center">
                <img
                  src={school.logo}
                  alt={`${school.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-navy-deep text-sm leading-tight">
                  {school.shortName}
                </h3>
                <p className="text-slate-400 text-xs mt-0.5">{school.city}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
