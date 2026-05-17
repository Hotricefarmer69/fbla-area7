"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { fadeUp, staggerContainer, cardEntrance, viewportOnce } from "@/lib/motion"
import { GALLERY_PHOTOS } from "@/lib/data"

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)), [])
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_PHOTOS.length)), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, closeLightbox, prev, next])

  return (
    <>
      <section id="gallery" className="py-24 sm:py-32 bg-white">
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
              Highlights from Area 7
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              Celebrating our recent achievements and memorable moments
            </p>
          </motion.div>

          {/* Photo grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {GALLERY_PHOTOS.map((photo, i) => (
              <motion.button
                key={i}
                variants={cardEntrance}
                className="relative aspect-video overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/40 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left line-clamp-2">
                    {photo.caption}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
              <img
                src={GALLERY_PHOTOS[lightboxIndex].src}
                alt={GALLERY_PHOTOS[lightboxIndex].alt}
                className="w-full h-auto rounded-lg max-h-[75vh] object-contain"
              />
              {GALLERY_PHOTOS[lightboxIndex].caption && (
                <div className="mt-3 px-4 py-2 bg-navy/80 rounded text-white text-sm text-center">
                  {GALLERY_PHOTOS[lightboxIndex].caption}
                </div>
              )}
              {GALLERY_PHOTOS.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all"
                    onClick={prev}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all"
                    onClick={next}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
