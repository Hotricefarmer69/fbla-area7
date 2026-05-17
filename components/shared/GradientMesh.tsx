"use client"

import { motion, useReducedMotion } from "framer-motion"

const orbs = [
  {
    width: 700,
    height: 700,
    color: "rgba(59, 130, 246, 0.12)",
    blur: 100,
    initialX: -220,
    initialY: -120,
    animateX: [-220, -160, -220],
    animateY: [-120, -60, -120],
    duration: 22,
  },
  {
    width: 500,
    height: 500,
    color: "rgba(0, 61, 133, 0.22)",
    blur: 80,
    initialX: 320,
    initialY: 80,
    animateX: [320, 260, 320],
    animateY: [80, 150, 80],
    duration: 18,
  },
  {
    width: 400,
    height: 400,
    color: "rgba(212, 169, 0, 0.07)",
    blur: 90,
    initialX: 40,
    initialY: 280,
    animateX: [40, 100, 40],
    animateY: [280, 220, 280],
    duration: 20,
  },
]

export function GradientMesh() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.width,
            height: orb.height,
            background: orb.color,
            filter: `blur(${orb.blur}px)`,
            x: orb.initialX,
            y: orb.initialY,
          }}
          animate={{
            x: orb.animateX,
            y: orb.animateY,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
