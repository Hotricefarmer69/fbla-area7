"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ChevronRight, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function FBLAArea7Landing() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)
  const schoolsRef = useRef<HTMLDivElement>(null)

  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxCaption, setLightboxCaption] = useState<string>("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const area7Schools = [
    {
      name: "South Hills HS",
      fullName: "South Hills High School",
      logo: "/images/south-20hills-20high.png",
      hasLogo: true,
    },
    {
      name: "Azle HS",
      fullName: "Azle High School",
      logo: "/images/azle-20high-20school.png",
      hasLogo: true,
    },
    {
      name: "Kennedale HS",
      fullName: "Kennedale High School",
      logo: "/images/kennadale-20hs.png",
      hasLogo: true,
    },
    {
      name: "Carroll Senior HS",
      fullName: "Carroll Senior High School",
      logo: "/images/carrol.png",
      hasLogo: true,
    },
    {
      name: "Central HS",
      fullName: "Central High School",
      logo: "/images/central-20high-20school.png",
      hasLogo: true,
    },
    {
      name: "Cleburne HS",
      fullName: "Cleburne High School",
      logo: "/images/cleburn-20high-20school.png",
      hasLogo: true,
    },
    {
      name: "O.D. Wyatt HS",
      fullName: "O.D. Wyatt High School",
      logo: "/images/od-20wyatt.png",
      hasLogo: true,
    },
    {
      name: "Timber Creek HS",
      fullName: "Timber Creek High School",
      logo: "/images/timber-20creek-20hs.png",
      hasLogo: true,
    },
    {
      name: "R.L. Paschal HS",
      fullName: "R.L. Paschal High School",
      logo: "/images/paschal-20hs.png",
      hasLogo: true,
    },
    {
      name: "Little Elm HS",
      fullName: "Little Elm High School",
      logo: "/images/little-20elm-20high-20school.png",
      hasLogo: true,
    },
    {
      name: "World Languages Institute",
      fullName: "World Languages Institute",
      logo: "/images/world-20language-20instatute.png",
      hasLogo: true,
    },
  ]

  const scrollToSchools = () => {
    schoolsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const sections = [aboutRef, highlightsRef, eventsRef, schoolsRef]
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    const headline = document.querySelector(".hero-headline")
    if (headline) {
      const words = headline.textContent?.split(" ") || []
      headline.innerHTML = words
        .map(
          (word, index) =>
            `<span class="inline-block opacity-0 animate-word-reveal stagger-${Math.min(index + 1, 6)}">${word}</span>`,
        )
        .join(" ")
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })

      const heroImage = document.querySelector(".parallax-hero")
      if (heroImage && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height
          ;(heroImage as HTMLElement).style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.02)`
        }
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    const interactiveElements = document.querySelectorAll("button, a, .hover-lift, .school-card-3d")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(motionQuery.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    motionQuery.addEventListener("change", handleMotionChange)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      motionQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  const openLightbox = (imageSrc: string, caption: string) => {
    setLightboxImage(imageSrc)
    setLightboxCaption(caption)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxCaption("")
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        style={{ left: cursorPosition.x - 10, top: cursorPosition.y - 10 }}
      />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/design-mode/9ddded_5d2048108c854878bb2e5c309855a189~mv2(2).png"
              alt="FBLA Logo"
              className="h-10 w-10"
            />
            <span className="font-bold text-xl text-primary">FBLA Area 7</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#schools" className="text-sm font-medium hover:text-primary transition-colors">
              Schools
            </a>
            <a href="#highlights" className="text-sm font-medium hover:text-primary transition-colors">
              Highlights
            </a>
            <a href="#events" className="text-sm font-medium hover:text-primary transition-colors">
              Events
            </a>
          </nav>
        </div>
      </header>

      <section
        ref={heroRef}
        className="hero-gradient-bg text-primary-foreground py-20 lg:py-32 relative overflow-hidden"
      >
        <div className="floating-particle" style={{ top: "20%", left: "10%" }}></div>
        <div className="floating-particle" style={{ top: "60%", left: "80%" }}></div>
        <div className="floating-particle" style={{ top: "40%", left: "60%" }}></div>
        <div className="floating-particle" style={{ top: "80%", left: "30%" }}></div>
        <div className="floating-particle" style={{ top: "30%", left: "90%" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="hero-headline gold-underline text-4xl lg:text-6xl font-bold leading-tight font-sans">
                FBLA Area 7
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed opacity-0 animate-fade-in-up stagger-3">
                Connecting chapters across our region and celebrating the achievements of tomorrow's business leaders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-in-left stagger-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 magnetic-button hover-scale"
                  onClick={scrollToSchools}
                >
                  Explore Schools
                </Button>
              </div>
            </div>
            <div className="relative opacity-0 animate-fade-in-right stagger-2">
              <img
                src="/images/3-g26ud018svc1s4lq66vlhb33-gz551w.jpeg"
                alt="FBLA Area 7 Conference 2025 - Students in business attire at awards ceremony"
                className="rounded-lg shadow-2xl w-full animate-float parallax-hero transition-transform duration-100"
              />
              <p className="text-sm text-primary-foreground/80 mt-3 italic">
                Area 7 Conference 2025 — Celebrating our outstanding student leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-20 split-background opacity-0 relative">
        <div className="blue-divider absolute top-1/2 left-0 right-0 h-px"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FBLA Area 7 represents a dynamic network of high schools and colleges across our region, united in
                developing the next generation of business leaders. We foster entrepreneurship, leadership skills, and
                academic excellence through competitive events, networking opportunities, and community service
                initiatives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our area encompasses diverse schools and communities, each contributing unique perspectives and talents
                to strengthen our collective mission of preparing students for success in business and life.
              </p>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <a href="https://fblatx.org" target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="/images/design-mode/download(2).png"
                  alt="Texas FBLA Logo"
                  className="h-32 w-auto officer-glow transition-all duration-300 hover:scale-105 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="schools"
        ref={schoolsRef}
        className="py-20 schools-pattern-bg text-primary-foreground relative overflow-hidden"
      >
        <div className="geometric-accent" style={{ top: "10%", left: "5%" }}></div>
        <div className="geometric-accent" style={{ top: "60%", right: "10%" }}></div>
        <div className="geometric-accent" style={{ bottom: "20%", left: "15%" }}></div>

        <div className="parallax-ribbon absolute inset-0 opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Schools</h2>
            <p className="text-xl text-primary-foreground/90">Proud to represent exceptional schools across Area 7</p>
            <p className="text-sm text-primary-foreground/70 mt-2">
              Showing {area7Schools.length} of {area7Schools.length} schools
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {area7Schools.map((school, index) => (
              <Card
                key={`school-${index}`}
                className="bg-primary-foreground text-primary school-card-3d transition-all duration-300 relative overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="w-full h-32 bg-white relative overflow-hidden flex items-center justify-center p-4">
                    {school.hasLogo && school.logo ? (
                      <img
                        src={school.logo || "/placeholder.svg"}
                        alt={`${school.fullName} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-primary/40"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-muted-foreground">Logo coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-3 text-center border-t">
                    <h3 className="font-semibold text-sm mb-0.5">{school.name}</h3>
                    <p className="text-xs text-muted-foreground/70">Area 7 Member</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="highlights" ref={highlightsRef} className="py-20 bg-background opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="lg:text-4xl font-bold text-foreground mb-4 text-4xl">Highlights from Area 7</h2>
            <p className="text-xl text-muted-foreground">Celebrating our recent achievements and memorable moments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card
              className="overflow-hidden hover-lift stagger-1 opacity-0 animate-fade-in-up highlight-card cursor-pointer"
              onClick={() => openLightbox("/images/img-3053.jpeg", "Area 7 Conference 2025")}
            >
              <div className="aspect-video relative">
                <img
                  src="/images/img-3053.jpeg"
                  alt="Area 7 Conference 2025"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Area 7 Conference 2025</h3>
                <p className="text-muted-foreground text-sm">
                  Over 200 students competed in business events and leadership workshops
                </p>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden hover-lift stagger-2 opacity-0 animate-fade-in-up highlight-card cursor-pointer"
              onClick={() => openLightbox("/images/dscn1135-scaled.jpeg", "State Leadership Conference")}
            >
              <div className="aspect-video relative">
                <img
                  src="/images/design-mode/DSCN1135-scaled-e1689390899493.jpg(2).jpeg"
                  alt="State Leadership Conference"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">State Leadership Conference</h3>
                <p className="text-muted-foreground text-sm">
                  Area 7 students shine bright at the state conference with record participation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="events" ref={eventsRef} className="py-20 bg-background opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">Don't miss these important dates for Area 7</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Fall Leadership Workshop",
                date: "November 1, 2025",
                location: "Central High School",
                description: "Leadership development and team building activities",
              },
              {
                title: "Area 7 Conference",
                date: "December 6, 2025",
                location: "Timber Creek High School",
                description: "Annual competitive events and recognition ceremony",
              },
              {
                title: "State Leadership Conference",
                date: "March 1–3, 2026",
                location: "Austin, Texas",
                description: "State-level competition and leadership development",
              },
            ].map((event, index) => (
              <Card key={index} className={`p-6 event-card-glow stagger-${index + 1} opacity-0 animate-fade-in-up`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-foreground">{event.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm event-date">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  {event.title === "State Leadership Conference" ? (
                    <a href="https://fblatx.org" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="flex-shrink-0 bg-transparent magnetic-button hover-scale">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="flex-shrink-0 bg-transparent magnetic-button hover-scale">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://www.fbla.org/high-school/competitive-events/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="magnetic-button hover-scale bg-transparent">
                View All Events
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
        <div className="footer-wave"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/design-mode/9ddded_5d2048108c854878bb2e5c309855a189~mv2(2).png"
                  alt="FBLA Logo"
                  className="h-8 w-8"
                />
                <span className="font-bold text-lg">FBLA Area 7</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Developing tomorrow's business leaders through education, service, and progress.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <a
                  href="#about"
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#schools"
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Member Schools
                </a>
                <a
                  href="#highlights"
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Highlights
                </a>
                <a
                  href="#events"
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Events
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>area7@fblatx.org</p>
                <p>Follow us for updates and announcements</p>
                <div className="flex gap-4 mt-4">
                  <div className="social-icon w-8 h-8 bg-secondary rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-xs">FB</span>
                  </div>
                  <div className="social-icon w-8 h-8 bg-secondary rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-xs">IG</span>
                  </div>
                  <div className="social-icon w-8 h-8 bg-secondary rounded-full flex items-center justify-center cursor-pointer">
                    <span className="text-xs">TW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">© 2024 FBLA Area 7. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X className="w-4 h-4" />
            </button>
            <img src={lightboxImage || "/placeholder.svg"} alt="Lightbox" className="lightbox-image" />
            <div className="lightbox-caption">
              <p>{lightboxCaption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
