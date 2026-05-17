import type { School, Event, Officer, GalleryPhoto } from "@/types"

export const SCHOOLS: School[] = [
  {
    id: "south-hills",
    name: "South Hills High School",
    shortName: "South Hills HS",
    city: "Fort Worth, TX",
    logo: "/images/south-20hills-20high.png",
  },
  {
    id: "azle",
    name: "Azle High School",
    shortName: "Azle HS",
    city: "Azle, TX",
    logo: "/images/azle-20high-20school.png",
  },
  {
    id: "kennedale",
    name: "Kennedale High School",
    shortName: "Kennedale HS",
    city: "Kennedale, TX",
    logo: "/images/kennadale-20hs.png",
  },
  {
    id: "carroll",
    name: "Carroll Senior High School",
    shortName: "Carroll Senior HS",
    city: "Southlake, TX",
    logo: "/images/carrol.png",
  },
  {
    id: "central",
    name: "Central High School",
    shortName: "Central HS",
    city: "Fort Worth, TX",
    logo: "/images/central-20high-20school.png",
  },
  {
    id: "cleburne",
    name: "Cleburne High School",
    shortName: "Cleburne HS",
    city: "Cleburne, TX",
    logo: "/images/cleburn-20high-20school.png",
  },
  {
    id: "odwyatt",
    name: "O.D. Wyatt High School",
    shortName: "O.D. Wyatt HS",
    city: "Fort Worth, TX",
    logo: "/images/od-20wyatt.png",
  },
  {
    id: "timber-creek",
    name: "Timber Creek High School",
    shortName: "Timber Creek HS",
    city: "Fort Worth, TX",
    logo: "/images/timber-20creek-20hs.png",
  },
  {
    id: "paschal",
    name: "R.L. Paschal High School",
    shortName: "R.L. Paschal HS",
    city: "Fort Worth, TX",
    logo: "/images/paschal-20hs.png",
  },
  {
    id: "little-elm",
    name: "Little Elm High School",
    shortName: "Little Elm HS",
    city: "Little Elm, TX",
    logo: "/images/little-20elm-20high-20school.png",
  },
  {
    id: "wli",
    name: "World Languages Institute",
    shortName: "World Languages",
    city: "Fort Worth, TX",
    logo: "/images/world-20language-20instatute.png",
  },
]

export const EVENTS: Event[] = [
  {
    id: "fall-workshop",
    title: "Fall Leadership Workshop",
    date: "November 1, 2025",
    dateShort: "Nov 1",
    location: "Central High School · Fort Worth, TX",
    description:
      "Annual leadership development and team-building workshop open to all Area 7 member chapters.",
  },
  {
    id: "area-conference",
    title: "Area 7 Conference",
    date: "December 6, 2025",
    dateShort: "Dec 6",
    location: "Timber Creek High School · Fort Worth, TX",
    description:
      "Our flagship competitive event — students compete in business events and leadership activities representing their schools.",
  },
  {
    id: "slc",
    title: "State Leadership Conference",
    date: "March 1–3, 2026",
    dateShort: "Mar 1–3",
    location: "Austin, Texas",
    description:
      "The premier FBLA event in Texas. Top Area 7 competitors advance to represent us at the state level.",
    learnMoreUrl: "https://fblatx.org",
  },
]

export const OFFICERS: Officer[] = [
  {
    name: "Subhakar Kilambi",
    title: "Area 7 President",
    photo: null,
  },
  {
    name: "TBD",
    title: "Area 7 Vice President",
    photo: null,
  },
  {
    name: "TBD",
    title: "Area 7 Secretary",
    photo: null,
  },
  {
    name: "TBD",
    title: "Area 7 Treasurer",
    photo: null,
  },
  {
    name: "TBD",
    title: "Area 7 Reporter",
    photo: null,
  },
  {
    name: "TBD",
    title: "Area 7 Parliamentarian",
    photo: null,
  },
]

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/img-3053.jpeg",
    alt: "Area 7 Conference 2025",
    caption: "Area 7 Conference 2025 — Over 200 students competed in business events and leadership workshops",
  },
  {
    src: "/images/area7-conference-2025.jpeg",
    alt: "Area 7 Conference 2025 highlights",
    caption: "Area 7 Conference 2025 — Celebrating our outstanding student leaders",
  },
  {
    src: "/images/3-g26ud018svc1s4lq66vlhb33-gz551w.jpeg",
    alt: "FBLA students at conference",
    caption: "Students representing Area 7 with excellence",
  },
  {
    src: "/images/design-mode/DSCN1135-scaled-e1689390899493.jpg(2).jpeg",
    alt: "State Leadership Conference",
    caption: "State Leadership Conference — Area 7 students shine bright with record participation",
  },
]
