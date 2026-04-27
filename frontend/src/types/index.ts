export type ThemeMode = 'light' | 'dark'

export type PageKey = 'home' | 'flight' | 'transport' | 'parking' | 'baggage'

export type FlightEvent = 'departure' | 'arrival'

export interface NavItem {
  key: PageKey
  label: string
  path: string
}

export interface HeroContent {
  title: string
  subtitle: string
  primaryCta: string
  primaryTarget: PageKey
  secondaryCta: string
  secondaryTarget: PageKey
}

export interface SlideItem {
  title: string
  subtitle: string
  image: string
}

export interface NewsItem {
  title: string
  date: string
}

export interface MenuItem {
  title: string
  external?: boolean
}

export interface InfoCardItem {
  title: string
  badge: string
  description: string
  meta: string[]
}

export interface ChecklistItem {
  title: string
  text: string
}

export interface Flight {
  id: string
  flightNumber: string
  airline: string
  city: string
  direction: string
  terminal: string
  gate: string
  scheduledTime: string | null
  status: string
}
