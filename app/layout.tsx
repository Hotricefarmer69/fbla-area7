import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Lato } from "next/font/google"
import { Oswald } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
})

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["300", "400", "700"],
})

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "FBLA Area 7 - Texas Future Business Leaders",
  description: "Official website for FBLA Area 7 Texas, showcasing our schools, achievements, and upcoming events.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} ${oswald.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${lato.style.fontFamily};
  --font-heading: ${montserrat.variable};
  --font-body: ${lato.variable};
  --font-accent: ${oswald.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
