import { Instagram, Twitter, Facebook } from "lucide-react"

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Schools", href: "#schools" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
]

const EXTERNAL_LINKS = [
  { label: "Texas FBLA", href: "https://fblatx.org" },
  { label: "FBLA National", href: "https://fbla.org" },
  { label: "Competitive Events", href: "https://www.fbla.org/high-school/competitive-events/" },
]

export function Footer() {
  return (
    <footer style={{ background: "#001840" }} className="border-t border-white/8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/design-mode/9ddded_5d2048108c854878bb2e5c309855a189~mv2(2).png"
                alt="FBLA Logo"
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base tracking-wide">FBLA Area 7</span>
                <span className="text-[11px] text-gold font-semibold tracking-[0.12em] uppercase">North Texas</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              Developing tomorrow's business leaders through education, service, and progress.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* External links + Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <div className="space-y-2 mb-5">
              {EXTERNAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/55 hover:text-white text-sm transition-colors"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
            <a
              href="mailto:area7@fblatx.org"
              className="text-gold hover:text-gold-light text-sm font-medium transition-colors"
            >
              area7@fblatx.org
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} FBLA Area 7 · North Texas. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Future Business Leaders of America
          </p>
        </div>
      </div>
    </footer>
  )
}
