export interface School {
  id: string
  name: string
  shortName: string
  city: string
  logo: string
}

export interface Event {
  id: string
  title: string
  date: string
  dateShort: string
  location: string
  description: string
  learnMoreUrl?: string
}

export interface Officer {
  name: string
  title: string
  photo: string | null
  photoPosition?: string
}

export interface GalleryPhoto {
  src: string
  alt: string
  caption: string
}
