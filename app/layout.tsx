import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Lato } from "next/font/google"
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

export const metadata: Metadata = {
  title: "FBLA Area 7 — North Texas",
  description:
    "Official website of FBLA Area 7, North Texas. Connecting 11 member chapters and developing the next generation of business leaders.",
  openGraph: {
    title: "FBLA Area 7 — North Texas",
    description: "Shaping tomorrow's business leaders across North Texas.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
