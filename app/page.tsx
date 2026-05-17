import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Schools } from "@/components/sections/Schools"
import { Gallery } from "@/components/sections/Gallery"
import { Events } from "@/components/sections/Events"
import { Leadership } from "@/components/sections/Leadership"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schools />
        <Gallery />
        <Events />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
