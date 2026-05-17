"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#002a5c" }}
    >
      {/* Decorative accent */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,169,0,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div>
              <span className="gold-bar mb-4" />
              <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-white/65 text-lg leading-relaxed" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                Have a question about Area 7, an upcoming event, or want to get involved?
                We'd love to hear from you.
              </p>
            </div>

            <a
              href="mailto:area7@fblatx.org"
              className="inline-flex items-center gap-3 text-gold hover:text-gold-light transition-colors group"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                <Mail size={16} className="text-gold" />
              </div>
              <span className="font-semibold text-lg">area7@fblatx.org</span>
            </a>

            <div className="pt-4 space-y-3">
              <p className="text-white/40 text-sm font-medium uppercase tracking-wider">Affiliated With</p>
              <div className="flex items-center gap-6">
                <a href="https://fblatx.org" target="_blank" rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  Texas FBLA ↗
                </a>
                <a href="https://fbla.org" target="_blank" rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm font-medium transition-colors">
                  FBLA National ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {status === "sent" ? (
              <div className="glass-dark rounded-xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto">
                  <Send size={20} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                <p className="text-white/60">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-dark rounded-xl p-6 sm:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30
                                 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30
                                 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-xs font-semibold uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30
                               text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 bg-gold text-navy-deep font-bold text-sm tracking-wide rounded-lg
                             hover:bg-gold-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                             flex items-center justify-center gap-2"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <Send size={14} />
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">Something went wrong. Please email us directly.</p>
                )}
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
